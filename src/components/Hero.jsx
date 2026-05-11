export default function Hero() {
  return (
    <section id="home" className="relative z-10 min-h-screen px-5 pb-0 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-14 md:pb-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-accent opacity-90 sm:mb-7 sm:px-5 sm:py-1.5 sm:text-xs sm:tracking-[0.3em]">
          ✦ Open to Opportunities
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-7xl">
          Chappidi <span className="text-accent">Uday Kiran</span>
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.14em] text-secondary sm:mt-4 sm:text-base sm:tracking-[0.25em] md:text-xl">Full-Stack MERN Developer</p>
        <p className="mx-auto mb-8 mt-5 max-w-2xl text-[15px] leading-7 text-apptext/85 sm:mb-9 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
          Building scalable web applications at the intersection of clean architecture and immersive UI.
          Passionate about React, Node.js, AI integration, and shipping production-ready products.
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-2.5 sm:mb-9 sm:gap-3">
          {["MERN Stack", "150+ LeetCode", "CGPA 8.84", "IIIT Srikakulam"].map(b => (
            <span key={b} className="rounded-full border border-violet-400/35 bg-violet-500/15 px-3 py-1.5 text-[11px] tracking-wide text-violet-200 sm:px-4 sm:text-xs sm:tracking-wider">
              {b}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            className="w-full rounded-md bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-accent/20 transition hover:bg-sky-400 sm:w-auto sm:px-8 sm:tracking-[0.2em]"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            View Projects
          </button>
          <button
            className="w-full rounded-md border border-slate-800 bg-slate-900/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-apptext/90 transition hover:border-slate-600 hover:bg-slate-800 sm:w-auto sm:px-8 sm:tracking-[0.2em]"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}