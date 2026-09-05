const CLIENTS = [
  "Nordbank",
  "Helios Logistics",
  "Atlas Retail Group",
  "Meridian Health",
  "Vega Manufacturing",
  "Solvent Energy",
  "Kaia Telecom",
];

export function Marquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section
      aria-label="Organisations we support"
      className="border-y border-hairline bg-surface/40 py-6"
    >
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-14 pr-14">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-[family-name:var(--font-display)] text-sm tracking-[0.18em] whitespace-nowrap text-muted-foreground uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
