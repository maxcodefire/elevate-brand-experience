import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Services } from "@/components/site/services";
import { Approach } from "@/components/site/approach";
import { Work } from "@/components/site/work";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";

const TITLE = "WMS — IT Infrastructure, Cloud & Security Services";
const DESCRIPTION =
  "Worldwide Manager Solutions runs and secures the infrastructure, cloud platforms and software behind international operations — one accountable IT partner.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Worldwide Manager Solutions",
          alternateName: "WMS",
          description: DESCRIPTION,
          serviceType: [
            "Managed IT Services",
            "Cloud & DevOps",
            "Cybersecurity & Compliance",
            "Software Engineering",
            "Data & AI",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Approach />
        <Work />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
