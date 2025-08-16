"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import DemoModal from "@/components/DemoModal";

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <section id="cta" className="section container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Reveal>
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-600 font-serif">Bring AIIRHub to Your Company</h2>
                      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white hover:bg-primary-500 focus-ring">Book a Demo</button>
            </div>
        </div>
      </Reveal>
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}


