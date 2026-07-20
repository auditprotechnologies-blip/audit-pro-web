import { motion } from "motion/react";
import {
  Zap,
  BarChart3,
  Package,
  Receipt,
  Users,
  Cloud,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: Zap, title: "Lightning-fast checkout", desc: "Ring up sales in under two seconds with keyboard, touch or barcode." },
  { icon: Package, title: "Smart inventory", desc: "Track stock in real time across outlets with low-stock and expiry alerts." },
  { icon: Receipt, title: "FBR-ready invoicing", desc: "Compliant receipts, tax breakdowns and audit-ready records built in." },
  { icon: BarChart3, title: "Live analytics", desc: "See revenue, top items and shifts on a dashboard that actually loads." },
  { icon: Users, title: "Staff & roles", desc: "Fine-grained permissions with shift reports and cashier accountability." },
  { icon: Cloud, title: "Cloud + offline", desc: "Keeps selling when the internet drops. Syncs the moment it comes back." },
  { icon: ShieldCheck, title: "Bank-grade security", desc: "Encrypted at rest and in transit, with role-based access controls." },
  { icon: Smartphone, title: "Runs anywhere", desc: "Windows, Android, tablets and traditional POS terminals — one system." },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto px-6" style={{ maxWidth: 1550 }}>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need,"
          accent="nothing you don't"
          subtitle="A focused feature set designed with shopkeepers and restaurant owners — not enterprise consultants."
          icon={<Zap className="w-3.5 h-3.5" />}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(18,18,18,0.9), rgba(18,18,18,0.6))",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(201,31,40,0.12), transparent 70%)",
                }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(201,31,40,0.15)", border: "1px solid rgba(201,31,40,0.2)" }}
              >
                <f.icon className="w-5 h-5" style={{ color: "#c91f28" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#a8a8a8] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
