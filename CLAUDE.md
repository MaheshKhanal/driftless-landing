# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **Driftless** — a B2B LLM reliability platform. Two core product features:
1. **Drift Monitoring** — detect silent model updates that change LLM response behavior
2. **Prompt Translation** — translate prompts to work optimally across different LLM providers

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Architecture

Single-page Next.js 16 app using the App Router. No backend — forms are UI-only.

**Entry points:**
- `app/layout.tsx` — font setup (Syne + DM Mono via `next/font/google`), global metadata
- `app/page.tsx` — assembles all sections in order
- `app/globals.css` — Tailwind directives + custom utilities (`text-gradient-teal`, `glow-teal`)

**Sections (in page order):** `Nav → Hero → Problem → Features → HowItWorks → WaitlistCTA → Footer`

**Shared component:** `components/DriftMark.tsx` — SVG logo mark used in Nav and Footer.

## Design System

Colors defined in `tailwind.config.ts` under `theme.extend.colors.brand`:
- `brand-bg` `#0a0b0f` — page background
- `brand-card` `#13141a` — card/section background  
- `brand-teal` `#00c9a0` — primary accent
- `brand-text` `#e8eaf0` — primary text
- `brand-muted` `#888` — secondary text
- `brand-border` `#1c1e26` — default border

Fonts:
- `font-syne` — headings (700/800 weight), loaded as **Bricolage Grotesque** via CSS var `--font-syne`
- `font-mono` — body, labels, code blocks (DM Mono)

Logo mark: noisy polyline waveform → vertical divider → clean resolved line + terminal dot. Represents drift resolving. Established in `driftless-logos.html` (V2 teal variant is the preferred style).

Animations use Framer Motion `whileInView` with `once: true` for scroll-triggered fade-ups.
