"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end product builds — from database schema and REST/WebSocket API to polished, performant frontend. I own the full delivery so you deal with one person, not a hand-off chain.",
    deliverables: ["Next.js / React apps", "Node.js + Express APIs", "MongoDB / Supabase", "Auth & role management", "Deployment (Vercel / Render)"],
  },
  {
    number: "02",
    title: "E-Commerce & Booking Platforms",
    description:
      "Custom storefronts and booking systems tailored to your brand — not a template. Payment integration, product management, appointment flows, and admin dashboards built to your exact requirements.",
    deliverables: ["Cart & checkout flows", "Paystack / Monnify integration", "Booking & scheduling", "Discount & promo codes", "Admin dashboard"],
  },
  {
    number: "03",
    title: "Real-Time Features & APIs",
    description:
      "Live chat, notifications, dashboards, and collaborative tools powered by WebSockets. I build the infrastructure so your users experience instant, reliable updates without page refreshes.",
    deliverables: ["Socket.IO integration", "Live messaging & notifications", "Real-time dashboards", "REST & WebSocket APIs", "Analytics pipelines"],
  },
  {
    number: "04",
    title: "UI / UX Implementation",
    description:
      "Pixel-precise, animated interfaces that feel as good as they look. I translate Figma designs (or my own design judgement) into accessible, responsive, production-ready code.",
    deliverables: ["Framer Motion animations", "Responsive layouts", "Design system implementation", "Performance optimisation", "Cross-browser compatibility"],
  },
];

export default function Services() {
  return (
    <section id="services">
      <SectionHead
        index="03 — services"
        segments={[
          "What I can ",
          { text: "build for you.", className: "muted" },
        ]}
      />

      <div className="mx-auto max-w-page px-[clamp(20px,4vw,56px)] pb-[72px] sm:pb-[100px] lg:pb-[140px]">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={i * 80}>
              <motion.div
                className="glass group flex h-full flex-col rounded-[24px] p-7 sm:p-8"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {/* Number */}
                <div
                  className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full font-mono text-[11px] font-semibold"
                  style={{
                    background: "color-mix(in oklab, var(--primary) 14%, transparent)",
                    color: "var(--primary-deep)",
                    border: "1px solid color-mix(in oklab, var(--primary) 25%, transparent)",
                  }}
                >
                  {service.number}
                </div>

                {/* Title */}
                <h3
                  className="m-0 mb-3 font-display font-semibold leading-[1.2] tracking-[-0.018em] text-fg"
                  style={{ fontSize: "clamp(17px, 1.5vw, 21px)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="m-0 mb-6 flex-1 text-[15px] leading-[1.65] text-fg-soft">
                  {service.description}
                </p>

                {/* Deliverables */}
                <ul className="m-0 list-none p-0 space-y-2" style={{ borderTop: "1px solid var(--line)", paddingTop: "20px" }}>
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-mono text-[12px] text-fg-mute">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full"
                        style={{ background: "var(--primary)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
