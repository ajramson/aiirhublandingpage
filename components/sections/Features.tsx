import { MessageSquare, FileText, ChartLine } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: MessageSquare,
    title: "AIIRGPT + Vault",
    desc: "ChatGPT‑style interface that uses only your company’s data.",
  },
  {
    icon: FileText,
    title: "Press Release Builder",
    desc: "Secure drafting and approval workflow.",
  },
  {
    icon: ChartLine,
    title: "IR Hub",
    desc: "Market intelligence and competitor tracking, in one place.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Core Features</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
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


