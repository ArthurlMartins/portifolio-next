import Image from "next/image";
import Hero from '../components/hero'
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/ui/footer";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </>
    </>
  );
}
