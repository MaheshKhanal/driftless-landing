"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; company?: string }>({});

  function validate() {
    const errors: { email?: string; company?: string } = {};
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!EMAIL_RE.test(email.trim())) {
      errors.email = "Enter a valid email address.";
    }
    if (!company.trim()) {
      errors.company = "Company name is required.";
    }
    return errors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), company_name: company.trim() }),
      });

      if (res.ok) {
        setStatus("success");
      } else if (res.status === 409) {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-brand-card border text-brand-text placeholder:text-brand-faint font-mono text-xs px-4 py-3 outline-none focus:border-brand-teal transition-colors duration-200";

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

          {status === "success" ? (
            <p className="font-mono text-xs text-brand-teal tracking-wider">
              You&apos;re on the list! We&apos;ll be in touch.
            </p>
          ) : (
            <form
              className="flex flex-col gap-2 max-w-md mx-auto"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-col gap-1 text-left">
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className={`${inputClass} ${fieldErrors.email ? "border-red-500" : "border-brand-border"}`}
                />
                {fieldErrors.email && (
                  <p className="font-mono text-[10px] text-red-400 pl-1">{fieldErrors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-1 text-left">
                <input
                  type="text"
                  placeholder="Company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={status === "loading"}
                  className={`${inputClass} ${fieldErrors.company ? "border-red-500" : "border-brand-border"}`}
                />
                {fieldErrors.company && (
                  <p className="font-mono text-[10px] text-red-400 pl-1">{fieldErrors.company}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-brand-teal text-brand-bg font-medium hover:bg-brand-teal-dark transition-colors duration-200 whitespace-nowrap glow-teal-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting…" : "Join Waitlist"}
              </button>

              {status === "duplicate" && (
                <p className="font-mono text-[10px] text-brand-muted tracking-wider text-center">
                  This email + company is already on the waitlist.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-[10px] text-red-400 tracking-wider text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}

          {status !== "success" && (
            <p className="font-mono text-[10px] text-brand-faint mt-4 tracking-wider">
              No spam. Unsubscribe any time.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
