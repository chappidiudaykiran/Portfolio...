import { PROJECTS } from "../data";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Projects() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 min-h-screen px-5 py-24 sm:px-6 sm:py-28 md:px-14 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="scroll-animate mb-16 text-center" data-animate>
          <span className="section-label">// Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <div
              key={p.num}
              className={`scroll-animate group relative glass-card-hover overflow-hidden p-6 sm:p-7 ${
                p.featured ? "md:col-span-1 lg:col-span-1" : ""
              }`}
              data-animate
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Top gradient border */}
              <div
                className="absolute left-0 right-0 top-0 h-[2px] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: p.featured
                    ? "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)"
                    : "linear-gradient(90deg, #6366f1, #818cf8)",
                }}
              />

              {/* Featured badge */}
              {p.featured && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">Featured</span>
                </div>
              )}

              {/* Project number */}
              <div className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-apptext/30">
                PROJECT {p.num}
              </div>

              {/* Title */}
              <h3 className="mb-1.5 font-display text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent-light">
                {p.title}
              </h3>

              {/* Subtitle */}
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-apptext/40 sm:text-xs">
                {p.subtitle}
              </div>

              {/* Description */}
              <p className="mb-5 text-[13px] leading-6 text-apptext/45 sm:text-sm sm:leading-7">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[10px] font-medium tracking-wide text-accent/80 transition-all duration-300 hover:border-accent/20 hover:bg-accent/5 sm:text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.04] pt-5">
                {/* Live demo */}
                {p.live && (
                  <a
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent/20 hover:gap-2.5"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>🚀</span> Live Demo
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                )}

                {/* Multiple repos */}
                {p.repos
                  ? p.repos.map((r) => (
                      <a
                        key={r.label}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-apptext/50 transition-all duration-300 hover:border-white/[0.12] hover:text-apptext/80"
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        {r.label}
                      </a>
                    ))
                  : p.repo && (
                      <a
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-apptext/50 transition-all duration-300 hover:border-white/[0.12] hover:text-apptext/80"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
              </div>

              {/* Hover glow effect */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/[0.03] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}