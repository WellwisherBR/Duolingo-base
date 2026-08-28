const SIMULATIONS = [
  {
    id: "restaurant",
    icon: "🍔",
    title: "Restaurante",
    minLevel: 0,
    steps: [
      {
        ai: "Buonasera! Benvenuto nel nostro ristorante. Tavolo per quante persone?",
        accept: ["uno", "due", "tre", "quattro", "cinque", "1", "2", "3", "4", "5", "per due", "per uno", "tavolo per"],
        hint: "Responda com o número de pessoas, ex: Per due, per favore."
      },
      {
        ai: "Ecco il menù. Cosa desidera da bere?",
        accept: ["acqua", "succo", "caffè", "caffe", "tè", "te", "vino", "birra", "coca", "limonata"],
        hint: "Peça uma bebida, ex: Vorrei un'acqua, per favore."
      },
      {
        ai: "E cosa desidera mangiare?",
        accept: ["pizza", "pasta", "insalata", "hamburger", "pollo", "carne", "pesce", "risotto", "zuppa", "panino"],
        hint: "Peça um prato, ex: Vorrei la pasta, per favore."
      },
      {
        ai: "Altro?",
        accept: ["no", "è tutto", "e tutto", "niente", "nient'altro", "basta così", "basta cosi"],
        hint: "Diga que é só isso, ex: No, è tutto. Grazie."
      },
      {
        ai: "Il conto è venticinque euro. Come desidera pagare?",
        accept: ["carta", "contanti", "ecco a lei", "grazie", "con la carta", "in contanti", "tenga"],
        hint: "Diga como quer pagar, ex: Con la carta, per favore."
      },
      {
        ai: "Grazie! Buona serata!",
        accept: ["grazie", "altrettanto", "arrivederci", "buona serata", "buonanotte"],
        hint: "Agradeça e despeça-se, ex: Grazie, altrettanto!"
      }
    ]
  },
  {
    id: "airport",
    icon: "✈️",
    title: "Aeroporto",
    minLevel: 1,
    steps: [
      {
        ai: "Buongiorno! Posso vedere il suo passaporto, per favore?",
        accept: ["ecco", "certamente", "sì", "si", "certo", "passaporto", "qui"],
        hint: "Entregue o passaporte, ex: Certo, ecco a lei."
      },
      {
        ai: "Dove è diretto oggi?",
        accept: ["roma", "milano", "parigi", "londra", "madrid", "lisbona", "new york", "berlino", "a "],
        hint: "Diga o destino, ex: Vado a Roma."
      },
      {
        ai: "Ha bagagli da registrare?",
        accept: ["sì", "si", "no", "una valigia", "due valigie", "solo uno", "zaino", "nessun bagaglio"],
        hint: "Responda sobre suas malas, ex: Solo una valigia."
      },
      {
        ai: "Preferisce un posto finestrino o corridoio?",
        accept: ["finestrino", "corridoio"],
        hint: "Escolha: finestrino (janela) ou corridoio (corredor)."
      },
      {
        ai: "Ecco la sua carta d'imbarco. Gate 12, l'imbarco inizia alle 15.",
        accept: ["grazie", "perfetto", "ok", "va bene", "grazie mille"],
        hint: "Agradeça, ex: Grazie mille!"
      }
    ]
  },
  {
    id: "hotel",
    icon: "🏨",
    title: "Hotel",
    minLevel: 1,
    steps: [
      {
        ai: "Benvenuto al Grand Hotel! Ha una prenotazione?",
        accept: ["sì", "si", "no", "ho", "prenotazione", "prenotato", "una prenotazione"],
        hint: "Diga se tem reserva, ex: Sì, ho una prenotazione."
      },
      {
        ai: "Per quante notti si ferma?",
        accept: ["una", "due", "tre", "quattro", "cinque", "1", "2", "3", "notte", "notti", "settimana"],
        hint: "Diga o número de noites, ex: Tre notti."
      },
      {
        ai: "Potrei vedere un documento o il passaporto, per favore?",
        accept: ["ecco", "certamente", "sì", "si", "certo", "qui"],
        hint: "Entregue o documento, ex: Ecco a lei."
      },
      {
        ai: "La sua camera è la 204, al secondo piano. Ecco la chiave.",
        accept: ["grazie", "perfetto", "benissimo", "grazie mille"],
        hint: "Agradeça, ex: Perfetto, grazie!"
      },
      {
        ai: "Posso aiutarla con qualcos'altro?",
        accept: ["no", "è tutto", "e tutto", "wifi", "qual è il wifi", "qual e il wifi", "password", "colazione", "sì", "si"],
        hint: "Pergunte algo (ex: Qual è il wifi?) ou diga No, è tutto."
      }
    ]
  },
  {
    id: "taxi",
    icon: "🚕",
    title: "Táxi",
    minLevel: 2,
    steps: [
      {
        ai: "Ciao! Dove andiamo?",
        accept: ["aeroporto", "hotel", "centro", "stazione", "via", "viale", "parco", "museo", "a "],
        hint: "Diga o destino, ex: All'aeroporto, per favore."
      },
      {
        ai: "Va bene. Sono circa quindici minuti con questo traffico.",
        accept: ["ok", "va bene", "bene", "grazie", "perfetto", "nessun problema"],
        hint: "Confirme, ex: Va bene, nessun problema."
      },
      {
        ai: "Preferisce l'autostrada o le strade della città?",
        accept: ["autostrada", "strade", "città", "citta", "più veloce", "piu veloce", "decida lei", "qualsiasi"],
        hint: "Escolha o caminho, ex: Quello più veloce."
      },
      {
        ai: "Può allacciare la cintura di sicurezza, per favore?",
        accept: ["certo", "sì", "si", "ok", "va bene", "scusi", "fatto", "subito"],
        hint: "Confirme, ex: Certo, scusi."
      },
      {
        ai: "Siamo arrivati. Sono dodici euro e cinquanta.",
        accept: ["ecco a lei", "grazie", "tenga il resto", "tenga", "contanti", "carta", "grazie mille"],
        hint: "Pague e agradeça, ex: Ecco a lei. Tenga il resto!"
      }
    ]
  },
  {
    id: "shopping",
    icon: "🛒",
    title: "Compras",
    minLevel: 0,
    steps: [
      {
        ai: "Ciao! Posso aiutarla a trovare qualcosa?",
        accept: ["sì", "si", "no", "sto solo guardando", "guardo", "cerco", "camicia", "scarpe", "pantaloni", "vestito", "giacca"],
        hint: "Diga o que procura, ex: Cerco una camicia."
      },
      {
        ai: "Che taglia porta?",
        accept: ["piccola", "media", "grande", "s", "m", "l", "xl"],
        hint: "Diga o tamanho, ex: Media, per favore."
      },
      {
        ai: "Vuole provarlo? Il camerino è là in fondo.",
        accept: ["sì", "si", "no", "grazie", "certo", "va bene", "lo provo"],
        hint: "Responda se quer experimentar, ex: Sì, lo provo."
      },
      {
        ai: "Le sta benissimo! Costa trenta euro.",
        accept: ["lo prendo", "compro", "prendo", "carta", "contanti", "grazie", "troppo caro", "caro", "mi piace"],
        hint: "Decida a compra, ex: Lo prendo!"
      },
      {
        ai: "Ecco lo scontrino. Buona giornata!",
        accept: ["grazie", "altrettanto", "arrivederci", "buona giornata", "grazie mille"],
        hint: "Agradeça, ex: Grazie, altrettanto!"
      }
    ]
  },
  {
    id: "doctor",
    icon: "🏥",
    title: "Médico",
    minLevel: 2,
    steps: [
      {
        ai: "Salve, qual è il problema?",
        accept: ["dolore", "mal di testa", "febbre", "malato", "malata", "tosse", "stomaco", "mi fa male", "raffreddore", "gola", "vertigini"],
        hint: "Descreva o sintoma, ex: Ho mal di testa e la febbre."
      },
      {
        ai: "Da quanto tempo si sente così?",
        accept: ["giorno", "giorni", "settimana", "ieri", "da", "due", "tre", "alcuni"],
        hint: "Diga há quanto tempo, ex: Da ieri."
      },
      {
        ai: "Sta prendendo qualche medicina?",
        accept: ["sì", "si", "no", "non prendo", "niente", "vitamine", "prendo", "nessuna"],
        hint: "Responda se toma remédios, ex: No, non prendo niente."
      },
      {
        ai: "Le prescrivo qualcosa. Prenda una compressa due volte al giorno dopo i pasti.",
        accept: ["va bene", "ok", "grazie", "capito", "perfetto", "d'accordo", "daccordo"],
        hint: "Confirme, ex: Capito, grazie dottore."
      }
    ]
  }
];
