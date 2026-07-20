import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(243,154,0,0.08), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 80%, rgba(201,31,40,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto px-6 text-center" style={{ maxWidth: 1000 }}>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{
            background: "rgba(201,31,40,0.15)",
            color: "#c91f28",
            border: "1px solid rgba(201,31,40,0.2)",
          }}
        >
          <Sparkles className="w-3.5 h-3.5" /> Trusted across Pakistan
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[1.02]"
        >
          The trusted POS <br className="hidden md:block" />
          partner built for{" "}
          <span className="text-gold-gradient">Pakistan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-base md:text-lg text-[#a8a8a8] max-w-2xl mx-auto"
        >
          Audit Pro powers restaurants, pharmacies, retail stores and supermarkets with a fast,
          reliable point-of-sale system — designed for how business really runs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-brand"
            style={{ background: "linear-gradient(135deg,#c91f28,#a01820)" }}
          >
            Request a demo <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ShieldCheck className="w-4 h-4" /> See features
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {[
            { n: "1,200+", l: "Active outlets" },
            { n: "4", l: "Industries" },
            { n: "99.9%", l: "Uptime" },
            { n: "24/7", l: "Support" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl p-6"
              style={{
                background: "#121212",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <div className="text-3xl font-bold text-gold-gradient font-display">{s.n}</div>
              <div className="text-xs mt-1 uppercase tracking-wider text-[#a8a8a8]">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
