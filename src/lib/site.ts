import { Landmark, HeartHandshake, Plane, Building2, Fingerprint, FileText, ShieldCheck } from "lucide-react";

export const CONTACT = {
  phone: "+39 000 000 0000",
  phoneHref: "tel:+390000000000",
  whatsapp: "https://wa.me/390000000000",
  email: "info@portaitalia.it",
  address: "Via Roma 1, 00100 Città (IT)",
  mapQuery: "Via Roma 1 Italia",
  hours: [
    ["Lunedì – Venerdì", "9:00 – 13:00 · 15:00 – 19:00"],
    ["Sabato", "9:00 – 13:00"],
    ["Domenica", "Chiuso"],
  ],
};

export const SERVICES = [
  { icon: Landmark, title: "Servizi CAF", text: "Dichiarazione dei redditi (730, Modello Redditi PF), ISEE, RED, bonus e agevolazioni fiscali." },
  { icon: HeartHandshake, title: "Patronato", text: "Pensioni, invalidità civile, maternità, NASpI, assegno unico, cittadinanza e permessi di soggiorno." },
  { icon: Plane, title: "Consolato e Ambasciata Indiana", text: "Passaporti, visti, OCI card, legalizzazioni e procure con Ambasciata e Consolati indiani." },
  { icon: Building2, title: "Servizi Comunali", text: "Cambio residenza, idoneità alloggiativa, iscrizione anagrafica, certificati e pratiche locali." },
  { icon: Fingerprint, title: "Assistenza SPID", text: "Creazione, attivazione e gestione della tua Identità Digitale, passo dopo passo." },
  { icon: FileText, title: "Curriculum Vitae", text: "CV in formato Europeo o personalizzato e lettere di presentazione che fanno la differenza." },
  { icon: ShieldCheck, title: "INPS e INAIL", text: "Pratiche previdenziali, infortuni sul lavoro, estratto conto contributivo e posizioni assicurative." },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
