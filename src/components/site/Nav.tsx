import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoBlack from "@/assets/adnc-logo-black.png";
import logoWhite from "@/assets/logo-white.png";

const links = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ mode = "dev" }: { mode?: "dev" | "consulting" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isDark = mode === "consulting";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          data-cursor=""
          className={`flex items-center justify-between rounded-full border transition-all px-4 sm:px-6 ${
            isDark
              ? scrolled
                ? "bg-ink/90 border-paper/20 shadow-md text-paper"
                : "bg-ink/70 border-paper/15 text-paper"
              : scrolled
                ? "bg-paper/90 border-border/80 shadow-sm text-ink"
                : "bg-paper/60 border-border/80 text-ink"
          }`}
        >
          <Link to="/" className="flex items-center py-3">
            <img
              src={isDark ? logoWhite : logoBlack}
              alt="ADNC Group"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 text-sm transition-colors ${
                  isDark
                    ? "text-paper/70 hover:text-paper"
                    : "text-ink-soft hover:text-ink"
                }`}
                activeProps={{
                  className: `px-4 py-2 text-sm font-medium ${
                    isDark ? "text-paper" : "text-ink"
                  }`,
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center rounded-full text-sm font-medium px-4 py-2 transition-colors ${
                isDark
                  ? "bg-paper text-ink hover:bg-paper/90"
                  : "bg-ink text-paper hover:bg-ink-soft"
              }`}
            >
              {isDark ? "Book consultation" : "Start a project"}
            </Link>
            <button
              aria-label="Menu"
              className="md:hidden p-2"
              onClick={() => setOpen((s) => !s)}
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-px transition ${isDark ? "bg-paper" : "bg-ink"} ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block h-px transition ${isDark ? "bg-paper" : "bg-ink"} ${open ? "opacity-0" : ""}`} />
                <span className={`block h-px transition ${isDark ? "bg-paper" : "bg-ink"} ${open ? "-translate-y-1 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className={`md:hidden mt-2 rounded-2xl border p-4 reveal ${
            isDark ? "bg-ink border-paper/20 text-paper" : "bg-paper border-border text-ink"
          }`}>
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base border-b last:border-0 ${
                    isDark ? "border-paper/15 text-paper/90" : "border-border text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
