export default function ScrollDots({ navItems, activeSection }) {
  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2.5 md:flex">
      {navItems.map((n, i) => (
        <div
          key={n}
          className={`h-1.5 w-1.5 cursor-pointer rounded-full transition ${activeSection === i ? "scale-150 bg-accent shadow-[0_0_8px_theme(colors.accent)]" : "bg-slate-700 hover:bg-slate-500"}`}
          onClick={() => document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" })}
          title={n}
        />
      ))}
    </div>
  );
}