import Reveal from "@/components/Reveal";

const cols = [
  {
    title: "Proprietary knowledge base",
    desc: "Your private vault of filings and internal docs informs every response.",
  },
  {
    title: "Automatic ingestion of public docs",
    desc: "Stay current with SEC filings without manual copy‑paste.",
  },
  {
    title: "Stronger privacy & compliance stance",
    desc: "Controls for data access, retention, and review.",
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="section container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Why AIIRHub Beats Generic AI Tools</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cols.map((c) => (
          <Reveal key={c.title}>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


