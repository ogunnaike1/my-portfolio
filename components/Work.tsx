"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import MagneticButton from "./MagneticButton";
import { ShotChat, ShotRealEstate, ShotFintech } from "./ProjectShots";

interface Project {
  span: "full" | "lg" | "sm";
  meta: string[];
  title: string;
  copy: string;
  tags: string[];
  shot: ReactNode;
  shotPad?: string;
  url?: string;
}

const PROJECTS: Project[] = [
  {
    span: "full",
    meta: ["Featured", "·", "Solo project", "·", "2024"],
    title: "StoneChat — Real-Time Chat Application",
    copy: "A fully featured, production-deployed chat platform built end-to-end. Real-time messaging via Socket.io, JWT auth with session management, full admin panel with analytics, Cloudinary media uploads, and friend request system. Deployed on Render + Vercel.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Cloudinary", "Recharts"],
    shot: <ShotChat />,
    shotPad: "0",
    url: "https://stonechatapp.vercel.app",
  },
  {
    span: "lg",
    meta: ["Solo project", "·", "2024"],
    title: "Eldorado — Real Estate Platform",
    copy: "Modern, interactive real estate web app with property discovery, vendor onboarding, and advanced filtering. Framer Motion animations, role-based auth for agents and tenants, and REST API integration.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "REST API"],
    shot: <ShotRealEstate />,
    shotPad: "0",
  },
  {
    span: "sm",
    meta: ["Team project", "·", "2024"],
    title: "Poolside Africa — Digital Finance Platform",
    copy: "Fintech platform enabling community savings, crowdfunding, and reward-based tools for underserved Nigerian communities. Frontend development, REST API integration, and accessible UI for non-technical users.",
    tags: ["React", "Node.js", "REST APIs"],
    shot: <ShotFintech />,
    shotPad: "0",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const colSpan =
    project.span === "full"
      ? "lg:col-span-6"
      : project.span === "lg"
      ? "lg:col-span-4"
      : "lg:col-span-2";

  return (
    <Reveal delay={index * 80} className={`col-span-6 ${colSpan}`}>
      <motion.article
        className="glass group relative overflow-hidden rounded-[28px] p-0"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div
          className={`relative overflow-hidden ${project.span === "full" ? "aspect-[4/3] sm:aspect-[16/7] lg:aspect-[21/8]" : "aspect-[4/3] sm:aspect-[16/10]"}`}
          style={{
            borderBottom: "1px solid var(--line)",
            background: "var(--bg-soft)",
          }}
        >
          <motion.div
            className="absolute inset-0 grid place-items-center"
            style={{ padding: project.shotPad ?? "24px" }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {project.shot}
          </motion.div>
        </div>

        <div className="px-6 pb-7 pt-[22px]">
          <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.06em] text-fg-mute">
            {project.meta.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
          <h3
            className="m-0 mb-2.5 font-display font-medium leading-[1.2] tracking-[-0.018em] text-fg text-balance"
            style={{ fontSize: "clamp(18px, 1.8vw, 24px)" }}
          >
            {project.title}
          </h3>
          <p className="m-0 mb-[18px] max-w-[68ch] text-[15px] leading-[1.55] text-fg-soft">
            {project.copy}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full px-2.5 py-1 font-mono text-[11px] tracking-wide text-fg-mute"
                style={{ border: "1px solid var(--line)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.url ?? "#"}
          target={project.url ? "_blank" : undefined}
          rel={project.url ? "noopener noreferrer" : undefined}
          aria-label="Open project"
          className="absolute right-[18px] top-[18px] z-10 grid h-10 w-10 place-items-center rounded-full text-fg backdrop-blur-md transition-all group-hover:scale-105"
          style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              d="M7 17L17 7M9 7h8v8"
            />
          </svg>
        </a>
      </motion.article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work">
      <SectionHead
        index="02 — selected work"
        segments={[
          "Three projects shipped ",
          { text: "from concept to production.", className: "muted" },
        ]}
      />

      <div className="mx-auto grid max-w-page grid-cols-6 gap-4 sm:gap-6 px-[clamp(20px,4vw,56px)]">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <div className="mx-auto flex max-w-page justify-center px-[clamp(20px,4vw,56px)] pt-[50px]">
        <Reveal>
          <MagneticButton href="https://github.com/usmanogunnaike" className="btn-link">
            <span>View GitHub</span>
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
        </Reveal>
      </div>
    </section>
  );
}
