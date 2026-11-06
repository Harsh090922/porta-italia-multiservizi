import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, SERVICE_OPTIONS, getServices } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e Prenotazioni – PraticheItalia" },
      { name: "description", content: "Prenota una consulenza con PraticheItalia: modulo di contatto, WhatsApp e telefono." },
      { property: "og:title", content: "Contatta PraticheItalia" },
      { property: "og:description", content: "Scrivici, chiamaci o mandaci un WhatsApp: ti rispondiamo in giornata." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contatti,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Contatti() {
  const { lang, t } = useLang();
  const options = getServices(lang).map((s) => s.title);
  const [f, setF] = useState({ nome: "", email: "", telefono: "", servizio: "", data: "", messaggio: "", _gotcha: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
    if (!endpoint || !endpoint.startsWith("https://")) {
      setStatus("error");
      setErrMsg(t("Il servizio di invio non è ancora configurato. Contattaci per telefono o WhatsApp.", "The sending service is not configured yet. Please contact us by phone or WhatsApp."));
      return;
    }
    setStatus("sending");
    try {
      const servizio = SERVICE_OPTIONS[Number(f.servizio)] ?? f.servizio;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Richiesta appuntamento (DA CONFERMARE) – ${servizio}`,
          stato: "Richiesta NON ancora confermata – da confermare manualmente via email",
          nome: f.nome.trim(),
          email: f.email.trim(),
          _replyto: f.email.trim(),
          telefono: f.telefono.trim() || "-",
          servizio,
          data_preferita: f.data || "-",
          messaggio: f.messaggio.trim() || "-",
          _gotcha: f._gotcha,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      setF({ nome: "", email: "", telefono: "", servizio: "", data: "", messaggio: "", _gotcha: "" });
    } catch {
      setStatus("error");
      setErrMsg(t("Invio non riuscito. Controlla la connessione e riprova: i dati inseriti sono stati mantenuti.", "Sending failed. Check your connection and try again: your details have been kept."));
    }
  };
  return (
    <div className="container-page grid gap-12 py-16 md:grid-cols-[1fr_1.3fr]">
      <div>
        <p className="eyebrow">{t("Contatti & Prenotazioni", "Contact & Bookings")}</p>
        <h1 className="mt-3 text-4xl md:text-5xl">{t("Parliamone insieme.", "Let's talk it over.")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("Compila il modulo o contattaci direttamente: ti rispondiamo entro un giorno lavorativo.", "Fill in the form or contact us directly: we reply within one working day.")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-primary-foreground"><MessageCircle className="h-4 w-4" />{t("Scrivici su WhatsApp", "Message us on WhatsApp")}</a>
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"><Phone className="h-4 w-4" />{t("Chiama ora", "Call now")}</a>
        </div>
        <ul className="mt-8 space-y-3">
          <li className="flex gap-2"><MapPin className="h-5 w-5 text-accent" />{CONTACT.address}</li>
          <li className="flex gap-2"><Mail className="h-5 w-5 text-accent" />{CONTACT.email}</li>
        </ul>
      </div>
      <form onSubmit={submit} className="space-y-4 rounded-3xl border border-border bg-card p-8">
        <input required maxLength={100} placeholder={t("Nome e cognome *", "Full name *")} className={field} value={f.nome} onChange={set("nome")} />
        <div className="grid gap-4 sm:grid-cols-2">
          <input required type="email" maxLength={255} placeholder="Email *" className={field} value={f.email} onChange={set("email")} />
          <input type="tel" maxLength={30} placeholder={t("Telefono (facoltativo)", "Phone (optional)")} className={field} value={f.telefono} onChange={set("telefono")} />
        </div>
        <select required className={field} value={f.servizio} onChange={set("servizio")}>
          <option value="" disabled>{t("Servizio richiesto *", "Service required *")}</option>
          {options.map((s, i) => <option key={s} value={i}>{s}</option>)}
        </select>
        <label className="block text-sm text-muted-foreground">
          {t("Data preferita (facoltativa)", "Preferred date (optional)")}
          <input type="date" className={`${field} mt-1`} value={f.data} onChange={set("data")} />
        </label>
        <textarea rows={5} maxLength={2000} placeholder={t("Messaggio aggiuntivo (facoltativo)", "Additional message (optional)")} className={field} value={f.messaggio} onChange={set("messaggio")} />
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={f._gotcha} onChange={set("_gotcha")} />
        <Consent />
        <button disabled={status === "sending"} className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
          {status === "sending" ? t("Invio in corso…", "Sending…") : t("Invia richiesta", "Send request")}
        </button>
        <div aria-live="polite">
          {status === "ok" && <p className="rounded-xl bg-secondary p-4 text-sm font-medium text-primary">{t("Richiesta inviata correttamente. Ti contatteremo per confermare la disponibilità dell'appuntamento.", "Request sent successfully. We will contact you to confirm the availability of your appointment.")}</p>}
          {status === "error" && <p role="alert" className="rounded-xl border border-destructive p-4 text-sm text-destructive">{errMsg}</p>}
        </div>
      </form>
      <BusinessForm />
    </div>
  );
}

function Consent() {
  const { t } = useLang();
  return (
    <label className="flex items-start gap-3 text-sm text-muted-foreground">
      <input required type="checkbox" className="mt-1 h-4 w-4 accent-primary" />
      <span>
        {t("Ho letto l'", "I have read the ")}
        <Link to="/privacy" target="_blank" className="font-medium text-primary underline">{t("informativa privacy", "privacy policy")}</Link>
        {t(" e acconsento al trattamento dei miei dati per ricevere una risposta alla richiesta.", " and consent to the processing of my data to receive a reply to my request.")}
      </span>
    </label>
  );
}

const BUSINESS_TOPICS = [
  ["Comunicazioni obbligatorie UniCom", "Mandatory UniCom employment notifications"],
  ["Carta Blu UE per lavoratori qualificati", "EU Blue Card for skilled workers"],
  ["Distacchi e mobilità internazionale del personale", "Secondments and international staff mobility"],
  ["Nulla osta e pratiche di ingresso per lavoro", "Work entry clearances and permits"],
  ["Altro / consulenza su misura", "Other / tailored advice"],
] as const;

function BusinessForm() {
  const { lang, t } = useLang();
  const en = lang === "en";
  const topics = BUSINESS_TOPICS.map(([it, enT]) => (en ? enT : it));
  const [f, setF] = useState({ azienda: "", referente: "", email: "", telefono: "", ambito: BUSINESS_TOPICS[0][0], dipendenti: "", messaggio: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Azienda: ${f.azienda}\nReferente: ${f.referente}\nEmail: ${f.email}\nTelefono: ${f.telefono}\nAmbito: ${f.ambito}\nLavoratori coinvolti: ${f.dipendenti || "-"}\n\n${f.messaggio}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`[AZIENDA] ${f.ambito} – ${f.azienda}`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="aziende" className="scroll-mt-24 grid gap-8 rounded-3xl border border-border bg-secondary p-8 md:col-span-2 md:grid-cols-[1fr_1.3fr]">
      <div>
        <p className="eyebrow">{t("Per le Aziende", "For Businesses")}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{t("UniCom e Mobilità Aziendale", "UniCom & Corporate Mobility")}</h2>
        <p className="mt-4 text-muted-foreground">{t("Gestisci assunzioni, comunicazioni obbligatorie e pratiche Carta Blu per il tuo personale straniero con un unico referente. Raccontaci le tue esigenze: ti inviamo una proposta su misura entro un giorno lavorativo.", "Handle new hires, mandatory notifications and EU Blue Card procedures for your foreign staff through a single point of contact. Tell us what you need: we'll send you a tailored proposal within one working day.")}</p>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input required maxLength={150} placeholder={t("Ragione sociale", "Company name")} className={field} value={f.azienda} onChange={set("azienda")} />
          <input required maxLength={100} placeholder={t("Referente / HR", "Contact person / HR")} className={field} value={f.referente} onChange={set("referente")} />
          <input required type="email" maxLength={255} placeholder={t("Email aziendale", "Business email")} className={field} value={f.email} onChange={set("email")} />
          <input type="tel" maxLength={30} placeholder={t("Telefono", "Phone")} className={field} value={f.telefono} onChange={set("telefono")} />
        </div>
        <select className={field} value={f.ambito} onChange={set("ambito")}>{topics.map((s) => <option key={s}>{s}</option>)}</select>
        <input type="number" min={1} placeholder={t("N. lavoratori coinvolti (facoltativo)", "No. of workers involved (optional)")} className={field} value={f.dipendenti} onChange={set("dipendenti")} />
        <textarea required rows={4} maxLength={2000} placeholder={t("Descrivi la tua richiesta", "Describe your request")} className={field} value={f.messaggio} onChange={set("messaggio")} />
        <Consent />
        <button className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90">{t("Richiedi informazioni", "Request information")}</button>
      </form>
    </section>
  );
}
