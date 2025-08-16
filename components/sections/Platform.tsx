import { Database, Lock, Palette } from "lucide-react";
import Reveal from "@/components/Reveal";

const pillars = [
  { icon: Database, title: "Private LLM", desc: "Your model learns from your data — not the public internet." },
  { icon: Lock, title: "Secure Vault", desc: "Isolated data stores with scoped access and encryption." },
  { icon: Palette, title: "On‑brand Outputs", desc: "Consistent tone and style across channels." },
];

export default function Platform() {
  return (
    <section id="platform" className="section container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <Reveal>
        <p className="text-gray-600 max-w-3xl">A platform that gives every public company a private, secure LLM — trained by IR professionals — to streamline and safeguard communications.</p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <Reveal key={title}>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-xl transition">
              <Icon className="h-6 w-6 text-primary-600" />
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


