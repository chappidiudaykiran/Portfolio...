import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) return;

    try {
      setSending(true);
      setError("");

      const response = await fetch("https://formsubmit.co/ajax/s210540@rguktsklm.ac.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Contact from ${name}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      const result = await response.json();
      if (!response.ok || result.success !== "true") {
        throw new Error("Failed to send message");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:s210540@rguktsklm.ac.in?subject=${subject}&body=${body}`;
      setError("Direct send failed, so your mail app was opened with the message draft.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 min-h-screen px-5 pb-0 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-14 md:pb-16">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-14 text-center">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-accent sm:text-xs sm:tracking-[0.35em]">// Let&apos;s Connect</div>
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-5xl">Get in Touch</h2>
          <div className="mx-auto mt-4 h-[3px] w-14 rounded bg-accent" />
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-center backdrop-blur-xl sm:p-8 md:p-12">
          {sent ? (
            <div className="py-5">
              <div className="mb-4 text-6xl">✅</div>
              <h3 className="text-2xl font-bold tracking-tight text-accent">Message Sent!</h3>
              <p className="mt-2.5 text-apptext/60">I&apos;ll respond within 24 hours.</p>
            </div>
          ) : (
            <>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:text-2xl">Open to Work & Collaborations</h3>
              <p className="mb-6 leading-7 text-apptext/80 sm:mb-8 sm:leading-8">
                Looking for internships, projects, or freelance opportunities. Let&apos;s build something great together!
              </p>
              <div className="mb-6 flex flex-wrap justify-center gap-2.5 sm:mb-8 sm:gap-3.5">
                <a className="break-all rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs tracking-wide text-apptext/90 transition hover:border-slate-500 hover:text-white sm:flex sm:items-center sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm" href="mailto:s210540@rguktsklm.ac.in">📧 s210540@rguktsklm.ac.in</a>
                <a className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs tracking-[0.03em] text-apptext/90 transition hover:border-slate-500 hover:text-white sm:flex sm:items-center sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm sm:tracking-wide" href="https://github.com/chappidiudaykiran" target="_blank" rel="noreferrer">🐙 GitHub</a>
                <a className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs tracking-[0.03em] text-apptext/90 transition hover:border-slate-500 hover:text-white sm:flex sm:items-center sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm sm:tracking-wide" href="tel:+918106115118">📞 +91-8106115118</a>
              </div>
              <form className="flex flex-col gap-3 text-left" onSubmit={handleSubmit}>
                <input
                  className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white outline-none placeholder:text-apptext/50 focus:border-accent"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white outline-none placeholder:text-apptext/50 focus:border-accent"
                  placeholder="Your Email"
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
                <p className="text-xs text-apptext/70">Enter any valid email so I can reply to you.</p>
                <textarea
                  className="resize-none rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white outline-none placeholder:text-apptext/50 focus:border-accent"
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
                <button type="submit" className="w-full rounded-md bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-accent/20 transition hover:bg-sky-400 sm:w-auto sm:self-end sm:px-8 sm:tracking-[0.2em]">
                  {sending ? "Sending..." : "Send Message →"}
                </button>
                {error ? <p className="text-sm text-red-400">{error}</p> : null}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}