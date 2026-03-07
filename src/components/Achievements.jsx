import { ACHIEVEMENTS } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 min-h-screen px-5 pb-0 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-14 md:pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-neon sm:text-xs sm:tracking-[0.35em]">// Milestones</div>
          <h2 className="font-orbitron text-2xl font-black text-white sm:text-3xl md:text-5xl">Achievements & Certs</h2>
          <div className="mx-auto mt-4 h-[3px] w-14 rounded bg-gradient-to-r from-neon to-neon2 shadow-neon" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {ACHIEVEMENTS.map(a => (
            <div key={a.title} className="flex items-start gap-4 rounded-xl border border-cyan-200/15 bg-cyan-300/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 sm:p-6">
              <div className="shrink-0 text-3xl">{a.icon}</div>
              <div>
                <div className="mb-1 font-orbitron text-base font-bold text-neon">{a.title}</div>
                <div className="text-sm leading-6 text-apptext/85">{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}