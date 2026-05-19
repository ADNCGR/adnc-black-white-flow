import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Cursor } from "./Cursor";
import { RevealOnScroll } from "./Reveal";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col relative overflow-x-hidden">
      <div className="noise" aria-hidden />
      <Cursor />
      <RevealOnScroll />
      <Nav />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
