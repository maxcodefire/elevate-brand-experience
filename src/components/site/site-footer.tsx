export function SiteFooter() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-base font-bold tracking-[-0.06em]">
            WMS
          </p>
          <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Worldwide Manager Solutions
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Worldwide Manager Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
