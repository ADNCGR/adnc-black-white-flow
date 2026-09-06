import { useT } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * The three entry points into the studio — startup, enterprise, government —
 * as bordered columns, each closing on its own WhatsApp CTA. Every button
 * carries a message naming its segment, so an incoming chat says which door
 * the visitor came through.
 */
export function SegmentGrid({ isDark = false }: { isDark?: boolean }) {
  const c = useT().solutions;

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? "bg-[oklch(0.06_0_0)] text-paper" : "bg-ink text-paper"
      }`}
    >
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-28 relative">
        <div className="grid md:grid-cols-3 border-t border-paper/15">
          {c.segments.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              style={{ ["--reveal-delay" as never]: `${i * 90}ms` }}
              className="flex flex-col border-b border-paper/15 md:border-b-0 md:border-r md:last:border-r-0 p-6 md:p-10 lg:p-14 transition-colors hover:bg-paper/5"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-paper/40">{s.audience}</span>

              <div className="mt-10 md:mt-14">
                <span className="font-display text-sm text-paper/40">{s.n}</span>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mt-2 break-words">
                  {s.title}
                </h3>
              </div>

              <p className="mt-5 md:mt-6 text-lg md:text-xl text-paper/80 text-balance">
                {s.tagline}
              </p>

              <ul className="mt-8 md:mt-10 space-y-3">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-t border-paper/10 pt-3 text-sm md:text-base text-paper/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-paper/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pushed to the bottom so all three buttons share a baseline */}
              <div className="mt-10 md:mt-12 pt-2 flex-1 flex items-end">
                <a
                  href={whatsappUrl(s.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor=""
                  aria-label={`${c.ctaAria} ${s.audience}`}
                  className="mag inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-paper text-ink px-6 py-3.5 md:py-4 font-medium text-sm md:text-base hover:bg-paper/90 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4.5 w-4.5 shrink-0"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
                  </svg>
                  {c.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
