"use client";
import { useAnalytics } from "@/lib/useAnalytics";

export default function PricingPage() {
  useAnalytics("pricing");
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Pricing</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">Choose the plan that fits your organization. Contact us for details.</p>
        <div className="mt-6 flex gap-3">
          <a className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white hover:bg-primary-500 focus-ring" href="/signup">Sign up</a>
          <a className="rounded-xl border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50 focus-ring" href="#contact">Contact Sales</a>
        </div>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {["Basic", "Social", "Bespoke"].map((name) => (
          <div key={name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Secure, private LLM</li>
              <li>Vault document training</li>
              <li>On‑brand outputs</li>
              <li>IR professional oversight</li>
              <li>Scoped access controls</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white hover:bg-primary-500 focus-ring" href="/signup">Sign up</a>
              <a className="rounded-xl border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50 focus-ring" href="#contact">Contact Sales</a>
            </div>
          </div>
        ))}
      </div>
      <section className="mt-12">
        <h3 className="text-lg font-semibold text-gray-900">FAQs</h3>
        <div className="mt-4 space-y-3 text-gray-600">
          <p><strong>Do you publish pricing?</strong> We tailor plans to company needs; contact us for a quote.</p>
          <p><strong>Is my data secure?</strong> Yes — end‑to‑end encryption, scoped access, and isolated vaults.</p>
          <p><strong>How long is onboarding?</strong> We guide setup to ensure quality and compliance.</p>
        </div>
      </section>
    </main>
  );
}


