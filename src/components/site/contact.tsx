import { useState, type FormEvent } from "react";
import { Reveal } from "./reveal";

const CONTACT_EMAIL = "contact@wms.com";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", placeholder: "Jane Doe" },
  { name: "company", label: "Company", type: "text", placeholder: "Company name" },
  { name: "email", label: "Work email", type: "email", placeholder: "jane@company.com" },
] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Project enquiry — ${data.get("company") || data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-hairline bg-surface/50 py-24 lg:py-36"
    >
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Start here</p>
          <h2 className="mt-6 text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.02] font-semibold">
            Tell us what's
            <br />
            breaking or slowing
            <br />
            you down.
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            We'll reply within one business day with a named engineer and a
            30-minute technical call — no sales script, no obligation.
          </p>

          <dl className="mt-12 space-y-5 border-t border-hairline pt-8 text-sm">
            <div className="flex gap-6">
              <dt className="w-24 shrink-0 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="link-underline text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="flex gap-6">
              <dt className="w-24 shrink-0 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Response
              </dt>
              <dd className="text-muted-foreground">
                Within one business day, 08:00–20:00 CET
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="lg:pt-4">
            {FIELDS.map((field) => (
              <div key={field.name} className="border-b border-hairline py-5">
                <label
                  htmlFor={field.name}
                  className="block text-[11px] tracking-[0.14em] text-muted-foreground uppercase"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="mt-2 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/50 focus-visible:ring-0"
                />
              </div>
            ))}
            <div className="border-b border-hairline py-5">
              <label
                htmlFor="message"
                className="block text-[11px] tracking-[0.14em] text-muted-foreground uppercase"
              >
                What do you need help with?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="A short description of the situation"
                className="mt-2 w-full resize-none bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/50"
              />
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send enquiry
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            {sent && (
              <p className="mt-4 text-sm text-accent" role="status">
                Your email app should now be open with the message ready to
                send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
