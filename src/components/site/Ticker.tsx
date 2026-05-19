export function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-paper/15 bg-ink text-paper py-6">
      <div className="ticker flex gap-12 whitespace-nowrap w-max">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl tracking-tight inline-flex items-center gap-12">
            {t} <span className="opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
