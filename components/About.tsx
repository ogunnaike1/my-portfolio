import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const PANELS = [
  {
    k: "Now",
    v: "Building full-stack web apps with React, Node.js, and MongoDB — real-time features, clean APIs, production deployments.",
  },
  {
    k: "Experience",
    v: "Software Dev Intern · SQI College of ICT (2024–2025) · Full-stack projects under senior mentorship.",
  },
  {
    k: "Education",
    v: "B.Eng Electrical & Electronics Engineering (2:1) · Olabisi Onabanjo University, 2018–2023.",
  },
  {
    k: "Open to",
    v: "Full-stack roles, frontend contracts, remote-first teams — Nigeria & globally.",
  },
];

export default function About() {
  return (
    <section id="about">
      <SectionHead
        index="01 — about"
        segments={[
          "An engineer who codes with ",
          { text: "precision and purpose.", className: "muted" },
        ]}
      />

      <div className="mx-auto grid max-w-page items-start gap-10 px-[clamp(20px,4vw,56px)] pb-[60px] sm:gap-[60px] lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <div className="text-fg-soft" style={{ fontSize: "clamp(17px,1.4vw,20px)", lineHeight: 1.65 }}>
            <p className="m-0 mb-4 max-w-[540px]">
              I&apos;m a Full-Stack JavaScript developer with a B.Eng in Electrical &amp; Electronics
              Engineering from Olabisi Onabanjo University. I combine a strong analytical
              foundation with hands-on experience shipping <em>real-time, production-grade</em> web
              applications — from database design and RESTful APIs through to responsive,
              accessible UIs.
            </p>
            <p className="m-0 max-w-[540px]">
              I&apos;ve built and deployed complete products solo — chat platforms, real estate
              apps, and fintech tools — and I&apos;m passionate about writing clean, scalable code
              that solves real-world problems. Currently based in Lagos and open to remote
              opportunities globally. Connect on{" "}
              <a
                href="https://linkedin.com/in/usmanogunnaike"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-deep"
                style={{
                  borderBottom: "1px solid color-mix(in oklab, var(--primary-deep) 40%, transparent)",
                }}
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {PANELS.map((p, i) => (
            <Reveal key={p.k} delay={100 + i * 100}>
              <div
                className="glass h-full p-[22px_22px_26px] transition-all hover:-translate-y-1"
                style={{ transitionDuration: "500ms" }}
              >
                <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-fg-mute">
                  {p.k}
                </div>
                <div className="font-display text-[17px] font-medium leading-[1.35] tracking-tight text-fg">
                  {p.v}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
