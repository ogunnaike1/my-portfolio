"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Fragment, type ReactNode } from "react";

interface Segment {
  text: string;
  className?: string;
}

interface WordRevealProps {
  /**
   * Sequence of text segments (plain or styled). Whitespace inside each segment is preserved.
   * Each non-whitespace token becomes a separate animated word.
   */
  segments: (string | Segment)[];
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: (custom: { stagger: number; delay: number }) => ({
    transition: { staggerChildren: custom.stagger, delayChildren: custom.delay / 1000 },
  }),
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease },
  },
};

export default function WordReveal({
  segments,
  className,
  stagger = 0.06,
  delay = 0,
  as = "h1",
}: WordRevealProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.h1;

  const renderSegment = (seg: string | Segment, idx: number) => {
    const text = typeof seg === "string" ? seg : seg.text;
    const cls = typeof seg === "string" ? undefined : seg.className;
    const parts = text.split(/(\s+)/);
    const nodes: ReactNode[] = parts.map((part, i) => {
      if (/^\s+$/.test(part)) return <Fragment key={`s-${idx}-${i}`}>{part}</Fragment>;
      if (part.length === 0) return null;
      return (
        <span
          key={`w-${idx}-${i}`}
          className="inline-block overflow-hidden align-top"
        >
          <motion.span
            className="inline-block"
            variants={reduced ? undefined : word}
            initial={reduced ? false : "hidden"}
          >
            {part}
          </motion.span>
        </span>
      );
    });
    return (
      <span key={`seg-${idx}`} className={cls}>
        {nodes}
      </span>
    );
  };

  return (
    <Tag
      className={className}
      style={{ perspective: 800 }}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      custom={{ stagger, delay }}
    >
      {segments.map(renderSegment)}
    </Tag>
  );
}
