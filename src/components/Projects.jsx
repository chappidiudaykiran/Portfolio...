import { PROJECTS } from "../data";

const colorMap = {
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", gradient: "from-indigo-500 to-violet-500" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", gradient: "from-cyan-500 to-blue-500" },
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", gradient: "from-violet-500 to-pink-500" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", gradient: "from-amber-500 to-orange-500" },
  rose: { text: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20", gradient: "from-rose-500 to-pink-500" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", gradient: "from-emerald-500 to-cyan-500" },
};

const GithubSmall = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

const ArrowIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
);

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="section-tag justify-center">
            <span className="text-indigo-400">{"<"}</span> Portfolio <span className="text-indigo-400">{"/>"}</span>
          </div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle mx-auto">Production-ready applications built with modern web technologies.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p) => {
            const c = colorMap[p.color] || colorMap.indigo;
            return (
              <div key={p.title} className="group glass-card-hover flex flex-col overflow-hidden">
                {/* Color bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${c.gradient} opacity-60 transition-opacity group-hover:opacity-100`} />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      {p.featured && (
                        <span className={`mb-2 inline-flex items-center gap-1.5 rounded-md border ${c.border} ${c.bg} px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${c.text}`}>
                          ★ Featured
                        </span>
                      )}
                      <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-indigo-300">
                        {p.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-muted/60">{p.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted">{p.desc}</p>

                  {/* Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-lg ${c.bg} border ${c.border} px-3 py-1.5 text-xs font-semibold ${c.text} transition-all hover:border-opacity-60`}>
                        Live <ArrowIcon />
                      </a>
                    )}
                    {p.repos ? p.repos.map((r) => (
                      <a key={r.label} href={r.url} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted transition-all hover:border-white/20 hover:text-white">
                        <GithubSmall /> {r.label}
                      </a>
                    )) : p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted transition-all hover:border-white/20 hover:text-white">
                        <GithubSmall /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}