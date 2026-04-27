"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const beforeMetrics = [
  { label: "sentiment", value: "positive", pct: 94, color: "#28c840" },
  { label: "accuracy", value: "94%", pct: 94, color: "#28c840" },
  { label: "answer quality", value: "full", pct: 100, color: "#28c840" },
];

const afterMetrics = [
  { label: "sentiment", value: "neutral", pct: 61, delta: "↓35%", color: "#ff6b6b" },
  { label: "accuracy", value: "61%", pct: 61, delta: "↓33pts", color: "#ff6b6b" },
  { label: "answer quality", value: "partial", pct: 38, color: "#ff8c42" },
];

type Metric = {
  label: string;
  value: string;
  pct: number;
  delta?: string;
  color: string;
};

function MetricRow({
  label,
  value,
  pct,
  delta,
  color,
  inView,
  delay = 0,
}: Metric & { inView: boolean; delay?: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] text-brand-faint w-24 shrink-0">{label}</span>
      <div className="flex-1 h-[3px] bg-brand-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : "0%" }}
          transition={{ duration: 0.7, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="font-mono text-[10px] w-16 text-right shrink-0" style={{ color }}>
        {value}
      </span>
      {delta && (
        <span className="font-mono text-[10px] text-[#ff6b6b] opacity-60 w-10 shrink-0">
          {delta}
        </span>
      )}
    </div>
  );
}

function DriftAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setPhase(1), 2200);
    const t2 = setTimeout(() => setPhase(2), 3800);
    const t3 = setTimeout(() => setPhase(3), 5400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isInView]);

  return (
    <div ref={ref} className="bg-brand-card border border-brand-border overflow-hidden h-full min-h-[500px]">
      <div className="p-6 space-y-4">
        {/* Prompt */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-brand-muted bg-[#0d0e12] px-3 py-2 border border-brand-border">
          <span className="text-brand-teal shrink-0">→</span>
          <span>&quot;Summarize and classify: support message #4821&quot;</span>
        </div>

        {/* Before card */}
        <div className="bg-[#0d0e12] border border-brand-border p-3 space-y-2.5">
          <span className="font-mono text-[10px] text-brand-faint block">
            claude-sonnet-4 · Oct 2025
          </span>
          {beforeMetrics.map((m, i) => (
            <MetricRow key={m.label} {...m} inView={isInView} delay={0.3 + i * 0.1} />
          ))}
        </div>

        {/* Silent update divider */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              key="divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex-1 h-px bg-[#ff6b6b] opacity-20" />
              <span className="font-mono text-[10px] text-[#ff6b6b] opacity-60 flex items-center gap-1.5 shrink-0">
                ⚡ silent update · Mar 7, 2026
              </span>
              <div className="flex-1 h-px bg-[#ff6b6b] opacity-20" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* After card */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              key="after-card"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4 }}
              className="bg-brand-bg border border-[#ff6b6b]/20 p-3 space-y-2.5"
            >
              <span className="font-mono text-[10px] text-[#ff6b6b] opacity-70 block">
                claude-sonnet-4 · Mar 7, 2026
              </span>
              {afterMetrics.map((m, i) => (
                <MetricRow key={m.label} {...m} inView={true} delay={0.1 + i * 0.1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alert */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              key="alert"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="border border-brand-teal/30 bg-brand-teal/5 p-3 font-mono text-[11px]"
            >
              <div className="text-brand-teal mb-2 flex items-center gap-2">
                <span>⚠</span>
                <span>Your AI started behaving differently</span>
              </div>
              <div className="space-y-1.5 text-brand-muted">
                <div className="flex items-start gap-2">
                  <span className="text-[#ff8080] shrink-0">—</span>
                  <span>Accuracy dropped <span className="text-[#ff8080]">35%</span> compared to last week</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#ff8080] shrink-0">—</span>
                  <span>Two of your AI features are giving wrong answers</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-teal shrink-0">—</span>
                  <span className="text-brand-teal">A fix is ready for your team to review</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

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
            className="font-mono text-xs tracking-[0.3em] uppercase text-brand-teal mb-4"
          >
            The Problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-extrabold text-3xl md:text-4xl text-brand-text mb-16 max-w-2xl"
          >
            Silent model updates are a{" "}
            <span className="text-gradient-teal">hidden liability</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-2">
            {/* Left: animated visualization */}
            <motion.div variants={fadeUp}>
              <DriftAnimation />
            </motion.div>

            {/* Right: prose steps */}
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
                  title: "The damage compounds",
                  body: "Misclassifications accumulate. Downstream pipelines receive bad data. Customer-facing features silently degrade. By the time a ticket gets filed, the blast radius is already wide.",
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
