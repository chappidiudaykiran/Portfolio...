import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack MERN Developer",
  "React.js Specialist",
  "AI-Powered Apps Builder",
  "Node.js Engineer",
];

const EMAIL = "udaykiran24689@gmail.com";

function CopyEmailButton({ className, children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button onClick={handleCopy} className={className} aria-label="Copy email" title={copied ? "Copied!" : `Copy ${EMAIL}`}>
      {copied ? (
        <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ) : (
        children
      )}
    </button>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 pb-8 pt-20 sm:px-6 md:px-14">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[100px] animate-float-slow" />
        <div className="absolute -bottom-20 -right-32 h-[350px] w-[350px] rounded-full bg-highlight/[0.05] blur-[90px] animate-float-slower" />
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/[0.04] blur-[70px] animate-float" />
      </div>

      <div className="relative mx-auto max-w-4xl w-full text-center">
        {/* Status badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.04] px-4 py-2 opacity-0 animate-fade-in sm:gap-2.5 sm:px-5 sm:py-2.5" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent sm:text-xs sm:tracking-[0.18em]">
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="mb-3 sm:mb-4 opacity-0 animate-fade-in-up font-display text-[2rem] font-bold tracking-tight leading-tight sm:text-5xl md:text-7xl" style={{ animationDelay: "0.4s" }}>
          <span className="text-white">Chappidi </span>
          <span className="gradient-text">Uday Kiran</span>
        </h1>

        {/* Typewriter */}
        <div className="mb-5 sm:mb-6 flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <span className="mr-2 text-accent/60 font-display text-sm sm:text-base">{">"}</span>
          <p className="font-display text-sm font-medium tracking-wide text-apptext/50 sm:text-lg md:text-xl">
            {displayed}
            <span className={`ml-0.5 inline-block w-[2px] h-4 sm:h-6 align-middle transition-opacity duration-100 ${showCursor ? "bg-accent" : "bg-transparent"}`} />
          </p>
        </div>

        {/* Description */}
        <p className="mx-auto mb-7 sm:mb-9 max-w-2xl text-[13px] leading-6 text-apptext/35 opacity-0 animate-fade-in-up sm:text-base sm:leading-8 md:text-lg" style={{ animationDelay: "0.8s" }}>
          Building scalable web applications at the intersection of clean architecture and immersive UI.
          Passionate about React, Node.js, AI integration, and shipping production-ready products.
        </p>

        {/* Badges */}
        <div className="mb-8 sm:mb-10 flex flex-wrap justify-center gap-2 sm:gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          {[
            { label: "MERN Stack", icon: "🚀" },
            { label: "Hackathon Winner", icon: "🏆" },
            { label: "150+ LeetCode", icon: "⚡" },
            { label: "CGPA 8.84", icon: "🎓" },
          ].map((b) => (
            <span
              key={b.label}
              className="group flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium tracking-wide text-apptext/50 transition-all duration-400 hover:border-accent/20 hover:text-apptext/80 sm:px-4 sm:py-2 sm:text-xs sm:gap-2"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-stretch justify-center gap-3 opacity-0 animate-fade-in-up sm:flex-row sm:gap-4" style={{ animationDelay: "1.2s" }}>
          <button
            className="group relative w-full overflow-hidden rounded-xl px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-appbg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] sm:w-auto sm:px-10 sm:py-3.5 sm:text-xs sm:tracking-[0.18em]"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            <span className="absolute inset-0 bg-accent-gradient opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative font-display">View Projects</span>
          </button>
          <button
            className="w-full rounded-xl border border-accent/15 bg-accent/[0.03] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-accent/70 transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.06] hover:text-accent sm:w-auto sm:px-10 sm:py-3.5 sm:text-xs sm:tracking-[0.18em]"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            <span className="font-display">Contact Me</span>
          </button>
        </div>

        {/* Social links */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
          {[
            { label: "GitHub", href: "https://github.com/chappidiudaykiran", icon: (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            )},
            { label: "LinkedIn", href: "https://www.linkedin.com/in/chappidiudaykiran/", icon: (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            )},
            { label: "LeetCode", href: "https://leetcode.com/u/s210540/", icon: (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
            )},
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/[0.08] bg-accent/[0.02] text-apptext/30 transition-all duration-300 hover:border-accent/25 hover:bg-accent/[0.06] hover:text-accent hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,240,255,0.08)]"
            >
              {s.icon}
            </a>
          ))}
          {/* Email — Copy to clipboard */}
          <CopyEmailButton className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/[0.08] bg-accent/[0.02] text-apptext/30 transition-all duration-300 hover:border-accent/25 hover:bg-accent/[0.06] hover:text-accent hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,240,255,0.08)]">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
          </CopyEmailButton>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in hidden sm:block" style={{ animationDelay: "2s", animationFillMode: "forwards" }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-apptext/20">Scroll</span>
            <div className="h-8 w-[1px] rounded-full bg-gradient-to-b from-accent/40 to-transparent animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}