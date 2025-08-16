import Team from "@/components/sections/Team";

export default function TeamPage() {
  return (
    <main>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Team</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">Built by experts in AI, capital markets, and investor relations.</p>
      </section>
      <Team />
    </main>
  );
}


