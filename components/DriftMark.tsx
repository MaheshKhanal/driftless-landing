"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface DriftMarkProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 160, height: 32 },
  md: { width: 220, height: 44 },
  lg: { width: 290, height: 56 },
};

export default function DriftMark({ size = "md" }: DriftMarkProps) {
  const { width, height } = sizes[size];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 290 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Noisy wave — flicker in, representing drift */}
      <motion.polyline
        points="0,28 7,14 14,38 21,16 28,32 34,28"
        stroke="#1a4a3a"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 1, 0.3, 0.9, 0.4, 0.8] } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      />

      {/* Vertical divider — fade in */}
      <motion.line
        x1="40" y1="12" x2="40" y2="44"
        stroke="#0d2e24"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.25, delay: 0.65 }}
      />

      {/* Clean resolved line — draw in left to right */}
      <motion.line
        x1="46" y1="28" x2="74" y2="28"
        stroke="#00c9a0"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.55, delay: 0.8, ease: "easeOut" }}
      />

      {/* Terminal dot — spring pop */}
      <motion.circle
        cx="74" cy="28" r="3.5" fill="#00c9a0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
        style={{ originX: "center", originY: "center" }}
        transition={{ type: "spring", stiffness: 500, damping: 14, delay: 1.35 }}
      />

      {/* Wordmark — fade in after mark resolves */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <text
          x="90" y="35"
          fontSize="24"
          fill="#e8eaf0"
          fontFamily="var(--font-syne), 'Unbounded', sans-serif"
          fontWeight="700"
          letterSpacing="-0.01em"
        >
          driftless
        </text>
      </motion.g>
    </svg>
  );
}
