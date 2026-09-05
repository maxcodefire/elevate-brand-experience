import { Reveal } from "./reveal";

const STEPS = [
  {
    id: "Step 01",
    title: "Assess",
    body: "Two weeks inside your systems: infrastructure, security posture, cost, risk and the workflows people actually use.",
  },
  {
    id: "Step 02",
    title: "Stabilise",
    body: "We close the critical gaps first — backups, identity, patching, monitoring — so the ground stops moving.",
  },
  {
    id: "Step 03",
    title: "Modernise",
    body: "Cloud, automation and software delivered in staged releases, each one measurable against the baseline.",
  },
  {
    id: "Step 04",
    title: "Operate",
    body: "A named team runs it day to day, reporting on uptime, spend and security in language your board reads.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="grain scroll-mt-24 border-y border-hairline bg-surface/50 py-24 lg:py-36"
    >
      <div className="shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow">How we work</p>
              <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02] font-semibold">
                No big bang.
                <br />
                A sequence.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Transformation fails when everything changes at once. We run a
                four-stage engagement so risk drops early and value compounds.
              </p>
              <a
                href="#contact"
                className="link-underline mt-8 inline-block text-sm text-accent"
              >
                Request the assessment scope →
              </a>
            </Reveal>
          </div>

          <ol className="space-y-px">
            {STEPS.map((step, index) => (
              <Reveal key={step.id} delay={index * 90}>
                <li className="group relative border-t border-hairline py-8 last:border-b">
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                    <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-muted-foreground uppercase sm:w-24 sm:pt-2">
                      {step.id}
                    </span>
                    <div>
                      <h3 className="text-2xl font-medium sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                  <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full" />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
