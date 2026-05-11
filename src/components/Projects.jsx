import { PROJECTS } from "../data";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Projects() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 min-h-screen px-4 py-20 sm:px-6 sm:py-28 md:px-14 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="scroll-animate mb-12 sm:mb-16 text-center" data-animate>
          <span className="section-label">// Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <div
              key={p.num}
              className="scroll-animate group relative glass-card-hover neon-border overflow-hidden p-5 sm:p-7"
              data-animate
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Top gradient border */}
              <div
                className="absolute left-0 right-0 top-0 h-[2px] opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color || "#00f0ff"}, transparent)` }}
              />

              {/* Featured badge */}
              {p.featured && (
                <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.06] px-2.5 py-1 sm:px-3">
                  <span className="h-1.5 w-1.5 rounded-full animate-pulse-glow" style={{ backgroundColor: p.color }} />
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-accent">Featured</span>
                </div>
              )}

              {/* Number */}
              <div className="mb-2 sm:mb-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-apptext/20">
                PROJECT {p.num}
              </div>

              {/* Title */}
              <h3 className="mb-1 sm:mb-1.5 font-display text-lg sm:text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent-light">
                {p.title}
              </h3>

              {/* Subtitle */}
              <div className="mb-2 sm:mb-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.12em] sm:tracking-[0.15em] text-apptext/30">
                {p.subtitle}
              </div>

              {/* Description */}
              <p className="mb-4 sm:mb-5 text-[12px] leading-5 text-apptext/35 sm:text-sm sm:leading-7">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="mb-5 sm:mb-6 flex flex-wrap gap-1.5 sm:gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-accent/[0.08] bg-accent/[0.03] px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium tracking-wide text-accent/60 sm:px-3 sm:py-1 sm:text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-t border-white/[0.04] pt-4 sm:pt-5">
                {p.live && (
                  <a
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] transition-all duration-300 hover:gap-2.5 sm:px-3.5 sm:py-2"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: p.color || "#00f0ff", background: `${p.color || "#00f0ff"}10` }}
                  >
                    <span>🚀</span> Live
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                )}

                {p.repos
                  ? p.repos.map((r) => (
                      <a
                        key={r.label}
                        className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg border border-white/[0.05] px-2.5 py-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.08em] sm:tracking-[0.1em] text-apptext/35 transition-all duration-300 hover:border-accent/15 hover:text-apptext/60 sm:px-3 sm:py-2"
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                        {r.label}
                      </a>
                    ))
                  : p.repo && (
                      <a
                        className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg border border-white/[0.05] px-2.5 py-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.08em] sm:tracking-[0.1em] text-apptext/35 transition-all duration-300 hover:border-accent/15 hover:text-apptext/60 sm:px-3 sm:py-2"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                        GitHub
                      </a>
                    )}
              </div>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{ backgroundColor: `${p.color || "#00f0ff"}08` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}