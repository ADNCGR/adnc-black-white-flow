import { useRef, useEffect, useState, useCallback } from "react";
import { useT } from "@/lib/i18n";

export type Mode = "dev" | "consulting";

interface ModeSwitchProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  theme?: "light" | "dark";
}

export function ModeSwitch({ mode, onModeChange, theme = "light" }: ModeSwitchProps) {
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLButtonElement>(null);
  const consultRef = useRef<HTMLButtonElement>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({
    left: 4,
    width: 0,
  });

  const updatePill = useCallback(() => {
    const activeRef = mode === "dev" ? devRef : consultRef;
    const container = containerRef.current;
    const btn = activeRef.current;
    if (!container || !btn) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setPillStyle({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    });
  }, [mode]);

  useEffect(() => {
    updatePill();
    // Update on animation frame to ensure layout has settled
    const frame = requestAnimationFrame(updatePill);
    window.addEventListener("resize", updatePill);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updatePill);
    };
  }, [updatePill, mode, theme]);

  return (
    <div className="flex justify-center py-4">
      <div
        ref={containerRef}
        className="mode-switch"
        data-theme={theme}
        role="tablist"
        aria-label={t.modeSwitch.label}
      >
        <div
          className="mode-switch-pill"
          style={{ left: pillStyle.left, width: pillStyle.width }}
          aria-hidden
        />
        <button
          ref={devRef}
          type="button"
          role="tab"
          aria-selected={mode === "dev"}
          data-active={mode === "dev" ? "true" : "false"}
          className="mode-switch-btn"
          onClick={() => {
            onModeChange("dev");
          }}
        >
          {t.modeSwitch.dev}
        </button>
        <button
          ref={consultRef}
          type="button"
          role="tab"
          aria-selected={mode === "consulting"}
          data-active={mode === "consulting" ? "true" : "false"}
          className="mode-switch-btn"
          onClick={() => {
            onModeChange("consulting");
          }}
        >
          {t.modeSwitch.consulting}
        </button>
      </div>
    </div>
  );
}
