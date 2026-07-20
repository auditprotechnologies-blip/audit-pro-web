import { motion } from "motion/react";
import { UtensilsCrossed, Pill, ShoppingBag, Store, Building2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    desc: "Dine-in, takeaway and delivery on one screen. KOT to the kitchen in one tap.",
    points: ["Table management", "Split bills & discounts", "Kitchen display system"],
  },
  {
    icon: Pill,
    title: "Pharmacies",
    desc: "Batch, expiry and prescription tracking built for chemists and drug regulations.",
    points: ["Batch & expiry alerts", "Prescription log", "DRAP-friendly reports"],
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Variants, SKUs and barcodes handled without spreadsheets or workarounds.",
    points: ["Variants & sizes", "Barcode label printing", "Loyalty & discounts"],
  },
  {
    icon: Store,
    title: "Supermarkets",
    desc: "High-volume checkout with weighing scales, multi-lane sync and shift close.",
    points: ["Scale integration", "Multi-lane sync", "Shift & till reports"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-16 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(243,154,0,0.05), transparent 70%)",
        }}
      />
      <div className="relative mx-auto px-6" style={{ maxWidth: 1550 }}>
        <SectionHeading
          eyebrow="Industries"
          title="Built for the counters"
          accent="that keep Pakistan running"
          subtitle="One product, tuned for the four categories that make up Pakistan's retail backbone."
          icon={<Building2 className="w-3.5 h-3.5" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(18,18,18,0.95), rgba(18,18,18,0.6))",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,213,108,0.18), rgba(243,154,0,0.12))",
                    border: "1px solid rgba(243,154,0,0.25)",
                  }}
                >
                  <ind.icon className="w-6 h-6" style={{ color: "#f39a00" }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 font-display">{ind.title}</h3>
                  <p className="text-sm text-[#a8a8a8] leading-relaxed">{ind.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {ind.points.map((p) => (
                      <li
                        key={p}
                        className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(245,214,109,0.1)",
                          color: "#f5d66d",
                          border: "1px solid rgba(245,214,109,0.15)",
                        }}
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
