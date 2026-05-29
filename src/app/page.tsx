import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import SmartGoals from "@/components/SmartGoals";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Research />
      <Projects />
      <SmartGoals />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
