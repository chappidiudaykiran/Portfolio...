import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/PortfolioFooter";
import ParticleBackground from "./components/ParticleBackground";
import { NAV_ITEMS } from "./data";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.toLowerCase());
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(ids.indexOf(e.target.id));
        }),
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar navItems={NAV_ITEMS} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}