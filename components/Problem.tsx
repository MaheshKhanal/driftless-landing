"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Problem() {
  return (
    <section className="py-32 bg-brand-bg">
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
            The Problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-bold text-2xl md:text-3xl text-brand-text mb-16 max-w-2xl"
          >
            Silent model updates are a{" "}
            <span className="text-gradient-teal">hidden liability</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-2">
            {/* Left: terminal block */}
            <motion.div
              variants={fadeUp}
              className="bg-[#0d0e12] border border-brand-border font-mono text-xs leading-loose"
            >
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-[#0a0b0f]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-brand-faint tracking-widest uppercase text-[10px]">
                  response_diff.log
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-brand-faint">// Before — claude-sonnet-4 (2024-10-01)</span>
                  <pre className="mt-1 text-[11px] text-brand-muted whitespace-pre-wrap">
{`{
  "sentiment": "positive",
  "confidence": 0.94,
  "reasoning": "The customer clearly
    expressed satisfaction with the
    onboarding flow and pricing model."
}`}
                  </pre>
                </div>

                <div className="border-t border-brand-border pt-4">
                  <span className="text-[#ff4d4d] opacity-70">// After — claude-sonnet-4 (2024-11-15) ← silent update</span>
                  <pre className="mt-1 text-[11px] text-[#ff6b6b] opacity-60 whitespace-pre-wrap">
{`{
  "sentiment": "neutral",
  "confidence": 0.61,
  "reasoning": "Insufficient context
    to determine sentiment accurately."
}`}
                  </pre>
                </div>

                <div className="border-t border-brand-border pt-4">
                  <span className="text-brand-teal">// Driftless alert — 14 Nov, 02:41 UTC</span>
                  <pre className="mt-1 text-[11px] text-brand-teal opacity-80 whitespace-pre-wrap">
{`⚠  Drift detected on prod/sentiment-classifier
   Confidence delta: -0.33 (↓35%)
   Affected routes: /api/analyze, /api/report
   Suggested fix: prompt_v2_translated.txt`}
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Right: prose */}
            <motion.div variants={stagger} className="flex flex-col gap-6 py-2">
              {[
                {
                  label: "01",
                  title: "You didn't change anything",
                  body: "Your code is the same. Your prompts are the same. But Anthropic, OpenAI, or Google quietly pushed a model revision — and now your outputs are different.",
                },
                {
                  label: "02",
                  title: "It surfaces in production",
                  body: "Accuracy drops. Structured outputs break. Classification drifts. Users notice before you do — because there's no monitoring layer between your app and the model.",
                },
                {
                  label: "03",
                  title: "There's no easy fix",
                  body: "You either pin the model version (losing improvements) or rewrite your prompts. Except each provider has different behavior — what works on Claude doesn't work on GPT-4o.",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex gap-5 p-5 border border-brand-border bg-brand-card hover:border-brand-border-hover transition-colors duration-200"
                >
                  <span className="font-mono text-xs text-brand-faint mt-0.5 shrink-0 tracking-widest">
                    {item.label}
                  </span>
                  <div>
                    <h3 className="font-syne font-semibold text-sm text-brand-text mb-1">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-brand-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
