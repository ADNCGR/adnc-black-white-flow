import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";

export type Mode = "dev" | "consulting";

const STORAGE_KEY = "adnc-mode";

const ModeContext = createContext<{
  mode: Mode;
  setMode: (mode: Mode) => void;
} | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  // Always start at "dev" so the client's first render matches the SSR
  // output exactly — reading localStorage here would mismatch hydration.
  const [mode, setModeState] = useState<Mode>("dev");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "consulting") setModeState("consulting");
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode: setModeState }}>{children}</ModeContext.Provider>
  );
}

/**
 * Returns the mode as it should apply to the current page.
 *
 * The Consulting rendering is scoped to the homepage only: on every other
 * route this hook forces "dev", so navigating away from "/" always shows
 * the default layout regardless of what the visitor picked. The stored
 * choice is preserved, so returning to "/" restores their selection.
 * `setMode` always writes to the shared state (the switch only lives on
 * the homepage, so writers are already scoped).
 */
export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within a ModeProvider");
  const isHome = useLocation({ select: (l) => l.pathname === "/" });
  return {
    mode: isHome ? ctx.mode : ("dev" as Mode),
    setMode: ctx.setMode,
  };
}
