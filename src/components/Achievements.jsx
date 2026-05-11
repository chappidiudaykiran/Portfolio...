import { ACHIEVEMENTS } from "../data";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Achievements() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="achievements" ref={sectionRef} className="relative z-10 min-h-screen px-4 py-20 sm:px-6 sm:py-28 md:px-14 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="scroll-animate mb-12 sm:mb-16 text-center" data-animate>
          <span className="section-label">// Milestones</span>
          <h2 className="section-title">Achievements & <span className="gradient-text">Certs</span></h2>
          <div className="section-divider" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={a.title}
              className="scroll-animate group glass-card-hover neon-border flex items-start gap-3 sm:gap-4 p-4 sm:p-6"
              data-animate
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon */}
              <div className="relative shrink-0">
                <div
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${a.color}12`, boxShadow: `0 0 0 1px ${a.color}15` }}
                >
                  {a.icon}
                </div>
                <div
                  className="absolute inset-0 rounded-xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{ backgroundColor: `${a.color}15` }}
                />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="mb-0.5 sm:mb-1 font-display text-sm sm:text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent-light">
                  {a.title}
                </h3>
                <p className="text-[12px] leading-5 text-apptext/35 sm:text-sm sm:leading-6">
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