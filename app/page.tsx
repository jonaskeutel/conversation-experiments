import Link from "next/link";
import Image from "next/image";
import { JSX, SVGProps } from "react";
import { ChevronRightIcon } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Build Connections Through Conversation
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our suite of conversation experiments helps you improve your
                  communication skills and build deeper connections with others.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Conversation Experiments
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Improve Your Communication Skills
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our suite of conversation experiments helps you build deeper
                connections and improve your communication skills.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Live Transcript</h3>
                    <p className="text-muted-foreground">
                      Get real-time transcripts of your conversations to improve
                      your communication skills.
                    </p>
                    <Link
                      href="/live-transcript"
                      className="inline-flex items-center mt-2 text-sm font-medium hover:underline"
                      prefetch={false}
                    >
                      Try Live Transcript
                      <ChevronRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Network Organizer</h3>
                    <p className="text-muted-foreground">
                      Easily manage your professional network and stay connected
                      with your contacts.
                    </p>
                    <Link
                      href="/network-organizer"
                      className="inline-flex items-center mt-2 text-sm font-medium hover:underline"
                      prefetch={false}
                    >
                      Explore Network Organizer
                      <ChevronRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Conversation Role Play
                    </h3>
                    <p className="text-muted-foreground">
                      Practice your communication skills through interactive
                      role-playing scenarios.
                    </p>
                    <Link
                      href="/conversation-role-play"
                      className="inline-flex items-center mt-2 text-sm font-medium hover:underline"
                      prefetch={false}
                    >
                      Start Role Play
                      <ChevronRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Real-Time Conversation Feedback
                    </h3>
                    <p className="text-muted-foreground">
                      Get instant feedback on your communication style and learn
                      how to improve.
                    </p>
                    <Link
                      href="/conversation-feedback"
                      className="inline-flex items-center mt-2 text-sm font-medium hover:underline"
                      prefetch={false}
                    >
                      Get Feedback
                      <ChevronRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Start Building Connections
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Unlock Your Communication Potential
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our conversation experiments are designed to help you improve your
              communication skills and build deeper connections with others.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
