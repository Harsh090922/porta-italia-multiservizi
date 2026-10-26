import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi – Porta Italia" },
      { name: "description", content: "CAF, Patronato, Ambasciate e Consolati di tutti i Paesi, pratiche comunali, SPID, traduzioni e legalizzazioni, INPS e INAIL: tutti i servizi di Porta Italia." },
      { property: "og:title", content: "Tutti i servizi di Porta Italia" },
      { property: "og:description", content: "Assistenza fiscale, previdenziale, consolare, di traduzione e amministrativa in un unico studio." },
    ],
  }),
  component: Servizi,
});

const AREAS = [
  { t: "Ambasciate e Consolati", d: "Prepariamo e verifichiamo ogni pratica consolare presso Ambasciate e Consolati di tutti i Paesi.", items: ["Rinnovo e rilascio passaporto", "Visti e carte consolari", "Legalizzazioni e apostille", "Procure e attestati"] },
  { t: "Servizi UniCom", d: "Gestiamo per conto tuo le comunicazioni obbligatorie verso i Centri per l'Impiego, senza errori e nei tempi di legge.", items: ["Comunicazioni obbligatorie UniCom", "Assunzioni, proroghe, trasformazioni e cessazioni", "Comunicazioni per lavoro intermittente e somministrato", "Adempimenti telematici per datori di lavoro"] },
  { t: "Mobilità Aziendale & Carta Blu", d: "Supportiamo le aziende che assumono o distaccano personale straniero, dalla Carta Blu UE alle pratiche di ingresso.", items: ["Carta Blu UE per lavoratori altamente qualificati", "Distacchi e trasferte internazionali del personale", "Nulla osta e pratiche di ingresso per lavoro", "Supporto HR per aziende con personale straniero"] },
  { t: "Burocrazia Locale & Digitale", d: "Dal Comune al mondo digitale: ti guidiamo nelle pratiche di tutti i giorni.", items: ["Cambio residenza e iscrizione anagrafica", "Idoneità alloggiativa", "Certificati e pratiche comunali", "Creazione e attivazione SPID", "Supporto accesso ai portali PA"] },
  { t: "Traduzione e Legalizzazione Documenti", d: "Documenti pronti per essere usati in Italia o all'estero, senza errori e senza file in ambasciata.", items: ["Traduzioni certificate e asseverate", "Traduzioni giurate in tribunale", "Apostille e legalizzazioni", "Copie conformi e dichiarazioni di conformità", "Interpreti e supporto in sede"] },
  { t: "Lavoro", d: "Supporto per chi lavora, chi cerca lavoro e chi ha bisogno di tutela.", items: ["Pratiche INPS ed estratto contributivo", "Denunce e pratiche INAIL per infortuni", "Posizioni assicurative"] },
  { t: "CAF – Assistenza Fiscale", d: "Ti aiutiamo a gestire il rapporto con il Fisco in modo corretto e senza stress, recuperando ogni detrazione possibile.", items: ["Modello 730 e Modello Redditi PF", "ISEE ordinario, corrente e universitario", "Dichiarazione RED", "Bonus e agevolazioni fiscali", "IMU e verifica cartelle"] },
  { t: "Patronato", d: "Tuteliamo i tuoi diritti previdenziali e assistenziali, gratuitamente dove previsto dalla legge.", items: ["Domande di pensione", "Invalidità civile e Legge 104", "Maternità e congedi parentali", "Disoccupazione NASpI", "Assegno Unico Universale", "Cittadinanza e permessi di soggiorno"] },
];

function Servizi() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow">Servizi</p>
      <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">Sei aree, un'unica squadra al tuo fianco.</h1>
      <div className="mt-12 space-y-6">
        {AREAS.map((a, i) => (
          <section key={a.t} id={`area-${i}`} className="scroll-mt-24 grid gap-6 rounded-3xl border border-border bg-card p-8 md:grid-cols-[auto_1fr_1fr]">
            <span className="font-display text-5xl text-accent">0{i + 1}</span>
            <div><h2 className="text-2xl md:text-3xl">{a.t}</h2><p className="mt-3 text-muted-foreground">{a.d}</p>
              {(i === 1 || i === 2) && <Link to="/contatti" hash="aziende" className="mt-5 inline-block rounded-full bg-accent px-5 py-2.5 font-semibold text-accent-foreground">Richiedi informazioni per la tua azienda →</Link>}
            </div>
            <ul className="space-y-2">{a.items.map((it) => <li key={it} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{it}</li>)}</ul>
          </section>
        ))}
      </div>
      <div className="mt-12 text-center"><Link to="/contatti" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Prenota una Consulenza</Link></div>
    </div>
  );
}
