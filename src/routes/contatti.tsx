import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, SERVICE_OPTIONS } from "@/lib/site";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e Prenotazioni – Porta Italia" },
      { name: "description", content: "Prenota una consulenza con Porta Italia: modulo di contatto, WhatsApp e telefono." },
      { property: "og:title", content: "Contatta Porta Italia" },
      { property: "og:description", content: "Scrivici, chiamaci o mandaci un WhatsApp: ti rispondiamo in giornata." },
    ],
  }),
  component: Contatti,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Contatti() {
  const [f, setF] = useState({ nome: "", email: "", telefono: "", servizio: SERVICE_OPTIONS[0], messaggio: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nome: ${f.nome}\nEmail: ${f.email}\nTelefono: ${f.telefono}\nServizio: ${f.servizio}\n\n${f.messaggio}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Richiesta consulenza – " + f.servizio)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div className="container-page grid gap-12 py-16 md:grid-cols-[1fr_1.3fr]">
      <div>
        <p className="eyebrow">Contatti & Prenotazioni</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Parliamone insieme.</h1>
        <p className="mt-4 text-lg text-muted-foreground">Compila il modulo o contattaci direttamente: ti rispondiamo entro un giorno lavorativo.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-primary-foreground"><MessageCircle className="h-4 w-4" />Scrivici su WhatsApp</a>
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"><Phone className="h-4 w-4" />Chiama ora</a>
        </div>
        <ul className="mt-8 space-y-3">
          <li className="flex gap-2"><MapPin className="h-5 w-5 text-accent" />{CONTACT.address}</li>
          <li className="flex gap-2"><Mail className="h-5 w-5 text-accent" />{CONTACT.email}</li>
        </ul>
      </div>
      <form onSubmit={submit} className="space-y-4 rounded-3xl border border-border bg-card p-8">
        <input required placeholder="Nome e cognome" className={field} value={f.nome} onChange={set("nome")} />
        <div className="grid gap-4 sm:grid-cols-2">
          <input required type="email" placeholder="Email" className={field} value={f.email} onChange={set("email")} />
          <input type="tel" placeholder="Telefono" className={field} value={f.telefono} onChange={set("telefono")} />
        </div>
        <select className={field} value={f.servizio} onChange={set("servizio")}>{SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}</select>
        <textarea required rows={5} placeholder="Come possiamo aiutarti?" className={field} value={f.messaggio} onChange={set("messaggio")} />
        <button className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90">Invia richiesta</button>
      </form>
      <BusinessForm />
    </div>
  );
}

const BUSINESS_TOPICS = [
  "Comunicazioni obbligatorie UniCom",
  "Carta Blu UE per lavoratori qualificati",
  "Distacchi e mobilità internazionale del personale",
  "Nulla osta e pratiche di ingresso per lavoro",
  "Altro / consulenza su misura",
];

function BusinessForm() {
  const [f, setF] = useState({ azienda: "", referente: "", email: "", telefono: "", ambito: BUSINESS_TOPICS[0], dipendenti: "", messaggio: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Azienda: ${f.azienda}\nReferente: ${f.referente}\nEmail: ${f.email}\nTelefono: ${f.telefono}\nAmbito: ${f.ambito}\nLavoratori coinvolti: ${f.dipendenti || "-"}\n\n${f.messaggio}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`[AZIENDA] ${f.ambito} – ${f.azienda}`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="aziende" className="scroll-mt-24 grid gap-8 rounded-3xl border border-border bg-secondary p-8 md:col-span-2 md:grid-cols-[1fr_1.3fr]">
      <div>
        <p className="eyebrow">Per le Aziende</p>
        <h2 className="mt-3 text-3xl md:text-4xl">UniCom e Mobilità Aziendale</h2>
        <p className="mt-4 text-muted-foreground">Gestisci assunzioni, comunicazioni obbligatorie e pratiche Carta Blu per il tuo personale straniero con un unico referente. Raccontaci le tue esigenze: ti inviamo una proposta su misura entro un giorno lavorativo.</p>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input required maxLength={150} placeholder="Ragione sociale" className={field} value={f.azienda} onChange={set("azienda")} />
          <input required maxLength={100} placeholder="Referente / HR" className={field} value={f.referente} onChange={set("referente")} />
          <input required type="email" maxLength={255} placeholder="Email aziendale" className={field} value={f.email} onChange={set("email")} />
          <input type="tel" maxLength={30} placeholder="Telefono" className={field} value={f.telefono} onChange={set("telefono")} />
        </div>
        <select className={field} value={f.ambito} onChange={set("ambito")}>{BUSINESS_TOPICS.map((s) => <option key={s}>{s}</option>)}</select>
        <input type="number" min={1} placeholder="N. lavoratori coinvolti (facoltativo)" className={field} value={f.dipendenti} onChange={set("dipendenti")} />
        <textarea required rows={4} maxLength={2000} placeholder="Descrivi la tua richiesta" className={field} value={f.messaggio} onChange={set("messaggio")} />
        <button className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90">Richiedi informazioni</button>
      </form>
    </section>
  );
}
