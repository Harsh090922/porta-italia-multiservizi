import { createFileRoute, Link } from "@tanstack/react-router";
import { BookUser, IdCard, Stamp, ScrollText } from "lucide-react";

export const Route = createFileRoute("/comunita-indiana")({
  head: () => ({
    meta: [
      { title: "Servizi Consolari Indiani – Porta Italia" },
      { name: "description", content: "Passaporti, OCI card, legalizzazioni e attestati per cittadini indiani in Italia. Indian consular services in Italy, in Italian and English." },
      { property: "og:title", content: "Servizi Consolari per la Comunità Indiana" },
      { property: "og:description", content: "Passport, OCI, legalization and attestation services for Indians in Italy." },
    ],
  }),
  component: Page,
});

const ITEMS = [
  { icon: BookUser, it: "Passaporti", en: "Passports", dit: "Rinnovo, smarrimento e aggiornamento dati: compiliamo la domanda e prepariamo la documentazione.", den: "Renewal, lost passport and data updates: we fill in the application and prepare all documents." },
  { icon: IdCard, it: "OCI Card", en: "OCI Card", dit: "Nuova richiesta, rinnovo e trasferimento OCI per te e per i tuoi figli nati in Italia.", den: "New applications, renewals and OCI transfers for you and your children born in Italy." },
  { icon: Stamp, it: "Legalizzazioni", en: "Legalization", dit: "Legalizzazione e apostille di documenti italiani e indiani, traduzioni incluse.", den: "Legalization and apostille of Italian and Indian documents, translations included." },
  { icon: ScrollText, it: "Attestati e Procure", en: "Attestations & Power of Attorney", dit: "Procure, dichiarazioni giurate e attestati presso Ambasciata e Consolati indiani.", den: "Powers of attorney, affidavits and attestations with the Indian Embassy and Consulates." },
];

function Page() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow">Comunità Indiana · Indian Community</p>
      <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">Servizi consolari, vicino a casa.</h1>
      <p className="mt-2 font-display text-2xl italic text-muted-foreground">Consular services, close to home.</p>
      <div className="mt-6 grid max-w-4xl gap-4 text-lg text-muted-foreground md:grid-cols-2">
        <p>Sappiamo quanto sia importante restare legati all'India vivendo in Italia. Ti seguiamo in ogni pratica con Ambasciata e Consolati, evitando errori e viaggi inutili.</p>
        <p>We know how important it is to stay connected to India while living in Italy. We guide you through every procedure with the Embassy and Consulates, avoiding mistakes and wasted trips.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {ITEMS.map(({ icon: I, it, en, dit, den }) => (
          <section key={it} className="rounded-3xl border border-border bg-card p-8">
            <I className="h-8 w-8 text-accent" />
            <h2 className="mt-4 text-2xl">{it} <span className="text-muted-foreground">/ {en}</span></h2>
            <p className="mt-3">{dit}</p>
            <p className="mt-2 text-muted-foreground italic">{den}</p>
          </section>
        ))}
      </div>
      <div className="mt-12 rounded-3xl bg-primary p-10 text-center text-primary-foreground">
        <h2 className="text-3xl">Prenota il tuo appuntamento · Book your appointment</h2>
        <Link to="/contatti" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Contattaci / Contact us</Link>
      </div>
    </div>
  );
}
