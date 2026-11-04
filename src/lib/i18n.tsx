import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "it" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (it: string, en: string) => string };

const LangContext = createContext<Ctx>({ lang: "it", setLang: () => {}, t: (it) => it });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");
  useEffect(() => {
    if (localStorage.getItem("lang") === "en") setLangState("en");
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };
  const t = (it: string, en: string) => (lang === "en" ? en : it);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
