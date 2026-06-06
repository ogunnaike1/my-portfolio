"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import MagneticButton from "./MagneticButton";

const CHIPS = ["Full-Stack", "Frontend", "Backend", "Contract"];

export default function Contact() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sent, setSent] = useState(false);

  const toggleChip = (c: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-[clamp(20px,4vw,56px)] pb-[60px] pt-[72px] sm:pb-[80px] sm:pt-[100px] lg:pb-[120px] lg:pt-[140px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-20 bottom-0 z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 20%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[820px] text-center">
        <Reveal>
          <div className="section-index mb-6">05 — contact</div>
        </Reveal>

        <WordReveal
          as="h2"
          className="section-title m-0 mb-6 leading-[1.02]"
          segments={[
            "Let's build something ",
            { text: "great together.", className: "muted" },
          ]}
        />

        <Reveal delay={120}>
          <p className="mx-auto m-0 mb-8 sm:mb-12 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.65] text-fg-soft">
            I&apos;m open to full-stack roles, frontend contracts, and remote-first opportunities
            — Nigeria &amp; globally. Whether you need a complete product built or a strong
            engineer on your team, let&apos;s talk.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <form
            onSubmit={onSubmit}
            className="glass grid grid-cols-1 gap-3.5 p-7 text-left sm:grid-cols-2"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="cname" className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-mute">
                Your name
              </label>
              <input
                id="cname"
                type="text"
                autoComplete="name"
                placeholder="Usman Ogunnaike"
                className="field-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cmail" className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-mute">
                Email
              </label>
              <input
                id="cmail"
                type="email"
                autoComplete="email"
                placeholder="usman@gmail.com"
                className="field-input"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="cmsg" className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-mute">
                Tell me about the role or project
              </label>
              <textarea
                id="cmsg"
                rows={4}
                placeholder="What you're building, stack, team size, timeline…"
                className="field-input resize-y"
              />
            </div>

            <div className="col-span-1 mt-2 flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
              <div className="flex flex-wrap gap-1.5">
                {CHIPS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleChip(c)}
                    className={`chip ${selected.has(c) ? "is-on" : ""}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <MagneticButton type="submit" className="btn-primary">
                <span>Send</span>
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    d="M5 12h13M13 6l6 6-6 6"
                  />
                </svg>
              </MagneticButton>
            </div>

            <motion.div
              aria-live="polite"
              className="col-span-1 font-mono text-[12px] sm:col-span-2"
              style={{ color: "var(--ok)" }}
              animate={{ opacity: sent ? 1 : 0, y: sent ? 0 : 4 }}
              transition={{ duration: 0.5 }}
            >
              Thanks — I&apos;ll reply within 24 hours.
            </motion.div>
          </form>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 font-mono text-[11px] sm:text-[13px] text-fg-mute">
            <a
              href="mailto:ogunnaikeusman17@gmail.com"
              className="text-fg"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              ogunnaikeusman17@gmail.com
            </a>
            <span>·</span>
            <a
              href="tel:+2348131561562"
              className="text-fg"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              +234 813 156 1562
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/usman-ogunnaike-2932b9225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://github.com/ogunnaike1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              GitHub
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/234813156162"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors"
              style={{ border: "1px solid var(--line)", background: "var(--glass-bg)", color: "var(--fg-soft)" }}
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="https://twitter.com/your_handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors"
              style={{ border: "1px solid var(--line)", background: "var(--glass-bg)", color: "var(--fg-soft)" }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/your_handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors"
              style={{ border: "1px solid var(--line)", background: "var(--glass-bg)", color: "var(--fg-soft)" }}
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
