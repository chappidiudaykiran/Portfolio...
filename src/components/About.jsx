import profileImage from "../Assets/Uday.jpg";

export default function About() {
  return (
    <section id="about" className="relative z-10 min-h-screen px-5 pb-0 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-14 md:pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 sm:gap-12 md:grid-cols-[1fr_1.3fr]">
        <div className="flex items-center justify-center">
          <div className="h-[220px] w-[220px] rounded-full bg-slate-800 p-[2px] shadow-xl shadow-black/40 sm:h-[270px] sm:w-[270px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-appbg overflow-hidden" aria-label="Uday Kiran avatar">
              <img src={profileImage} alt="Chappidi Uday Kiran" className="h-full w-full rounded-full object-cover grayscale-[20%] transition hover:grayscale-0 duration-500" />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-accent sm:text-xs sm:tracking-[0.35em]">// About Me</div>
          <h3 className="mb-4 text-xl font-bold tracking-tight leading-snug text-white sm:text-2xl">
            Crafting Scalable Apps,<br />One Commit at a Time
          </h3>
          <p className="mb-4 text-[15px] leading-7 text-apptext/85 sm:text-base sm:leading-8">
            I&apos;m a Full Stack MERN Developer pursuing B.Tech in CSE at RGUKT IIIT Srikakulam (2023–2027),
            with a CGPA of 8.84. I specialize in building robust, scalable web apps with React, Node.js, Express, and MongoDB.
          </p>
          <p className="text-[15px] leading-7 text-apptext/85 sm:text-base sm:leading-8">
            From AI-powered movie platforms to full-featured YouTube clones, I love turning ideas into
            polished, production-ready products. Strong DSA foundation with 150+ LeetCode problems solved.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
            {["3+|Projects", "150+|LeetCode", "8.84|CGPA", "2027|Graduating"].map(v => {
              const [n, l] = v.split("|");
              return (
                <div key={l} className="rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-3 text-center backdrop-blur-xl">
                  <div className="text-2xl font-black tracking-tight text-accent">{n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-apptext/50">{l}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}