import caseOne from "@/assets/case-1.jpg";
import caseTwo from "@/assets/case-2.jpg";
import caseThree from "@/assets/case-3.jpg";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const CASES = [
  {
    client: "Helios Logistics",
    sector: "Freight & distribution — 9 sites",
    title: "One network, nine warehouses, zero unplanned downtime",
    body: "We replaced a patchwork of local providers with a single managed network and 24/7 operations centre, then migrated the warehouse management platform to the cloud without pausing shipping.",
    stats: [
      { value: "99.99%", label: "Network uptime" },
      { value: "-38%", label: "IT running cost" },
    ],
    image: caseOne,
    alt: "Macro photograph of glowing fibre optic cables",
  },
  {
    client: "Nordbank",
    sector: "Financial services — regulated",
    title: "Audit-ready security in a single quarter",
    body: "A full security programme — detection, response, penetration testing and evidence collection — delivered alongside the internal team ahead of an ISO 27001 audit passed with no major findings.",
    stats: [
      { value: "0", label: "Major audit findings" },
      { value: "11 min", label: "Mean response time" },
    ],
    image: caseTwo,
    alt: "Security operations team working at night",
  },
  {
    client: "Atlas Retail Group",
    sector: "Retail — 240 stores",
    title: "A platform that made stock visible in real time",
    body: "We rebuilt the integration layer between stores, e-commerce and ERP, replacing overnight batch files with streaming data and giving buyers live stock positions across the estate.",
    stats: [
      { value: "6×", label: "Faster reporting" },
      { value: "240", label: "Stores connected" },
    ],
    image: caseThree,
    alt: "Glass office tower at night lit in deep blue",
  },
];

export function Work() {
  return (
    <section id="work" className="shell scroll-mt-24 py-24 lg:py-36">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02] font-semibold">
            Results that survived contact with production.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Three engagements, measured before and after. References available on
          request.
        </p>
      </Reveal>

      <div className="mt-16 space-y-20 lg:space-y-28">
        {CASES.map((item, index) => (
          <Reveal key={item.client}>
            <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div
                className={cn(
                  "group relative aspect-[4/3] overflow-hidden rounded-sm",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-background/25" />
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.18em] text-accent uppercase">
                    {item.client}
                  </span>
                  <span className="text-xs tracking-[0.12em] text-muted-foreground uppercase">
                    {item.sector}
                  </span>
                </div>
                <h3 className="mt-5 text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.1] font-medium">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <dl className="mt-8 grid max-w-sm grid-cols-2 gap-6 border-t border-hairline pt-6">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="font-[family-name:var(--font-display)] text-3xl font-semibold">
                        {stat.value}
                      </dt>
                      <dd className="mt-1.5 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
