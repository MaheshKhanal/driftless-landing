import type { Metadata } from "next";
import { Unbounded, DM_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Driftless — LLM Drift Monitoring & Prompt Translation",
  description:
    "Detect silent model updates before they break your product. Driftless monitors LLM drift and translates prompts across models — so your AI stays reliable.",
  openGraph: {
    title: "Driftless",
    description: "Your LLM changed. Your product didn't. Driftless fixes that.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${dmMono.variable}`}>
      <body className="font-mono antialiased bg-brand-bg text-brand-text">
        {children}
      </body>
    </html>
  );
}
