import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

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
    <ModeContext.Provider value={{ mode, setMode: setModeState }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within a ModeProvider");
  return ctx;
}
