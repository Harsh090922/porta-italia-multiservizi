export type ServiceDetail = {
  slug: string;
  title: string;
  intro: string;
  audience: string[];
  items: string[];
  documents: string[];
  notes?: string;
  business?: boolean;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "ambasciate-consolati",
    title: "Ambasciate e Consolati",
    intro: "Prepariamo, verifichiamo e seguiamo le pratiche consolari presso le Ambasciate e i Consolati di tutti i Paesi presenti in Italia, evitandoti errori, attese e appuntamenti persi.",
    audience: ["Cittadini stranieri residenti in Italia", "Italiani che devono presentare documenti a un Paese estero", "Famiglie con pratiche per figli minori"],
    items: ["Rilascio e rinnovo del passaporto", "Visti turistici, di studio e di lavoro", "Prenotazione appuntamenti consolari", "Procure generali e speciali", "Certificati di stato civile e nulla osta al matrimonio", "Legalizzazione di atti presso la rappresentanza", "Compilazione moduli online dei portali consolari"],
    documents: ["Documento d'identità o passaporto (anche scaduto)", "Permesso di soggiorno, se cittadino straniero", "Fototessere secondo le specifiche del Consolato", "Documenti specifici richiesti dalla pratica (atti, certificati)"],
    notes: "Requisiti, costi consolari e tempi variano da Paese a Paese: ti diamo l'elenco preciso al primo contatto.",
  },
  {
    slug: "unicom",
    title: "Servizi UniCom",
    intro: "Gestiamo per conto dell'azienda le comunicazioni obbligatorie verso i Centri per l'Impiego e il Ministero del Lavoro, nei tempi previsti dalla legge.",
    audience: ["Aziende e datori di lavoro", "Famiglie che assumono colf e badanti", "Professionisti con dipendenti"],
    items: ["Comunicazione di assunzione (entro il giorno precedente l'inizio)", "Proroghe e trasformazioni del contratto", "Cessazioni del rapporto di lavoro", "Comunicazioni per lavoro intermittente e somministrato", "Tirocini e distacchi", "Verifica scadenze e prevenzione sanzioni"],
    documents: ["Dati e visura dell'azienda", "Documento d'identità e codice fiscale del lavoratore", "Permesso di soggiorno del lavoratore straniero", "Dati del contratto (tipologia, orario, CCNL, retribuzione)"],
    business: true,
  },
  {
    slug: "carta-blu-mobilita",
    title: "Mobilità Aziendale e Carta Blu",
    intro: "Accompagniamo le aziende nell'assunzione e nel trasferimento di personale straniero qualificato, dalla Carta Blu UE al nulla osta al lavoro.",
    audience: ["Aziende che assumono lavoratori extra UE qualificati", "Gruppi con trasferimenti intra-societari", "Uffici HR e studi di consulenza"],
    items: ["Domanda di Carta Blu UE per lavoratori altamente qualificati", "Nulla osta al lavoro presso lo Sportello Unico per l'Immigrazione", "Distacchi e trasferimenti internazionali del personale", "Verifica requisiti di reddito e titoli di studio", "Ricongiungimento familiare del lavoratore", "Rilascio e rinnovo del permesso di soggiorno"],
    documents: ["Visura camerale e dati dell'azienda", "Proposta di contratto o lettera d'incarico", "Passaporto del lavoratore", "Titolo di studio ed eventuale dichiarazione di valore", "Curriculum e documentazione dell'esperienza"],
    business: true,
  },
  {
    slug: "comunali",
    title: "Servizi Comunali",
    intro: "Ti seguiamo nelle pratiche con il Comune, dalla residenza ai certificati, così da non perdere tempo tra sportelli e moduli.",
    audience: ["Chi cambia casa o città", "Cittadini stranieri al primo arrivo", "Famiglie che preparano un ricongiungimento"],
    items: ["Cambio di residenza e iscrizione anagrafica", "Certificato di idoneità alloggiativa", "Certificati anagrafici e di stato civile", "Stato di famiglia e autocertificazioni", "Richiesta della carta d'identità elettronica"],
    documents: ["Documento d'identità", "Codice fiscale", "Contratto di affitto o atto di proprietà", "Planimetria dell'abitazione (per l'idoneità alloggiativa)"],
  },
  {
    slug: "spid",
    title: "Assistenza SPID",
    intro: "Creiamo e attiviamo insieme a te la tua Identità Digitale per accedere ai servizi online di INPS, Agenzia delle Entrate, Comune e sanità.",
    audience: ["Chi non ha ancora lo SPID", "Chi ha perso le credenziali", "Persone poco pratiche con la tecnologia"],
    items: ["Creazione e riconoscimento dell'identità SPID", "Attivazione dell'app sullo smartphone", "Recupero password e sblocco credenziali", "Primo accesso guidato ai portali della PA"],
    documents: ["Documento d'identità valido", "Tessera sanitaria / codice fiscale", "Indirizzo email personale", "Smartphone con numero di cellulare attivo"],
  },
  {
    slug: "traduzioni-legalizzazioni",
    title: "Traduzione e Legalizzazione Documenti",
    intro: "Rendiamo i tuoi documenti validi in Italia e all'estero: traduzioni certificate e giurate, apostille e legalizzazioni.",
    audience: ["Chi deve presentare documenti esteri in Italia", "Chi deve usare documenti italiani all'estero", "Aziende con atti internazionali"],
    items: ["Traduzioni certificate", "Traduzioni giurate (asseverate) in Tribunale", "Apostille dell'Aja", "Legalizzazioni in Prefettura e presso i Consolati", "Diplomi, atti di nascita e matrimonio, certificati penali, patenti", "Copie conformi"],
    documents: ["Documento originale da tradurre", "Indicazione del Paese e dell'ente di destinazione", "Documento d'identità del richiedente"],
  },
  {
    slug: "inps-inail",
    title: "INPS e INAIL",
    intro: "Controlliamo la tua posizione contributiva e ti assistiamo nelle pratiche di infortunio e malattia professionale.",
    audience: ["Lavoratori dipendenti e autonomi", "Chi ha subito un infortunio sul lavoro", "Chi vuole verificare i propri contributi"],
    items: ["Estratto conto contributivo", "Ricongiunzione e totalizzazione dei contributi", "Denuncia di infortunio e malattia professionale", "Indennizzi e rendite INAIL", "Verifica e correzione della posizione assicurativa"],
    documents: ["Documento d'identità e codice fiscale", "Credenziali SPID (o te le creiamo noi)", "Certificati medici, per pratiche INAIL", "Buste paga o CU degli anni interessati"],
  },
  {
    slug: "caf",
    title: "Servizi CAF – Assistenza Fiscale",
    intro: "Gestiamo il rapporto con il Fisco in modo corretto e senza stress, recuperando ogni detrazione possibile.",
    audience: ["Lavoratori dipendenti e pensionati", "Famiglie che chiedono bonus e agevolazioni", "Proprietari di immobili"],
    items: ["Modello 730 singolo e congiunto", "Modello Redditi Persone Fisiche", "ISEE ordinario, corrente, universitario e socio-sanitario", "Dichiarazione RED", "Calcolo IMU e F24", "Verifica di cartelle e avvisi"],
    documents: ["Documento d'identità e codice fiscale", "Certificazione Unica (CU)", "Spese mediche, scolastiche e detraibili", "Contratto d'affitto o dati catastali", "Giacenza e saldo dei conti (per ISEE)"],
  },
  {
    slug: "patronato",
    title: "Patronato",
    intro: "Tuteliamo i tuoi diritti previdenziali e assistenziali, gratuitamente dove previsto dalla legge.",
    audience: ["Lavoratori e disoccupati", "Pensionati e futuri pensionati", "Famiglie con figli", "Persone con disabilità"],
    items: ["Domande di pensione (vecchiaia, anticipata, reversibilità)", "Invalidità civile e Legge 104", "Maternità e congedi parentali", "NASpI e DIS-COLL", "Assegno Unico Universale", "Cittadinanza e permessi di soggiorno"],
    documents: ["Documento d'identità e codice fiscale", "Credenziali SPID", "Documentazione lavorativa o medica legata alla pratica", "ISEE, per alcune prestazioni"],
  },
];

