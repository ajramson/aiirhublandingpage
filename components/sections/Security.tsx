import { LockKeyhole, ShieldCheck, KeySquare, ServerCog, Activity } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  { icon: LockKeyhole, text: "End‑to‑end encryption" },
  { icon: ShieldCheck, text: "Secure authentication" },
  { icon: KeySquare, text: "Scoped API access" },
  { icon: ServerCog, text: "Hardened cloud environment" },
  { icon: Activity, text: "Continuous monitoring" },
];

export default function Security() {
  return (
    <section id="security" className="section bg-very-light-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Your Vault and Data Are Secure</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, text }) => (
            <Reveal key={text}>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-xl transition">
                <Icon className="h-6 w-6 text-primary-600" />
                <p className="mt-3 text-gray-700">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


