"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const BAR_GROUPS: { label: string; bars: { name: string; pct: number }[] }[] = [
  {
    label: "Languages & Frameworks",
    bars: [
      { name: "JavaScript (ES6+)", pct: 95 },
      { name: "React.js", pct: 90 },
      { name: "Node.js / Express", pct: 87 },
      { name: "TypeScript", pct: 75 },
      { name: "HTML5 / CSS3", pct: 92 },
    ],
  },
  {
    label: "Data & Infrastructure",
    bars: [
      { name: "MongoDB / Mongoose", pct: 84 },
      { name: "REST APIs", pct: 88 },
      { name: "Supabase", pct: 72 },
      { name: "Socket.io (WebSockets)", pct: 80 },
      { name: "Auth (JWT / bcrypt)", pct: 82 },
    ],
  },
];

interface TagItem {
  text: string;
  large?: boolean;
  float: "a" | "b" | "c" | "d";
  pos: { top?: string; left?: string; right?: string };
}

const TAGS: TagItem[] = [
  { text: "React.js",     large: true,  float: "a", pos: { top: "3%",  left: "6%" } },
  { text: "Node.js",      large: true,  float: "b", pos: { top: "3%",  right: "8%" } },
  { text: "TypeScript",   float: "c",   pos: { top: "5%",  left: "40%" } },
  { text: "MongoDB",      float: "d",   pos: { top: "20%", left: "16%" } },
  { text: "Supabase",     large: true,  float: "a", pos: { top: "20%", right: "18%" } },
  { text: "Express.js",   float: "b",   pos: { top: "36%", left: "4%" } },
  { text: "Socket.io",    large: true,  float: "c", pos: { top: "36%", left: "38%" } },
  { text: "GraphQL",      float: "d",   pos: { top: "38%", right: "6%" } },
  { text: "Tailwind CSS", large: true,  float: "a", pos: { top: "54%", left: "18%" } },
  { text: "Next.js",      float: "b",   pos: { top: "54%", right: "22%" } },
  { text: "JWT / Auth",   float: "c",   pos: { top: "70%", left: "6%" } },
  { text: "Vercel",       large: true,  float: "d", pos: { top: "70%", left: "38%" } },
  { text: "Cloudinary",   float: "a",   pos: { top: "68%", right: "8%" } },
  { text: "Git / GitHub", float: "b",   pos: { top: "84%", left: "16%" } },
  { text: "Vite",         float: "c",   pos: { top: "86%", left: "50%" } },
  { text: "Framer Motion",float: "d",   pos: { top: "82%", right: "10%" } },
];

const easing = [0.16, 1, 0.3, 1] as const;

function Bars({ group }: { group: (typeof BAR_GROUPS)[number] }) {
  return (
    <ul className="m-0 list-none p-0">
      {group.bars.map((b) => (
        <li
          key={b.name}
          className="grid grid-cols-[160px_1fr] items-center gap-4 py-3.5 font-display text-[15px] font-medium tracking-tight"
          style={{ borderBottom: "1px solid var(--line)" }}
        >
          <span>{b.name}</span>
          <span
            className="relative block h-1 overflow-hidden rounded"
            style={{ background: "color-mix(in oklab, var(--fg) 8%, transparent)" }}
          >
            <motion.span
              className="absolute inset-y-0 left-0 block rounded"
              style={{
                background: "linear-gradient(90deg, var(--primary-deep), var(--primary))",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${b.pct}%` }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: easing }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <SectionHead
        index="03 — craft"
        segments={[
          "Tools I reach for, ",
          { text: "and the ones I keep sharpening.", className: "muted" },
        ]}
      />

      <div className="mx-auto grid max-w-page items-start gap-[60px] px-[clamp(20px,4vw,56px)] lg:grid-cols-[1fr_1.2fr]">
        <div>
          {BAR_GROUPS.map((g, i) => (
            <Reveal key={g.label} delay={i * 120} className="mb-10">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.08em] text-fg-mute">
                {g.label}
              </div>
              <Bars group={g} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="relative min-h-[540px] py-[30px] lg:min-h-[480px]" aria-label="Tools and ecosystem">
            {TAGS.map((t) => (
              <motion.span
                key={t.text}
                className={`tag animate-float-${t.float} ${t.large ? "tag-lg" : ""}`}
                style={t.pos}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: easing, delay: Math.random() * 0.4 }}
              >
                {t.text}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
