import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 min-h-screen px-5 pb-0 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-14 md:pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-accent sm:text-xs sm:tracking-[0.35em]">// Portfolio</div>
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-5xl">Featured Projects</h2>
          <div className="mx-auto mt-4 h-[3px] w-14 rounded bg-accent" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          {PROJECTS.map(p => (
            <div key={p.num} className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-slate-700 sm:p-8">
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-accent opacity-60" />
              <div className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-accent sm:tracking-[0.3em]">Project {p.num}</div>
              <div className="mb-2 text-lg font-bold tracking-tight text-white">{p.title}</div>
              <div className="mb-3 text-xs uppercase tracking-[0.12em] text-secondary sm:tracking-[0.2em]">{p.subtitle}</div>
              <div className="mb-4 text-sm leading-6 text-apptext/82 sm:leading-7">{p.desc}</div>
              <div className="mb-5 flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="rounded-full border border-slate-700 bg-slate-800/50 px-2.5 py-1 text-[11px] tracking-wide text-accent">{t}</span>)}
              </div>
              <div className="flex flex-wrap gap-4">
                <a className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-accent transition hover:text-sky-400 hover:gap-2.5" href={p.live} target="_blank" rel="noreferrer">🚀 Live Demo →</a>
                {p.repo ? (
                  <a className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-apptext/78 transition hover:text-apptext" href={p.repo} target="_blank" rel="noreferrer">🐙 GitHub</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}