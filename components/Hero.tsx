"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import MagneticButton from "./MagneticButton";

const spring = { type: "spring" as const, stiffness: 70, damping: 20 };

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}

function WordMask({
  text,
  delay = 0,
  className,
  as: Tag = "span",
}: {
  text: string;
  delay?: number;
  className?: string;
  as?: "span" | "div";
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: i < words.length - 1 ? "0.28em" : 0 }}
        >
          <motion.span
            className="inline-block"
            initial={reduced ? false : { y: "108%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...spring, delay: delay + i * 0.06 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Profile image — modern animated frame
// ---------------------------------------------------------------------------

const FLOATING_BADGES = [
  {
    side: "right" as const,
    style: { top: "12%", right: "-22px" },
    delay: 0.65,
    content: (
      <div className="flex items-center gap-2.5">
        <span
          className="relative h-2 w-2 rounded-full"
          style={{ background: "var(--ok)" }}
        >
          <span
            className="absolute inset-0 animate-ping rounded-full opacity-75"
            style={{ background: "var(--ok)" }}
          />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-fg-mute whitespace-nowrap">
          Available Q3 2026
        </span>
      </div>
    ),
  },
  {
    side: "left" as const,
    style: { bottom: "22%", left: "-22px" },
    delay: 0.8,
    content: (
      <div>
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.09em] text-fg-mute">
          Stack
        </div>
        <div className="flex gap-1.5">
          {["React", "Node", "TS"].map((t) => (
            <span
              key={t}
              className="rounded-md px-2 py-[3px] font-mono text-[11px] font-semibold text-fg"
              style={{
                background: "color-mix(in oklab, var(--primary) 14%, transparent)",
                border: "1px solid var(--glass-border)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    side: "right" as const,
    style: { bottom: "12%", right: "-18px" },
    delay: 0.92,
    content: (
      <div className="text-center">
        <div
          className="font-display text-[26px] font-bold leading-none tracking-tight text-fg"
        >
          9+
        </div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.09em] text-fg-mute">
          Yrs exp.
        </div>
      </div>
    ),
  },
];

function ProfileImage() {
  const reduced = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center py-10">

      {/* Slow-spinning outer dashed ring */}
      <motion.div
        className="pointer-events-none absolute rounded-[36px]"
        style={{
          inset: "-20px",
          border: "1px dashed color-mix(in oklab, var(--primary) 30%, transparent)",
        }}
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      />

      {/* Static inner ring */}
      <motion.div
        className="pointer-events-none absolute rounded-[30px]"
        style={{
          inset: "-8px",
          border: "1px solid var(--glass-border)",
        }}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.45 }}
      />

      {/* Entrance + continuous float wrapper */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...spring, delay: 0.28 }}
      >
        <motion.div
          animate={reduced ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        >

          {/* Image frame */}
          <motion.div
            className="relative overflow-hidden rounded-[24px]"
            style={{
              width: 340,
              height: 420,
              border: "1px solid var(--glass-border)",
              boxShadow:
                "0 40px 90px -20px rgba(0,0,0,0.28), 0 0 0 1px var(--glass-inner), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            {/* Image */}
            <img
              src="https://res.cloudinary.com/dhmqhless/image/upload/v1779306228/Gemini_Generated_Image_5au89p5au89p5au8_qlfh2g.png"
              alt="Usman Ogunnaike"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/profile.svg";
              }}
            />

            {/* Bottom fade */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--bg) 55%, transparent), transparent)",
              }}
            />

            {/* Top-left name tag */}
            <div className="absolute left-4 top-4">
              <div
                className="rounded-xl px-3 py-2 backdrop-blur-md"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                }}
              >
                <div className="font-display text-[13px] font-semibold tracking-tight text-fg">
                  Usman Ogunnaike
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-fg-mute">
                  Full-Stack JS Developer
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          {FLOATING_BADGES.map((badge, i) => (
            <motion.div
              key={i}
              className="glass absolute rounded-xl px-3.5 py-2.5"
              style={badge.style}
              initial={{ opacity: 0, x: badge.side === "right" ? 18 : -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: badge.delay }}
            >
              {badge.content}
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

      {/* Decorative corner dots */}
      {[
        { top: "4px", left: "4px" },
        { top: "4px", right: "4px" },
        { bottom: "4px", left: "4px" },
        { bottom: "4px", right: "4px" },
      ].map((pos, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full"
          style={{ ...pos, background: "var(--primary)", opacity: 0.5 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ ...spring, delay: 0.7 + i * 0.07 }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-[clamp(20px,4vw,56px)] pb-16 pt-[88px] sm:pb-20 sm:pt-[100px]">

      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -right-60 -top-60 h-[700px] w-[700px] rounded-full opacity-[0.16]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 38%, transparent), transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--fg) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-page">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] xl:gap-20">

          {/* ── LEFT: Copy ── */}
          <div>

            {/* Eyebrow */}
            <FadeUp delay={0.05} className="mb-6 sm:mb-9">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:gap-2.5 sm:px-3.5 sm:py-2"
                style={{ border: "1px solid var(--line)", background: "var(--glass-bg)" }}
              >
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-full"
                  style={{
                    background: "var(--ok)",
                    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ok) 22%, transparent)",
                  }}
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-fg-mute sm:text-[11.5px] sm:tracking-[0.12em]">
                  Full-Stack JS Developer · Open to Work
                </span>
              </div>
            </FadeUp>

            {/* Headline */}
            <h1
              className="m-0 mb-6 font-display font-semibold leading-[1.0] tracking-[-0.03em] sm:mb-8"
              style={{ fontSize: "clamp(36px, 5.6vw, 80px)" }}
            >
              <WordMask text="Building software" delay={0.12} as="div" className="block mb-1.5" />
              <WordMask
                text="that doesn't feel like software."
                delay={0.32}
                as="div"
                className="block italic font-normal text-fg-mute"
              />
            </h1>

            {/* Sub */}
            <FadeUp delay={0.58} className="mb-8 sm:mb-10">
              <p
                className="m-0 max-w-[480px] leading-[1.7] text-fg-soft"
                style={{ fontSize: "clamp(16px, 1.3vw, 18.5px)" }}
              >
                I&apos;m Usman — a Full-Stack JavaScript developer and B.Eng graduate combining
                an engineering foundation with hands-on experience building real-time,
                production-grade web applications.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.72} className="mb-10 sm:mb-16">
              <div className="flex flex-wrap gap-3">
                <MagneticButton href="#work" className="btn-primary" strength={0.25}>
                  <motion.span
                    className="inline-flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <span>View Projects</span>
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden>
                      <path
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8h10M9 4l4 4-4 4"
                      />
                    </svg>
                  </motion.span>
                </MagneticButton>
                <MagneticButton href="#contact" className="btn-ghost" strength={0.25}>
                  <motion.span
                    className="inline-flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <span>Get in Touch</span>
                  </motion.span>
                </MagneticButton>
              </div>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.88}>
              <dl
                className="flex flex-wrap gap-x-10 gap-y-5"
                style={{ borderTop: "1px solid var(--line)", paddingTop: "28px" }}
              >
                {[
                  ["3+", "Projects shipped"],
                  ["B.Eng", "EEE · 2:1"],
                  ["Lagos", "Remote-first"],
                ].map(([val, label]) => (
                  <div key={label} className="m-0">
                    <dt className="font-display text-[22px] font-semibold tracking-tight text-fg">
                      {val}
                    </dt>
                    <dd className="m-0 mt-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-fg-mute">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>

          {/* ── RIGHT: Profile image — visible on lg+ only ── */}
          <div className="hidden lg:flex items-center justify-center">
            <ProfileImage />
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        className="absolute bottom-9 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-mute"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span>Scroll</span>
        <span
          className="relative block h-9 w-px overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--fg-mute), transparent)" }}
        >
          <span
            className="absolute inset-x-0 top-0 block h-3 animate-scroll-dot"
            style={{ background: "var(--primary-deep)" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
