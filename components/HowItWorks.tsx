"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const steps = [
  {
    num: "01",
    title: "Connect your LLM calls",
    body: "Drop in our SDK or point your requests through our proxy. No infrastructure changes. Works with any provider.",
    code: `import { driftless } from '@driftless/sdk'

const client = driftless({
  apiKey: process.env.DRIFTLESS_KEY,
  model: 'claude-sonnet-4',
})`,
  },
  {
    num: "02",
    title: "Driftless learns your baseline",
    body: "We sample your real traffic to build a semantic fingerprint of your expected responses. No labeling required.",
    code: `// Automatic — no config needed
// Driftless observes your first 100 calls
// and establishes a confidence baseline

✓  Baseline established (n=100)
✓  Watching: prod/sentiment-classifier`,
  },
  {
    num: "03",
    title: "Get alerted. Stay ahead.",
    body: "When drift is detected, you get an alert with a full diff, affected routes, and a translated prompt ready to deploy.",
    code: `⚠  Drift detected — confidence ↓35%
   Model: claude-sonnet-4 (Nov 15 build)

   Suggested fix available:
   → prompt_v2_translated.txt
   → Test in sandbox first? [y/N]`,
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
            className="font-mono text-xs tracking-[0.3em] uppercase text-brand-faint mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-bold text-2xl md:text-3xl text-brand-text mb-16 max-w-2xl"
          >
            From zero to{" "}
            <span className="text-gradient-teal">drift-proof</span> in minutes
          </motion.h2>

          <div className="space-y-2">
            {steps.map((step, i) => (
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

                {/* Right: code block */}
                <div className="p-6 bg-[#0d0e12]">
                  <pre className="font-mono text-[11px] text-brand-muted leading-loose whitespace-pre overflow-x-auto">
                    {step.code}
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
