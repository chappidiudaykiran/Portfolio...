import profileImage from "../Assets/Uday.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  const sectionRef = useScrollAnimation();

  const stats = [
    { value: "6+", label: "Projects", color: "#00f0ff" },
    { value: "150+", label: "LeetCode", color: "#10b981" },
    { value: "8.84", label: "CGPA", color: "#7c3aed" },
    { value: "2027", label: "Graduating", color: "#f59e0b" },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative z-10 min-h-screen px-5 py-24 sm:px-6 sm:py-28 md:px-14 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        {/* Profile Image */}
        <div className="scroll-animate flex items-center justify-center" data-animate>
          <div className="group relative">
            {/* Animated glow ring */}
            <div className="absolute -inset-2 rounded-full opacity-30 blur-lg transition-all duration-700 group-hover:opacity-60 group-hover:blur-xl animate-spin-slow" style={{ background: "conic-gradient(from 0deg, #00f0ff, #10b981, #7c3aed, #00f0ff)" }} />
            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border-2 border-accent/10 p-[3px] sm:h-[280px] sm:w-[280px]">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-appbg" aria-label="Uday Kiran avatar">
                <img
                  src={profileImage}
                  alt="Chappidi Uday Kiran"
                  className="h-full w-full rounded-full object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="scroll-animate" data-animate>
            <span className="section-label">// About Me</span>
            <h2 className="section-title mb-5">
              Crafting Scalable Apps,<br />
              <span className="gradient-text">One Commit at a Time</span>
            </h2>
          </div>

          <div className="scroll-animate stagger-2" data-animate>
            <p className="mb-4 text-[15px] leading-7 text-apptext/40 sm:text-base sm:leading-8">
              I&apos;m a Full Stack MERN Developer pursuing B.Tech in CSE at RGUKT IIIT Srikakulam (2023–2027),
              with a CGPA of 8.84. I specialize in building robust, scalable web apps with React, Node.js, Express, and MongoDB.
            </p>
            <p className="text-[15px] leading-7 text-apptext/40 sm:text-base sm:leading-8">
              From AI-powered educational platforms to developer matching apps, I love turning ideas into
              polished, production-ready products. Winner at Aignite 3.0 GenAI Hackathon with 150+ LeetCode problems solved.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`scroll-animate stagger-${i + 3} glass-card-hover p-4 text-center group`}
                data-animate
              >
                <div className="font-display text-2xl font-bold tracking-tight" style={{ color: s.color }}>{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-apptext/30">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}