import { useLang } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  const isEn = lang === "en";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label={isEn ? "Switch to Italian" : "Passa all'inglese"}
      onClick={() => setLang(isEn ? "it" : "en")}
      className="flex items-center gap-1.5 text-xs font-semibold"
    >
      <span className={isEn ? "text-muted-foreground" : "text-foreground"}>IT</span>
      <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary/20">
        <span className={`absolute h-4 w-4 rounded-full bg-primary shadow transition-transform ${isEn ? "translate-x-[18px]" : "translate-x-0.5"}`} />
      </span>
      <span className={isEn ? "text-foreground" : "text-muted-foreground"}>EN</span>
    </button>
  );
}
