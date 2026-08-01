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
  throw new Error("");
  return (
    <main id="main-content">
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
    </main>
  );
}
