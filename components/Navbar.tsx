"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#private-llm", label: "Digital Brain" },
  { href: "#cta", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active anchor highlight only on home page
  const observeAnchors = useMemo(() => pathname === "/", [pathname]);
  useEffect(() => {
    if (!observeAnchors) return;
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [observeAnchors]);

  const navBg = scrolled ? "backdrop-blur bg-white/90 shadow-sm" : "bg-white/60 backdrop-blur";

  return (
    <div className={`sticky top-0 z-50 transition-colors ${navBg}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="AIIRHub home" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="AIIRHub logo" 
                width={64} 
                height={64} 
                className="h-8 w-auto"
                priority
                unoptimized
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg focus-ring transition-colors ${
                  active === link.href ? "text-primary-600" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login" className="rounded-xl border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 focus-ring">
              Log in
            </Link>
            <Link href="/signup" className="inline-flex items-center rounded-xl bg-primary-600 px-4 py-2 text-white hover:bg-primary-500 focus-ring">
              Sign up
            </Link>
          </div>
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus-ring"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link href="/login" className="rounded-xl border border-gray-300 px-4 py-2 text-center text-gray-700 hover:bg-gray-50 focus-ring">
                  Log in
                </Link>
                <Link href="/signup" className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-4 py-2 text-white hover:bg-primary-500 focus-ring">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;


