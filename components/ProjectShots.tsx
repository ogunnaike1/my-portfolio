/**
 * Project visual shots — pure CSS/SVG, retheme with design tokens.
 */

export function ShotChat() {
  const messages = [
    { self: false, text: "Hey, the deploy is live 🎉" },
    { self: true,  text: "Confirmed — latency looks solid" },
    { self: false, text: "WebSocket ping < 40ms ✓" },
    { self: true,  text: "Shipping the media preview next" },
  ];
  return (
    <div
      className="flex h-full w-full flex-col rounded-xl overflow-hidden"
      style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2.5 px-4 py-3"
        style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-soft)" }}
      >
        <div className="h-7 w-7 rounded-full flex items-center justify-center font-bold text-[11px]"
          style={{ background: "var(--primary)", color: "var(--bg)" }}>S</div>
        <div>
          <div className="font-display text-[13px] font-semibold text-fg">StoneChat</div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-fg-mute">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ok)" }} />
            <span>24 online</span>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex flex-1 flex-col justify-end gap-2 p-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.self ? "justify-end" : "justify-start"}`}>
            <span
              className="max-w-[75%] rounded-2xl px-3.5 py-2 font-display text-[12px] leading-[1.45]"
              style={{
                background: m.self
                  ? "var(--primary)"
                  : "color-mix(in oklab, var(--fg) 8%, transparent)",
                color: m.self ? "var(--bg)" : "var(--fg)",
                border: m.self ? "none" : "1px solid var(--line)",
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
        {/* Typing indicator */}
        <div className="flex justify-start">
          <span
            className="flex items-center gap-1 rounded-2xl px-3.5 py-2.5"
            style={{ background: "color-mix(in oklab, var(--fg) 8%, transparent)", border: "1px solid var(--line)" }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full animate-bounce"
                style={{ background: "var(--fg-mute)", animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ShotRealEstate() {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
      {/* Map-like top section */}
      <div
        className="relative h-[48%] w-full"
        style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 14%, var(--bg-soft)), var(--bg-soft))" }}
      >
        {/* Grid lines */}
        <svg viewBox="0 0 320 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-20">
          <g stroke="currentColor" strokeWidth=".5" style={{ color: "var(--primary)" }}>
            <line x1="0" y1="40" x2="320" y2="40" /><line x1="0" y1="80" x2="320" y2="80" />
            <line x1="80" y1="0" x2="80" y2="120" /><line x1="160" y1="0" x2="160" y2="120" /><line x1="240" y1="0" x2="240" y2="120" />
          </g>
        </svg>
        {/* Location pins */}
        {[[30, 55], [130, 38], [200, 70], [260, 45]].map(([x, y], i) => (
          <div key={i} className="absolute flex flex-col items-center" style={{ left: `${x / 3.2}%`, top: `${y / 1.2}%` }}>
            <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center text-[8px] font-bold"
              style={{ background: i === 1 ? "var(--primary)" : "var(--surface)", borderColor: "var(--primary)", color: i === 1 ? "var(--bg)" : "var(--primary)" }}>
              {["3", "5", "2", "4"][i]}
            </div>
          </div>
        ))}
      </div>
      {/* Property info */}
      <div className="p-3.5">
        <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-fg-mute">Featured · Lagos Island</div>
        <div className="font-display text-[16px] font-semibold tracking-tight text-fg mb-1">Skyline Apartments</div>
        <div className="flex items-center justify-between">
          <span className="font-display text-[14px] font-medium" style={{ color: "var(--primary)" }}>₦45,000,000</span>
          <div className="flex gap-2 font-mono text-[10px] text-fg-mute">
            <span>4bd</span><span>·</span><span>3ba</span><span>·</span><span>180m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShotFintech() {
  const groups = [
    { name: "Emergency Fund", pct: 72, amount: "₦360k" },
    { name: "Group Savings",  pct: 48, amount: "₦240k" },
    { name: "Investment Pool",pct: 91, amount: "₦455k" },
  ];
  return (
    <div className="h-full w-full overflow-hidden rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
      {/* Header */}
      <div className="px-4 py-3" style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-soft)" }}>
        <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-fg-mute mb-1">Total Pooled</div>
        <div className="font-display text-[22px] font-semibold tracking-tight text-fg">₦1,055,000</div>
      </div>
      {/* Savings groups */}
      <div className="p-4 space-y-3.5">
        {groups.map((g) => (
          <div key={g.name}>
            <div className="flex justify-between mb-1.5 font-display text-[12px] font-medium text-fg">
              <span>{g.name}</span>
              <span style={{ color: "var(--primary)" }}>{g.amount}</span>
            </div>
            <div className="relative h-1.5 overflow-hidden rounded-full" style={{ background: "color-mix(in oklab, var(--fg) 8%, transparent)" }}>
              <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${g.pct}%`, background: "linear-gradient(90deg, var(--primary-deep), var(--primary))" }} />
            </div>
            <div className="mt-1 font-mono text-[10px] text-fg-mute">{g.pct}% of goal</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Keep old exports in case anything still imports them */
export function ShotDashboard() { return <ShotChat />; }
export function ShotPhone()     { return <ShotRealEstate />; }
export function ShotTerminal()  { return <ShotFintech />; }
export function ShotEditorial() { return <ShotChat />; }
export function ShotMap()       { return <ShotRealEstate />; }
export function ShotSound()     { return <ShotFintech />; }
