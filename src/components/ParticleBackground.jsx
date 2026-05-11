export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Large ambient gradient blobs - matching reference site aesthetic */}
      <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.07] blur-3xl animate-float" />
      <div className="absolute -right-24 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-3xl animate-float-slow" />
      <div className="absolute -bottom-4 left-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/[0.04] blur-3xl animate-float-fast" />

      {/* Secondary smaller blobs */}
      <div className="absolute right-1/4 top-[60%] h-[300px] w-[300px] rounded-full bg-indigo-900/[0.08] blur-3xl animate-float-slow" />
      <div className="absolute left-[10%] top-[80%] h-[400px] w-[400px] rounded-full bg-cyan-900/[0.06] blur-3xl animate-float" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
