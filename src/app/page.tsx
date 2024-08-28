import Image from "next/image";
import Hero from '../components/hero-home'
import About from "@/components/about";
import Projects from "@/components/projects";
import Work from "@/components/work";
import Contact from "@/components/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <>
        <Hero />
        <About />
        <Projects />
        <Work />
        <Contact />
        <Footer />
      </>
    </>
  );
}
