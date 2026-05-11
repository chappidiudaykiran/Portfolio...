export default function ScrollDots({ navItems, activeSection }) {
  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex">
      {navItems.map((n, i) => (
        <button
          key={n}
          className="group flex items-center gap-3"
          onClick={() => document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" })}
          aria-label={`Navigate to ${n}`}
        >
          <span className="rounded-md bg-appbg/80 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-apptext/40 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
            {n}
          </span>
          <div
            className={`rounded-full transition-all duration-500 ${
              activeSection === i
                ? "h-2.5 w-2.5 bg-accent shadow-[0_0_12px_rgba(0,240,255,0.6)]"
                : "h-1.5 w-1.5 bg-accent/20 group-hover:bg-accent/40 group-hover:scale-125"
            }`}
          />
        </button>
      ))}
    </div>
  );
}