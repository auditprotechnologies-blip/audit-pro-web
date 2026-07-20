import { ArrowRight } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-40 glass-nav"
      style={{
        background: "rgba(9,9,9,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4" style={{ maxWidth: 1550 }}>
        <a href="#top" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
            style={{ background: "linear-gradient(135deg,#c91f28,#a01820)", boxShadow: "0 4px 15px rgba(201,31,40,0.35)" }}
          >
            A
          </div>
          <span className="text-base font-semibold tracking-tight">
            Audit <span className="text-gold-gradient">Pro</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#a8a8a8] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white"
          style={{
            background: "linear-gradient(135deg,#c91f28,#a01820)",
            boxShadow: "0 4px 15px rgba(201,31,40,0.2)",
          }}
        >
          Get Started <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
