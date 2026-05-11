import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) return;

    try {
      setSending(true);
      setError("");
      const response = await fetch("https://formsubmit.co/ajax/udaykiran24689@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name, email, message,
          _subject: `Portfolio Contact from ${name}`,
          _captcha: "false",
          _template: "table",
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== "true") throw new Error("Failed");
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:udaykiran24689@gmail.com?subject=${subject}&body=${body}`;
      setError("Direct send failed — your mail app was opened with the message draft.");
    } finally {
      setSending(false);
    }
  };

  const contactLinks = [
    {
      label: "udaykiran24689@gmail.com",
      href: "mailto:udaykiran24689@gmail.com",
      icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>,
    },
    {
      label: "GitHub",
      href: "https://github.com/chappidiudaykiran",
      icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
      external: true,
    },
    {
      label: "+91-8106115118",
      href: "tel:+918106115118",
      icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" /></svg>,
    },
  ];

  const inputClass = "rounded-xl border border-accent/[0.08] bg-accent/[0.02] px-4 py-3.5 text-[14px] text-white outline-none placeholder:text-apptext/20 transition-all duration-300 focus:border-accent/30 focus:bg-accent/[0.03] focus:shadow-[0_0_25px_rgba(0,240,255,0.04)]";

  return (
    <section id="contact" ref={sectionRef} className="relative z-10 min-h-screen px-5 py-24 sm:px-6 sm:py-28 md:px-14 md:py-32">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="scroll-animate mb-16 text-center" data-animate>
          <span className="section-label">// Let&apos;s Connect</span>
          <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
          <div className="section-divider" />
        </div>

        {/* Card */}
        <div className="scroll-animate glass-card p-6 sm:p-8 md:p-12" data-animate style={{ transitionDelay: "0.1s" }}>
          {sent ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-4xl shadow-[0_0_30px_rgba(16,185,129,0.1)]">✅</div>
              <h3 className="font-display text-2xl font-bold gradient-text">Message Sent!</h3>
              <p className="mt-3 text-apptext/35">I&apos;ll respond within 24 hours.</p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-xl border border-accent/10 bg-accent/[0.03] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-accent/50 transition-all hover:border-accent/25 hover:text-accent">
                Send Another
              </button>
            </div>
          ) : (
            <>
              <div className="mb-3 text-center">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">Open to Work & Collaborations</h3>
                <p className="mt-3 text-[15px] leading-7 text-apptext/35">
                  Looking for internships, projects, or freelance opportunities. Let&apos;s build something great together!
                </p>
              </div>

              <div className="mb-8 flex flex-wrap justify-center gap-3">
                {contactLinks.map((c) => (
                  <a
                    key={c.label}
                    className="group inline-flex items-center gap-2 rounded-xl border border-accent/[0.06] bg-accent/[0.02] px-4 py-2.5 text-[12px] font-medium tracking-wide text-apptext/40 transition-all duration-300 hover:border-accent/20 hover:bg-accent/[0.04] hover:text-accent sm:text-[13px]"
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                  >
                    <span className="text-apptext/25 transition-colors group-hover:text-accent">{c.icon}</span>
                    {c.label}
                  </a>
                ))}
              </div>

              <form className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={inputClass} placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <input className={inputClass} placeholder="Your Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <textarea className={`${inputClass} resize-none`} rows={5} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full overflow-hidden rounded-xl px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-appbg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] disabled:opacity-50 sm:w-auto sm:self-end sm:px-10"
                >
                  <span className="absolute inset-0 bg-accent-gradient opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative font-display">{sending ? "Sending..." : "Send Message →"}</span>
                </button>
                {error && <p className="rounded-lg bg-red-500/10 border border-red-500/10 px-4 py-2 text-sm text-red-400">{error}</p>}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}