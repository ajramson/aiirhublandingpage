import { Brain, Shield, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function PrivateLLM() {
  const points = [
    {
      icon: Sparkles,
      title: "Personalized AI",
      desc: "Every AIIRHub customer gets a private language model trained exclusively on their documents, company and preferences.",
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor" className="h-10 w-10">
          <path d="M323-160q-11 0-20.5-5.5T288-181l-78-139h58l40 80h92v-40h-68l-40-80H188l-57-100q-2-5-3.5-10t-1.5-10q0-4 5-20l57-100h104l40-80h68v-40h-92l-40 80h-58l78-139q5-10 14.5-15.5T323-800h97q17 0 28.5 11.5T460-760v160h-60l-40 40h100v120h-88l-40-80h-92l-40 40h108l40 80h112v200q0 17-11.5 28.5T420-160h-97Zm217 0q-17 0-28.5-11.5T500-200v-200h112l40-80h108l-40-40h-92l-40 80h-88v-120h100l-40-40h-60v-160q0-17 11.5-28.5T540-800h97q11 0 20.5 5.5T672-779l78 139h-58l-40-80h-92v40h68l40 80h104l57 100q2 5 3.5 10t1.5 10q0 4-5 20l-57 100H668l-40 80h-68v40h92l40-80h58l-78 139q-5 10-14.5 15.5T637-160h-97Z"/>
        </svg>
      ),
      title: "Automatic and Customized Learning",
      desc: "Your LLM automatically learns from SEC filings, as well as any documents you upload - past press releases, investor decks, company disclaimers, and other key documents.",
    },
    {
      icon: Shield,
      title: "Secure & On-Brand",
      desc: "Results are context-aware, consistent with your messaging, and completely secure—unlike generic AI tools with public knowledge bases.",
    },
  ];
  return (
    <section id="private-llm" className="section container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary-600 font-serif text-center">Private LLMs: Your Company&apos;s Digital Brain</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {points.map(({ icon: Icon, title, desc }) => (
          <Reveal key={title}>
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mx-auto">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


