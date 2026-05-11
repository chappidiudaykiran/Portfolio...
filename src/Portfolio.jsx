import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ScrollDots from "./components/ScrollDots";
import PortfolioFooter from "./components/PortfolioFooter";
import { NAV_ITEMS } from "./data";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.toLowerCase());
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(ids.indexOf(e.target.id)); }),
      { threshold: 0.35 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen selection:bg-accent/30 selection:text-accent">
      <div className="fixed inset-0 -z-10 bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.1)_0%,rgba(2,6,23,1)_100%)] pointer-events-none" />
      <Navbar navItems={NAV_ITEMS} />
      <ScrollDots navItems={NAV_ITEMS} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <PortfolioFooter />
    </div>
  );
}