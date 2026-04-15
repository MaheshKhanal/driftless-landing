"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const features = [
  {
    id: "drift",
    overline: "Feature 01",
    title: "Drift Monitoring",
    description:
      "Continuously baselines your LLM responses. The moment a model update changes behavior, you know — before your users do.",
    bullets: [
      "Automatic baselining on first deployment",
      "Statistical drift detection across semantic + structured outputs",
      "Slack, PagerDuty, and webhook alerts with full diff context",
      "Per-route and per-model breakdown in a single dashboard",
    ],
    icon: <WaveformIcon />,
  },
  {
    id: "translation",
    overline: "Feature 02",
    title: "Prompt Translation",
    description:
      "Write prompts once. Driftless translates them to work optimally across Claude, GPT-4o, Gemini, and more — preserving intent and structure.",
    bullets: [
      "Semantic-preserving translation between provider formats",
      "System prompt and few-shot example adaptation",
      "Side-by-side output comparison before you deploy",
      "Track prompt performance across model versions over time",
    ],
    icon: <TranslateIcon />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-[#0d0e12]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.3em] uppercase text-brand-faint mb-4"
          >
            What Driftless Does
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-bold text-2xl md:text-3xl text-brand-text mb-16 max-w-2xl"
          >
            Everything you need to ship{" "}
            <span className="text-gradient-teal">reliable AI</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 gap-2"
          >
            {features.map((f) => (
              <motion.div
                key={f.id}
                variants={fadeUp}
                className="group relative bg-brand-card border border-brand-border hover:border-brand-border-hover transition-all duration-300 p-8 overflow-hidden"
              >
                {/* Teal left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-teal opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Subtle corner glow on hover */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-brand-teal opacity-0 group-hover:opacity-[0.03] rounded-full -translate-x-16 -translate-y-16 transition-opacity duration-500 pointer-events-none" />

                <div className="mb-6">{f.icon}</div>

                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-faint mb-2">
                  {f.overline}
                </p>
                <h3 className="font-syne font-bold text-xl text-brand-text mb-3">
                  {f.title}
                </h3>
                <p className="font-mono text-xs text-brand-muted leading-relaxed mb-6">
                  {f.description}
                </p>

                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="text-brand-teal mt-0.5 shrink-0">—</span>
                      <span className="font-mono text-xs text-brand-muted leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WaveformIcon() {
  return (
    <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        points="0,14 4,6 8,20 12,4 16,18 20,14"
        stroke="#1a4a3a"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="23" y1="4" x2="23" y2="24" stroke="#0d2e24" strokeWidth="1" />
      <line x1="26" y1="14" x2="40" y2="14" stroke="#00c9a0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="14" r="3" fill="#00c9a0" />
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="6" width="14" height="16" rx="1" stroke="#1a4a3a" strokeWidth="1.5" fill="none" />
      <text x="3" y="17" fontSize="7" fill="#1a4a3a" fontFamily="monospace">A</text>
      <line x1="18" y1="14" x2="26" y2="14" stroke="#0d2e24" strokeWidth="1" />
      <polyline points="23,10 27,14 23,18" stroke="#0d2e24" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="30" y="6" width="14" height="16" rx="1" stroke="#00c9a0" strokeWidth="1.5" fill="none" />
      <text x="33" y="17" fontSize="7" fill="#00c9a0" fontFamily="monospace">B</text>
    </svg>
  );
}
