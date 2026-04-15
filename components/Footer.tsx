import DriftMark from "./DriftMark";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <DriftMark size="sm" />
          <p className="font-mono text-[10px] text-brand-faint tracking-[0.2em] uppercase">
            Prompt Translation Layer
          </p>
        </div>

        <nav className="flex items-center gap-6">
          {["Privacy", "Twitter / X", "GitHub"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono text-[10px] text-brand-faint hover:text-brand-muted tracking-widest uppercase transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="font-mono text-[10px] text-brand-faint tracking-wider">
          © {new Date().getFullYear()} Driftless, Inc.
        </p>
      </div>
    </footer>
  );
}