export const STEPS = [
  ["Contatto", "Ci scrivi o prenoti un appuntamento: capiamo subito di cosa hai bisogno."],
  ["Documenti", "Ti diamo la lista precisa dei documenti e li controlliamo insieme."],
  ["Pratica", "Compiliamo e inviamo la pratica agli enti, seguendo ogni passaggio."],
  ["Esito", "Ti aggiorniamo fino alla conclusione e alla consegna."],
] as const;

export const SERVICE_DETAILS_EN: ServiceDetail[] = [
  {
    slug: "ambasciate-consolati",
    title: "Embassies & Consulates",
    intro: "We prepare, check and follow up your consular applications with the embassies and consulates of every country represented in Italy — so you avoid mistakes, delays and missed appointments.",
    audience: ["Foreign nationals living in Italy", "Italians who need to submit documents to another country", "Families handling applications for children"],
    items: ["Passport issue and renewal", "Tourist, study and work visas", "Booking consular appointments", "General and special powers of attorney", "Civil status certificates and certificates of no impediment to marriage", "Legalisation of documents at the consulate", "Completing online consular portal forms"],
    documents: ["ID card or passport (expired ones are fine)", "Residence permit, for non-Italian citizens", "Passport photos meeting the consulate's requirements", "Any documents specific to your application (records, certificates)"],
    notes: "Requirements, consular fees and processing times differ from country to country — we'll give you an exact checklist at our first contact.",
  },
  {
    slug: "unicom",
    title: "UniCom Services",
    intro: "We handle your company's mandatory employment notifications to the Job Centres and the Ministry of Labour, always within the legal deadlines.",
    audience: ["Companies and employers", "Families hiring domestic workers and carers", "Self-employed professionals with staff"],
    items: ["New hire notifications (by the day before the start date)", "Contract extensions and conversions", "Terminations of employment", "Notifications for on-call and agency work", "Internships and secondments", "Deadline monitoring to avoid penalties"],
    documents: ["Company details and Chamber of Commerce extract", "Employee's ID and Italian tax code", "Residence permit for non-EU employees", "Contract details (type, hours, collective agreement, pay)"],
    business: true,
  },
  {
    slug: "carta-blu-mobilita",
    title: "Corporate Mobility & EU Blue Card",
    intro: "We support companies in hiring and relocating skilled international staff, from the EU Blue Card to the work authorisation.",
    audience: ["Companies hiring highly skilled non-EU workers", "Groups with intra-company transfers", "HR departments and consultancy firms"],
    items: ["EU Blue Card applications for highly qualified workers", "Work authorisation (nulla osta) through the Immigration Office", "International secondments and staff transfers", "Checks on salary thresholds and qualifications", "Family reunification for the employee", "Residence permit issue and renewal"],
    documents: ["Chamber of Commerce extract and company details", "Job offer or assignment letter", "Employee's passport", "Degree certificate and, where needed, Declaration of Value", "CV and proof of work experience"],
    business: true,
  },
  {
    slug: "comunali",
    title: "Town Hall Services",
    intro: "We guide you through your dealings with the Comune — from registering your address to obtaining certificates — so you don't waste time queuing and filling in forms.",
    audience: ["People moving home or to a new city", "Foreign nationals who have just arrived", "Families preparing for family reunification"],
    items: ["Change of address and registry registration", "Housing suitability certificate (idoneità alloggiativa)", "Registry and civil status certificates", "Family status certificate and self-declarations", "Electronic ID card applications"],
    documents: ["ID document", "Italian tax code", "Rental agreement or title deed", "Floor plan of the property (for the housing certificate)"],
  },
  {
    slug: "spid",
    title: "SPID Digital Identity",
    intro: "We set up and activate your SPID digital identity with you, giving you access to online services from INPS, the Revenue Agency, your Comune and the health service.",
    audience: ["Anyone who doesn't have SPID yet", "People who have lost their login details", "Those less confident with technology"],
    items: ["SPID creation and identity verification", "Setting up the app on your smartphone", "Password recovery and account unlocking", "Guided first login to public administration portals"],
    documents: ["Valid ID document", "Health card / Italian tax code", "Personal email address", "Smartphone with an active mobile number"],
  },
  {
    slug: "traduzioni-legalizzazioni",
    title: "Document Translation & Legalisation",
    intro: "We make your documents valid in Italy and abroad, with certified and sworn translations, apostilles and legalisations.",
    audience: ["Anyone submitting foreign documents in Italy", "Anyone using Italian documents abroad", "Companies with international paperwork"],
    items: ["Certified translations", "Sworn translations filed at the Court", "Hague Apostille", "Legalisation at the Prefecture and at consulates", "Diplomas, birth and marriage certificates, criminal records, driving licences", "Certified true copies"],
    documents: ["Original document to be translated", "Destination country and receiving authority", "Applicant's ID document"],
  },
  {
    slug: "inps-inail",
    title: "INPS & INAIL",
    intro: "We review your social security contributions and help you with workplace injury and occupational illness claims.",
    audience: ["Employees and self-employed workers", "Anyone injured at work", "Anyone wanting to check their contributions"],
    items: ["Social security contribution statement", "Combining contributions from different schemes", "Reporting workplace injuries and occupational illnesses", "INAIL compensation and annuities", "Checking and correcting your insurance record"],
    documents: ["ID document and Italian tax code", "SPID login (or we'll set it up for you)", "Medical certificates, for INAIL claims", "Payslips or CU statements for the relevant years"],
  },
  {
    slug: "caf",
    title: "CAF Tax Assistance",
    intro: "We handle your tax matters accurately and stress-free, making sure you claim every deduction you're entitled to.",
    audience: ["Employees and pensioners", "Families applying for benefits and allowances", "Property owners"],
    items: ["Form 730 tax return, individual or joint", "Modello Redditi (personal income tax return)", "ISEE: standard, current, university and social-care", "RED income declaration", "IMU property tax and F24 payments", "Reviewing tax bills and notices"],
    documents: ["ID document and Italian tax code", "Certificazione Unica (CU)", "Medical, school and other deductible expenses", "Rental agreement or land registry details", "Bank balances and average holdings (for ISEE)"],
  },
  {
    slug: "patronato",
    title: "Patronato – Welfare & Pensions",
    intro: "We protect your pension and welfare rights, free of charge wherever the law provides.",
    audience: ["Workers and the unemployed", "Pensioners and those about to retire", "Families with children", "People with disabilities"],
    items: ["Pension applications (old-age, early retirement, survivor's)", "Civil disability and Law 104 benefits", "Maternity and parental leave", "NASpI and DIS-COLL unemployment benefits", "Universal Child Allowance (Assegno Unico)", "Citizenship and residence permits"],
    documents: ["ID document and Italian tax code", "SPID login", "Employment or medical records related to your application", "ISEE, for some benefits"],
  },
];

export const STEPS_EN = [
  ["Get in touch", "Message us or book an appointment — we'll quickly understand what you need."],
  ["Documents", "We give you an exact list of documents and check them together with you."],
  ["Application", "We complete and submit your application, following every step with the authorities."],
  ["Outcome", "We keep you updated right through to completion and delivery."],
] as const;

export const getServiceDetails = (lang: "it" | "en") => (lang === "en" ? SERVICE_DETAILS_EN : SERVICE_DETAILS);
export const getSteps = (lang: "it" | "en") => (lang === "en" ? STEPS_EN : STEPS);
