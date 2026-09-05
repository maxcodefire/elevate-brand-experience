import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hairline bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <a
          href="#top"
          className="group flex items-baseline gap-2.5"
          aria-label="WMS home"
        >
          <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.06em]">
            WMS
          </span>
          <span className="hidden text-[11px] leading-none tracking-[0.16em] text-muted-foreground uppercase sm:block">
            Worldwide Manager Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 block h-px w-4 bg-foreground transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-4 bg-foreground transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-hairline bg-background transition-[grid-template-rows] duration-500 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent",
        )}
      >
        <div className="min-h-0">
          <nav className="shell flex flex-col gap-1 py-6">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 font-[family-name:var(--font-display)] text-2xl tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-primary px-5 py-3.5 text-center text-sm font-medium text-primary-foreground"
            >
              Start a project
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
