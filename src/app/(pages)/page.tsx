import { MarqueeComponent } from "@/components/layout/components";
import {
  About,
  Contact,
  Services,
  Projects,
  CtaBanner,
  FaqSection,
  HeroSection,
  ProcessSection,
  CommitmentSection
} from "@/components/layout";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <MarqueeComponent />
      <Services />
      <About />
      <Projects />
      <ProcessSection />
      <CtaBanner />
      {/*<Testimonials />*/}
      <FaqSection />
      <CommitmentSection />
      <Contact />
    </main>
  );
}
