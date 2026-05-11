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
      { threshold: 0.35 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Animate skill bars when skills section is visible
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
      {/* 3D Particle Background */}
      <ParticleBackground />

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 -z-[5] pointer-events-none bg-appbg/60" />

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