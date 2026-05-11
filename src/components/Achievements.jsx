import { ACHIEVEMENTS } from "../data";

const colorMap = {
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <div className="section-tag justify-center">
            <span className="text-indigo-400">{"<"}</span> Milestones <span className="text-indigo-400">{"/>"}</span>
          </div>
          <h2 className="section-title">Achievements & <span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle mx-auto">Recognition and continuous learning milestones.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => {
            const c = colorMap[a.color] || colorMap.indigo;
            return (
              <div key={a.title} className="group glass-card-hover flex items-start gap-4 p-5">
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${c.bg} border ${c.border} text-2xl transition-transform duration-300 group-hover:scale-110`}>
                  {a.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold text-white transition-colors group-hover:text-indigo-300 sm:text-base">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{a.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}