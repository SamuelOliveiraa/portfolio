import { MarqueeComponent } from "@/components/layout/components";
import {
  Testimonials,
  CommitmentSection,
  Contact,
  CtaBanner,
  FaqSection,
  HeroSection,
  ProcessSection,
  About,
  Services
} from "@/components/layout";

export default function Home() {
  return (
    <>
      <div id="root" className="sr-only" />
      <HeroSection />
      <MarqueeComponent />
      <Services />
      <About />
      <ProcessSection />
      <Testimonials />
      <FaqSection />
      <CommitmentSection />
      <Contact />
      <CtaBanner />
    </>
  );
}
