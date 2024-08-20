"use client";

import { useState } from "react";
import useAudioTranscription from "../hooks/useAudioTranscription";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function TranscriptPage() {
  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    noiseLevel,
    noiseLevelHistory,
  } = useAudioTranscription();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Live Transcript</h1>
      <div className="mb-4">
        <button
          onClick={isListening ? stopListening : startListening}
          className="bg-primary text-primary-foreground px-4 py-2 rounded"
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
      </div>
      <div className="border p-4 rounded min-h-[200px]">
        <p>{transcript}</p>
      </div>
      <div className="border p-4 rounded min-h-[200px]">
        <p>{noiseLevel}</p>
        <Card>
          <CardHeader>
            <CardTitle>Noise Level Chart</CardTitle>
            <CardDescription>Real-time Noise Levels</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                noiseLevel: {
                  label: "Noise Level",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                data={noiseLevelHistory.map((level, index) => ({
                  index,
                  noiseLevel: level,
                }))}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="index"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="noiseLevel"
                  fill="var(--color-noiseLevel)"
                  radius={8}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="leading-none text-muted-foreground">
              Showing noise levels over time
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
