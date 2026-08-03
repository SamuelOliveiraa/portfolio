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
import Projects from "@/components/layout/projects";

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
