export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Primary indigo glow — top left */}
      <div className="absolute -left-32 top-[15%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.07] blur-3xl" />

      {/* Cyan glow — top right */}
      <div className="absolute -right-24 top-[5%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-3xl" />

      {/* Violet glow — bottom center */}
      <div className="absolute bottom-[5%] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-500/[0.04] blur-3xl" />

      {/* Extra subtle indigo — mid right */}
      <div className="absolute right-[10%] top-[50%] h-[300px] w-[300px] rounded-full bg-indigo-500/[0.04] blur-3xl" />

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}
