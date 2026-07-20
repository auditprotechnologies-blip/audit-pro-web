import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "Starter",
    price: "3,500",
    tag: "Single outlet",
    features: [
      "1 POS terminal",
      "Inventory & sales",
      "Daily reports",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "7,900",
    tag: "Most popular",
    features: [
      "Up to 3 terminals",
      "Multi-user & shifts",
      "Real-time analytics",
      "FBR e-invoicing",
      "Priority WhatsApp support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tag: "Multi-branch",
    features: [
      "Unlimited terminals",
      "Multi-branch sync",
      "Custom integrations",
      "Dedicated success manager",
      "On-site training",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="mx-auto px-6" style={{ maxWidth: 1550 }}>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing. Choose your"
          accent="Plan"
          subtitle="Monthly billing in PKR. No setup fees. Cancel anytime."
          icon={<Sparkles className="w-3.5 h-3.5" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 relative overflow-hidden flex flex-col"
              style={{
                background: p.highlighted
                  ? "linear-gradient(135deg, rgba(201,31,40,0.12), rgba(18,18,18,0.95))"
                  : "linear-gradient(135deg, rgba(18,18,18,0.9), rgba(18,18,18,0.6))",
                border: p.highlighted
                  ? "1px solid rgba(201,31,40,0.35)"
                  : "1px solid rgba(255,255,255,0.05)",
                boxShadow: p.highlighted
                  ? "0 20px 60px rgba(201,31,40,0.15)"
                  : "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              {p.highlighted && (
                <span
                  className="absolute top-5 right-5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    background: "rgba(201,31,40,0.2)",
                    color: "#ffb0b5",
                    border: "1px solid rgba(201,31,40,0.35)",
                  }}
                >
                  {p.tag}
                </span>
              )}
              <div className="text-xs uppercase tracking-wider text-[#a8a8a8] mb-2">{p.tag && !p.highlighted ? p.tag : "Plan"}</div>
              <h3 className="text-xl font-semibold font-display mb-4">
                {p.name}{" "}
                {p.name === "Pro" && <span className="text-gold-gradient">Pro</span>}
              </h3>
              <div className="mb-6">
                {p.price === "Custom" ? (
                  <div className="text-4xl font-bold font-display">Custom</div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#a8a8a8]">Rs</span>
                    <span className="text-4xl font-bold font-display">{p.price}</span>
                    <span className="text-sm text-[#a8a8a8]">/mo</span>
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#18c964" }} />
                    <span className="text-[#d4d4d4]">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold w-full"
                style={
                  p.highlighted
                    ? {
                        background: "linear-gradient(135deg,#c91f28,#a01820)",
                        boxShadow: "0 4px 20px rgba(201,31,40,0.3)",
                        color: "#fff",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#fff",
                      }
                }
              >
                {p.price === "Custom" ? "Talk to sales" : "Start free trial"}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
