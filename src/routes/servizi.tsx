import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { getServiceDetails } from "@/lib/service-details";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi – PraticheItalia" },
      { name: "description", content: "Ambasciate e Consolati di tutti i Paesi, UniCom, mobilità aziendale e Carta Blu, Comune, SPID, traduzioni, INPS e INAIL, CAF e Patronato: scopri i nove servizi di PraticheItalia." },
      { property: "og:title", content: "Tutti i servizi di PraticheItalia" },
      { property: "og:description", content: "Assistenza fiscale, previdenziale, consolare, di traduzione e amministrativa in un unico studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servizi,
});

function Servizi() {
  const { lang, t } = useLang();
  return (
    <div className="container-page py-16">
      <p className="eyebrow">{t("Servizi", "Services")}</p>
      <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">{t("Nove servizi, un'unica squadra al tuo fianco.", "Nine services, one team by your side.")}</h1>
      <div className="mt-12 space-y-6">
        {getServiceDetails(lang).map((a, i) => (
          <section key={a.slug} id={`area-${i}`} className="scroll-mt-24 grid gap-6 border-b border-border py-8 md:grid-cols-[auto_1fr_1fr]">
            <span className="font-display text-5xl text-accent">0{i + 1}</span>
            <div><h2 className="text-2xl md:text-3xl"><Link to="/servizi/$slug" params={{ slug: a.slug }} className="hover:text-accent">{a.title}</Link></h2><p className="mt-3 text-muted-foreground">{a.intro}</p>
              <Button asChild variant="link" className="mt-3 h-auto justify-start whitespace-normal px-0 text-left"><Link to="/servizi/$slug" params={{ slug: a.slug }}>{t("Scopri tutti i dettagli", "See all the details")} <ArrowRight /></Link></Button>
              {a.business && <Button asChild variant="outline" className="mt-3 h-auto whitespace-normal py-3 text-left"><Link to="/contatti" hash="aziende">{t("Richiedi informazioni per la tua azienda", "Request information for your company")} <ArrowRight /></Link></Button>}
            </div>
            <ul className="space-y-2">{a.items.slice(0, 4).map((it) => <li key={it} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{it}</li>)}</ul>
          </section>
        ))}
      </div>
      <div className="mt-12 text-center"><Button asChild size="lg"><Link to="/contatti">{t("Prenota una Consulenza", "Book a Consultation")}</Link></Button></div>
    </div>
  );
}
