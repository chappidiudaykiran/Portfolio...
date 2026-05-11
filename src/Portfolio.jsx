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
    const ids = NAV_ITEMS.map((n) => n.toLowerCase());
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(ids.indexOf(e.target.id));
        }),
      { threshold: 0.35 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Animate skill bars when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const bars = e.target.querySelectorAll(".skill-bar");
            bars.forEach((bar) => {
              const level = bar.style.getPropertyValue("--skill-level");
              if (level) {
                requestAnimationFrame(() => {
                  bar.style.width = level;
                });
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) observer.observe(skillsSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      {/* Global background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-appbg" />

        {/* Subtle radial glow at top */}
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[120px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      </div>

      <Navbar navItems={NAV_ITEMS} activeSection={activeSection} />
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