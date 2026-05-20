const ITEMS = [
  "StoneChat",
  "Eldorado",
  "Poolside Africa",
  "React.js",
  "Node.js",
  "MongoDB",
  "Supabase",
  "Socket.io",
  "SQI College",
  "OOU Graduate",
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex gap-[60px] whitespace-nowrap font-display font-medium tracking-tight text-fg-mute"
      style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
    >
      {ITEMS.map((it, i) => (
        <span key={`${i}-${it}`} className="inline-flex items-center gap-[60px]">
          <span>{it}</span>
          <span style={{ color: "var(--primary)" }}>✶</span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <section
      aria-label="Selected collaborators"
      className="mask-ticker relative overflow-hidden py-7"
      style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="flex w-max animate-ticker gap-[60px]">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
