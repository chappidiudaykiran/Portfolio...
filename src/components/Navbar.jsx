import { useState, useEffect } from "react";

export default function Navbar({ navItems, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
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
            ? "border-b border-white/[0.06] bg-appbg/80 py-2.5 backdrop-blur-2xl shadow-lg shadow-black/20"
            : "bg-transparent py-4"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); navigate("Home"); }}
          className="group flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent transition-colors group-hover:bg-accent/20">
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
                className={`relative rounded-lg px-3 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 ${
                  activeSection === i
                    ? "text-accent"
                    : "text-apptext/60 hover:text-apptext"
                }`}
                onClick={() => navigate(n)}
              >
                {n}
                {activeSection === i && (
                  <span className="absolute bottom-0.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-appbg/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2">
          {navItems.map((n, i) => (
            <button
              key={n}
              className={`rounded-xl px-8 py-3 text-lg font-medium transition-all duration-300 ${
                activeSection === i
                  ? "bg-accent/10 text-accent"
                  : "text-apptext/60 hover:text-apptext"
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