import { Landmark, HeartHandshake, Globe, Building2, Fingerprint, Languages, ShieldCheck, ClipboardCheck, CarFront } from "lucide-react";

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

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
