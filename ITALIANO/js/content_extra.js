const EXTRA_CONTENT = {
  a1: {
    "Frutas": [
      ["mela","maçã"],["pera","pera"],["arancia","laranja"],["limone","limão"],
      ["banana","banana"],["uva","uva"],["fragola","morango"],["pesca","pêssego"],
      ["ciliegia","cereja"],["ananas","abacaxi"],["mango","manga"],["anguria","melancia"],
      ["melone","melão"],["kiwi","kiwi"],["fico","figo"],["melograno","romã"]
    ],
    "Vegetais": [
      ["pomodoro","tomate"],["patata","batata"],["carota","cenoura"],["cipolla","cebola"],
      ["aglio","alho"],["zucchina","abobrinha"],["melanzana","berinjela"],["peperone","pimentão"],
      ["spinaci","espinafre"],["lattuga","alface"],["broccolo","brócolis"],["cavolo","repolho"],
      ["cetriolo","pepino"],["sedano","aipo"],["piselli","ervilhas"],["funghi","cogumelos"]
    ],
    "Objetos da Casa": [
      ["chiave","chave"],["orologio","relógio"],["specchio","espelho"],["lampada","lâmpada"],
      ["cuscino","travesseiro"],["coperta","coberta"],["tappeto","tapete"],["quadro","quadro"],
      ["vaso","vaso"],["candela","vela"],["telecomando","controle remoto"],["caricatore","carregador"],
      ["ombrello","guarda-chuva"],["portafoglio","carteira"],["occhiali","óculos"],["telefono","telefone"]
    ],
    "Ações Cotidianas": [
      ["aprire","abrir"],["chiudere","fechar"],["accendere","acender"],["spegnere","apagar"],
      ["entrare","entrar"],["uscire","sair"],["salire","subir"],["scendere","descer"],
      ["comprare","comprar"],["vendere","vender"],["chiamare","chamar"],["rispondere","responder"],
      ["cercare","procurar"],["trovare","encontrar"],["perdere","perder"],["aspettare","esperar"]
    ]
  },
  a2: {
    "No Restaurante": [
      ["menù","cardápio"],["antipasto","entrada"],["primo piatto","primeiro prato"],["secondo piatto","segundo prato"],
      ["contorno","acompanhamento"],["cameriere","garçom"],["conto","conta"],["mancia","gorjeta"],
      ["ordinare","pedir"],["prenotare un tavolo","reservar uma mesa"],["specialità","especialidade"],["vegetariano","vegetariano"],
      ["senza glutine","sem glúten"],["bevanda","bebida"],["tovagliolo","guardanapo"],["forchetta","garfo"]
    ],
    "Natureza": [
      ["albero","árvore"],["fiore","flor"],["erba","grama"],["foglia","folha"],
      ["fiume","rio"],["lago","lago"],["collina","colina"],["bosco","bosque"],
      ["prato","prado"],["cielo","céu"],["stella","estrela"],["luna","lua"],
      ["terra","terra"],["sasso","pedra"],["isola","ilha"],["cascata","cachoeira"]
    ],
    "Direções e Ruas": [
      ["dritto","reto"],["a destra","à direita"],["a sinistra","à esquerda"],["incrocio","cruzamento"],
      ["semaforo","semáforo"],["marciapiede","calçada"],["attraversamento","faixa de pedestres"],["sottopassaggio","passagem subterrânea"],
      ["rotonda","rotatória"],["vicolo","beco"],["corso","avenida"],["periferia","periferia"],
      ["centro storico","centro histórico"],["parcheggio","estacionamento"],["distributore","posto de gasolina"],["edicola","banca de jornal"]
    ],
    "Expressões com Avere": [
      ["avere fame","estar com fome"],["avere sete","estar com sede"],["avere sonno","estar com sono"],["avere freddo","estar com frio"],
      ["avere caldo","estar com calor"],["avere paura","estar com medo"],["avere ragione","estar certo"],["avere torto","estar errado"],
      ["avere fretta","estar com pressa"],["avere voglia di","estar com vontade de"],["sentirsi bene","sentir-se bem"],["sentirsi male","sentir-se mal"],
      ["essere stufo","estar farto"],["essere contento","estar contente"],["essere arrabbiato","estar bravo"],["essere sorpreso","estar surpreso"]
    ],
    "Família Estendida": [
      ["genero","genro"],["nuora","nora"],["suocero","sogro"],["suocera","sogra"],
      ["cognato","cunhado"],["cognata","cunhada"],["pronipote","bisneto"],["gemello","gêmeo"],
      ["padrino","padrinho"],["madrina","madrinha"],["vicino","vizinho"],["ospite","hóspede"],
      ["padrone di casa","senhorio"],["inquilino","inquilino"],["collega","colega"],["capo","chefe"]
    ]
  },
  b1: {
    "Emergências": [
      ["aiuto!","socorro!"],["emergenza","emergência"],["incidente","acidente"],["ambulanza","ambulância"],
      ["polizia","polícia"],["furto","roubo"],["smarrimento","perda"],["pericolo","perigo"],
      ["sicuro","seguro"],["primo soccorso","primeiros socorros"],["ferita","ferida"],["svenire","desmaiar"],
      ["soffocare","engasgar"],["annegare","afogar"],["chiamata d'emergenza","chamada de emergência"],["vigili del fuoco","bombeiros"]
    ],
    "Móveis e Eletrodomésticos": [
      ["armadio","guarda-roupa"],["cassettiera","cômoda"],["libreria","estante"],["scrivania","escrivaninha"],
      ["poltrona","poltrona"],["tende","cortinas"],["lampadario","lustre"],["frigorifero","geladeira"],
      ["lavatrice","máquina de lavar"],["forno","forno"],["microonde","micro-ondas"],["lavastoviglie","lava-louças"],
      ["aspirapolvere","aspirador"],["scopa","vassoura"],["ferro da stiro","ferro de passar"],["bollitore","chaleira"]
    ],
    "Trabalho Remoto": [
      ["smart working","home office"],["videochiamata","videochamada"],["riunione online","reunião online"],["connessione","conexão"],
      ["microfono","microfone"],["condivisione schermo","compartilhamento de tela"],["scadenza","prazo"],["pausa pranzo","pausa para almoço"],
      ["produttività","produtividade"],["concentrazione","concentração"],["multitasking","multitarefa"],["rete","rede"],
      ["cartella","pasta"],["allegato","anexo"],["notifica","notificação"],["aggiornamento","atualização"]
    ],
    "Clima Detalhado": [
      ["previsioni del tempo","previsão do tempo"],["temporale","tempestade"],["grandine","granizo"],["nebbia","neblina"],
      ["rugiada","orvalho"],["arcobaleno","arco-íris"],["gelo","geada"],["ondata di calore","onda de calor"],
      ["allerta meteo","alerta meteorológico"],["temperatura percepita","sensação térmica"],["pioggia leggera","chuva leve"],["vento forte","vento forte"],
      ["cielo sereno","céu limpo"],["nuvoloso","nublado"],["variabile","variável"],["afa","abafamento"]
    ],
    "Sistema Educacional": [
      ["scuola materna","jardim de infância"],["scuola elementare","ensino fundamental"],["scuola media","ensino médio inferior"],["liceo","ensino médio"],
      ["facoltà","faculdade"],["corso di laurea","curso de graduação"],["master","mestrado"],["dottorato","doutorado"],
      ["borsa di studio","bolsa de estudos"],["tirocinio","estágio"],["esame di maturidade","exame de maturidade"],["sessione d'esami","sessão de provas"],
      ["fuori corso","fora do prazo"],["relatore","orientador"],["tesi","tese"],["laurearsi","graduar-se"]
    ],
    "Hobbies Criativos": [
      ["fotografia","fotografia"],["giardinaggio","jardinagem"],["pittura","pintura"],["ceramica","cerâmica"],
      ["maglia","tricô"],["cucito","costura"],["fai da te","faça você mesmo"],["modellismo","modelismo"],
      ["scrittura creativa","escrita criativa"],["suonare uno strumento","tocar um instrumento"],["collezionare","colecionar"],["escursionismo","trilha"],
      ["campeggio","camping"],["pesca","pesca"],["birdwatching","observação de pássaros"],["enogastronomia","enogastronomia"]
    ]
  },
  b2: {
    "História": [
      ["impero","império"],["rinascimento","renascimento"],["medioevo","idade média"],["rivoluzione","revolução"],
      ["indipendenza","independência"],["unificazione","unificação"],["monarchia","monarquia"],["repubblica","república"],
      ["dittatura","ditadura"],["resistenza","resistência"],["trattato","tratado"],["confine","fronteira"],
      ["colonia","colônia"],["archeologia","arqueologia"],["rovina","ruína"],["patrimonio mondiale","patrimônio mundial"]
    ],
    "Religião e Crenças": [
      ["fede","fé"],["preghiera","oração"],["cattedrale","catedral"],["santo","santo"],
      ["miracolo","milagre"],["pellegrinaggio","peregrinação"],["paradiso","paraíso"],["inferno","inferno"],
      ["anima","alma"],["spirito","espírito"],["battesimo","batismo"],["comunione","comunhão"],
      ["cresima","crisma"],["precetto","preceito"],["parrocchia","paróquia"],["sagrato","adros"]
    ],
    "Economia Avançada": [
      ["PIL","PIB"],["recessione","recessão"],["ripresa","retomada"],["debito pubblico","dívida pública"],
      ["manovra finanziaria","medida financeira"],["borsa valori","bolsa de valores"],["azioni","ações"],["obbligazioni","títulos"],
      ["tasso di cambio","taxa de câmbio"],["svalutazione","desvalorização"],["monopolio","monopólio"],["concorrenza sleale","concorrência desleal"],
      ["venture capital","capital de risco"],["delocalizzazione","deslocalização"],["tassazione","tributação"],["sussidio","subsídio"]
    ],
    "Política": [
      ["parlamento","parlamento"],["senato","senado"],["presidente","presidente"],["primo ministro","primeiro-ministro"],
      ["ministro","ministro"],["partito","partido"],["coalizione","coalizão"],["elezioni","eleições"],
      ["campagna elettorale","campanha eleitoral"],["referendum","referendo"],["legge elettorale","lei eleitoral"],["opposizione","oposição"],
      ["maggioranza","maioria"],["sondaggio","pesquisa"],["lobby","lobby"],["astensionismo","abstenção"]
    ],
    "Ambiente Avançado": [
      ["effetto serra","efeito estufa"],["riscaldamento globale","aquecimento global"],["emissioni","emissões"],["impronta ecologica","pegada ecológica"],
      ["biodiversità","biodiversidade"],["deforestazione","desmatamento"],["desertificazione","desertificação"],["energie rinnovabili","energias renováveis"],
      ["pannello solare","painel solar"],["eolico","eólica"],["raccolta differenziata","coleta seletiva"],["economia circolare","economia circular"],
      ["sviluppo sostenibile","desenvolvimento sustentável"],["accordo sul clima","acordo climático"],["specie in via di estinzione","espécie em extinção"],["area protetta","área protegida"]
    ]
  },
  c1: {
    "Direito": [
      ["tribunale","tribunal"],["giudice","juiz"],["avvocato difensore","advogado de defesa"],["pubblico ministero","promotor"],
      ["imputato","réu"],["testimone","testemunha"],["sentenza","sentença"],["appello","apelação"],
      ["reato","crime"],["pena","pena"],["custodia cautelare","prisão preventiva"],["udienza","audiência"],
      ["giuria","júri"],["costituzione","constituição"],["norma","norma"],["giurisprudenza","jurisprudência"]
    ],
    "Psicologia Avançada": [
      ["disturbo","transtorno"],["terapia cognitiva","terapia cognitiva"],["psicoanalisi","psicanálise"],["attaccamento","apego"],
      ["autorealizzazione","autorrealização"],["intelligenza emotiva","inteligência emocional"],["dissonanza cognitiva","dissonância cognitiva"],["condizionamento","condicionamento"],
      ["rinforzo","reforço"],["placebo","placebo"],["psicosomatico","psicossomático"],["burnout","burnout"],
      ["mindfulness","atenção plena"],["introspezione","introspecção"],["transfert","transferência"],["proiezione","projeção"]
    ],
    "Filosofia Avançada": [
      ["ontologia","ontologia"],["metafisica","metafísica"],["logica","lógica"],["dialettica","dialética"],
      ["esistenzialismo","existencialismo"],["fenomenologia","fenomenologia"],["pragmatismo","pragmatismo"],["razionalismo","racionalismo"],
      ["empirismo","empirismo"],["utilitarismo","utilitarismo"],["stoicismo","estoicismo"],["epicureismo","epicurismo"],
      ["ermeneutica","hermenêutica"],["decostruzione","desconstrução"],["postmodernismo","pós-modernismo"],["assurdo","absurdo"]
    ],
    "Economia Comportamental": [
      ["avversione alla perdita","aversão à perda"],["ancoraggio","ancoragem"],["bias di conferma","viés de confirmação"],["euristica","heurística"],
      ["teoria dei giochi","teoria dos jogos"],["dilemma del prigioniero","dilema do prisioneiro"],["nudge","empurrão comportamental"],["scelta razionale","escolha racional"],
      ["utilità marginale","utilidade marginal"],["domanda e offerta","oferta e demanda"],["elasticità","elasticidade"],["bene di lusso","bem de luxo"],
      ["bene di prima necessità","bem de primeira necessidade"],["inflazione percepita","inflação percebida"],["bolla speculativa","bolha especulativa"],["mercato nero","mercado negro"]
    ]
  },
  c2: {
    "Literatura Clássica": [
      ["Divina Commedia","Divina Comédia"],["sonetto","soneto"],["Canzoniere","Canzoniere"],["Decameron","Decameron"],
      ["poema epico","poema épico"],["novella","novela"],["lirica","lírica"],["terzina","terceto"],
      ["endecasillabo","endecassílabo"],["allegoria dantesca","alegoria dantesca"],["verismo","verismo"],["futurismo","futurismo"],
      ["neorealismo","neorrealismo"],["ermetismo","hermetismo"],["Italo Calvino","Italo Calvino"],["Premio Nobel","Prêmio Nobel"]
    ],
    "Pronúncia e Entonação": [
      ["doppia consonante","consoante dupla"],["vocale aperta","vogal aberta"],["vocale chiusa","vogal fechada"],["accento tonico","acento tônico"],
      ["accento acuto","acento agudo"],["accento grave","acento grave"],["elisione","elisão"],["troncamento","apócope"],
      ["intonazione interrogativa","entonação interrogativa"],["ritmo","ritmo"],["sillaba","sílaba"],["dittongo","ditongo"],
      ["trittongo","tritongo"],["consonante sorda","consoante surda"],["consonante sonora","consoante sonora"],["cacofonia","cacofonia"]
    ],
    "Retórica Avançada": [
      ["captatio benevolentiae","captatio benevolentiae"],["climax ascendente","clímax ascendente"],["anticlimax","anticlímax"],["anafora","anáfora"],
      ["epifora","epífora"],["chiasmo","quiasmo"],["ossimoro","oxímoro"],["iperbole","hipérbole"],
      ["litote","litote"],["metonimia","metonímia"],["sineddoche","sinédoque"],["eufemismo","eufemismo"],
      ["perifrasi","perífrase"],["parallelismo","paralelismo"],["retorica forense","retórica forense"],["apostrofe","apóstrofe"]
    ]
  }
};

