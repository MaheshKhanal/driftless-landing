"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function ConnectVisual() {
  return (
    <div className="p-8 bg-brand-card flex flex-col justify-center gap-6">
      <p className="font-mono text-[10px] text-brand-faint uppercase tracking-widest">
        Works with your existing setup
      </p>
      <div className="flex items-center gap-3">
        {/* Your App */}
        <div className="flex-1 border border-brand-border bg-brand-bg p-3 text-center">
          <p className="font-mono text-[10px] text-brand-faint mb-1 uppercase tracking-widest">Your app</p>
          <p className="font-mono text-[11px] text-brand-muted">Any framework</p>
        </div>

        {/* Arrow with pulse */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="flex items-center gap-1">
            <div className="w-6 h-px bg-brand-teal opacity-40" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-teal opacity-80 animate-pulse" />
            <div className="w-6 h-px bg-brand-teal opacity-40" />
          </div>
        </div>

        {/* Driftless */}
        <div className="flex-1 border border-brand-teal/40 bg-brand-teal/5 p-3 text-center">
          <p className="font-mono text-[10px] text-brand-teal mb-1 uppercase tracking-widest">Driftless</p>
          <p className="font-mono text-[11px] text-brand-teal opacity-60">watching</p>
        </div>

        {/* Arrow */}
        <div className="flex items-center gap-1 shrink-0">
          <div className="w-6 h-px bg-brand-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-border" />
          <div className="w-6 h-px bg-brand-border" />
        </div>

        {/* AI Provider */}
        <div className="flex-1 border border-brand-border bg-brand-bg p-3 text-center">
          <p className="font-mono text-[10px] text-brand-faint mb-1 uppercase tracking-widest">AI model</p>
          <p className="font-mono text-[11px] text-brand-muted">Claude · GPT · Gemini</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-brand-teal text-xs">✓</span>
        <span className="font-mono text-[11px] text-brand-muted">
          No infrastructure changes — drop-in, takes under 5 minutes
        </span>
      </div>
    </div>
  );
}

function BaselineVisual() {
  const items = [
    { label: "How your AI normally responds", pct: 100 },
    { label: "What a good answer looks like", pct: 100 },
    { label: "Your accuracy range day-to-day", pct: 100 },
  ];

  return (
    <div className="p-8 bg-brand-card flex flex-col justify-center gap-5">
      <p className="font-mono text-[10px] text-brand-faint uppercase tracking-widest">
        Learning from your real traffic
      </p>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[11px] text-brand-muted">{item.label}</span>
              <span className="font-mono text-[10px] text-brand-teal">learned ✓</span>
            </div>
            <div className="h-[3px] bg-brand-border rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-teal opacity-50 rounded-full"
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-1">
        <span className="text-brand-teal text-xs">✓</span>
        <span className="font-mono text-[11px] text-brand-muted">
          Baseline set — Driftless is now watching for anything unusual
        </span>
      </div>
    </div>
  );
}

function AlertVisual() {
  return (
    <div className="p-8 bg-brand-card flex flex-col justify-center gap-4">
      <p className="font-mono text-[10px] text-brand-faint uppercase tracking-widest">
        You get notified immediately
      </p>

      <div className="border border-brand-teal/20 bg-brand-teal/[0.03] p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse shrink-0" />
          <span className="font-mono text-[10px] text-brand-faint">New alert · just now</span>
        </div>
        <p className="font-syne text-sm text-brand-text font-semibold leading-snug">
          Your AI started behaving differently
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2 font-mono text-[11px]">
            <span className="text-[#ff8080] shrink-0 mt-0.5">↓</span>
            <span className="text-brand-muted">Accuracy dropped 35% since yesterday</span>
          </div>
          <div className="flex items-start gap-2 font-mono text-[11px]">
            <span className="text-[#ff8080] shrink-0 mt-0.5">!</span>
            <span className="text-brand-muted">Two of your AI features are giving wrong answers</span>
          </div>
          <div className="flex items-start gap-2 font-mono text-[11px]">
            <span className="text-brand-teal shrink-0 mt-0.5">→</span>
            <span className="text-brand-teal">A fix is ready for your team to review</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TranslateVisual() {
  return (
    <div className="p-8 bg-brand-card flex flex-col justify-center gap-5">
      <p className="font-mono text-[10px] text-brand-faint uppercase tracking-widest">
        Your fix, ready to deploy
      </p>

      <div className="flex items-stretch gap-4">
        {/* Original */}
        <div className="flex-1 border border-brand-border bg-brand-bg p-3 flex flex-col gap-2">
          <p className="font-mono text-[10px] text-brand-faint uppercase tracking-widest">You wrote</p>
          <p className="font-mono text-[11px] text-brand-muted leading-relaxed flex-1">
            One prompt, written once
          </p>
        </div>

        <div className="flex items-center shrink-0">
          <span className="font-mono text-brand-teal opacity-50 text-sm">→</span>
        </div>

        {/* Translated */}
        <div className="flex-1 border border-brand-teal/30 bg-brand-teal/5 p-3 flex flex-col gap-2">
          <p className="font-mono text-[10px] text-brand-teal uppercase tracking-widest">Works on</p>
          <div className="space-y-1.5">
            {["Claude", "GPT-4o", "Gemini"].map((p) => (
              <div key={p} className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-brand-muted">{p}</span>
                <span className="text-brand-teal opacity-70">✓ adapted</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-brand-teal text-xs">✓</span>
        <span className="font-mono text-[11px] text-brand-muted">
          Same output quality across every provider and every version
        </span>
      </div>
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Connect your AI",
    body: "Drop in our SDK or point your requests through our proxy. No infrastructure changes. Works with any provider — Anthropic, OpenAI, Google, and more.",
    visual: <ConnectVisual />,
  },
  {
    num: "02",
    title: "Driftless learns what normal looks like",
    body: "We watch your real traffic to understand how your AI normally behaves. No manual setup, no labeling. It figures out your baseline on its own.",
    visual: <BaselineVisual />,
  },
  {
    num: "03",
    title: "Get alerted before your users notice",
    body: "The moment something changes, you get an alert telling you what broke and what's affected.",
    visual: <AlertVisual />,
  },
  {
    num: "04",
    title: "Your prompt is fixed and ready",
    body: "Driftless doesn't just alert you — it translates your prompt to work correctly again. Write it once and it adapts automatically to work on Claude, GPT-4o, Gemini, and more.",
    visual: <TranslateVisual />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.3em] uppercase text-brand-teal mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-extrabold text-3xl md:text-4xl text-brand-text mb-16 max-w-2xl"
          >
            From zero to{" "}
            <span className="text-gradient-teal">drift-proof</span> in minutes
          </motion.h2>

          <div className="space-y-2">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-0 border border-brand-border bg-brand-card hover:border-brand-border-hover transition-colors duration-200 group"
              >
                {/* Left: step info */}
                <div className="p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-brand-border">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-brand-teal tracking-widest mt-0.5 shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-syne font-bold text-lg text-brand-text mb-2">
                        {step.title}
                      </h3>
                      <p className="font-mono text-xs text-brand-muted leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: visual */}
                {step.visual}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
