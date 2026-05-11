import { ACHIEVEMENTS } from "../data";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Achievements() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="achievements" ref={sectionRef} className="relative z-10 min-h-screen px-5 py-24 sm:px-6 sm:py-28 md:px-14 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section header */}
        <div className="scroll-animate mb-16 text-center" data-animate>
          <span className="section-label">// Milestones</span>
          <h2 className="section-title">Achievements & Certs</h2>
          <div className="section-divider" />
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={a.title}
              className="scroll-animate group glass-card-hover flex items-start gap-4 p-5 sm:p-6"
              data-animate
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon with glow background */}
              <div className="relative shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                  {a.icon}
                </div>
                <div className="absolute inset-0 rounded-xl bg-accent/5 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-1 font-display text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent-light">
                  {a.title}
                </h3>
                <p className="text-[13px] leading-6 text-apptext/45 sm:text-sm">
                  {a.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}