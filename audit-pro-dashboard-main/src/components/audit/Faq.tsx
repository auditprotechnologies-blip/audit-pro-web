import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    q: "Does Audit Pro work offline?",
    a: "Yes. Every terminal continues to sell during internet outages and syncs the moment connectivity returns — no data loss.",
  },
  {
    q: "Is it FBR compliant?",
    a: "Audit Pro supports FBR e-invoicing and generates the tax and audit reports your accountant needs, out of the box.",
  },
  {
    q: "Which hardware do you support?",
    a: "Any Windows PC, Android tablet, most thermal receipt printers, barcode scanners, weighing scales and traditional POS terminals.",
  },
  {
    q: "How long does setup take?",
    a: "Most single-outlet businesses are live within a day. Multi-branch rollouts typically take 3–5 days with our team.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Priority WhatsApp support 24/7, plus phone and remote assistance. Enterprise plans get a dedicated success manager.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-16 md:py-24">
      <div className="mx-auto px-6" style={{ maxWidth: 1000 }}>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently"
          accent="Asked"
          subtitle="Everything shopkeepers ask us before signing up."
          icon={<HelpCircle className="w-3.5 h-3.5" />}
        />
        <div className="flex flex-col gap-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={it.q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#121212",
                  border: "1px solid rgba(255,255,255,0.04)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(201,31,40,0.15)" }}
                    >
                      <HelpCircle className="w-4 h-4" style={{ color: "#c91f28" }} />
                    </div>
                    <span className="text-sm font-medium text-white">{it.q}</span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="w-4 h-4 text-[#a8a8a8]" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-[#a8a8a8] leading-relaxed pl-[68px]">
                        {it.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
