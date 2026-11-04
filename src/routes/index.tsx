import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Languages, Zap, MapPin, Star, Clock, Phone, MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CONTACT, getHours, getServices } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Porta Italia – CAF, Patronato, Traduzioni e Servizi Consolari" },
      { name: "description", content: "Assistenza fiscale, patronato, pratiche comunali, SPID, traduzioni e servizi consolari per Ambasciate e Consolati di tutti i Paesi. Semplice, chiaro, vicino a te." },
      { property: "og:title", content: "Porta Italia – Burocrazia semplice, per tutti" },
      { property: "og:description", content: "CAF, Patronato, SPID, Comune, traduzioni e servizi consolari in un unico studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHY_EN = [
  { icon: Award, t: "Expertise", d: "Trained advisers who stay up to date with tax and social security rules." },
  { icon: Languages, t: "Multilingual", d: "We assist you in Italian and English, with special care for foreign communities." },
  { icon: Zap, t: "Efficiency", d: "Clear timelines, checked documents, no surprises." },
  { icon: MapPin, t: "Close to you", d: "A neighbourhood office where we know you by name." },
];

const REVIEWS_EN = [
  { n: "Rajesh K.", t: "They helped the whole family renew our passports and OCI cards. Fast and crystal clear." },
  { n: "Giulia M.", t: "My 730 tax return done in half an hour, with every deduction explained. Finally someone who listens." },
  { n: "Harpreet S.", t: "My citizenship application was handled from start to finish. I felt supported every step of the way." },
];

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
  const { lang, t } = useLang();
  const en = lang === "en";
  return (
    <>
      <section className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl leading-tight md:text-6xl">{en ? <>Your doorway to <em className="text-accent">simple</em> bureaucracy.</> : <>La tua porta verso una burocrazia <em className="text-accent">semplice</em>.</>}</h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">{t("Fisco, pensioni, permessi, SPID, traduzioni e pratiche consolari presso Ambasciate e Consolati di tutti i Paesi: ci occupiamo noi delle carte, tu pensa a ciò che conta.", "Taxes, pensions, permits, SPID, translations and consular services for embassies and consulates of every country: we take care of the paperwork, so you can focus on what matters.")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contatti" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">{t("Prenota una Consulenza", "Book a Consultation")}</Link>
            <Link to="/servizi" className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-secondary">{t("Scopri i Servizi", "Explore our Services")}</Link>
          </div>
        </div>
        <img src={hero} alt={t("Consulente Porta Italia con una famiglia", "Porta Italia adviser with a family")} width={1600} height={1104} className="rounded-3xl shadow-2xl" />
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <div><p className="eyebrow">{t("Chi siamo", "About us")}</p><h2 className="mt-3 text-3xl md:text-4xl">{t("Un unico sportello, tante risposte.", "One office, all the answers.")}</h2></div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>{t("Porta Italia è uno studio multiservizi che accompagna cittadini italiani e stranieri in ogni pratica fiscale, previdenziale e amministrativa.", "Porta Italia is a one-stop service office supporting Italian and foreign residents with every tax, social security and administrative matter.")}</p>
            <p>{t("La nostra missione è semplice: trasformare procedure complesse in passaggi chiari, con trasparenza, ascolto e un'attenzione speciale alle comunità straniere in Italia.", "Our mission is simple: to turn complex procedures into clear steps, with transparency, a listening ear and special care for foreign communities in Italy.")}</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">{t("I nostri servizi", "Our services")}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{t("Tutto ciò che ti serve, in un solo posto.", "Everything you need, in one place.")}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {getServices(lang).map(({ icon: I, title, text, slug }) => (
            <Link key={title} to="/servizi/$slug" params={{ slug }} className="group block rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
              <I className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">{t("Scopri di più →", "Learn more →")}</span>
            </Link>
          ))}
          <Link to="/servizi" className="flex flex-col justify-end rounded-2xl bg-primary p-6 text-primary-foreground">
            <span className="font-display text-2xl">{t("Vedi tutti i dettagli →", "See all the details →")}</span>
          </Link>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page">
          <p className="eyebrow-on-primary">{t("Perché sceglierci", "Why choose us")}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{t("Fiducia che si costruisce, pratica dopo pratica.", "Trust built one case at a time.")}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(en ? WHY_EN : WHY).map(({ icon: I, t, d }) => (
              <div key={t}><I className="h-7 w-7 text-accent-on-primary" /><h3 className="mt-3 text-xl">{t}</h3><p className="mt-2 text-sm opacity-80">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">{t("Dicono di noi", "Testimonials")}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{t("Le parole dei nostri clienti.", "What our clients say.")}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {(en ? REVIEWS_EN : REVIEWS).map((r) => (
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
          <p className="eyebrow">{t("Contatti rapidi", "Quick contacts")}</p>
          <h2 className="mt-3 text-3xl">{t("Passa a trovarci.", "Come and see us.")}</h2>
          <p className="mt-4 flex gap-2"><MapPin className="h-5 w-5 text-accent" />{CONTACT.address}</p>
          <div className="mt-4 flex gap-2"><Clock className="h-5 w-5 text-accent" /><ul>{getHours(lang).map(([d, h]) => <li key={d}><b>{d}</b> {h}</li>)}</ul></div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"><Phone className="h-4 w-4" />{t("Chiama", "Call")}</a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-primary-foreground"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          </div>
        </div>
        <iframe title={t("Mappa", "Map")} className="min-h-80 w-full rounded-3xl border-0" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`} />
      </section>
    </>
  );
}
