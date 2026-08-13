import type { ReactNode } from "react";

export function CorporateRow({
  n,
  title,
  children,
  isDark = true,
  index = 0,
}: {
  n: string;
  title: ReactNode;
  children: ReactNode;
  isDark?: boolean;
  index?: number;
}) {
  return (
    <div
      data-reveal
      style={{ ["--reveal-delay" as never]: `${index * 60}ms` }}
      className={`grid md:grid-cols-12 gap-3 md:gap-8 py-6 md:py-7 border-t last:border-b ${
        isDark ? "border-paper/15" : "border-ink/15"
      }`}
    >
      <div
        className={`md:col-span-1 font-sans text-sm tabular-nums ${
          isDark ? "text-paper/40" : "text-muted-foreground"
        }`}
      >
        {n}
      </div>
      <div className="md:col-span-4">
        <h3 className="font-sans font-semibold text-base md:text-lg">{title}</h3>
      </div>
      <div className={`md:col-span-7 text-sm md:text-base leading-relaxed ${isDark ? "text-paper/65" : "text-ink-soft"}`}>
        {children}
      </div>
    </div>
  );
}
