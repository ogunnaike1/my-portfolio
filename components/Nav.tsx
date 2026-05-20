"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Craft" },
  { href: "#contact", label: "Contact" },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>("work");
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number; on: boolean }>({
    left: 0,
    width: 0,
    on: false,
  });

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const ratios = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        });
        const best = Array.from(ratios.entries()).reduce<{ id: string; r: number } | null>(
          (acc, [id, r]) => (!acc || r > acc.r ? { id, r } : acc),
          null
        );
        if (best && best.r > 0.1) setActiveId(best.id);
      },
      { threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Position underline indicator
  useEffect(() => {
    const target = hoverId || activeId;
    if (!target || !linksContainerRef.current) {
      setIndicator((p) => ({ ...p, on: false }));
      return;
    }
    const link = linkRefs.current[target];
    if (!link) return;
    const parent = linksContainerRef.current.getBoundingClientRect();
    const r = link.getBoundingClientRect();
    setIndicator({ left: r.left - parent.left, width: r.width, on: true });
  }, [hoverId, activeId, scrolled]);

  // Reposition on resize
  useEffect(() => {
    const onResize = () => {
      const target = hoverId || activeId;
      if (!target || !linksContainerRef.current) return;
      const link = linkRefs.current[target];
      if (!link) return;
      const parent = linksContainerRef.current.getBoundingClientRect();
      const r = link.getBoundingClientRect();
      setIndicator({ left: r.left - parent.left, width: r.width, on: true });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hoverId, activeId]);

  return (
    <header
      data-scrolled={scrolled || undefined}
      className="nav-shell fixed z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-full border border-transparent transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
    >
      {/* Logo */}
      <motion.a
        href="#top"
        className="inline-flex items-center gap-2.5 font-display font-semibold tracking-tight"
        animate={{ scale: scrolled ? 0.95 : 1 }}
        transition={{ duration: 0.5, ease }}
        aria-label="Home"
      >
        <span
          className="inline-grid h-8 w-8 place-items-center rounded-full text-[12px] font-bold tracking-wide"
          style={{ background: "var(--fg)", color: "var(--bg)" }}
        >
          UO
        </span>
        <span className="hidden text-[17px] sm:inline">Usman&nbsp;Ogunnaike</span>
      </motion.a>

      {/* Links — hidden on mobile */}
      <nav
        ref={linksContainerRef}
        className="relative hidden lg:inline-flex items-center gap-7 text-[14.5px] text-fg-soft"
        aria-label="Primary"
      >
        {LINKS.map((l) => {
          const id = l.href.slice(1);
          const isActive = activeId === id;
          return (
            <a
              key={l.href}
              ref={(el) => {
                linkRefs.current[id] = el;
              }}
              href={l.href}
              onMouseEnter={() => setHoverId(id)}
              onMouseLeave={() => setHoverId(null)}
              className="relative py-2 transition-colors"
              style={{ color: isActive ? "var(--fg)" : undefined }}
            >
              {l.label}
            </a>
          );
        })}

        <motion.span
          aria-hidden
          className="pointer-events-none absolute bottom-1 h-0.5 rounded"
          style={{
            background: "var(--primary-deep)",
            boxShadow: "0 0 12px color-mix(in oklab, var(--primary) 50%, transparent)",
          }}
          animate={{
            x: indicator.left,
            width: indicator.width,
            opacity: indicator.on ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </nav>

      {/* Actions */}
      <div className="inline-flex items-center justify-end gap-2.5">
        <ThemeToggle />
        <a className="btn-ghost hidden lg:inline-flex" href="#contact">
          <span>Let&apos;s talk</span>
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              d="M5 12h13M13 6l6 6-6 6"
            />
          </svg>
        </a>
        {/* Hamburger — mobile only */}
        <button
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
          style={{ border: "1px solid var(--line)", background: "var(--glass-bg)" }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="relative flex h-4 w-[18px] flex-col justify-between">
            <motion.span
              className="block h-px rounded-full"
              style={{ background: "var(--fg)", transformOrigin: "center" }}
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px rounded-full"
              style={{ background: "var(--fg)" }}
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px rounded-full"
              style={{ background: "var(--fg)", transformOrigin: "center" }}
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-[64px] z-40 px-5 pb-6"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(24px) saturate(1.1)",
              WebkitBackdropFilter: "blur(24px) saturate(1.1)",
              borderBottom: "1px solid var(--glass-border)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 font-display text-[22px] font-medium tracking-tight text-fg"
                style={{ borderBottom: i < LINKS.length - 1 ? "1px solid var(--line)" : "none" }}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                {l.label}
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden>
                  <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </motion.a>
            ))}
            <div className="mt-5">
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-shell {
          top: 16px;
          left: 16px;
          right: 16px;
          padding: 14px 18px;
        }
        .nav-shell[data-scrolled] {
          top: 10px;
          left: max(16px, calc((100vw - 1100px) / 2));
          right: max(16px, calc((100vw - 1100px) / 2));
          padding: 8px 12px 8px 18px;
          background: var(--glass-bg);
          border-color: var(--glass-border);
          backdrop-filter: blur(18px) saturate(1.1);
          -webkit-backdrop-filter: blur(18px) saturate(1.1);
          box-shadow: 0 8px 28px rgba(20, 30, 55, 0.08);
        }
      `}</style>
    </header>
  );
}
