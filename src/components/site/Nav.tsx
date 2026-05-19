import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoBlack from "@/assets/adnc-logo-black.png";

const links = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          className={`flex items-center justify-between rounded-full border border-border/80 backdrop-blur-xl transition-all px-4 sm:px-6 ${
            scrolled ? "bg-paper/90 shadow-sm" : "bg-paper/60"
          }`}
        >
          <Link to="/" className="flex items-center py-3">
            <img src={logoBlack} alt="ADNC Group" className="h-8 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm text-ink-soft hover:text-ink transition-colors"
                activeProps={{ className: "px-4 py-2 text-sm text-ink font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center rounded-full bg-ink text-paper text-sm font-medium px-4 py-2 hover:bg-ink-soft transition-colors"
            >
              Start a project
            </Link>
            <button
              aria-label="Menu"
              className="md:hidden p-2"
              onClick={() => setOpen((s) => !s)}
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-px bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-px bg-ink transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-paper p-4 reveal">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base border-b border-border last:border-0"
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
