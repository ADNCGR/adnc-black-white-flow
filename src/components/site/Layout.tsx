import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Cursor } from "./Cursor";
import { RevealOnScroll } from "./Reveal";
import { ModeSwitch } from "./ModeSwitch";
import { WhatsAppCta } from "./WhatsAppCta";
import { useMode } from "@/lib/mode-context";

export function Layout({ children }: { children: ReactNode }) {
  const { mode, setMode } = useMode();
  const isDark = mode === "consulting";
  return (
    <div
      className={`min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-700 ${
        isDark ? "bg-ink text-paper" : "bg-paper text-ink"
      }`}
    >
      <div className="noise" aria-hidden />
      <Cursor />
      <RevealOnScroll />
      <Nav mode={mode} />
      <div className="flex-1 flex flex-col pt-24">
        <div className="relative z-40 -mb-2 md:-mb-4">
          <ModeSwitch
            mode={mode}
            onModeChange={setMode}
            theme={isDark ? "dark" : "light"}
          />
        </div>
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
      <WhatsAppCta mode={mode} />
    </div>
  );
}
