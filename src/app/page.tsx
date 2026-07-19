import MarqueeComponent from "@/components/common/marquee-component";
import CtaBanner from "@/components/layout/cta-banner";
import FaqSection from "@/components/layout/faq-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import HeroSection from "@/components/layout/hero-section";
import Services from "@/components/layout/services";

export default function Home() {
  return (
    <>
      <div id="root" className="sr-only" />
      <Header />
      <HeroSection />
      <MarqueeComponent />
      <Services />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </>
  );
}
