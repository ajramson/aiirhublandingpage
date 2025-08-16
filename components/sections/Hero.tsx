"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import DemoModal from "@/components/DemoModal";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section id="hero" className="relative overflow-hidden">
      <BackgroundVideo />
      <div className="relative bg-grid-overlay">
        <div className="section container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur text-white px-3 py-1 text-sm">Trained by IR professionals</div>
                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-serif">Your Company&apos;s Own LLM</h1>
                <p className="mt-4 text-blue-100 max-w-2xl">A secure AI model trained exclusively on your company&apos;s documents — by IR professionals.</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white hover:bg-primary-500 focus-ring">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <a href="#platform" className="rounded-xl border border-white/30 px-5 py-3 text-white hover:bg-white/10 focus-ring inline-flex items-center">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Learn How It Works
                  </a>
                </div>
                <p className="mt-4 text-sm text-blue-100">
                  Already have an account? <Link href="/login" className="text-white hover:underline">Log in</Link>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="relative rounded-2xl border border-gray-800 bg-gray-900 p-1 shadow-2xl">
                <Image 
                  src="/hero-image.png" 
                  alt="AIIRGPT interface showing Microsoft data" 
                  width={800} 
                  height={600} 
                  className="w-full rounded-xl object-contain"
                  priority
                  quality={100}
                  unoptimized
                />
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-black/5" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}


