import { HERO } from "../data";

const EMAIL = HERO.email;
const GITHUB = "https://github.com/chappidiudaykiran";
const LINKEDIN = "https://www.linkedin.com/in/ukch/";
const LOCATION = "Hyderabad, India";

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-tag justify-center">Contact</div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Open to full-time roles, freelance work, and interesting conversations about backend systems.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left Column - Contact Cards */}
          <div className="space-y-4 lg:col-span-1">
            {/* Email Card */}
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=udaykiran24689@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-cyan-400">Email</p>
                <p className="truncate text-sm font-medium text-white group-hover:text-cyan-300">{EMAIL}</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.08]"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-white group-hover:bg-white/10">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white/60">GitHub</p>
                <p className="truncate text-sm font-medium text-white">github.com/chappidiudaykiran</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-blue-400">LinkedIn</p>
                <p className="truncate text-sm font-medium text-white group-hover:text-blue-300">www.linkedin.com/in/ukch/</p>
              </div>
            </a>
          </div>

          {/* Right Column - Call to Action */}
          <div className="flex flex-col justify-center gap-8 lg:col-span-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Got a project in mind?
              </h3>
              <p className="mt-4 text-base text-muted">
                Whether it&apos;s a backend challenge, a data pipeline that needs scale, or just exploring what&apos;s possible — I&apos;m happy to chat. Drop me an email or connect on LinkedIn.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=udaykiran24689@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:from-indigo-600 hover:to-cyan-600 hover:shadow-indigo-500/40 active:scale-95"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send me an email
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            <p className="text-xs text-muted/60">Usually respond within 24 hours · Not currently available</p>
          </div>
        </div>
      </div>
    </section>
  );
}