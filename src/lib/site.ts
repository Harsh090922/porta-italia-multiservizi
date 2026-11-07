import { Landmark, HeartHandshake, Globe, Building2, Fingerprint, Languages, ShieldCheck, ClipboardCheck, CarFront } from "lucide-react";
import { SERVICE_DETAILS } from "./service-details";

export const CONTACT = {
  phone: "+39 000 000 0000",
  phoneHref: "tel:+390000000000",
  whatsapp: "https://wa.me/390000000000",
  email: "info@praticheitalia.com",
  address: "Via Volturno 6/A, 43125 Parma (PR)",
  mapQuery: "Via Volturno 6/A, 43125 Parma PR",
  hours: [
    ["Lunedì – Venerdì", "9:00 – 13:00 · 15:00 – 19:00"],
    ["Sabato", "9:00 – 13:00"],
    ["Domenica", "Chiuso"],
  ],
};

const SERVICE_SUMMARIES = [
  { icon: Globe, title: "Ambasciate e Consolati", text: "Passaporti, visti, rinnovi consolari, legalizzazioni e procure presso Ambasciate e Consolati di tutti i Paesi." },
  { icon: ClipboardCheck, title: "Servizi UniCom", text: "Comunicazioni obbligatorie, assunzioni, trasformazioni e adempimenti telematici per datori di lavoro." },
  { icon: CarFront, title: "Mobilità Aziendale e Carta Blu", text: "Carta Blu UE, distacchi e pratiche di mobilità internazionale del personale per le aziende." },
  { icon: Building2, title: "Servizi Comunali", text: "Cambio residenza, idoneità alloggiativa, iscrizione anagrafica, certificati e pratiche locali." },
  { icon: Fingerprint, title: "Assistenza SPID", text: "Creazione, attivazione e gestione della tua Identità Digitale, passo dopo passo." },
  { icon: Languages, title: "Traduzione e Legalizzazione Documenti", text: "Traduzioni certificate e giurate, apostille e legalizzazioni per ogni tipo di documento." },
  { icon: ShieldCheck, title: "INPS e INAIL", text: "Pratiche previdenziali, infortuni sul lavoro, estratto conto contributivo e posizioni assicurative." },
  { icon: Landmark, title: "Servizi CAF", text: "Dichiarazione dei redditi (730, Modello Redditi PF), ISEE, RED, bonus e agevolazioni fiscali." },
  { icon: HeartHandshake, title: "Patronato", text: "Pensioni, invalidità civile, maternità, NASpI, assegno unico, cittadinanza e permessi di soggiorno." },
];

export const SERVICES = SERVICE_SUMMARIES.map((service, index) => ({
  ...service,
  slug: SERVICE_DETAILS[index]?.slug ?? "",
}));

const SUMMARIES_EN = [
  ["Embassies & Consulates", "Passports, visas, consular renewals, legalisations and powers of attorney with the embassies and consulates of every country."],
  ["UniCom Services", "Mandatory employment notifications, new hires, contract changes and online filings for employers."],
  ["Corporate Mobility & EU Blue Card", "EU Blue Card, secondments and international staff mobility procedures for companies."],
  ["Town Hall Services", "Change of address, housing suitability, registry enrolment, certificates and local paperwork."],
  ["SPID Digital Identity", "Setting up, activating and managing your digital identity, step by step."],
  ["Document Translation & Legalisation", "Certified and sworn translations, apostilles and legalisations for any type of document."],
  ["INPS & INAIL", "Social security matters, workplace injuries, contribution statements and insurance records."],
  ["CAF Tax Assistance", "Tax returns (730, Modello Redditi), ISEE, RED, tax credits and benefits."],
  ["Patronato – Welfare & Pensions", "Pensions, civil disability, maternity, NASpI, child allowance, citizenship and residence permits."],
];

export const getServices = (lang: "it" | "en") =>
  lang === "en" ? SERVICES.map((s, i) => ({ ...s, title: SUMMARIES_EN[i]?.[0] ?? s.title, text: SUMMARIES_EN[i]?.[1] ?? s.text })) : SERVICES;

export const HOURS_EN = [
  ["Monday – Friday", "9:00 – 13:00 · 15:00 – 19:00"],
  ["Saturday", "9:00 – 13:00"],
  ["Sunday", "Closed"],
];
export const getHours = (lang: "it" | "en") => (lang === "en" ? HOURS_EN : CONTACT.hours);

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
