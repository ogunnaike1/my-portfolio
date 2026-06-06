"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Usman delivered the entire platform ahead of schedule. The attention to detail on the UI — animations, mobile responsiveness, the little micro-interactions — genuinely impressed our team and our clients noticed immediately.",
    name: "Eldorado CEO",
    role: "Founder & CEO",
    company: "Eldorado Limited",
    initials: "EL",
  },
  {
    quote:
      "Working with Usman was seamless. He asked the right questions upfront, kept communication tight throughout, and the final product was exactly what we envisioned — clean code, fast load times, and zero issues on launch.",
    name: "Skin Essential Plus CEO",
    role: "Founder & CEO",
    company: "Skin Essential Plus",
    initials: "SE",
  },
  {
    quote:
      "The real-time features he built were rock solid. No dropped messages, instant delivery, and the admin dashboard gave us exactly the visibility we needed. Would hire again without hesitation.",
    name: "StoneChat CEO",
    role: "Founder & CEO",
    company: "StoneChat",
    initials: "SC",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden
      style={{ color: "var(--primary)", opacity: 0.4 }}
    >
      <path
        d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.38667 1.68 8.48 0.106667 12.48 0L13.44 2.24C10.72 2.77333 8.69333 3.97333 7.36 5.84C6.08 7.70667 5.44 9.6 5.44 11.52H10.88V24H0ZM18.56 24V14.4C18.56 10.4 19.6267 7.06667 21.76 4.4C23.9467 1.68 27.04 0.106667 31.04 0L32 2.24C29.28 2.77333 27.2533 3.97333 25.92 5.84C24.64 7.70667 24 9.6 24 11.52H29.44V24H18.56Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <SectionHead
        index="04 — testimonials"
        segments={[
          "What clients ",
          { text: "say about working with me.", className: "muted" },
        ]}
      />

      <div className="mx-auto max-w-page px-[clamp(20px,4vw,56px)] pb-[72px] sm:pb-[100px] lg:pb-[140px]">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <motion.div
                className="glass flex h-full flex-col rounded-[24px] p-7"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <QuoteIcon />

                <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.7] text-fg-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-7 flex items-center gap-3.5" style={{ borderTop: "1px solid var(--line)", paddingTop: "20px" }}>
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-[13px] font-semibold"
                    style={{ background: "color-mix(in oklab, var(--primary) 18%, transparent)", color: "var(--primary)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display text-[14px] font-semibold tracking-tight text-fg">
                      {t.name}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.07em] text-fg-mute">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
