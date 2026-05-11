import { useState, useEffect } from "react";

export default function Navbar({ navItems, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navigate = (n) => {
    setMenuOpen(false);
    document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-3 transition-all duration-500 sm:px-8 md:px-14 ${
          scrolled
            ? "border-b border-accent/[0.08] bg-appbg/85 py-2.5 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,240,255,0.03)]"
            : "bg-transparent py-4"
        }`}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); navigate("Home"); }} className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/5 text-sm font-bold text-accent transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            U
          </div>
          <span className="hidden font-display text-base font-bold tracking-tight text-white sm:block">
            Uday <span className="text-accent">Kiran</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden list-none items-center gap-1 md:flex">
          {navItems.map((n, i) => (
            <li key={n}>
              <button
                className={`relative rounded-lg px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 ${
                  activeSection === i
                    ? "text-accent"
                    : "text-apptext/40 hover:text-apptext/80"
                }`}
                onClick={() => navigate(n)}
              >
                {n}
                {activeSection === i && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] w-5 rounded-full bg-accent transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-5 rounded-full bg-accent transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 rounded-full bg-accent transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-appbg/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="flex h-full flex-col items-center justify-center gap-3">
          {navItems.map((n, i) => (
            <button
              key={n}
              className={`rounded-xl px-10 py-3.5 text-lg font-medium transition-all duration-300 ${
                activeSection === i
                  ? "bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,240,255,0.08)]"
                  : "text-apptext/40 hover:text-apptext/70"
              }`}
              onClick={() => navigate(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}