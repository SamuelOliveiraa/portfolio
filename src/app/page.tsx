import MarqueeComponent from "@/components/layout/components/marquee-component";
import CommitmentSection from "@/components/layout/commitment-section";
import Contact from "@/components/layout/contact";
import CtaBanner from "@/components/layout/cta-banner";
import FaqSection from "@/components/layout/faq-section";
import HeroSection from "@/components/layout/hero-section";
import ProcessSection from "@/components/layout/process-section";
import Services from "@/components/layout/services";
import { Testimonials } from "@/components/layout/testimonials";

export default function Home() {
  return (
    <>
      <div id="root" className="sr-only" />
      <HeroSection />
      <MarqueeComponent />
      <Services />
      <ProcessSection />
      <FaqSection />
      <CommitmentSection />
      <Testimonials />
      <Contact />
      <CtaBanner />
    </>
  );
}
