import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, FileText, Users, MessageCircle } from "lucide-react";
import { SERVICE_DETAILS, STEPS } from "@/lib/service-details";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/servizi_/$slug")({
  loader: ({ params }) => {
    const s = SERVICE_DETAILS.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} – Porta Italia` },
          { name: "description", content: loaderData.intro },
          { property: "og:title", content: `${loaderData.title} – Porta Italia` },
          { property: "og:description", content: loaderData.intro },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/servizi/${params.slug}` },
          { name: "twitter:card", content: "summary" },
        ]
      : [{ title: "Servizio non trovato – Porta Italia" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl">Servizio non trovato</h1>
      <Link to="/servizi" className="mt-6 inline-block text-primary underline">Torna ai servizi</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const s = Route.useLoaderData();
  const others = SERVICE_DETAILS.filter((x) => x.slug !== s.slug).slice(0, 3);
  const wa = `${CONTACT.whatsapp}?text=${encodeURIComponent(`Buongiorno, vorrei informazioni sul servizio: ${s.title}`)}`;
  return (
    <div className="container-page py-16">
      <Link to="/servizi" className="text-sm text-muted-foreground hover:text-foreground">← Tutti i servizi</Link>
      <p className="eyebrow mt-6">Servizio</p>
      <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">{s.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{s.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {s.business ? (
          <Link to="/contatti" hash="aziende" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Richiedi informazioni per la tua azienda</Link>
        ) : (
          <Link to="/contatti" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Prenota per questo servizio</Link>
        )}
        <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:bg-secondary"><MessageCircle className="h-5 w-5" />Chiedi su WhatsApp</a>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-border bg-card p-8 md:col-span-2">
          <h2 className="text-2xl">Cosa facciamo per te</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">{s.items.map((it) => <li key={it} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{it}</li>)}</ul>
        </section>
        <section className="rounded-3xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-2 text-2xl"><Users className="h-6 w-6 text-accent" />A chi si rivolge</h2>
          <ul className="mt-5 space-y-2">{s.audience.map((a) => <li key={a} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{a}</li>)}</ul>
        </section>
        <section className="rounded-3xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-2 text-2xl"><FileText className="h-6 w-6 text-accent" />Documenti da preparare</h2>
          <ul className="mt-5 space-y-2">{s.documents.map((d) => <li key={d} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{d}</li>)}</ul>
          {s.notes && <p className="mt-5 text-sm text-muted-foreground">{s.notes}</p>}
        </section>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">Come funziona</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-border p-6"><span className="font-display text-3xl text-accent">0{i + 1}</span><h3 className="mt-2 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">Altri servizi</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/servizi/$slug" params={{ slug: o.slug }} className="rounded-2xl border border-border bg-card p-6 hover:border-accent">
              <h3 className="text-lg font-semibold">{o.title}</h3><span className="mt-2 inline-block text-sm text-primary">Scopri di più →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
