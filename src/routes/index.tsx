import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Languages, Zap, MapPin, Star, Clock, Phone, MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CONTACT, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Porta Italia – CAF, Patronato, Traduzioni e Servizi Consolari" },
      { name: "description", content: "Assistenza fiscale, patronato, pratiche comunali, SPID, traduzioni e servizi consolari per Ambasciate e Consolati di tutti i Paesi. Semplice, chiaro, vicino a te." },
      { property: "og:title", content: "Porta Italia – Burocrazia semplice, per tutti" },
      { property: "og:description", content: "CAF, Patronato, SPID, Comune, traduzioni e servizi consolari in un unico studio." },
    ],
  }),
  component: Index,
});

const WHY = [
  { icon: Award, t: "Competenza", d: "Operatori formati e aggiornati sulle normative fiscali e previdenziali." },
  { icon: Languages, t: "Multilingue", d: "Ti seguiamo in italiano e in inglese, con attenzione alla comunità indiana." },
  { icon: Zap, t: "Efficienza", d: "Tempi chiari, documenti verificati, nessuna sorpresa." },
  { icon: MapPin, t: "Vicinanza", d: "Uno sportello di quartiere dove ti conosciamo per nome." },
];

const REVIEWS = [
  { n: "Rajesh K.", t: "Mi hanno aiutato con il rinnovo del passaporto e l'OCI card per tutta la famiglia. Veloci e chiarissimi." },
  { n: "Giulia M.", t: "Il 730 fatto in mezz'ora, con tutte le detrazioni spiegate. Finalmente qualcuno che ti ascolta." },
  { n: "Harpreet S.", t: "Pratica di cittadinanza seguita dall'inizio alla fine. Mi sono sentito accompagnato in ogni passo." },
];

function Index() {
  return (
    <>
      <section className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">CAF · Patronato · Servizi Consolari</p>
          <h1 className="mt-4 text-4xl leading-tight md:text-6xl">La tua porta verso una burocrazia <em className="text-accent">semplice</em>.</h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">Fisco, pensioni, permessi, SPID, traduzioni e pratiche consolari presso Ambasciate e Consolati di tutti i Paesi: ci occupiamo noi delle carte, tu pensa a ciò che conta.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contatti" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Prenota una Consulenza</Link>
            <Link to="/servizi" className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-secondary">Scopri i Servizi</Link>
          </div>
        </div>
        <img src={hero} alt="Consulente Porta Italia con una famiglia" width={1600} height={1104} className="rounded-3xl shadow-2xl" />
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <div><p className="eyebrow">Chi siamo</p><h2 className="mt-3 text-3xl md:text-4xl">Un unico sportello, tante risposte.</h2></div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Porta Italia è uno studio multiservizi che accompagna cittadini italiani e stranieri in ogni pratica fiscale, previdenziale e amministrativa.</p>
            <p>La nostra missione è semplice: trasformare procedure complesse in passaggi chiari, con trasparenza, ascolto e un'attenzione speciale alla comunità indiana in Italia.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">I nostri servizi</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Tutto ciò che ti serve, in un solo posto.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: I, title, text }, idx) => (
            <Link key={title} to="/servizi" hash={`area-${[0, 1, 2, 3, 3, 4, 5][idx] ?? 0}`} className="group block rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
              <I className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">Scopri di più →</span>
            </Link>
          ))}
          <Link to="/servizi" className="flex flex-col justify-end rounded-2xl bg-primary p-6 text-primary-foreground">
            <span className="font-display text-2xl">Vedi tutti i dettagli →</span>
          </Link>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page">
          <p className="eyebrow">Perché sceglierci</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Fiducia che si costruisce, pratica dopo pratica.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: I, t, d }) => (
              <div key={t}><I className="h-7 w-7 text-accent" /><h3 className="mt-3 text-xl">{t}</h3><p className="mt-2 text-sm opacity-80">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Dicono di noi</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Le parole dei nostri clienti.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.n} className="rounded-2xl bg-card p-6 shadow-sm">
              <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-4 font-display text-lg">"{r.t}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {r.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-secondary p-8">
          <p className="eyebrow">Contatti rapidi</p>
          <h2 className="mt-3 text-3xl">Passa a trovarci.</h2>
          <p className="mt-4 flex gap-2"><MapPin className="h-5 w-5 text-accent" />{CONTACT.address}</p>
          <div className="mt-4 flex gap-2"><Clock className="h-5 w-5 text-accent" /><ul>{CONTACT.hours.map(([d, h]) => <li key={d}><b>{d}</b> {h}</li>)}</ul></div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"><Phone className="h-4 w-4" />Chiama</a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-primary-foreground"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          </div>
        </div>
        <iframe title="Mappa" className="min-h-80 w-full rounded-3xl border-0" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`} />
      </section>
    </>
  );
}
