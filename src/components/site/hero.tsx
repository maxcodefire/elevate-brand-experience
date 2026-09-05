import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./reveal";

const METRICS = [
  { value: "24/7", label: "Managed operations" },
  { value: "99.98%", label: "Average uptime delivered" },
  { value: "14", label: "Countries supported" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Illuminated server aisle inside a data centre"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-edge)" }}
        />
        <div className="depth-veil absolute inset-0" />
      </div>

      <div className="shell relative flex min-h-[92svh] flex-col justify-end pt-32 pb-16 lg:min-h-screen lg:pb-20">
        <Reveal className="max-w-5xl">
          <p className="eyebrow">Worldwide Manager Solutions — IT Services</p>
          <h1 className="mt-7 text-[clamp(2.6rem,8.2vw,7rem)] leading-[0.92] font-semibold">
            The IT backbone
            <br />
            behind ambitious
            <br />
            <span className="text-accent">operations.</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-10 border-t border-hairline pt-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal delay={120}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design, run and secure the infrastructure, cloud platforms and
              software that keep international teams working — with one
              accountable partner instead of five vendors.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Book a technical review
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Explore our services
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <dl className="grid grid-cols-3 gap-6 lg:justify-items-end lg:text-right">
              {METRICS.map((metric) => (
                <div key={metric.label}>
                  <dt className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
                    {metric.value}
                  </dt>
                  <dd className="mt-2 text-[11px] leading-snug tracking-[0.12em] text-muted-foreground uppercase">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
