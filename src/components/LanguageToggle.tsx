import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

function readLang(): "it" | "en" {
  return /googtrans=\/it\/en/.test(document.cookie) ? "en" : "it";
}

function setCookie(value: string) {
  const host = window.location.hostname;
  const exp = value ? "" : ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = `googtrans=${value};path=/${exp}`;
  document.cookie = `googtrans=${value};path=/;domain=${host}${exp}`;
  document.cookie = `googtrans=${value};path=/;domain=.${host}${exp}`;
}

export function LanguageToggle() {
  const [lang, setLang] = useState<"it" | "en">("it");

  useEffect(() => {
    setLang(readLang());
    if (document.getElementById("gt-script")) return;
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "it", includedLanguages: "en,it", autoDisplay: false },
        "google_translate_element",
      );
    };
    const s = document.createElement("script");
    s.id = "gt-script";
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(s);
  }, []);

  const toggle = () => {
    if (lang === "it") setCookie("/it/en");
    else setCookie("");
    window.location.reload();
  };

  const isEn = lang === "en";
  return (
    <>
      <div id="google_translate_element" className="hidden" />
      <button
        type="button"
        role="switch"
        aria-checked={isEn}
        aria-label="Cambia lingua / Change language"
        onClick={toggle}
        className="notranslate flex items-center gap-1.5 text-xs font-semibold"
        translate="no"
      >
        <span className={isEn ? "text-muted-foreground" : "text-foreground"}>IT</span>
        <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary/20 transition">
          <span className={`absolute h-4 w-4 rounded-full bg-primary shadow transition-transform ${isEn ? "translate-x-[18px]" : "translate-x-0.5"}`} />
        </span>
        <span className={isEn ? "text-foreground" : "text-muted-foreground"}>EN</span>
      </button>
    </>
  );
}
