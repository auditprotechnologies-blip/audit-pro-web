import type { ReactNode } from "react";
import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  icon,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
  icon?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center mb-14"
    >
      <span
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
        style={{
          background: "rgba(201,31,40,0.15)",
          color: "#c91f28",
          border: "1px solid rgba(201,31,40,0.2)",
        }}
      >
        {icon} {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-3 font-display tracking-tight">
        {title} {accent && <span className="text-gold-gradient">{accent}</span>}
      </h2>
      {subtitle && <p className="text-base text-[#a8a8a8] max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
