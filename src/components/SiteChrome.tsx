import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-xl font-semibold text-primary">
          Porta<span className="text-accent">Italia</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contatti" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
          Prenota
        </Link>
      </div>
      <nav className="container-page flex gap-4 overflow-x-auto pb-2 text-sm md:hidden">
        {NAV.map((n) => <Link key={n.to} to={n.to} className="whitespace-nowrap text-muted-foreground">{n.label}</Link>)}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">Porta<span className="text-accent-on-primary">Italia</span></p>
          <p className="mt-3 text-sm opacity-80">La tua porta d'accesso semplice alla burocrazia italiana.</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold">Servizi</p>
          <ul className="space-y-2 opacity-80">
            <li><Link to="/servizi">Ambasciate e Consolati</Link></li>
            <li><Link to="/servizi">Servizi UniCom</Link></li>
            <li><Link to="/servizi">Mobilità aziendale e Carta Blu</Link></li>
            <li><Link to="/servizi">Comune e SPID</Link></li>
            <li><Link to="/servizi">Traduzioni e legalizzazioni</Link></li>
            <li><Link to="/servizi">INPS e INAIL</Link></li>
            <li><Link to="/servizi">CAF e Patronato</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold">Contatti</p>
          <ul className="space-y-2 opacity-80">
            <li>{CONTACT.address}</li>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold">Orari</p>
          <ul className="space-y-2 opacity-80">
            {CONTACT.hours.map(([d, h]) => <li key={d}>{d}: {h}</li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Porta Italia · Privacy Policy · Cookie Policy
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href={CONTACT.phoneHref} aria-label="Chiama" className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg"><Phone className="h-5 w-5" /></a>
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lg"><MessageCircle className="h-5 w-5" /></a>
    </div>
  );
}
