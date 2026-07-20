export function Footer() {
  return (
    <footer className="relative pt-16 pb-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* divider */}
      <div className="mx-auto px-6" style={{ maxWidth: 1550 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#c91f28,#a01820)" }}
              >
                A
              </div>
              <span className="text-base font-semibold">
                Audit <span className="text-gold-gradient">Pro</span>
              </span>
            </div>
            <p className="text-xs text-[#a8a8a8] leading-relaxed max-w-xs">
              Trusted POS partner for restaurants, pharmacies, retail and supermarkets across Pakistan.
            </p>
          </div>
          <FooterCol title="Product" items={["Features", "Pricing", "Industries", "Hardware"]} />
          <FooterCol title="Company" items={["About", "Careers", "Partners", "Press"]} />
          <FooterCol title="Support" items={["Help center", "WhatsApp", "Docs", "Status"]} />
        </div>
        <div className="flex items-center justify-center py-4">
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)",
            }}
          />
          <div
            className="w-1 h-1 rounded-full mx-4"
            style={{ background: "#c91f28", boxShadow: "0 0 20px rgba(201,31,40,0.4)" }}
          />
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)",
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-[#a8a8a8]">© 2026 Audit Pro. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-wider text-[#5a4a3a]">
            Made in Pakistan · Serving 1,200+ businesses
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-wider text-white font-semibold mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-xs text-[#a8a8a8] hover:text-white transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
