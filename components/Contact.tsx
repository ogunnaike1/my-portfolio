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
    <section id="contact" className="relative px-[clamp(20px,4vw,56px)] pb-[80px] pt-[100px] sm:pb-[120px] sm:pt-[140px]">
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
          <div className="section-index mb-6">04 — contact</div>
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
                placeholder="Jane Smith"
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
                placeholder="jane@company.com"
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
              href="https://linkedin.com/in/usmanogunnaike"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://github.com/usmanogunnaike"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
