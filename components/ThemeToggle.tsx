"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  const thumbX = { light: 0, dark: 16, warm: 8 } as const;
  const thumbColor = {
    light: "var(--fg)",
    dark: "var(--accent)",
    warm: "var(--primary)",
  } as const;
  const label = { light: "Light", dark: "Dark", warm: "Warm" } as const;

  return (
    <button
      onClick={toggle}
      aria-label="Switch theme"
      title="Switch theme"
      className="inline-flex items-center gap-2.5 rounded-full px-2 py-1.5 transition-colors"
      style={{
        border: "1px solid var(--line)",
        background: "var(--glass-bg)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <span
        className="relative h-5 w-9 rounded-full"
        style={{ background: "color-mix(in oklab, var(--fg) 8%, transparent)" }}
      >
        <motion.span
          className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full"
          animate={{ x: thumbX[theme], background: thumbColor[theme] }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        />
      </span>
      <span className="hidden text-[12px] tracking-wide text-fg-mute sm:inline">
        {label[theme]}
      </span>
    </button>
  );
}
