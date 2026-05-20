import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        surface: "var(--surface)",
        fg: "var(--fg)",
        "fg-soft": "var(--fg-soft)",
        "fg-mute": "var(--fg-mute)",
        primary: "var(--primary)",
        "primary-deep": "var(--primary-deep)",
        accent: "var(--accent)",
        line: "var(--line)",
        ok: "var(--ok)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 28px rgba(20,30,55,.08), inset 0 1px 0 rgba(255,255,255,.4)",
        "glass-lg": "0 30px 80px -28px rgba(20,30,55,.28)",
      },
      backgroundImage: {
        "grain":
          "repeating-linear-gradient(0deg, var(--hero-grain) 0 1px, transparent 1px 4px)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.2,.7,.2,1)",
        out: "cubic-bezier(.16,1,.3,1)",
      },
      maxWidth: {
        page: "1240px",
      },
      keyframes: {
        spin: { to: { transform: "rotate(360deg)" } },
        ping: {
          "0%": { transform: "scale(1)", opacity: ".6" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        blink: { "50%": { opacity: "0" } },
        wave: {
          "0%,100%": { height: "8px" },
          "50%": { height: "60px" },
        },
        scrollDot: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(300%)" },
        },
        ticker: {
          to: { transform: "translateX(calc(-50% - 30px))" },
        },
        floatA: { "50%": { transform: "translate(-6px,-10px)" } },
        floatB: { "50%": { transform: "translate(6px,-8px)" } },
        floatC: { "50%": { transform: "translate(-8px,6px)" } },
        floatD: { "50%": { transform: "translate(4px,-4px)" } },
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        ping: "ping 1.8s cubic-bezier(.2,.7,.2,1) infinite",
        blink: "blink 1s steps(2) infinite",
        wave: "wave 1.4s cubic-bezier(.2,.7,.2,1) infinite",
        "scroll-dot": "scrollDot 2.4s cubic-bezier(.2,.7,.2,1) infinite",
        ticker: "ticker 40s linear infinite",
        "float-a": "floatA 9s cubic-bezier(.2,.7,.2,1) infinite",
        "float-b": "floatB 11s cubic-bezier(.2,.7,.2,1) infinite",
        "float-c": "floatC 10s cubic-bezier(.2,.7,.2,1) infinite",
        "float-d": "floatD 13s cubic-bezier(.2,.7,.2,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
