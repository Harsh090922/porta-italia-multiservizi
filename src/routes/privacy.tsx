import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Informativa Privacy | PraticheItalia" },
      { name: "description", content: "Informativa sul trattamento dei dati personali di PraticheItalia ai sensi degli artt. 13-14 del Regolamento UE 2016/679 (GDPR)." },
      { property: "og:title", content: "Informativa Privacy | PraticheItalia" },
      { property: "og:description", content: "Come PraticheItalia tratta e protegge i tuoi dati personali, nel rispetto del GDPR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

type Section = { h: [string, string]; p: [string, string][] };

const OWNER = "[Ragione sociale / Nome e Cognome del Titolare] – P.IVA [00000000000]";

const SECTIONS: Section[] = [
  { h: ["1. Titolare del trattamento", "1. Data controller"], p: [[
    `Il Titolare del trattamento è ${OWNER}, con sede in ${CONTACT.address}. Per qualsiasi richiesta relativa ai tuoi dati puoi scrivere a ${CONTACT.email}.`,
    `The data controller is ${OWNER}, located at ${CONTACT.address}. For any request about your data, write to ${CONTACT.email}.`,
  ]] },
  { h: ["2. Quali dati trattiamo", "2. What data we process"], p: [
    ["Dati identificativi e di contatto (nome, cognome, email, telefono, ragione sociale) che ci fornisci tramite i moduli del sito, WhatsApp, telefono o email.", "Identification and contact data (name, surname, email, phone, company name) that you provide through the website forms, WhatsApp, phone or email."],
    ["Per lo svolgimento delle pratiche, ulteriori dati e documenti necessari: codice fiscale, documenti d'identità, permesso di soggiorno, dati reddituali, familiari, lavorativi e – quando indispensabile – dati relativi alla salute (es. pratiche di invalidità). Questi dati appartengono a categorie particolari (art. 9 GDPR) e vengono trattati solo con il tuo consenso esplicito o per adempiere agli incarichi che ci affidi.", "To carry out your procedures, further data and documents may be needed: tax code, ID documents, residence permit, income, family and employment data and, where essential, health data (e.g. disability claims). These are special categories of data (Art. 9 GDPR) and are processed only with your explicit consent or to fulfil the tasks you entrust to us."],
  ] },
  { h: ["3. Perché trattiamo i dati e su quale base", "3. Purposes and legal basis"], p: [
    ["Rispondere alle tue richieste di informazioni e appuntamenti – base giuridica: misure precontrattuali richieste dall'interessato (art. 6.1.b).", "Answering your information and appointment requests – legal basis: pre-contractual steps taken at your request (Art. 6.1.b)."],
    ["Svolgere i servizi richiesti (CAF, Patronato, pratiche consolari, comunali, UniCom, Carta Blu, traduzioni, SPID, INPS/INAIL) – base giuridica: esecuzione del contratto (art. 6.1.b) e consenso esplicito per i dati particolari (art. 9.2.a).", "Providing the services you request (tax assistance, welfare, consular and municipal procedures, UniCom, Blue Card, translations, SPID, INPS/INAIL) – legal basis: performance of a contract (Art. 6.1.b) and explicit consent for special data (Art. 9.2.a)."],
    ["Adempiere a obblighi di legge fiscali, contabili e antiriciclaggio – base giuridica: obbligo legale (art. 6.1.c).", "Complying with tax, accounting and anti-money-laundering obligations – legal basis: legal obligation (Art. 6.1.c)."],
  ] },
  { h: ["4. Come trattiamo i dati", "4. How we process data"], p: [[
    "I dati sono trattati con strumenti cartacei e informatici, da personale autorizzato e formato, con misure di sicurezza adeguate a prevenirne la perdita, l'uso illecito o l'accesso non autorizzato. Non effettuiamo profilazione né decisioni automatizzate.",
    "Data is processed on paper and electronically by authorised, trained staff, with security measures designed to prevent loss, misuse or unauthorised access. We do not carry out profiling or automated decision-making.",
  ]] },
  { h: ["5. A chi comunichiamo i dati", "5. Who we share data with"], p: [[
    "Solo a quanto necessario per la pratica: enti pubblici (Agenzia delle Entrate, INPS, INAIL, Comuni, Prefetture, Questure), CAF e Patronati convenzionati, Ambasciate e Consolati, traduttori, fornitori informatici e di hosting nominati responsabili del trattamento. I dati non vengono mai venduti né diffusi. Eventuali trasferimenti verso Paesi extra-UE (es. rappresentanze consolari) avvengono solo se necessari all'incarico richiesto (art. 49.1.b GDPR).",
    "Only as needed for your procedure: public bodies (Revenue Agency, INPS, INAIL, municipalities, prefectures, police headquarters), affiliated tax and welfare centres, embassies and consulates, translators, and IT and hosting providers appointed as data processors. Data is never sold or made public. Transfers to non-EU countries (e.g. consular offices) happen only when necessary for the service you requested (Art. 49.1.b GDPR).",
  ]] },
  { h: ["6. Per quanto tempo conserviamo i dati", "6. How long we keep data"], p: [[
    "Le richieste di contatto non seguite da un incarico sono cancellate entro 12 mesi. I dati relativi alle pratiche sono conservati per la durata dell'incarico e, successivamente, per 10 anni per obblighi fiscali e civilistici.",
    "Contact requests that do not lead to an engagement are deleted within 12 months. Data relating to procedures is kept for the duration of the engagement and then for 10 years to meet tax and civil-law obligations.",
  ]] },
  { h: ["7. I tuoi diritti", "7. Your rights"], p: [[
    `Puoi chiedere in qualsiasi momento l'accesso, la rettifica, la cancellazione, la limitazione o la portabilità dei tuoi dati, opporti al trattamento e revocare il consenso, senza pregiudicare i trattamenti già effettuati (artt. 15-22 GDPR). Scrivi a ${CONTACT.email}: rispondiamo entro 30 giorni. Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).`,
    `You may at any time request access to, rectification, erasure, restriction or portability of your data, object to processing and withdraw your consent, without affecting processing already carried out (Arts. 15-22 GDPR). Write to ${CONTACT.email}: we reply within 30 days. You also have the right to lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it).`,
  ]] },
  { h: ["8. Cookie", "8. Cookies"], p: [[
    "Questo sito utilizza solo strumenti tecnici necessari al funzionamento (ad esempio la memorizzazione della lingua scelta) e non usa cookie di profilazione. La mappa incorporata è fornita da Google, che può installare propri cookie secondo la sua informativa.",
    "This website only uses technical tools required for it to work (such as remembering your chosen language) and no profiling cookies. The embedded map is provided by Google, which may set its own cookies under its privacy policy.",
  ]] },
];

function PrivacyPage() {
  const { lang, t } = useLang();
  const i = lang === "en" ? 1 : 0;
  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <p className="eyebrow">GDPR · Reg. UE 2016/679</p>
      <h1 className="mt-3 text-4xl md:text-5xl">{t("Informativa sulla privacy", "Privacy Policy")}</h1>
      <p className="mt-4 text-muted-foreground">{t("Ultimo aggiornamento: novembre 2026. Proteggere i tuoi dati è parte del nostro lavoro: qui ti spieghiamo in modo chiaro quali informazioni raccogliamo, perché e come puoi controllarle.", "Last updated: November 2026. Protecting your data is part of our job: here we explain clearly what information we collect, why, and how you stay in control of it.")}</p>
      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <section key={s.h[0]}>
            <h2 className="text-2xl">{s.h[i]}</h2>
            <div className="mt-3 space-y-3 text-muted-foreground">
              {s.p.map((para) => <p key={para[0]}>{para[i]}</p>)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
