import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT, getHours, getServices } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

function useNav() {
  const { t } = useLang();
  return [
    { to: "/", label: "Home" },
    { to: "/servizi", label: t("Servizi", "Services") },
    { to: "/contatti", label: t("Contatti", "Contact") },
  ] as const;
}

export function Header() {
  const { t } = useLang();
  const NAV = useNav();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-xl font-semibold text-primary">
          Pratiche<span className="text-accent">Italia</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Link to="/contatti" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            {t("Prenota", "Book now")}
          </Link>
        </div>
      </div>
      <nav className="container-page flex gap-4 overflow-x-auto pb-2 text-sm md:hidden">
        {NAV.map((n) => <Link key={n.to} to={n.to} className="whitespace-nowrap text-muted-foreground">{n.label}</Link>)}
      </nav>
    </header>
  );
}

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">Pratiche<span className="text-accent-on-primary">Italia</span></p>
          <p className="mt-3 text-sm opacity-80">{t("Il tuo accesso semplice alla burocrazia italiana.", "Your easy way through Italian bureaucracy.")}</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold">{t("Servizi", "Services")}</p>
          <ul className="space-y-2 opacity-80">
            {getServices(lang).map((s) => <li key={s.slug}><Link to="/servizi/$slug" params={{ slug: s.slug }}>{s.title}</Link></li>)}
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold">{t("Contatti", "Contact")}</p>
          <ul className="space-y-2 opacity-80">
            <li>{CONTACT.address}</li>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold">{t("Orari", "Opening hours")}</p>
          <ul className="space-y-2 opacity-80">
            {getHours(lang).map(([d, h]) => <li key={d}>{d}: {h}</li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} PraticheItalia · Privacy Policy · Cookie Policy
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const { t } = useLang();
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href={CONTACT.phoneHref} aria-label={t("Chiama", "Call")} className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg"><Phone className="h-5 w-5" /></a>
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lg"><MessageCircle className="h-5 w-5" /></a>
    </div>
  );
}
