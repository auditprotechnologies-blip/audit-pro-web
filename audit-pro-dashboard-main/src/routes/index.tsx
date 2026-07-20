import { createFileRoute } from "@tanstack/react-router";
import { Noise } from "@/components/audit/Noise";
import { Nav } from "@/components/audit/Nav";
import { Hero } from "@/components/audit/Hero";
import { Features } from "@/components/audit/Features";
import { Industries } from "@/components/audit/Industries";
import { Pricing } from "@/components/audit/Pricing";
import { Faq } from "@/components/audit/Faq";
import { Contact } from "@/components/audit/Contact";
import { Footer } from "@/components/audit/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen" style={{ background: "#090909" }}>
      <Noise />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Features />
          <Industries />
          <Pricing />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
