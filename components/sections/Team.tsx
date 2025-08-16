import Image from "next/image";
import Reveal from "@/components/Reveal";

type Member = {
  name: string;
  title: string;
  bio: string;
  robotImage: string;
  href?: string;
};

const team: Member[] = [
  { name: "Alex Johnson", title: "CEO", bio: "Operator across AI and capital markets.", robotImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop&crop=face" },
  { name: "Priya Shah", title: "Head of IR Programs", bio: "IR professional with a decade of experience.", robotImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop&crop=face" },
  { name: "Daniel Lee", title: "Lead ML Engineer", bio: "Applied NLP and model safety.", robotImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop&crop=face" },
  { name: "Maya Chen", title: "Design Lead", bio: "Clarity and trust in product communication.", robotImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop&crop=face" },
  { name: "Sam Rogers", title: "Security Lead", bio: "Secure systems and controls for enterprise.", robotImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop&crop=face" },
  { name: "Elena Garcia", title: "Product", bio: "Workflows for public company teams.", robotImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop&crop=face" },
];

export default function Team() {
  return (
    <section id="team" className="section container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary-600 font-serif text-center mb-6">Team</h2>
        <p className="text-gray-600 max-w-3xl text-center">Built by experts in AI, capital markets, and investor relations.</p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <Reveal key={m.name}>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-xl transition">
              <div className="h-24 w-24 rounded-xl overflow-hidden">
                <Image 
                  src={m.robotImage} 
                  alt={`Robot representing ${m.name}`} 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-primary-700">{m.title}</p>
              <p className="mt-2 text-gray-600">{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


