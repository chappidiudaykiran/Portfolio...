import { useState, useEffect } from "react";

const DownloadIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export default function Navbar({ navItems, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) setMenuOpen(false);
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navigate = (n) => {
    setMenuOpen(false);
    document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.06] bg-[#050508]/85 backdrop-blur-2xl py-3" : "bg-transparent py-5"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo — styled like "NP." in the reference */}
          <button onClick={() => navigate("Home")} className="group flex items-center gap-1">
            <span className="font-display text-xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">UK</span>
              <span className="text-cyan-400">.</span>
            </span>
          </button>

          {/* Desktop Nav Links — centered */}
          <ul className="hidden list-none items-center gap-1 md:flex">
            {navItems.map((n, i) => (
              <li key={n}>
                <button
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === i
                      ? "text-indigo-400"
                      : "text-muted hover:text-white"
                  }`}
                  onClick={() => navigate(n)}
                >
                  {n}
                  {activeSection === i && (
                    <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-indigo-500" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side — Resume button */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/Chappidi_Uday_Kiran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:from-indigo-600 hover:to-cyan-600 hover:shadow-indigo-500/40 active:scale-95"
            >
              <DownloadIcon />
              Resume
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-white/[0.06] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] w-5 rounded-full bg-white/60 transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 rounded-full bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 rounded-full bg-white/60 transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="flex h-full flex-col items-center justify-center gap-2">
          {navItems.map((n, i) => (
            <button
              key={n}
              className={`w-48 rounded-xl px-6 py-3.5 text-center text-lg font-medium transition-all duration-200 ${
                activeSection === i
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "text-muted hover:text-white"
              }`}
              onClick={() => navigate(n)}
            >
              {n}
            </button>
          ))}
          {/* Resume button in mobile menu */}
          <a
            href="/Chappidi_Uday_Kiran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-48 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3.5 text-center text-lg font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </div>
    </>
  );
}