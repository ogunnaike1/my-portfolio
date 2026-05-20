"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Soft radial glow that lazily follows the cursor. Hidden on touch devices.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 80, damping: 20, mass: 0.6 });

  useEffect(() => {
    const ok = window.matchMedia("(hover: hover)").matches;
    setEnabled(ok);
    if (!ok) return;

    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y, visible]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 -ml-[240px] -mt-[240px] h-[480px] w-[480px] rounded-full blur-[40px]"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle at center, color-mix(in oklab, var(--primary) 22%, transparent), transparent 65%)",
        mixBlendMode: "plus-lighter",
        opacity: visible ? 1 : 0,
        transition: "opacity 1.2s cubic-bezier(.2,.7,.2,1)",
      }}
    />
  );
}
