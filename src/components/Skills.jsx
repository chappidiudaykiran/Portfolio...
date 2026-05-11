import { SKILL_GROUPS } from "../data";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Skills() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="skills" ref={sectionRef} className="relative z-10 min-h-screen px-5 py-24 sm:px-6 sm:py-28 md:px-14 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="scroll-animate mb-16 text-center" data-animate>
          <span className="section-label">// Tech Stack</span>
          <h2 className="section-title">Skills & <span className="gradient-text">Tools</span></h2>
          <div className="section-divider" />
        </div>

        {/* Skill groups */}
        <div className="flex flex-col gap-12">
          {SKILL_GROUPS.map(({ cat, icon, skills }, gi) => (
            <div key={cat} className="scroll-animate" data-animate style={{ transitionDelay: `${gi * 0.1}s` }}>
              {/* Category */}
              <div className="mb-6 flex items-center justify-center gap-2.5">
                <span className="text-lg">{icon}</span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-apptext/35 sm:text-[13px]">
                  {cat}
                </span>
              </div>

              {/* Cards grid */}
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {skills.map((s, si) => (
                  <div
                    key={s.name}
                    className="scroll-animate group glass-card-hover neon-border p-4 text-center"
                    data-animate
                    style={{ transitionDelay: `${gi * 0.1 + si * 0.04}s` }}
                  >
                    <div className="mb-2.5 text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">
                      {s.icon}
                    </div>
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 sm:text-xs">
                      {s.name}
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/[0.04]">
                      <div
                        className="skill-bar h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: "0%",
                          background: `linear-gradient(90deg, ${s.color}, ${s.color}66)`,
                          "--skill-level": `${s.level}%`,
                          boxShadow: `0 0 8px ${s.color}40`,
                        }}
                      />
                    </div>
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ boxShadow: `inset 0 0 25px ${s.color}08, 0 0 15px ${s.color}05` }}
                    />
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