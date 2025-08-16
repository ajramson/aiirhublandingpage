"use client";
import Hero from "@/components/sections/Hero";
import PrivateLLM from "@/components/sections/PrivateLLM";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/lib/useAnalytics";

export default function Home() {
  useAnalytics("home");
  return (
    <main>
      <Hero />
      <PrivateLLM />
      <CTA />
      <Footer />
    </main>
  );
}
