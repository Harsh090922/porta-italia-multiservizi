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
