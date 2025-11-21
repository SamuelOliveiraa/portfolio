import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "./about";
import Contact from "./contact";
import Experiences from "./experience";
import HeroSection from "./hero";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
	return (
		<main className="w-full bg-gray flex-1 min-h-screen">
			<Header />
			<HeroSection />
			<About />
			<Skills />
			<Experiences />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
