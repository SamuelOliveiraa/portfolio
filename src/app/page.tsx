import MarqueeComponent from "@/components/common/marquee-component";
import { ThemeToggle } from "@/components/common/theme-toggle";
import HeroSection from "@/components/layout/hero-section";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <HeroSection />
      <MarqueeComponent />
    </div>
  );
}
