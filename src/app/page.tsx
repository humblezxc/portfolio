import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
    </main>
  );
}
