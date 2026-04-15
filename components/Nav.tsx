"use client";

import { useEffect, useState } from "react";
import DriftMark from "./DriftMark";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="Driftless home">
          <DriftMark size="sm" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="font-mono text-xs text-brand-muted hover:text-brand-text tracking-widest uppercase transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="font-mono text-xs text-brand-muted hover:text-brand-text tracking-widest uppercase transition-colors"
          >
            How it works
          </a>
        </div>

        <a
          href="#waitlist"
          className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-bg transition-all duration-200"
        >
          Get Early Access
        </a>
      </nav>
    </header>
  );
}
