export default function Footer() {
  return (
    <footer
      className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3 px-[clamp(20px,4vw,56px)] pb-12 pt-7 font-mono text-[12px] text-fg-mute"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div>© 2026 · Usman Ogunnaike</div>
      <div>Lagos, Nigeria · Full-Stack JS Developer</div>
      <div>
        <a href="#top" className="text-fg transition-colors hover:text-primary-deep">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
