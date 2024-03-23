<script setup></script>

<template>
  <div>
    <p class="text-justify py-1">
      La piattaforma Piracy Shield, prevista dalla Legge 14 luglio 2023, n. 93 [1] e dalla relativa delibera AGCOM
      189/23/CONS [2], è un piattaforma progettata per contrastare la pirateria online attraverso l'oscuramento di
      determinati indirizzi IP e DNS utilizzati per la distribuzione di contenuti illegali riguardanti eventi trasmessi
      in diretta.
    </p>
    <p class="text-justify py-1">
      Tramite questa piattaforma, le <strong>aziende private</strong> che dispongono dei diritti d'autore, hanno la
      facoltà di inoltrare segnalazioni (c.d. "ticket") contenente i seguenti dati:
    </p>
    <ul class="list-outside ps-5 list-disc">
      <li class="text-justify py-1">
        nome di dominio completo/FQDN da bloccare (Ad esempio
        <a target="_blank" href="http://www.google.it" class="font-medium text-blue-600 hover:underline"
          >www.google.it</a
        >
        è un FQDN)
      </li>
      <li class="text-justify py-1">
        indirizzi IPv4 e IPv6 da bloccare (Ad esempio 8.8.8.8 è un IPv4 mentre 2001:4860:4860::8888 è un IPv6)
      </li>
      <li class="text-justify py-1">prova digitale forense relativa alla violazione di diritto d'autore segnalata</li>
    </ul>
    <p class="text-justify py-1">
      Gli operatori di telecomunicazioni fissa e mobile operanti in Italia hanno l'onere di richiedere l'accreditamento
      alla piattaforma e successivamente processare entro 30 minuti ogni ticket ricevuto effettuando l'inibizione dei
      FQDN e indirizzi IPv4/v6, bloccando praticamente ogni possibile accesso al sito web che trasmetteva contenuti in
      violazione alle leggi sul diritto d'autore.
    </p>
    <br /><br />
    <h2 class="py-3 sm:py-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      Quali sono i problemi di Piracy Shield?
    </h2>
    <p class="text-justify py-1">
      Una persona comune, priva di esperienza riguardo al funzionamento di Internet, potrebbe a questo punto pensare:
      "Piracy Shield sembra una piattaforma ottima per contrastare la pirateria". Tuttavia, questo rappresenta proprio
      il problema principale. Anche se appare come una soluzione eccellente, nasconde implicazioni oscure difficili da
      individuare senza una piena conoscenza dell'argomento.
    </p>
    <p class="text-justify py-1">Cerchiamo, quindi, di analizzare le principali problematiche:</p>
    <ul class="list-outside ps-5 list-disc">
      <li class="text-justify py-1">
        <strong>Mancanza di controllo da parte di un'autorità pubblica</strong>: con Piracy Shield le società private
        che detengono il copyright di eventi trasmessi in diretta possono inibire l'accesso a siti web ritenuti
        "colpevoli" di avere trasmesso contenuti illegali: la piattaforma infatti verifica solamente se il "ticket" è
        stato compilato correttamente (banalmente la verifica controlla esclusivamente se sono stati inseriti tutti i
        dati richiesti).<br /><br />Non c'è nessun controllo sostanziale da parte di AGCOM o di un'autorità giudiziaria.
        Il rischio di errore umano è sempre presente e con una piattaforma che blocca domini/indirizzi IP su tutte le
        reti gestite da operatori italiani, è estremamente facile commettere errori che portano a interruzioni dei
        servizi <strong>danneggiando siti web legittimi</strong>.<br />In questi casi chi è il responsabile del blocco
        errato? L'azienda privata che ha inserito il "ticket"? AGCOM? O l’ISP che effettua il blocco? Sono previste
        sanzioni per chi effettua iterati blocchi errati? Sono tematiche ancora non chiare, eppure si tratta di domande
        che meriterebbero una risposta definitiva e autorevole.<br /><br />È importante comprendere che il Piracy Shield
        rappresenta uno dei più potenti strumenti di censura adottati nell'Unione Europea per regolare il contenuto su
        Internet: non si tratta di un giocattolo. <br /><strong
          >Un'impresa privata non dovrebbe mai avere il potere di limitare l'accesso ai siti web</strong
        >, poiché le autorità pubbliche sono responsabili di garantire neutralità e trasparenza, aspetti che un'azienda
        privata non potrebbe mai assicurare.<br />Ricordiamo che proprio per questo gli ISP non possono in nessun modo
        effettuare azioni che <strong>ledono la net neutrality</strong>, come definito dalle normative italiane ed
        europee [3][4][5]. Pertanto un ISP potrebbe ricevere querele e richieste di risarcimento dai proprietari delle
        risorse bloccate.
      </li>
      <br /><br />
      <li class="text-justify py-1">
        <strong>Inibizioni di indirizzi IP</strong>: Bloccare il traffico verso indirizzi IP per cercare di impedire
        l'accesso a contenuti illegali su Internet è una soluzione difficilmente applicabile in modo efficiente e
        sicuro.<br /><br />Per cercare di spiegare il motivo per cui non è una buona idea bisogna innanzitutto spiegare
        con molto parole semplici il significato di indirizzo IP, di dominio e di server DNS.<br /><br />Un
        <strong>indirizzo IP</strong> può essere paragonato, nel contesto di Internet, a un'area geografica identificata
        da delle coordinate e da un raggio: ad esempio il server di google.it ha come indirizzo IP 216.58.205.35: questi
        quattro numeri separati da punti rappresentano inequivocabilmente uno, o spesso più di un server sulla rete.<br />Proprio
        come un'area geografica, a seconda della posizione e della dimensione del raggio (10m, 1km, 10km, ...) un
        indirizzo IP può indicare una banca, un ufficio di una PA, un condominio o un intero quartiere, contenente più
        attività diverse e non legate tra loro.<br /><br />Per quanto riguarda i
        <strong>server DNS e domini</strong> invece si può fare un esempio: immaginate una rubrica telefonica (server
        DNS) dove cercando (risoluzione) un nome (dominio) trovate l'indirizzo IP corrispondente. In pratica, il dominio
        è utile perché evita la necessità di inserire manualmente l'indirizzo IP. Banalmente, per una persona, è più
        semplice ricordare google.it invece di 216.58.205.35.<br /><br />Adesso, con queste semplici definizioni, è
        possibile comprendere il significato di bloccare un dominio o un indirizzo IP e le diverse conseguenze che
        queste azioni comportano.<br /><br />Quando si parla di <strong>blocco di dominio</strong> significa impedire la
        risoluzione del dominio, quindi praticamente si rimuove il dominio dalla "rubrica telefonica" (server DNS). Così
        facendo non è più possibile accedere al sito web tramite il suo nome. Tuttavia questa tecnica non è
        completamente efficace perché consente l'accesso tramite l'inserimento manuale del indirizzo IP e, inoltre,
        l'utente potrebbe utilizzare server DNS che non applicano il blocco del contenuto.<br /><br />Con un
        <strong>blocco di indirizzo IP</strong>, invece, l'operatore di telecomunicazioni blocca il traffico verso uno
        specifico indirizzo impedendo qualsiasi accesso. L'utente quindi non può aggirare il blocco con un semplice
        cambio di server DNS.<br /><br />Tuttavia, come si può intuire dalla spiegazione precedente, non è una tecnica
        commisurata, in quanto un indirizzo IP può contenere servizi diversi. Questo lo trasforma in un metodo
        estremamente rischioso e non molto utile per combattere la pirateria.<br />È l’equivalente di porre un intero
        condominio sotto sequestro solo perché uno dei condomini, all’insaputa degli altri, effettuava attività illecite
        dentro la propria abitazione.<br /><br />Attualmente su Internet è comune che un singolo indirizzo IP ospiti
        diversi siti web su un unico server. Per questo motivo, quando si prende la decisione di bloccare un indirizzo
        IP, è cruciale assicurarsi che non sia condiviso da altri servizi al di là di quello illecito che si intende
        bloccare. <br /><br />Tuttavia, non è tecnicamente fattibile garantire con assoluta certezza che un indirizzo IP
        sia utilizzato esclusivamente da un singolo servizio. Pertanto, si corre il rischio di infliggere un danno
        ingiusto a tutti i gestori di siti web che, inconsapevolmente, condividono lo stesso indirizzo IP con il
        distributore di contenuti illeciti. <br /><br />Un'altra questione estremamente problematica è rappresentata dal
        crescente utilizzo delle CDN (Content Delivery Network).<br />Queste reti possono ospitare migliaia di siti web
        utilizzando gli stessi indirizzi IP, in caso di blocco accidentale si corre il rischio di causare enormi
        problemi a una vasta gamma di servizi web completamente legittimi.<br /><br />Riguardo invece all'efficacia, un
        blocco di indirizzo IP funziona veramente così bene?<br />La risposta è sia sì che no. Risulta certamente più
        complesso da superare rispetto a un blocco di dominio. Tuttavia, la possibilità di sostituire rapidamente
        l'indirizzo del server tramite servizi specifici e l'utilizzo di VPN esterne da parte degli utenti finali
        rendono del tutto inefficace l'inibizione del contenuto. <br /><br /><strong
          >Ironicamente (si fa per dire), tramite il blocco di indirizzi IP è più facile bloccare erroneamente siti web
          legittimi che combattere la pirateria.</strong
        >
        È bene inoltre sottolineare che esiste una sentenza della Corte europea dei diritti dell'uomo che considera
        illegittimo il blocco di indirizzi IP condivisi con siti web legittimi [6].
      </li>
      <br /><br />
      <li class="text-justify py-1">
        <strong>Incidenti</strong>: Solamente durante il primo mese di introduzione della piattaforma si sono già
        verificati incidenti:<br />Il <strong>15/02/2024</strong> è stato bloccato l'indirizzo IP
        <strong>104.166.170.62</strong>, causando il totale blocco all’accesso dei siti web
        <strong>www.cloud4c.com</strong> e <strong>console.zenlayer.com</strong>.<br />Ad oggi non è stato ancora
        ritirato il blocco e i due fornitori di servizi cloud sono stati <strong>costretti</strong> a cambiare indirizzo
        IP per ripristinare il servizio ai propri utenti [7][8].<br /><br />A causa del blocco dell'indirizzo IP
        <strong>188.114.97.7</strong> utilizzato dalla CDN <strong>Cloudflare</strong>, il
        <strong>24/02/2024</strong> si è verificato un vero e proprio disastro con l'oscuramento di tutti i siti serviti
        tramite il suddetto IP della suddetta CDN, un numero difficilmente quantificabile, ma sicuramente imponente e
        non trascurabile.<br />Successivamente il blocco è stato silenziosamente ritirato da "qualcuno" (non è noto
        l’autore di tale operazione). <br /><br />Tra i casi più gravi possiamo notare l’interruzione del corretto
        funzionamento del sito web dell’Associazione Volontari Carcere di Bologna (<a
          class="font-medium text-blue-600 hover:underline"
          target="_blank"
          href="http://www.avoc-bologna.it"
          >www.avoc-bologna.it</a
        >) [9][10].<br /><br />Ovviamente questi rappresentano solamente i due incidenti più noti. Potrebbe darsi che la
        piattaforma abbia bloccato anche altri indirizzi IP condivisi al momento ignoti al pubblico.<br /><br />Davanti
        a due incidenti che evidenziano una gestione non responsabile da parte delle aziende abilitate a inserire nuove
        segnalazioni su Piracy Shield e il rischio intrinseco del blocco di indirizzi IP, è lecito chiedersi se non sia
        necessaria una completa riconsiderazione dell'architettura e della gestione della piattaforma.
      </li>
      <br /><br />
      <li class="text-justify py-1">
        <strong>Totale assenza di trasparenza</strong>: Nella pagina web "Provvedimenti di inibizione tramite la
        piattaforma Piracy Shield" dell'AGCOM vengono elencati solo il numeri degli indirizzi IP bloccati, senza fornire
        alcun dettaglio sullo specifico indirizzo IP bloccato, sul soggetto che ha segnalato il blocco né sul motivo del
        blocco stesso. Il numero di domini bloccati non viene riportato in alcun modo.<br /><br />Questa mancanza di
        trasparenza non è tollerabile in quanto non consente agli addetti ai lavori e agli utenti di avere conferme
        riguardo l'effettiva applicazione del blocco su uno specifico IP o dominio.<br /><br />Inoltre, genera
        complicazioni in caso di reclamo contro un provvedimento, poiché costringe il reclamante a richiedere l'accesso
        agli atti per ottenere documentazione comprovante riguardo al provvedimento stesso rendendo di fatto impossibile
        applicare la procedura ricorsuale nei tempi previsti da AGCOM.
      </li>
      <br /><br />
      <li class="text-justify py-1">
        <strong>Responsabilità del segnalatore: </strong>La legislazione attuale nazionale presenta gravi vuoti
        legislativi nel chiarire le responsabilità dei segnalatori in caso di segnalazioni malevole o negligenti, cioè
        senza adottare gli opportuni principi di precauzione per evitare blocchi inaspettati a siti web legittimi.<br /><br />Attualmente,
        la normativa non definisce né le responsabilità per risarcire i siti web ingiustamente bloccati, né prevede
        sanzioni per gli abusi o il mancato rispetto delle norme da parte dei segnalatori. <br /><br />Al contrario, dal
        punto di vista degli operatori, in caso di mancato rispetto dei blocchi, sono previste sanzioni pecuniarie che
        vanno da diecimila euro fino al 2% del fatturato, come stabilito dall'articolo 1, comma 31, terzo periodo, della
        legge 31 luglio 1997, n. 249 [11]. <br /><br />Di conseguenza, ci troviamo in una situazione completamente
        sbilanciata in cui il detentore dei diritti d'autore può richiedere blocchi senza preoccuparsi dei possibili
        blocchi impropri, mentre gli operatori rischiano pesanti sanzioni anche in caso di errori non intenzionali.
      </li>
    </ul>
    <br /><br />
    <h2 class="py-3 sm:py-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      Proposta di riforma integrale di Piracy Shield
    </h2>
    <p class="text-justify py-1">
      Anche se attualmente Piracy Shield viene utilizzato in modo pericoloso, causando danni ai clienti e agli operatori
      di rete italiani, rimane comunque un sistema tecnicamente utile che si potrebbe utilizzare a seguito di una
      doverosa riprogettazione.<br /><br />Di seguito, elenchiamo alcune proposte per una riforma integrale del sistema,
      al fine di renderlo più neutrale e trasparente:
    </p>
    <ul class="list-outside ps-5 list-disc text-justify">
      <li class="text-justify py-1">
        <strong>Niente aziende private:</strong> Piracy Shield dev'essere a disposizione esclusiva delle Autorità
        pubbliche (CNCPO, ADM, AGCOM, CONSOB, Autorità giudiziaria).<br />Le aziende private dovrebbero segnalare le
        violazioni a un'autorità competente e solo dopo un'attenta valutazione sulla veridicità di tale segnalazione si
        potrebbe procedere con l'inibizione del contenuto illecito.<br /><br />Solo un'autorità pubblica può proteggere
        i cittadini da blocchi illegittimi, assicurando la piena neutralità riguardo al provvedimento. Se, è necessario
        realizzare una piattaforma di blocchi in tempo live, si deve prevedere una apposita autorità pubblica che validi
        i ticket in tempo reale, attraverso apposite routine pubbliche e con la trasparenza richiesta da un organo di
        PA.
      </li>
      <li class="text-justify py-1">
        <strong>Unificazione di tutte le liste di censura</strong>: Attualmente in Italia gli operatori devono
        processare liste di censura da parte di ben 5 autorità differenti: <strong>AGCOM</strong> (Piracy Shield + Lista
        provvedimenti a tutela del diritto d'autore), <strong>CNCPO</strong> (Centro nazionale per il contrasto alla
        pedopornografia online), <strong>ADM</strong> (Agenzia delle Dogane e dei Monopoli), <strong>CONSOB</strong> e
        provvedimenti dell'<strong>Autorità giudiziaria</strong> (sentenze).<br /><br />Questa decentralizzazione delle
        liste di censura semplicemente non ha alcun senso. Utilizzare Piracy Shield per tutto consentirebbe agli
        operatori di ridurre il lavoro da svolgere per rispettare i provvedimenti imposti dalle autorità pubbliche.
      </li>
      <li class="text-justify py-1">
        <strong>Limitazione a blocchi basati su indirizzo IP</strong>: Qualsiasi blocco basato su indirizzo IP andrebbe
        disposto esclusivamente dopo avere analizzato l’indirizzo IP e scrupolosamente il target del blocco (L'indirizzo
        IP viene usato per servizi web legali? Si tratta di un hosting condiviso? È una CDN?) e valutato il rapporto
        rischio-beneficio.<br /><br />Ad esempio un sito web che diffonde materiale pedopornografico è decisamente più
        impattante rispetto ad un e-commerce che vende abbigliamento contraffatto, applicare blocchi per indirizzo IP è
        sempre un'azione rischiosa quindi andrebbe effettuata solo in reazione a contenuti estremamente problematici
        dove è necessaria un'azione tempestiva.<br /><br />Inoltre va valutata la durata del blocco: in caso di evento
        in live streaming si può effettuare un blocco della durata di 90 o 120 minuti. Mantenere indefinitamente
        bloccato un indirizzo IP non è appropriato, specialmente considerando la limitata disponibilità di IPv4 e il
        fatto che alcuni indirizzi sono noleggiati e possono essere assegnati ad altri al termine del periodo di
        noleggio.
      </li>
      <li class="text-justify py-1">
        <strong>Accesso in solo lettura aperto a tutti</strong>: Limitatamente ai blocchi che non riguardano contenuti
        sensibili (pedopornografia, terrorismo, …) chiunque dovrebbe avere accesso a Piracy Shield, sia per consultare i
        provvedimenti in tempo reale nella loro forma originale, senza ulteriori elaborazioni, sia per avere la
        possibilità di presentare un reclamo nel caso di sospetto errore nel provvedimento.
      </li>
      <li class="text-justify py-1">
        <strong>Avvio di una nuova consultazione pubblica</strong>: Per migliorare l'implementazione di Piracy Shield, è
        essenziale avviare una nuova consultazione pubblica coinvolgendo operatori, associazioni di settore, provider di
        hosting, ecc., senza timore di apportare modifiche significative alla piattaforma per migliorarla.
      </li>
      <li class="text-justify py-1">
        <strong
          >Trasformare Piracy Shield in uno standard, attraverso la pubblicazione integrale di codice sorgente,
          specifiche e manuali di Piracy Shield</strong
        >: La cosiddetta Security through obscurity non deve essere utilizzata in un contesto come la regolamentazione
        dei contenuti su Internet in quanto impedisce ai cittadini di informarsi autonomamente riguardo il funzionamento
        del sistema. <br /><br />Inoltre, consentendo analisi di sicurezza indipendenti, si favorisce la segnalazione di
        eventuali punti deboli del sistema. <br /><br />Per garantire totale trasparenza su ogni aspetto e rispettare i
        diritti civili, è imprescindibile che Piracy Shield sia trasformato in un software libero. Ciò implica la
        pubblicazione del codice sorgente e di tutti i manuali implementativi e operativi, seguendo l'esempio di vari
        progetti gestiti e/o finanziati dallo Stato che vengono regolarmente resi disponibili come software open source
        su
        <a target="_blank" href="https://github.com/italia" class="font-medium text-blue-600 hover:underline"
          >https://github.com/italia</a
        >.
      </li>
    </ul>
    <h2 class="py-3 sm:py-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Citazioni</h2>
    <p class="text-justify py-1">
      [1] “LEGGE 14 luglio 2024, n. 93”. [Online]. Disponibile:
      <a
        target="_blank"
        href="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2023-07-14;93"
        class="font-medium text-blue-600 hover:underline"
        >https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2023-07-14;93</a
      >.
    </p>
    <p class="text-justify py-1">
      [2] Autorità per le Garanzie nelle Comunicazioni, Delibera n. 189/23/CONS. [Online]. Disponibile:
      <a
        target="_blank"
        href="https://www.agcom.it/visualizza-documento/7b5681ff-695e-4731-aa16-82451ede1315"
        class="font-medium text-blue-600 hover:underline"
        >https://www.agcom.it/visualizza-documento/7b5681ff-695e-4731-aa16-82451ede1315</a
      >.
    </p>
    <p class="text-justify py-1">
      [3] “Internet aperta – net neutrality”. Aree Tematiche. [Online]. Disponibile:
      <a
        target="_blank"
        href="https://www.agcom.it/internet-aperta_net-neutrality"
        class="font-medium text-blue-600 hover:underline"
        >https://www.agcom.it/internet-aperta_net-neutrality</a
      >.
    </p>
    <p class="text-justify py-1">
      [4] Unione europea, PARLAMENTO EUROPEO E IL CONSIGLIO DELL’UNIONE EUROPEA. (2015, 25 nov.).
      <em>Regolamento n. 2015/2120, Misure riguardanti l’accesso a un’Internet aperta</em>. [Online]. Disponibile:
      <a
        target="_blank"
        href="https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=celex:32015R2120"
        class="font-medium text-blue-600 hover:underline"
        >https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=celex:32015R2120</a
      >.
    </p>
    <p class="text-justify py-1">
      [5] Unione europea, BEREC. (2016, 30 ago.).
      <em>Guidelines n. BoR (16) 127, Implementation by National Regulators of European Net Neutrality Rules</em>.
      [Online]. Disponibile:
      <a
        target="_blank"
        href="https://www.berec.europa.eu/en/document-categories/berec/regulatory-best-practices/guidelines/berec-guidelines-on-the-implementation-by-national-regulators-of-european-net-neutrality-rules"
        class="font-medium text-blue-600 hover:underline"
        >https://www.berec.europa.eu/en/document-categories/berec/regulatory-best-practices/guidelines/berec-guidelines-on-the-implementation-by-national-regulators-of-european-net-neutrality-rules</a
      >.
    </p>
    <p class="text-justify py-1">
      [6]
      <em>Vladimir Kharitonov v. Russia, OOO Flavus and Others v. Russia, Bulgakov v. Russiaì, and Engels v. Russia</em
      >, Corte Europea dei Diritti dell'Uomo (CEDU), 23 giu. 2020, 10795/14, 12468/15, 23489/15, 19074/16, 20159/15,
      20159/15, 61919/16 (Strasburgo). [Online]. Disponibile:
      <a
        target="_blank"
        href="https://hudoc.echr.coe.int/app/conversion/pdf/?library=ECHR&id=003-6729158-8971586&filename=Judgment%20Kharitonov%20v.%20Russia%20and%20three%20other%20applications%20-%20official%20decisions%20to%20block%20websites.pdf"
        class="font-medium text-blue-600 hover:underline"
        >https://hudoc.echr.coe.int/app/conversion/pdf/?library=ECHR&id=003-6729158-8971586</a
      >.
    </p>
    <p class="text-justify py-1">
      [7] R. Pezzali. “Piracy Shield sta censurando siti che non hanno nulla a che fare con la pirateria ed è un
      problema serio”. DDay.it. [Online]. Disponibile:
      <a
        target="_blank"
        href="https://www.dday.it/redazione/48464/piracy-shield-sta-censurando-siti-che-non-hanno-nulla-a-che-fare-con-la-pirateria-ed-e-un-problema-serio"
        class="font-medium text-blue-600 hover:underline"
        >https://www.dday.it/redazione/48464/piracy-shield-sta-censurando-siti-che-non-hanno-nulla-a-che-fare-con-la-pirateria-ed-e-un-problema-serio</a
      >.
    </p>
    <p class="text-justify py-1">
      [8] R. Angius e L. Zorloni. “Piracy Shield, la piattaforma nazionale anti-pirateria, ha già mirato al bersaglio
      sbagliato”. Wired Italia. [Online]. Disponibile:
      <a
        target="_blank"
        href="https://www.wired.it/article/piracy-shield-siti-oscurati-non-streaming-cdn/"
        class="font-medium text-blue-600 hover:underline"
        >https://www.wired.it/article/piracy-shield-siti-oscurati-non-streaming-cdn/</a
      >.
    </p>
    <p class="text-justify py-1">
      [9] G. Giardina. “PiracyShield ci ricasca: Decine di siti leciti bloccati dietro un IP di Cloudflare. Danni
      collaterali o illecito?” DDay.it. [Online]. Disponibile:
      <a
        target="_blank"
        href="https://www.dday.it/redazione/48554/piracyshield-ci-ricasca-bloccate-decine-di-siti-leciti-dietro-un-ip-di-cloudflare-danni-collaterali-o-illecito"
        class="font-medium text-blue-600 hover:underline"
        >https://www.dday.it/redazione/48554/piracy-shield-ci-ricasca-bloccate-decine-di-siti-leciti-dietro-un-ip-di-cloudflare-danni-collaterali-o-illecito</a
      >.
    </p>
    <p class="text-justify py-1">
      [10] L. Colantuoni. “Piracy Shield blocca IP di Cloudflare e siti legittimi”. Punto Informatico. [Online].
      Disponibile:
      <a
        target="_blank"
        href="https://www.punto-informatico.it/piracy-shield-blocca-ip-cloudflare-siti-legittimi/"
        class="font-medium text-blue-600 hover:underline"
        >https://www.punto-informatico.it/piracy-shield-blocca-ip-cloudflare-siti-legittimi/</a
      >.
    </p>
    <p class="text-justify py-1">
      [11] “LEGGE 31 luglio 1997, n. 249”. [Online]. Disponibile:
      <a
        target="_blank"
        href="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1997-07-31;249"
        class="font-medium text-blue-600 hover:underline"
        >https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1997-07-31;249</a
      >.
    </p>
    <h2 class="py-3 sm:py-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      Lettera realizzata e firmata da:
    </h2>
    <ul class="list-outside ps-5 list-disc">
      <li class="text-justify py-1">Andrea Greco</li>
      <li class="text-justify py-1">Ernesto Castellotti</li>
      <li class="text-justify py-1">Francesco Masala</li>
      <li class="text-justify py-1">Giovanni Condello</li>
      <li class="text-justify py-1">Luca Dametto</li>
      <li class="text-justify py-1">Marco Aceti</li>
      <li class="text-justify py-1">Simone Bortolin</li>
    </ul>
    <h2 class="py-3 sm:py-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      Aziende/Organizzazioni co-firmatarie:
    </h2>
    <ul class="list-outside ps-5 list-disc">
      <li class="text-justify py-1">FibraClick</li>
      <li class="text-justify py-1">HyperBit SRLs</li>
      <li class="text-justify py-1">OpenMF</li>
      <li class="text-justify py-1">Osservatorio Nessuno OdV</li>
    </ul>
  </div>
</template>
