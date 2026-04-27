import DriftMark from "./DriftMark";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <DriftMark size="sm" />
        </div>

        <p className="font-mono text-[10px] text-brand-faint tracking-wider">
          © {new Date().getFullYear()} Driftless AI
        </p>
      </div>
    </footer>
  );
}
