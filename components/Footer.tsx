import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="AIIRHub logo" 
            width={48} 
            height={48} 
            className="h-6 w-auto"
            unoptimized
          />
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
          <a href="#private-llm">Digital Brain</a>
          <a href="#cta">Contact</a>
        </nav>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}


