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
import PersonalCard from "@/components/layout/components/personal-card";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <MarqueeComponent />
      <PersonalCard />
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
