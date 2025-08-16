import Reveal from "@/components/Reveal";

const plans = [
  {
    name: "Basic",
    bullets: [
      "Secure, private LLM",
      "Vault document training",
      "On‑brand outputs",
      "IR professional oversight",
    ],
  },
  {
    name: "Social",
    bullets: [
      "AIIRGPT + Vault",
      "Press release builder",
      "Multi‑channel approvals",
      "Engagement insights",
    ],
  },
  {
    name: "Bespoke",
    bullets: [
      "Custom policies",
      "Scoped access controls",
      "Advanced monitoring",
      "Priority support",
    ],
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="section bg-very-light-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Pricing</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">Choose the plan that fits your organization. Visit the full pricing page for details.</p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {plan.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white hover:bg-primary-500 focus-ring" href="/signup">Sign up</a>
                  <a className="rounded-xl border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50 focus-ring" href="/pricing">View Pricing</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


