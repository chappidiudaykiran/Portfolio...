import { useEffect, useState } from "react";
import { HERO } from "../data";

const EMAIL = HERO.email;

function CopyEmailButton({ className, children }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e) => {
    e.preventDefault();
    try { await navigator.clipboard.writeText(EMAIL); } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL; ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className={className} title={copied ? "Copied!" : `Copy ${EMAIL}`}>
      {copied ? (
        <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
      ) : children}
    </button>
  );
}

const GithubIcon = () => <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
const LinkedInIcon = () => <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const MailIcon = () => <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
const DownloadIcon = () => <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>;

const socialIcons = { GitHub: GithubIcon, LinkedIn: LinkedInIcon };

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = HERO.roles[roleIdx];
    let t;
    if (!deleting && text.length < role.length) t = setTimeout(() => setText(role.slice(0, text.length + 1)), 65);
    else if (!deleting && text.length === role.length) t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && text.length > 0) t = setTimeout(() => setText(role.slice(0, text.length - 1)), 35);
    else { setDeleting(false); setRoleIdx((p) => (p + 1) % HERO.roles.length); }
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative flex min-h-screen items-start justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32 lg:pb-20">
      {/* Ambient blurs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-4 left-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/[0.04] blur-3xl" />

      <div className="relative mx-auto w-full max-w-4xl text-center lg:text-left">
        {/* Status */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">{HERO.status}</span>
        </div>

        {/* Name */}
        <h1 className="mb-4 font-display text-5xl font-extrabold leading-none tracking-tight whitespace-nowrap sm:text-6xl lg:text-7xl">
          <span className="text-indigo-400">{HERO.name.split(" ").slice(0, 2).join(" ")} </span>
          <span className="text-white">{HERO.name.split(" ").slice(2).join(" ")}</span>
        </h1>

        {/* Typewriter */}
        <div className="mb-5 flex items-center justify-center gap-2 lg:justify-start">
          <span className="font-mono text-sm text-indigo-400/60">{">"}</span>
          <p className="font-mono text-base text-muted-light sm:text-lg">
            {text}<span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-indigo-400 align-middle" />
          </p>
        </div>

        {/* Tagline */}
        <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-muted lg:mx-0 lg:text-lg">
          {HERO.tagline}
        </p>

        {/* Highlight badges */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
          {HERO.highlights.map((h) => (
            <span key={h.text} className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#c8cfe8]">
              <span>{h.icon}</span>{h.text}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mb-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            <span>View Projects</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
          </button>
          <a
            href="/Chappidi_Uday_Kiran_Resume.pdf"
            download="Chappidi_Uday_Kiran_Resume.pdf"
            className="btn-secondary"
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-3 lg:justify-start">
          {HERO.socials.map((s) => {
            const Icon = socialIcons[s.label];
            return (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-muted transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300">
                <Icon />
              </a>
            );
          })}
          <CopyEmailButton className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-muted transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300">
            <MailIcon />
          </CopyEmailButton>
        </div>
      </div>
    </section>
  );
}