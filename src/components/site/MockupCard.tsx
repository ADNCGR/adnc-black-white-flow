import type { Mockup } from "@/data/mockups";

export function MockupCard({ mockup, index }: { mockup: Mockup; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center py-16 md:py-24 border-t border-border">
      <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-3xl bg-gradient-to-b from-paper-soft to-secondary">
          <img
            src={mockup.image}
            alt={mockup.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {mockup.category} · {mockup.year}
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-balance">
          {mockup.title}
        </h3>
        <p className="mt-4 text-ink-soft text-lg max-w-lg">{mockup.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {mockup.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-border text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Client · {mockup.client}</p>
      </div>
    </article>
  );
}
