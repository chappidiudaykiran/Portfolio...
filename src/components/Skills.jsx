import { SKILL_GROUPS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 min-h-screen px-5 pb-0 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-14 md:pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neon sm:text-xs sm:tracking-[0.35em]">// Tech Stack</div>
          <h2 className="font-orbitron text-2xl font-black text-white sm:text-3xl md:text-5xl">Skills & Tools</h2>
          <div className="mx-auto mt-4 h-[3px] w-14 rounded bg-gradient-to-r from-neon to-neon2 shadow-neon" />
        </div>
        <div className="flex flex-col gap-9 text-center">
          {SKILL_GROUPS.map(({ cat, skills }) => (
            <div key={cat} className="mx-auto w-full">
              <div className="mb-4 font-orbitron text-[11px] uppercase tracking-[0.18em] text-neon2 sm:text-xs sm:tracking-[0.3em]">{cat}</div>
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {skills.map(s => (
                  <div key={s.name} className="rounded-xl border border-cyan-200/15 bg-cyan-300/[0.04] p-3 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40">
                    <div className="mb-2 text-2xl">{s.icon}</div>
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white">{s.name}</div>
                    <div className="mt-2 h-0.5 overflow-hidden rounded bg-white/10">
                      <div className="h-full rounded" style={{ width: `${s.level}%`, background: `linear-gradient(90deg, ${s.color}, #7b2fff)`, boxShadow: `0 0 6px ${s.color}` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}