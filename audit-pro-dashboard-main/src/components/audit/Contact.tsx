import { motion } from "motion/react";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto px-6" style={{ maxWidth: 1550 }}>
        <SectionHeading
          eyebrow="Contact"
          title="Talk to our team of POS"
          accent="Developers"
          subtitle="Book a free walkthrough. We'll tailor a demo to your business type."
          icon={<MessageCircle className="w-3.5 h-3.5" />}
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, rgba(18,18,18,0.9), rgba(18,18,18,0.6))",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Ali Raza" />
              <Field label="Business name" placeholder="Karachi Kitchen" />
              <Field label="Phone" placeholder="+92 300 1234567" />
              <Field label="Email" placeholder="you@business.pk" type="email" />
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider text-[#a8a8a8] mb-2 block">
                Business type
              </label>
              <div className="flex flex-wrap gap-2">
                {["Restaurant", "Pharmacy", "Retail", "Supermarket"].map((t) => (
                  <label
                    key={t}
                    className="cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <input type="radio" name="type" className="sr-only peer" />
                    {t}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider text-[#a8a8a8] mb-2 block">
                Tell us about your business
              </label>
              <textarea
                rows={4}
                placeholder="Number of outlets, terminals, anything specific..."
                className="w-full rounded-xl px-4 py-3 text-sm resize-none focus:outline-none"
                style={{
                  background: "#121212",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "white",
                }}
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg,#c91f28,#a01820)",
                boxShadow: "0 4px 20px rgba(201,31,40,0.3)",
              }}
            >
              Send request <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <ContactCard
              icon={<MessageCircle className="w-5 h-5" style={{ color: "#18c964" }} />}
              iconBg="rgba(24,201,100,0.15)"
              gradient="linear-gradient(135deg, rgba(24,201,100,0.08), rgba(18,18,18,0.9))"
              title="WhatsApp us"
              value="+92 300 123 4567"
              cta="Chat now"
              accent="#18c964"
              href="https://wa.me/923001234567"
            />
            <ContactCard
              icon={<Phone className="w-5 h-5" style={{ color: "#c91f28" }} />}
              iconBg="rgba(201,31,40,0.15)"
              gradient="linear-gradient(135deg, rgba(18,18,18,0.9), rgba(18,18,18,0.6))"
              title="Call sales"
              value="+92 21 111 288 348"
              cta="Mon–Sat, 9am–8pm"
              accent="#c91f28"
              href="tel:+922111288348"
            />
            <ContactCard
              icon={<Mail className="w-5 h-5" style={{ color: "#f39a00" }} />}
              iconBg="rgba(243,154,0,0.15)"
              gradient="linear-gradient(135deg, rgba(18,18,18,0.9), rgba(18,18,18,0.6))"
              title="Email"
              value="hello@auditpro.pk"
              cta="Reply within 2 hours"
              accent="#f39a00"
              href="mailto:hello@auditpro.pk"
            />
            <div
              className="rounded-2xl p-5 flex items-center gap-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <MapPin className="w-5 h-5 text-[#a8a8a8]" />
              <div className="text-sm">
                <div className="font-medium">Head office</div>
                <div className="text-[#a8a8a8] text-xs mt-0.5">
                  Clifton, Karachi · Gulberg, Lahore · Blue Area, Islamabad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-[#a8a8a8] mb-2 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
        style={{
          background: "#121212",
          border: "1px solid rgba(255,255,255,0.06)",
          color: "white",
        }}
      />
    </div>
  );
}

function ContactCard({
  icon,
  iconBg,
  gradient,
  title,
  value,
  cta,
  accent,
  href,
}: {
  icon: React.ReactNode;
  iconBg: string;
  gradient: string;
  title: string;
  value: string;
  cta: string;
  accent: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl p-5 block glass-nav"
      style={{
        background: gradient,
        border: `1px solid ${accent}25`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: iconBg }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-xs uppercase tracking-wider text-[#a8a8a8]">{title}</div>
          <div className="text-sm font-semibold mt-0.5">{value}</div>
          <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: accent }}>
            {cta}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
