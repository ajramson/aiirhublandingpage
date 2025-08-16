import { CalendarClock, Layers, ShieldAlert, Shuffle, SplitSquareVertical, Files } from "lucide-react";
import Reveal from "@/components/Reveal";

const items = [
  {
    icon: CalendarClock,
    title: "Time‑sensitive communications",
    desc: "Press releases, investor updates, and social posts under tight deadlines.",
  },
  {
    icon: Layers,
    title: "Resource constraints",
    desc: "Small and mid‑cap teams struggle to keep outputs consistent.",
  },
  {
    icon: ShieldAlert,
    title: "Consistency & compliance",
    desc: "Manual drafting risks errors across channels.",
  },
  {
    icon: Shuffle,
    title: "Fragmented tools",
    desc: "Multi‑channel engagement is slow with disconnected workflows.",
  },
  {
    icon: Files,
    title: "Information sprawl",
    desc: "SEC filings and internal docs are scattered across systems.",
  },
  {
    icon: SplitSquareVertical,
    title: "Slow approvals",
    desc: "Manual reviews delay market‑moving communications.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">What Public Companies Are Up Against</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
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


