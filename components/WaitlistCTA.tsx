"use client";

import { motion } from "framer-motion";

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="py-32 bg-[#0d0e12] relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,201,160,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-brand-faint mb-4">
            Early Access
          </p>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-brand-text mb-4 leading-tight">
            Be first to know
            <br />
            when it launches.
          </h2>
          <p className="font-mono text-xs text-brand-muted leading-relaxed mb-10">
            We&apos;re onboarding a small group of early teams. Leave your email
            and we&apos;ll reach out when spots open.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-brand-card border border-brand-border text-brand-text placeholder:text-brand-faint font-mono text-xs px-4 py-3 outline-none focus:border-brand-teal transition-colors duration-200"
            />
            <button
              type="submit"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-brand-teal text-brand-bg font-medium hover:bg-brand-teal-dark transition-colors duration-200 whitespace-nowrap glow-teal-sm"
            >
              Join Waitlist
            </button>
          </form>

          <p className="font-mono text-[10px] text-brand-faint mt-4 tracking-wider">
            No spam. Unsubscribe any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
