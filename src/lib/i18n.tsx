/**
 * Bilingual support (English / French).
 *
 * The language is resolved from the request itself, not after mount: on the
 * server we read the visitor's Accept-Language header, so the very first HTML
 * byte is already in the right language and a French visitor never sees a
 * flash of English. On the client the same helper falls back to the browser's
 * own `navigator.language`, which for a real visitor reports what their
 * Accept-Language header already said.
 */
import { createContext, useContext, type ReactNode } from "react";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { content, type Dictionary } from "./content";

export type Lang = "en" | "fr";

export const LANGS = ["en", "fr"] as const;

/** French for anyone whose preferred locale is French; English for everyone else. */
function fromLocaleList(value: string | undefined | null): Lang {
  if (!value) return "en";
  // "fr-FR,fr;q=0.9,en;q=0.8" → the first tag wins, which is the browser's
  // top preference. Quality values only reorder what the browser already sorted.
  const first = value.split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("fr") ? "fr" : "en";
}

export const detectLang: () => Lang = createIsomorphicFn()
  .server((): Lang => fromLocaleList(getRequestHeader("accept-language")))
  .client((): Lang => {
    if (typeof navigator === "undefined") return "en";
    return fromLocaleList(navigator.languages?.[0] ?? navigator.language);
  });

const LangContext = createContext<Lang>("en");

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

/** The language currently in effect. */
export function useLang(): Lang {
  return useContext(LangContext);
}

/** The translated content tree for the current language. */
export function useT(): Dictionary {
  return content[useContext(LangContext)];
}
