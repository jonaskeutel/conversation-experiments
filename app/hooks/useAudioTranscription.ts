import { useState, useEffect, useRef, useCallback } from "react";
import {
  SpeechRecognition,
  SpeechRecognitionEvent,
  SpeechRecognitionErrorEvent,
} from "../types/speechRecognition";

interface UseSpeechRecognitionResult {
  transcript: string;
  isListening: boolean;
  noiseLevel: number;
  noiseLevelHistory: number[];
  startListening: () => void;
  stopListening: () => void;
}
const useSpeechRecognition = (): UseSpeechRecognitionResult => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [noiseLevel, setNoiseLevel] = useState(0);
  const [noiseLevelHistory, setNoiseLevelHistory] = useState<number[]>([]);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyzer, setAnalyzer] = useState<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let recognition: SpeechRecognition | null = null;

    // Use type assertion for window
    if (
      "SpeechRecognition" in (window as any) ||
      "webkitSpeechRecognition" in (window as any)
    ) {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      if (recognition) {
        console.log("recognition", recognition);
        recognition.lang = "en-US"; // Set default language to US English
        recognition.continuous = true;
        recognition.interimResults = true;

        // recognition.onresult = (event: SpeechRecognitionEvent) => {
        //   console.log("event", event);
        //   const currentTranscript = Array.from(event.results)
        //     .map((result) => result[0].transcript)
        //     .join("");
        //   setTranscript(currentTranscript);
        // };

        // recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        //   console.error("Speech recognition error", event.error);
        // };

        setRecognition(recognition);
      }
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const startListening = useCallback(() => {
    if (recognition) {
      recognition.start();
      setIsListening(true);

      const newAudioContext = new AudioContext();
      const newAnalyzer = newAudioContext.createAnalyser();
      newAnalyzer.fftSize = 256;

      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const source = newAudioContext.createMediaStreamSource(stream);
          source.connect(newAnalyzer);
          setAudioContext(newAudioContext);
          setAnalyzer(newAnalyzer);
        })
        .catch((err) => console.error("Error accessing microphone:", err));
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
    if (audioContext) {
      audioContext.close();
      setAudioContext(null);
      setAnalyzer(null);
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, [recognition, audioContext]);

  useEffect(() => {
    if (!recognition) return;

    // recognition.onresult = (event: SpeechRecognitionEvent) => {
    //   const lastResult = event.results[event.results.length - 1];
    //   setTranscript(lastResult[0].transcript);
    // };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      stopListening();
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      console.log("event", event);
      const currentTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setTranscript(currentTranscript);
    };
  }, [recognition, stopListening]);

  useEffect(() => {
    if (!analyzer) return;

    const sampleRate = 10;
    const sampleInterval = 1000 / sampleRate; // Milliseconds between samples
    const historyDuration = 10; // in seconds
    const maxHistoryLength = sampleRate * historyDuration;

    let lastSampleTime = 0;

    const updateNoiseLevel = (timestamp: number) => {
      if (timestamp - lastSampleTime >= sampleInterval) {
        const dataArray = new Uint8Array(analyzer.frequencyBinCount);
        analyzer.getByteFrequencyData(dataArray);
        const average =
          dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

        setNoiseLevel(average);
        setNoiseLevelHistory((prevHistory) => {
          const newHistory = [...prevHistory, average];
          return newHistory.slice(-maxHistoryLength);
        });

        lastSampleTime = timestamp;
      }

      animationFrameRef.current = requestAnimationFrame(updateNoiseLevel);
    };

    animationFrameRef.current = requestAnimationFrame(updateNoiseLevel);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [analyzer]);

  return {
    transcript,
    isListening,
    noiseLevel,
    noiseLevelHistory,
    startListening,
    stopListening,
  };
};

export default useSpeechRecognition;
