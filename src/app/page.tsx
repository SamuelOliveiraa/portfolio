import { MarqueeComponent } from "@/components/layout/components";
import {
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
      <HeroSection />
      <MarqueeComponent />
      <Services />
      <About />
      <ProcessSection />
      <CtaBanner />
      {/*<Testimonials />*/}
      <FaqSection />
      <CommitmentSection />
      <Contact />
    </>
  );
}
