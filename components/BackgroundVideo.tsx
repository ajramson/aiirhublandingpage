"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: "-20% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="absolute inset-0">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover opacity-100 bg-video scale-115"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/media/hero-poster.jpg"
        aria-label="Decorative background video"
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}