const EXTRA_PHRASES = {
  a1: [
    ["Mi piace la mela","Gosto da maçã"],
    ["Il pomodoro è rosso","O tomate é vermelho"],
    ["Dov'è il mio ombrello?","Onde está meu guarda-chuva?"],
    ["Apro la porta","Abro a porta"],
    ["La fragola è dolce","O morango é doce"],
    ["Spengo la luce","Apago a luz"]
  ],
  a2: [
    ["Vorrei ordinare, per favore","Gostaria de pedir, por favor"],
    ["Il conto, per favore","A conta, por favor"],
    ["Gira a destra","Vire à direita"],
    ["Ho molta fame","Estou com muita fome"],
    ["L'albero è alto","A árvore é alta"],
    ["Il parcheggio è pieno","O estacionamento está cheio"]
  ],
  b1: [
    ["Chiami un'ambulanza!","Chame uma ambulância!"],
    ["Il frigorifero è nuovo","A geladeira é nova"],
    ["La connessione è lenta","A conexão está lenta"],
    ["Domani ci sarà un temporale","Amanhã haverá uma tempestade"],
    ["Mi sono laureato l'anno scorso","Me formei no ano passado"],
    ["Mi piace il giardinaggio","Gosto de jardinagem"]
  ],
  b2: [
    ["Il Rinascimento è nato in Italia","O Renascimento nasceu na Itália"],
    ["La fede è importante","A fé é importante"],
    ["Il PIL sta crescendo","O PIB está crescendo"],
    ["Le elezioni sono vicine","As eleições estão próximas"],
    ["Dobbiamo ridurre le emissioni","Devemos reduzir as emissões"]
  ],
  c1: [
    ["Il giudice ha emesso la sentenza","O juiz proferiu a sentença"],
    ["L'empatia richiede introspezione","A empatia exige introspecção"],
    ["L'esistenzialismo esplora la libertà","O existencialismo explora a liberdade"],
    ["Il bias di conferma è comune","O viés de confirmação é comum"]
  ],
  c2: [
    ["La Divina Commedia è un capolavoro","A Divina Comédia é uma obra-prima"],
    ["L'accento tonico cambia il significato","O acento tônico muda o significado"],
    ["L'anafora rafforza il discorso","A anáfora reforça o discurso"]
  ]
};
