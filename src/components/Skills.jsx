import { SKILL_CATEGORIES } from "../data";

const colorMap = {
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", pill: "border-indigo-500/20 bg-indigo-500/10 text-indigo-300" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", pill: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", pill: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300" },
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", pill: "border-violet-500/20 bg-violet-500/10 text-violet-300" },
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <div className="section-tag justify-center">
            <span className="text-indigo-400">{"<"}</span> Tech Stack <span className="text-indigo-400">{"/>"}</span>
          </div>
          <h2 className="section-title">Skills & <span className="gradient-text">Tools</span></h2>
          <p className="section-subtitle mx-auto">Technologies I work with to build production-ready applications.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((cat) => {
            const c = colorMap[cat.color] || colorMap.indigo;
            return (
              <div key={cat.title} className="glass-card-hover p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.bg} border ${c.border} text-lg`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-display text-lg font-bold ${c.text}`}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className={`rounded-md border px-2.5 py-1 font-mono text-xs ${c.pill}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}