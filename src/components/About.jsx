import profileImage from "../Assets/Uday.jpg";
import { ABOUT } from "../data";

const colorMap = {
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
};

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Image */}
          <div className="flex justify-center">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-cyan-500/30 opacity-60 blur-lg transition-all duration-500 group-hover:opacity-80 group-hover:blur-xl" />
              <div className="relative h-60 w-60 overflow-hidden rounded-full border-2 border-white/10 p-[3px] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <img
                  src={profileImage}
                  alt="Chappidi Uday Kiran"
                  className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-tag">
              <span className="text-indigo-400">{"<"}</span> About Me <span className="text-indigo-400">{"/>"}</span>
            </div>
            <h2 className="section-title mb-5">
              Crafting Scalable Apps,{" "}
              <span className="gradient-text">One Commit at a Time</span>
            </h2>

            <div className="space-y-4">
              {ABOUT.bio.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted sm:text-base">{p}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ABOUT.stats.map((s) => {
                const c = colorMap[s.color] || colorMap.indigo;
                return (
                  <div key={s.label} className={`glass-card-hover p-4 text-center`}>
                    <div className={`font-display text-2xl font-bold ${c.text}`}>{s.value}</div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-muted/60">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}