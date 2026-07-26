import { MarqueeComponent } from "@/components/layout/components";
import {
  Testimonials,
  CommitmentSection,
  Contact,
  CtaBanner,
  FaqSection,
  HeroSection,
  ProcessSection,
  Services
} from "@/components/layout";

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
