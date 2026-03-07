import { useEffect, useRef, useState } from "react";
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
import { useThreeScene } from "./hooks/useThreeScene";

export default function Portfolio() {
  const canvasRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useThreeScene(canvasRef);

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
    <div className="relative overflow-x-hidden">
      <canvas id="canvas-bg" ref={canvasRef} className="fixed inset-0 -z-10 h-screen w-screen pointer-events-none" />
      <div className="fixed inset-0 -z-[9] pointer-events-none bg-gradient-to-b from-appbg/58 via-appbg/48 to-appbg/62" />
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