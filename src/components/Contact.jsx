import { useState } from "react";
import { HERO } from "../data";

const EMAIL = HERO.email;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    try { await navigator.clipboard.writeText(EMAIL); } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL; ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim(), email = form.email.trim(), message = form.message.trim();
    if (!name || !email || !message) return;
    try {
      setSending(true); setError("");
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message, _subject: `Portfolio: ${name}`, _captcha: "false", _template: "table" }),
      });
      const data = await res.json();
      if (!res.ok || data.success !== "true") throw new Error();
      setSent(true); setForm({ name: "", email: "", message: "" });
    } catch {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio: ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      setError("Opened your mail app as fallback.");
    } finally { setSending(false); }
  };

  const inputCls = "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-muted/50 transition-all duration-200 focus:border-indigo-500/60 focus:bg-white/[0.06]";

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-14 text-center">
          <div className="section-tag justify-center">
            <span className="text-indigo-400">{"<"}</span> Contact <span className="text-indigo-400">{"/>"}</span>
          </div>
          <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle mx-auto">Looking for internships, projects, or freelance work. Let&apos;s connect!</p>
        </div>

        <div className="glass-card p-6 sm:p-8">
          {sent ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-3xl">✅</div>
              <h3 className="font-display text-xl font-bold gradient-text">Message Sent!</h3>
              <p className="mt-2 text-sm text-muted">I&apos;ll respond within 24 hours.</p>
              <button onClick={() => setSent(false)} className="btn-secondary mt-6 text-xs">Send Another</button>
            </div>
          ) : (
            <>
              {/* Quick contact */}
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
                <button onClick={copyEmail} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-muted transition-all hover:border-indigo-500/40 hover:text-indigo-300 sm:w-auto" title="Click to copy">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  {emailCopied ? <span className="text-emerald-400">Copied!</span> : EMAIL}
                </button>
                <a href="tel:+918106115118" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-muted transition-all hover:border-indigo-500/40 hover:text-indigo-300 sm:w-auto">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  +91-8106115118
                </a>
              </div>

              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted/40">or send a message</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={inputCls} placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <input className={inputCls} placeholder="Your Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <textarea className={`${inputCls} resize-none`} rows={5} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                <button type="submit" disabled={sending} className="btn-primary w-full justify-center sm:w-auto sm:self-end disabled:opacity-50">
                  {sending ? "Sending..." : "Send Message"}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                </button>
                {error && <p className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-4 py-2 text-xs text-amber-300">{error}</p>}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}