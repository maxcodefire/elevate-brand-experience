import { Reveal } from "./reveal";

const PILLARS = [
  {
    title: "Senior by default",
    body: "Every engagement is led by an architect who has run systems at this scale before — not staffed with juniors after the pitch.",
  },
  {
    title: "One accountable partner",
    body: "Infrastructure, cloud, security and software under a single contract, single roadmap and single escalation path.",
  },
  {
    title: "Local presence, global cover",
    body: "Follow-the-sun operations across 14 countries, with engineers who speak the language of your local teams.",
  },
];

export function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-24 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Who we are</p>
          <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02] font-semibold">
            Built to be the last IT partner you hire.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
            Worldwide Manager Solutions is an IT services firm working with
            mid-market and enterprise organisations across Europe, North Africa
            and the Gulf. We take responsibility for outcomes — uptime, security
            posture, delivery dates — rather than billable hours.
          </p>

          <figure className="mt-12 border-l border-accent pl-6">
            <blockquote className="font-[family-name:var(--font-display)] text-xl leading-snug font-medium sm:text-2xl">
              “They inherited a mess we'd built over ten years and made it
              boring within six months. That's the highest compliment I can
              give an IT partner.”
            </blockquote>
            <figcaption className="mt-5 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Group CIO — Helios Logistics
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:pt-24">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90}>
              <div className="border-t border-hairline py-8 last:border-b">
                <h3 className="text-lg font-medium">{pillar.title}</h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
