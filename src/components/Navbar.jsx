export default function Navbar({ navItems }) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-slate-950/75 px-3 py-2.5 backdrop-blur-xl sm:px-5 sm:py-3 md:px-14 md:py-4">
      <div className="hidden text-sm font-black tracking-tight text-accent sm:block md:text-lg">Uday Kiran</div>
      <ul className="flex w-full list-none justify-center gap-1.5 overflow-x-auto whitespace-nowrap sm:w-auto sm:justify-end sm:gap-4 md:gap-8">
        {navItems.map(n => (
          <li key={n}>
            <a
              className="px-1 text-[10px] uppercase tracking-[0.1em] text-apptext/90 transition hover:text-accent sm:text-xs sm:tracking-[0.18em]"
              href={`#${n.toLowerCase()}`}
              onClick={e => {
                e.preventDefault();
                document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {n}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}