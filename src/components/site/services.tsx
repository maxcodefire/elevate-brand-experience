import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    id: "01",
    title: "Managed IT & Infrastructure",
    summary:
      "Networks, endpoints, servers and service desk run as a single operation, with SLAs you can hold us to.",
    points: ["24/7 monitoring & response", "Endpoint & identity management", "Vendor consolidation"],
  },
  {
    id: "02",
    title: "Cloud & DevOps",
    summary:
      "Migration, cost control and delivery pipelines on Azure, AWS and GCP — built for teams that ship weekly.",
    points: ["Landing zones & IaC", "Kubernetes platforms", "FinOps & cost governance"],
  },
  {
    id: "03",
    title: "Cybersecurity & Compliance",
    summary:
      "Continuous defence and audit-ready evidence for ISO 27001, SOC 2, NIS2 and GDPR obligations.",
    points: ["SOC & threat detection", "Penetration testing", "Compliance programmes"],
  },
  {
    id: "04",
    title: "Software Engineering",
    summary:
      "Business platforms, integrations and internal tools designed around how your operation actually works.",
    points: ["Product & platform builds", "Legacy modernisation", "API & systems integration"],
  },
  {
    id: "05",
    title: "Data, Automation & AI",
    summary:
      "Reporting people trust and automation that removes the manual work behind it.",
    points: ["Data platforms & BI", "Process automation", "Applied AI use cases"],
  },
];

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="shell scroll-mt-24 py-24 lg:py-36">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02] font-semibold">
            Five disciplines,
            <br />
            one accountable team.
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:pt-20">
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            Most companies don't need more suppliers — they need fewer
            hand-offs. WMS covers the full stack, from the cabling in the
            building to the software your customers touch, under one contract
            and one point of contact.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 border-t border-hairline">
        {SERVICES.map((service, index) => (
          <Reveal key={service.id} delay={index * 60}>
            <div
              onMouseEnter={() => setActive(service.id)}
              onMouseLeave={() => setActive(null)}
              className={cn(
                "group grid gap-5 border-b border-hairline py-9 transition-colors duration-500 lg:grid-cols-[6rem_1fr_1fr] lg:items-start lg:gap-10",
                active === service.id && "bg-surface/40",
              )}
            >
              <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-muted-foreground">
                {service.id}
              </span>
              <h3 className="text-2xl leading-tight font-medium sm:text-3xl">
                <span
                  className={cn(
                    "transition-colors duration-300",
                    active === service.id && "text-accent",
                  )}
                >
                  {service.title}
                </span>
              </h3>
              <div>
                <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
