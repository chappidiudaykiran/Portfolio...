import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack MERN Developer",
  "React.js Specialist",
  "AI-Powered Apps Builder",
  "Node.js Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-5 pb-8 pt-20 sm:px-6 md:px-14">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/[0.07] blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-20 -right-40 h-[400px] w-[400px] rounded-full bg-purple-500/[0.05] blur-[100px] animate-float-slower" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-secondary/[0.04] blur-[80px] animate-float" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent sm:text-xs sm:tracking-[0.25em]">
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="mb-3 opacity-0 animate-fade-in-up font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl" style={{ animationDelay: "0.4s" }}>
          Chappidi{" "}
          <span className="gradient-text">Uday Kiran</span>
        </h1>

        {/* Typewriter role */}
        <div className="mb-6 flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="font-display text-base font-medium tracking-wide text-apptext/60 sm:text-lg md:text-xl">
            {displayed}
            <span className={`ml-0.5 inline-block w-[2px] h-5 sm:h-6 align-middle transition-opacity duration-100 ${showCursor ? "bg-accent" : "bg-transparent"}`} />
          </p>
        </div>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-[15px] leading-7 text-apptext/50 opacity-0 animate-fade-in-up sm:text-base sm:leading-8 md:text-lg md:leading-9" style={{ animationDelay: "0.8s" }}>
          Building scalable web applications at the intersection of clean architecture and immersive UI.
          Passionate about React, Node.js, AI integration, and shipping production-ready products.
        </p>

        {/* Badges */}
        <div className="mb-10 flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          {[
            { label: "MERN Stack", icon: "🚀" },
            { label: "150+ LeetCode", icon: "⚡" },
            { label: "CGPA 8.84", icon: "🎓" },
            { label: "IIIT Srikakulam", icon: "🏛️" },
          ].map((b) => (
            <span
              key={b.label}
              className="group flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[11px] font-medium tracking-wide text-apptext/70 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-accent sm:text-xs"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-stretch justify-center gap-3 opacity-0 animate-fade-in-up sm:flex-row sm:gap-4" style={{ animationDelay: "1.2s" }}>
          <button
            className="group relative w-full overflow-hidden rounded-xl px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 sm:w-auto sm:px-10"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            <span className="absolute inset-0 bg-accent-gradient opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative">View Projects</span>
          </button>
          <button
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-apptext/80 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white sm:w-auto sm:px-10"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
          {[
            { label: "GitHub", href: "https://github.com/chappidiudaykiran", icon: (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
            )},
            { label: "LinkedIn", href: "https://www.linkedin.com/in/chappidiudaykiran/", icon: (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            )},
            { label: "Email", href: "mailto:s210540@rguktsklm.ac.in", icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
            )},
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-apptext/40 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "2s", animationFillMode: "forwards" }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-apptext/30">Scroll</span>
            <div className="h-8 w-[1.5px] rounded-full bg-gradient-to-b from-accent/50 to-transparent animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}