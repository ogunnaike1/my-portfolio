"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "warm";

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("warm");

  // Sync from DOM (set by the inline script in <head>) on mount
  useEffect(() => {
    const initial = (document.documentElement.getAttribute("data-theme") as Theme) || "warm";
    setTheme(initial);
  }, []);

  const toggle = useCallback(() => {
    const cycle: Record<Theme, Theme> = { light: "dark", dark: "warm", warm: "light" };
    const next: Theme = cycle[theme];

    // Crossfade overlay for smooth transition
    const fader = document.createElement("div");
    Object.assign(fader.style, {
      position: "fixed",
      inset: "0",
      background: getComputedStyle(document.documentElement).getPropertyValue("--bg"),
      opacity: "0",
      pointerEvents: "none",
      transition: "opacity .35s ease",
      zIndex: "9999",
    } as CSSStyleDeclaration);
    document.body.appendChild(fader);

    requestAnimationFrame(() => {
      fader.style.opacity = ".35";
      window.setTimeout(() => {
        document.documentElement.setAttribute("data-theme", next);
        try {
          localStorage.setItem("ic-theme", next);
        } catch {}
        setTheme(next);
        requestAnimationFrame(() => {
          fader.style.opacity = "0";
          window.setTimeout(() => fader.remove(), 400);
        });
      }, 180);
    });
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
