"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,201,160,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e8eaf0 1px, transparent 1px), linear-gradient(90deg, #e8eaf0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-left">
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase text-brand-teal mb-6 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            LLM Drift Monitoring
          </p>

          <h1
            className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.01em] text-brand-text mb-6 animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Your LLM changed.
            <br />
            <span className="text-gradient-teal">Your product didn&apos;t.</span>
          </h1>

          <p
            className="font-mono text-sm text-brand-muted leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            LLM providers silently update their models. Response quality drifts.
            Prompts break. Driftless detects the moment behavior shifts — and
            translates your prompts to keep working across any model.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#waitlist"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-brand-teal text-brand-bg font-medium hover:bg-brand-teal-dark transition-colors duration-200 glow-teal"
            >
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-brand-border text-brand-muted hover:border-brand-border-hover hover:text-brand-text transition-colors duration-200"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Right: waveform visualization */}
        <div
          className="flex-1 flex items-center justify-center animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <HeroVisual />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #0a0b0f)",
        }}
      />
    </section>
  );
}

function HeroVisual() {
  const mono = "var(--font-dm-mono), monospace";

  // Animation sequence timestamps (seconds)
  // 0.3  axes + grid fade in
  // 0.7  baseline draws left→right (1.3s)
  // 2.1  baseline area fills
  // 2.2  drift marker appears
  // 2.4  drift region flickers in
  // 2.9  resolution marker appears
  // 3.1  resolution line draws in (0.9s)
  // 4.1  terminal dot springs in + area fills

  return (
    <motion.svg
      width="480"
      height="280"
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Static chrome */}
      <rect width="480" height="280" rx="2" fill="#13141a" />
      <rect width="480" height="280" rx="2" stroke="#1c1e26" strokeWidth="1" />
      <rect width="480" height="36" rx="2" fill="#0e0f13" />
      <circle cx="20" cy="18" r="4" fill="#1c1e26" />
      <circle cx="34" cy="18" r="4" fill="#1c1e26" />
      <circle cx="48" cy="18" r="4" fill="#1c1e26" />
      <text x="68" y="23" fontSize="9" fill="#333" fontFamily={mono} letterSpacing="0.15em">
        RESPONSE QUALITY MONITOR
      </text>
      {["HIGH", "MED", "LOW"].map((label, i) => (
        <text key={label} x="8" y={[90, 140, 190][i]} fontSize="7" fill="#2a2d3a" fontFamily={mono} letterSpacing="0.1em">
          {label}
        </text>
      ))}

      {/* Axes — fade in */}
      <motion.line x1="48" y1="220" x2="440" y2="220" stroke="#1c1e26" strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }} />
      <motion.line x1="48" y1="60" x2="48" y2="220" stroke="#1c1e26" strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }} />

      {/* Gridlines — stagger in */}
      {[80, 120, 160, 200].map((y, i) => (
        <motion.line key={y} x1="48" y1={y} x2="440" y2={y} stroke="#1a1c22" strokeWidth="0.5" strokeDasharray="4 4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 + i * 0.05, duration: 0.3 }} />
      ))}

      {/* ── BASELINE ── */}
      <motion.polyline
        points="60,120 80,118 100,122 120,117 140,121 160,119 180,122 200,118 220,120 240,119"
        stroke="#00c9a0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <motion.polygon
        points="60,120 80,118 100,122 120,117 140,121 160,119 180,122 200,118 220,120 240,119 240,220 60,220"
        fill="#00c9a0"
        initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ delay: 2.1, duration: 0.6 }}
      />

      {/* ── DRIFT EVENT MARKER ── */}
      <motion.line x1="248" y1="52" x2="248" y2="220" stroke="#ff4d4d" strokeWidth="0.8" strokeDasharray="3 3"
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2.2, duration: 0.35 }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 2.2, duration: 0.3 }}>
        <text x="252" y="68" fontSize="8" fill="#ff4d4d" fontFamily={mono} letterSpacing="0.1em">MODEL UPDATE</text>
      </motion.g>

      {/* ── DRIFT REGION — flicker in ── */}
      <motion.polyline
        points="248,119 256,140 264,105 272,158 280,95 288,162 296,100 304,155 312,108 320,150 328,112 336,148"
        stroke="#00c9a0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.15, 0.45, 0.2, 0.35] }}
        transition={{ delay: 2.4, duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
      />

      {/* ── RESOLUTION MARKER ── */}
      <motion.line x1="344" y1="52" x2="344" y2="220" stroke="#00c9a0" strokeWidth="0.8" strokeDasharray="3 3"
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 2.9, duration: 0.35 }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 2.9, duration: 0.3 }}>
        <text x="348" y="68" fontSize="8" fill="#00c9a0" fontFamily={mono} letterSpacing="0.1em">RESOLVED</text>
      </motion.g>

      {/* ── RESOLUTION LINE — draw in ── */}
      <motion.polyline
        points="344,148 352,138 360,132 368,128 376,125 384,123 392,122 400,121 408,120 416,120 424,120"
        stroke="#00c9a0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 3.1, duration: 0.9, ease: "easeOut" }}
      />
      <motion.polygon
        points="344,148 352,138 360,132 368,128 376,125 384,123 392,122 400,121 408,120 416,120 424,120 424,220 344,220"
        fill="#00c9a0"
        initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ delay: 4.05, duration: 0.6 }}
      />

      {/* ── TERMINAL DOT — spring pop ── */}
      <motion.circle cx="424" cy="120" r="4" fill="#00c9a0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ originX: "center", originY: "center" }}
        transition={{ type: "spring", stiffness: 500, damping: 14, delay: 4.0 }}
      />

      {/* ── LEGEND — fade in with baseline ── */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.5 }}>
        <circle cx="60" cy="248" r="3" fill="#00c9a0" />
        <text x="68" y="252" fontSize="8" fill="#444" fontFamily={mono} letterSpacing="0.1em">BASELINE</text>
        <rect x="148" y="244" width="16" height="1.5" fill="#00c9a0" opacity="0.35" />
        <text x="168" y="252" fontSize="8" fill="#444" fontFamily={mono} letterSpacing="0.1em">DRIFT DETECTED</text>
        <circle cx="280" cy="248" r="3" fill="#ff4d4d" opacity="0.6" />
        <text x="288" y="252" fontSize="8" fill="#444" fontFamily={mono} letterSpacing="0.1em">MODEL CHANGE</text>
      </motion.g>
    </motion.svg>
  );
}
