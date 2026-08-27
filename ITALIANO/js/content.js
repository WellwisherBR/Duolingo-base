const CONTENT = {
  a1: {
    "Saudações e Cortesia": [
      ["ciao","oi / tchau"],["buongiorno","bom dia"],["buonasera","boa noite"],
      ["buonanotte","boa noite (ao dormir)"],["arrivederci","adeus"],["arrivederla","adeus (formal)"],
      ["salve","olá"],["grazie","obrigado"],["grazie mille","muito obrigado"],
      ["prego","de nada"],["per favore","por favor"],["per piacere","por favor"],
      ["scusa","desculpa"],["scusi","desculpe (formal)"],["mi dispiace","sinto muito"],
      ["permesso","com licença"],["benvenuto","bem-vindo"],["benvenuti","bem-vindos"],
      ["sì","sim"],["no","não"]
    ],
    "Apresentações": [
      ["io sono","eu sou"],["tu sei","você é"],["lui è","ele é"],["lei è","ela é"],
      ["noi siamo","nós somos"],["mi chiamo","me chamo"],["come ti chiami?","como você se chama?"],
      ["piacere","prazer"],["piacere di conoscerti","prazer em te conhecer"],["amico","amigo"],
      ["amica","amiga"],["ragazzo","rapaz"],["ragazza","moça"],["uomo","homem"],
      ["donna","mulher"],["bambino","menino"],["bambina","menina"],["persona","pessoa"],
      ["italiano","italiano"],["straniero","estrangeiro"]
    ],
    "Família": [
      ["famiglia","família"],["madre","mãe"],["mamma","mamãe"],["padre","pai"],
      ["papà","papai"],["fratello","irmão"],["sorella","irmã"],["figlio","filho"],
      ["figlia","filha"],["nonno","avô"],["nonna","avó"],["zio","tio"],
      ["zia","tia"],["cugino","primo"],["cugina","prima"],["marito","marido"],
      ["moglie","esposa"],["genitori","pais"],["nipote","neto / sobrinho"],["single","solteiro"]
    ],
    "Números e Quantidades": [
      ["uno","um"],["due","dois"],["tre","três"],["quattro","quatro"],
      ["cinque","cinco"],["sei","seis"],["sette","sete"],["otto","oito"],
      ["nove","nove"],["dieci","dez"],["undici","onze"],["dodici","doze"],
      ["venti","vinte"],["cento","cem"],["mille","mil"],["primo","primeiro"],
      ["secondo","segundo"],["terzo","terceiro"],["molto","muito"],["poco","pouco"]
    ],
    "Cores": [
      ["rosso","vermelho"],["blu","azul"],["verde","verde"],["giallo","amarelo"],
      ["nero","preto"],["bianco","branco"],["grigio","cinza"],["marrone","marrom"],
      ["rosa","rosa"],["arancione","laranja"],["viola","roxo"],["azzurro","azul-claro"],
      ["oro","dourado"],["argento","prateado"],["chiaro","claro"],["scuro","escuro"]
    ],
    "Comida": [
      ["cibo","comida"],["pizza","pizza"],["pasta","massa"],["pane","pão"],
      ["formaggio","queijo"],["carne","carne"],["pesce","peixe"],["uovo","ovo"],
      ["riso","arroz"],["insalata","salada"],["frutta","fruta"],["verdura","legumes"],
      ["mela","maçã"],["banana","banana"],["gelato","sorvete"],["dolce","doce / sobremesa"],
      ["zucchero","açúcar"],["sale","sal"],["olio","óleo / azeite"],["salsa","molho"]
    ],
    "Bebidas": [
      ["acqua","água"],["vino","vinho"],["birra","cerveja"],["caffè","café"],
      ["latte","leite"],["tè","chá"],["succo","suco"],["spremuta","suco espremido"],
      ["bibita","refrigerante"],["cocktail","coquetel"],["bevanda","bebida"],["bere","beber"]
    ],
    "Animais": [
      ["animale","animal"],["cane","cachorro"],["gatto","gato"],["uccello","pássaro"],
      ["cavallo","cavalo"],["pesce","peixe"],["orso","urso"],["leone","leão"],
      ["elefante","elefante"],["mucca","vaca"],["pecora","ovelha"],["maiale","porco"],
      ["gallina","galinha"],["coniglio","coelho"],["farfalla","borboleta"],["ape","abelha"]
    ],
    "A Casa": [
      ["casa","casa"],["porta","porta"],["finestra","janela"],["muro","parede"],
      ["pavimento","piso"],["tetto","telhado"],["stanza","cômodo"],["cucina","cozinha"],
      ["bagno","banheiro"],["camera da letto","quarto"],["soggiorno","sala de estar"],["giardino","jardim"],
      ["tavolo","mesa"],["sedia","cadeira"],["letto","cama"],["divano","sofá"]
    ],
    "Dias e Tempo": [
      ["giorno","dia"],["notte","noite"],["mattina","manhã"],["pomeriggio","tarde"],
      ["sera","noite / serata"],["oggi","hoje"],["domani","amanhã"],["ieri","ontem"],
      ["settimana","semana"],["mese","mês"],["anno","ano"],["lunedì","segunda-feira"],
      ["martedì","terça-feira"],["mercoledì","quarta-feira"],["giovedì","quinta-feira"],["venerdì","sexta-feira"],
      ["sabato","sábado"],["domenica","domingo"],["adesso","agora"],["sempre","sempre"]
    ],
    "Verbos Essenciais": [
      ["essere","ser / estar"],["avere","ter"],["fare","fazer"],["andare","ir"],
      ["venire","vir"],["mangiare","comer"],["bere","beber"],["parlare","falar"],
      ["dire","dizer"],["vedere","ver"],["sapere","saber"],["potere","poder"],
      ["volere","querer"],["dovere","dever"],["dare","dar"],["stare","ficar / estar"],
      ["capire","entender"],["pensare","pensar"],["amare","amar"],["lavorare","trabalhar"]
    ],
    "Adjetivos Básicos": [
      ["grande","grande"],["piccolo","pequeno"],["bello","bonito"],["brutto","feio"],
      ["buono","bom"],["cattivo","mau"],["alto","alto"],["basso","baixo"],
      ["giovane","jovem"],["vecchio","velho"],["nuovo","novo"],["facile","fácil"],
      ["difficile","difícil"],["felice","feliz"],["triste","triste"],["stanco","cansado"]
    ],
    "Roupas": [
      ["vestiti","roupas"],["maglietta","camiseta"],["camicia","camisa"],["pantaloni","calças"],
      ["jeans","jeans"],["gonna","saia"],["vestito","vestido"],["giacca","jaqueta"],
      ["cappotto","casaco"],["scarpe","sapatos"],["cappello","chapéu"],["calze","meias"],
      ["cravatta","gravata"],["borsa","bolsa"],["indossare","vestir / usar"],["taglia","tamanho"]
    ],
    "O Corpo": [
      ["corpo","corpo"],["testa","cabeça"],["occhi","olhos"],["naso","nariz"],
      ["bocca","boca"],["orecchie","orelhas"],["capelli","cabelo"],["faccia","rosto"],
      ["mano","mão"],["braccio","braço"],["gamba","perna"],["piede","pé"],
      ["cuore","coração"],["schiena","costas"],["dente","dente"],["pelle","pele"]
    ]
  },

  a2: {
    "Viagem e Turismo": [
      ["viaggio","viagem"],["viaggiare","viajar"],["vacanza","férias"],["turista","turista"],
      ["passaporto","passaporte"],["valigia","mala"],["mappa","mapa"],["guida","guia"],
      ["destinazione","destino"],["partire","partir"],["arrivare","chegar"],["visitare","visitar"],
      ["prenotare","reservar"],["souvenir","lembrança"],["spiaggia","praia"],["montagna","montanha"]
    ],
    "Transporte": [
      ["treno","trem"],["autobus","ônibus"],["aereo","avião"],["nave","navio"],
      ["macchina","carro"],["moto","moto"],["bicicletta","bicicleta"],["taxi","táxi"],
      ["biglietto","bilhete"],["stazione","estação"],["aeroporto","aeroporto"],["fermata","parada"],
      ["partenza","partida"],["arrivo","chegada"],["orario","horário"],["in ritardo","atrasado"]
    ],
    "No Hotel": [
      ["hotel","hotel"],["albergo","hotel"],["camera","quarto"],["prenotazione","reserva"],
      ["chiave","chave"],["reception","recepção"],["colazione","café da manhã"],["piano","andar"],
      ["ascensore","elevador"],["bagno","banheiro"],["doccia","chuveiro"],["asciugamano","toalha"],
      ["lenzuola","lençóis"],["aria condizionata","ar-condicionado"],["notte","diária"],["conto","conta"]
    ],
    "Clima e Estações": [
      ["tempo","tempo / clima"],["sole","sol"],["pioggia","chuva"],["neve","neve"],
      ["vento","vento"],["nuvola","nuvem"],["tempesta","tempestade"],["freddo","frio"],
      ["caldo","quente"],["umido","úmido"],["primavera","primavera"],["estate","verão"],
      ["autunno","outono"],["inverno","inverno"],["piovere","chover"],["temperatura","temperatura"]
    ],
    "Rotina Diária": [
      ["svegliarsi","acordar"],["alzarsi","levantar-se"],["lavarsi","lavar-se"],["vestirsi","vestir-se"],
      ["fare colazione","tomar café"],["andare al lavoro","ir ao trabalho"],["pranzare","almoçar"],["cenare","jantar"],
      ["rilassarsi","relaxar"],["addormentarsi","adormecer"],["dormire","dormir"],["abitudine","hábito"],
      ["ogni giorno","todo dia"],["spesso","frequentemente"],["mai","nunca"],["a volte","às vezes"]
    ],
    "Compras e Lojas": [
      ["negozio","loja"],["supermercato","supermercado"],["mercato","mercado"],["centro commerciale","shopping"],
      ["comprare","comprar"],["vendere","vender"],["prezzo","preço"],["sconto","desconto"],
      ["soldi","dinheiro"],["pagare","pagar"],["cassa","caixa"],["scontrino","cupom fiscal"],
      ["provare","experimentar"],["caro","caro"],["economico","barato"],["gratis","grátis"]
    ],
    "Cidade e Direções": [
      ["città","cidade"],["strada","rua"],["piazza","praça"],["chiesa","igreja"],
      ["museo","museo"],["parco","parque"],["ponte","ponte"],["angolo","esquina"],
      ["vicino","perto"],["lontano","longe"],["destra","direita"],["sinistra","esquerda"],
      ["dritto","reto"],["attraversare","atravessar"],["nord","norte"],["sud","sul"]
    ],
    "Hobbies e Lazer": [
      ["hobby","hobby"],["tempo libero","tempo livre"],["leggere","ler"],["guardare","assistir"],
      ["ascoltare","ouvir"],["cantare","cantar"],["ballare","dançar"],["disegnare","desenhar"],
      ["cucinare","cozinhar"],["giocare","jogar / brincar"],["viaggiare","viajar"],["fotografia","fotografia"],
      ["film","filme"],["libro","livro"],["musica","música"],["concerto","show"]
    ],
    "Esportes": [
      ["sport","esporte"],["calcio","futebol"],["pallacanestro","basquete"],["tennis","tênis"],
      ["nuoto","natação"],["corsa","corrida"],["squadra","time"],["giocatore","jogador"],
      ["partita","partida"],["vittoria","vitória"],["sconfitta","derrota"],["campione","campeão"],
      ["allenarsi","treinar"],["palestra","academia"],["stadio","estádio"],["tifoso","torcedor"]
    ],
    "Sentimentos": [
      ["felicità","felicidade"],["tristezza","tristeza"],["paura","medo"],["rabbia","raiva"],
      ["sorpresa","surpresa"],["amore","amor"],["odio","ódio"],["speranza","esperança"],
      ["tranquillo","tranquilo"],["nervoso","nervoso"],["emozionato","empolgado"],["preoccupato","preocupado"],
      ["orgoglioso","orgulhoso"],["vergogna","vergonha"],["solitudine","solidão"],["allegro","alegre"]
    ],
    "Saúde Básica": [
      ["salute","saúde"],["malato","doente"],["febbre","febre"],["raffreddore","resfriado"],
      ["tosse","tosse"],["mal di testa","dor de cabeça"],["mal di pancia","dor de barriga"],["medico","médico"],
      ["ospedale","hospital"],["farmacia","farmácia"],["medicina","remédio"],["pillola","pílula"],
      ["riposare","descansar"],["guarire","curar"],["star bene","estar bem"],["visita","consulta"]
    ],
    "Horas e Compromissos": [
      ["ora","hora"],["minuto","minuto"],["mezzanotte","meia-noite"],["mezzogiorno","meio-dia"],
      ["appuntamento","compromisso"],["riunione","reunião"],["in orario","no horário"],["presto","cedo"],
      ["tardi","tarde"],["subito","imediatamente"],["dopo","depois"],["prima","antes"],
      ["durante","durante"],["finché","até que"],["già","já"],["ancora","ainda"]
    ]
  },

  b1: {
    "Trabalho e Carreira": [
      ["lavoro","trabalho"],["carriera","carreira"],["ufficio","escritório"],["azienda","empresa"],
      ["capo","chefe"],["collega","colega"],["cliente","cliente"],["progetto","projeto"],
      ["riunione","reunião"],["scadenza","prazo"],["stipendio","salário"],["contratto","contrato"],
      ["colloquio","entrevista"],["assumere","contratar"],["licenziare","demitir"],["promozione","promoção"],
      ["esperienza","experiência"],["competenza","competência"],["obiettivo","objetivo"],["successo","sucesso"]
    ],
    "Profissões": [
      ["medico","médico"],["infermiere","enfermeiro"],["insegnante","professor"],["studente","estudante"],
      ["avvocato","advogado"],["ingegnere","engenheiro"],["architetto","arquiteto"],["giornalista","jornalista"],
      ["scrittore","escritor"],["artista","artista"],["cuoco","cozinheiro"],["cameriere","garçom"],
      ["poliziotto","policial"],["pompiere","bombeiro"],["meccanico","mecânico"],["falegname","carpinteiro"]
    ],
    "Educação": [
      ["scuola","escola"],["università","universidade"],["lezione","aula"],["esame","prova"],
      ["voto","nota"],["compiti","lição de casa"],["studiare","estudar"],["imparare","aprender"],
      ["insegnare","ensinar"],["laurea","diploma / graduação"],["biblioteca","biblioteca"],["ricerca","pesquisa"],
      ["conoscenza","conhecimento"],["cultura","cultura"],["lingua","língua"],["tradurre","traduzir"]
    ],
    "Opiniões e Debates": [
      ["secondo me","na minha opinião"],["penso che","penso que"],["credo che","acredito que"],["d'accordo","de acordo"],
      ["non sono d'accordo","não concordo"],["forse","talvez"],["sicuramente","certamente"],["ovviamente","obviamente"],
      ["in realtà","na verdade"],["invece","em vez disso"],["tuttavia","contudo"],["inoltre","além disso"],
      ["dipende","depende"],["confrontare","comparar"],["discutere","discutir"],["argomento","assunto"]
    ],
    "Passado e Memórias": [
      ["ricordo","lembrança"],["ricordare","lembrar"],["dimenticare","esquecer"],["infanzia","infância"],
      ["passato","passado"],["storia","história"],["evento","evento"],["tradizione","tradição"],
      ["una volta","outrora"],["da bambino","quando criança"],["all'improvviso","de repente"],["infine","enfim"],
      ["successo","acontecido"],["cambiare","mudar"],["crescere","crescer"],["diventare","tornar-se"]
    ],
    "Emoções Profundas": [
      ["emozione","emoção"],["sentire","sentir"],["provare","sentir / tentar"],["gioia","alegria"],
      ["dolore","dor"],["ansia","ansiedade"],["serenità","serenidade"],["coraggio","coragem"],
      ["fiducia","confiança"],["rispetto","respeito"],["gratitudine","gratidão"],["gelosia","ciúme"],
      ["compassione","compaixão"],["entusiasmo","entusiasmo"],["delusione","decepção"],["sogno","sonho"]
    ],
    "Relacionamentos": [
      ["relazione","relacionamento"],["coppia","casal"],["innamorarsi","apaixonar-se"],["fidanzato","noivo"],
      ["matrimonio","casamento"],["divorzio","divórcio"],["fidarsi","confiar"],["rispettare","respeitar"],
      ["sostenere","apoiar"],["litigare","brigar"],["perdonare","perdoar"],["abbracciare","abraçar"],
      ["baciare","beijar"],["regalo","presente"],["appuntamento","encontro"],["coppia","dupla"]
    ],
    "Tecnologia": [
      ["computer","computador"],["telefono","telefone"],["internet","internet"],["sito","site"],
      ["applicazione","aplicativo"],["email","e-mail"],["messaggio","mensagem"],["password","senha"],
      ["schermo","tela"],["tastiera","teclado"],["ricaricare","recarregar"],["cliccare","clicar"],
      ["cercare","buscar"],["scaricare","baixar"],["condividere","compartilhar"],["social network","rede social"]
    ],
    "Meio Ambiente": [
      ["ambiente","meio ambiente"],["natura","natureza"],["inquinamento","poluição"],["rifiuti","lixo"],
      ["riciclare","reciclar"],["energia","energia"],["risparmiare","economizar"],["proteggere","proteger"],
      ["foresta","floresta"],["oceano","oceano"],["animale selvatico","animal selvagem"],["clima","clima"],
      ["sostenibile","sustentável"],["rinnovabile","renovável"],["sprecare","desperdiçar"],["risorsa","recurso"]
    ],
    "Cozinha e Receitas": [
      ["ricetta","receita"],["ingrediente","ingrediente"],["mescolare","misturar"],["tagliare","cortar"],
      ["bollire","ferver"],["friggere","fritar"],["infornare","assar"],["condire","temperar"],
      ["sapore","sabor"],["profumo","aroma"],["piatto","prato"],["porzione","porção"],
      ["fame","fome"],["sete","sede"],["delizioso","delicioso"],["amaro","amargo"]
    ],
    "Festas e Tradições": [
      ["festa","festa"],["compleanno","aniversário"],["Natale","Natal"],["Pasqua","Páscoa"],
      ["regalo","presente"],["invito","convite"],["ospite","convidado"],["celebrare","celebrar"],
      ["brindisi","brinde"],["fuochi d'artificio","fogos de artifício"],["maschera","máscara"],["sfilata","desfile"],
      ["usanza","costume"],["cultura","cultura"],["religione","religião"],["cerimonia","cerimônia"]
    ]
  },

  b2: {
    "Sociedade": [
      ["società","sociedade"],["cittadino","cidadão"],["diritto","direito"],["dovere","dever"],
      ["legge","lei"],["giustizia","justiça"],["libertà","liberdade"],["uguaglianza","igualdade"],
      ["democrazia","democracia"],["voto","voto"],["governo","governo"],["politica","política"],
      ["comunità","comunidade"],["integrazione","integração"],["diversità","diversidade"],["responsabilità","responsabilidade"]
    ],
    "Economia e Negócios": [
      ["economia","economia"],["mercato","mercado"],["impresa","empresa"],["investimento","investimento"],
      ["profitto","lucro"],["perdita","prejuízo"],["bilancio","balanço"],["tasse","impostos"],
      ["banca","banco"],["prestito","empréstimo"],["interesse","juros"],["inflazione","inflação"],
      ["crisi","crise"],["crescita","crescimento"],["occupazione","emprego"],["commercio","comércio"]
    ],
    "Futuro e Planos": [
      ["futuro","futuro"],["progetto","projeto"],["piano","plano"],["obiettivo","objetivo"],
      ["speranza","esperança"],["sogno","sonho"],["traguardo","meta"],["sfida","desafio"],
      ["opportunità","oportunidade"],["rischio","risco"],["decisione","decisão"],["scegliere","escolher"],
      ["migliorare","melhorar"],["realizzare","realizar"],["raggiungere","alcançar"],["impegnarsi","empenhar-se"]
    ],
    "Subjuntivo e Hipóteses": [
      ["se fosse","se fosse"],["qualora","caso"],["nonostante","apesar de"],["affinché","para que"],
      ["benché","embora"],["purché","desde que"],["ammesso che","admitindo que"],["nel caso in cui","no caso de"],
      ["ipotizzare","hipotetizar"],["supporre","supor"],["dubitare","duvidar"],["desiderare","desejar"],
      ["augurarsi","torcer"],["temere","temer"],["pretendere","exigir"],["meritare","merecer"]
    ],
    "Arte e Cultura": [
      ["arte","arte"],["opera d'arte","obra de arte"],["pittura","pintura"],["scultura","escultura"],
      ["architettura","arquitetura"],["patrimonio","patrimônio"],["capolavoro","obra-prima"],["artista","artista"],
      ["mostra","exposição"],["galleria","galeria"],["restauro","restauração"],["ispirazione","inspiração"],
      ["creatività","criatividade"],["estetica","estética"],["simbolo","símbolo"],["stile","estilo"]
    ],
    "Ciência e Pesquisa": [
      ["scienza","ciência"],["ricerca","pesquisa"],["esperimento","experimento"],["teoria","teoria"],
      ["scoperta","descoberta"],["innovazione","inovação"],["tecnologia","tecnologia"],["laboratorio","laboratório"],
      ["scienziato","cientista"],["ipotesi","hipótese"],["analisi","análise"],["dato","dado"],
      ["risultato","resultado"],["metodo","método"],["prova","prova"],["progresso","progresso"]
    ],
    "Mídia e Comunicação": [
      ["media","mídia"],["giornale","jornal"],["telegiornale","telejornal"],["notizia","notícia"],
      ["informazione","informação"],["intervista","entrevista"],["stampa","imprensa"],["pubblicità","publicidade"],
      ["fonte","fonte"],["verità","verdade"],["opinione pubblica","opinião pública"],["diffondere","difundir"],
      ["comunicare","comunicar"],["pubblicare","publicar"],["smentire","desmentir"],["sensazionalismo","sensacionalismo"]
    ],
    "Saúde e Bem-estar": [
      ["benessere","bem-estar"],["salute mentale","saúde mental"],["stress","estresse"],["equilibrio","equilíbrio"],
      ["alimentazione","alimentação"],["dieta","dieta"],["esercizio fisico","exercício físico"],["sonno","sono"],
      ["meditazione","meditação"],["prevenzione","prevenção"],["vaccino","vacina"],["cura","cuidado"],
      ["terapia","terapia"],["paziente","paciente"],["diagnosi","diagnóstico"],["guarigione","recuperação"]
    ]
  },

  c1: {
    "Expressões Idiomáticas": [
      ["in bocca al lupo","boa sorte"],["crepi il lupo","obrigado (resposta)"],["avere le mani bucate","ser gastador"],
      ["essere al verde","estar sem dinheiro"],["piovere a catinelle","chover muito"],["essere in gamba","ser competente"],
      ["avere il pollice verde","ter mão para plantas"],["mettere il dito nella piaga","tocar na ferida"],["prendere due piccioni con una fava","matar dois coelhos"],["essere alla mano","ser acessível"],
      ["avere la testa fra le nuvole","estar no mundo da lua"],["costare un occhio della testa","custar os olhos da cara"],["essere pieno zeppo","estar lotado"],["fare orecchie da mercante","fazer vista grossa"],
      ["tagliare la testa al toro","cortar o mal pela raiz"],["avere l'acquolina in bocca","ficar com água na boca"]
    ],
    "Negócios Avançado": [
      ["negoziazione","negociação"],["accordo","acordo"],["strategia","estratégia"],["fatturato","faturamento"],
      ["margine","margem"],["concorrenza","concorrência"],["quota di mercato","fatia de mercado"],["start-up","startup"],
      ["investitore","investidor"],["azionista","acionista"],["fusione","fusão"],["acquisizione","aquisição"],
      ["delocalizzare","deslocalizar"],["outsourcing","terceirização"],["brand","marca"],["marketing","marketing"]
    ],
    "Argumentação": [
      ["sostenere","sustentar"],["affermare","afirmar"],["confutare","refutar"],["ribattere","rebater"],
      ["evidenziare","evidenciar"],["sottolineare","ressaltar"],["dedurre","deduzir"],["presumere","presumir"],
      ["obiezione","objeção"],["tesi","tese"],["antitesi","antítese"],["sintesi","síntese"],
      ["fallacia","falácia"],["pregiudizio","preconceito"],["paradosso","paradoxo"],["coerenza","coerência"]
    ],
    "Literatura": [
      ["romanzo","romance"],["poesia","poesia"],["autore","autor"],["trama","enredo"],
      ["personaggio","personagem"],["narratore","narrador"],["metafora","metáfora"],["allegoria","alegoria"],
      ["verso","verso"],["rima","rima"],["prosa","prosa"],["genere","gênero"],
      ["classico","clássico"],["contemporaneo","contemporâneo"],["lettura","leitura"],["critica","crítica"]
    ],
    "Psicologia": [
      ["mente","mente"],["inconscio","inconsciente"],["comportamento","comportamento"],["personalità","personalidade"],
      ["memoria","memória"],["percezione","percepção"],["cognizione","cognição"],["istinto","instinto"],
      ["motivazione","motivação"],["autostima","autoestima"],["empatia","empatia"],["resilienza","resiliência"],
      ["trauma","trauma"],["meccanismo di difesa","mecanismo de defesa"],["bias","viés"],["introspezione","introspecção"]
    ],
    "Filosofia": [
      ["filosofia","filosofia"],["esistenza","existência"],["essenza","essência"],["verità","verdade"],
      ["ragione","razão"],["etica","ética"],["morale","moral"],["libero arbitrio","livre-arbítrio"],
      ["coscienza","consciência"],["significato","significado"],["assurdo","absurdo"],["virtù","virtude"],
      ["contemplazione","contemplação"],["scetticismo","ceticismo"],["idealismo","idealismo"],["nichilismo","niilismo"]
    ]
  },

  c2: {
    "Nuances da Língua": [
      ["ormai","a esta altura"],["addirittura","até mesmo"],["tuttavia","contudo"],["altrettanto","igualmente"],
      ["nientemeno","nada menos que"],["ebbene","pois bem"],["dunque","portanto"],["giacché","já que"],
      ["sicché","de modo que"],["allorché","quando / ao que"],["ove","onde (formal)"],["altresì","igualmente"],
      ["affatto","de modo algum"],["altrettale","semelhante"],["codesto","esse (formal)"],["talvolta","por vezes"]
    ],
    "Gírias e Coloquialismos": [
      ["figo","legal / bacana"],["dai!","vamos! / qual!"],["bo","sei lá"],["cioè","tipo / ou seja"],
      ["tipo","tipo / como"],["un sacco","um monte"],["alla grande","muito bem"],["un casino","uma bagunça"],
      ["sclerare","surtar"],["mollare","largar"],["beccarsi","se encontrar"],["spaccare","arrasar"],
      ["una figata","algo irado"],["da paura","incrível"],["in bocca","na boca do povo"],["menefreghista","despreocupado"]
    ],
    "Retórica e Oratória": [
      ["retorica","retórica"],["oratoria","oratória"],["discorso","discurso"],["persuasione","persuasão"],
      ["eloquenza","eloquência"],["arringa","alegação"],["comizio","comício"],["dibattito","debate"],
      ["replica","réplica"],["arringa defensoria","defesa"],["climax","clímax"],["enfasi","ênfase"],
      ["pathos","pathos"],["logos","logos"],["ethos","ethos"],["dialettica","dialética"]
    ],
    "Acadêmico": [
      ["tesi di dottorato","tese de doutorado"],["dissertazione","dissertação"],["revisione tra pari","revisão por pares"],["citazione","citação"],
      ["bibliografia","bibliografia"],["epistemologia","epistemologia"],["metodologia","metodologia"],["paradigma","paradigma"],
      ["empirico","empírico"],["qualitativo","qualitativo"],["quantitativo","quantitativo"],["correlazione","correlação"],
      ["variabile","variável"],["campione","amostra"],["abstract","resumo"],["rigore scientifico","rigor científico"]
    ],
    "Provérbios": [
      ["chi dorme non piglia pesci","quem dorme não pesca"],["il mattino ha l'oro in bocca","quem cedo madrada encontra ouro"],["meglio tardi che mai","antes tarde do que nunca"],["chi va piano va sano e va lontano","devagar se vai ao longe"],
      ["l'appetito vien mangiando","o apetite vem comendo"],["tra il dire e il fare c'è di mezzo il mare","do dito ao feito há um trecho"],["non tutti i mali vengono per nuocere","há males que vêm para bem"],["il tempo è denaro","tempo é dinheiro"],
      ["la pazienza è la virtù dei forti","a paciência é a virtude dos fortes"],["chi trova un amico trova un tesoro","quem encontra um amigo encontra um tesouro"],["il mondo è paese","o mundo é pequeno"],["acqua in bocca","boca fechada"]
    ]
  }
};

const PHRASES = {
  a1: [
    ["Ciao, come stai?","Oi, como você está?"],
    ["Mi chiamo Marco","Me chamo Marco"],
    ["Buongiorno a tutti","Bom dia a todos"],
    ["Io sono italiano","Eu sou italiano"],
    ["Grazie mille","Muito obrigado"],
    ["Ho una sorella","Tenho uma irmã"],
    ["La casa è grande","A casa é grande"],
    ["Mangio la pizza","Eu como a pizza"],
    ["Bevo l'acqua","Eu bebo a água"],
    ["Il gatto è nero","O gato é preto"],
    ["Ho due fratelli","Tenho dois irmãos"],
    ["Oggi è lunedì","Hoje é segunda-feira"]
  ],
  a2: [
    ["Il treno parte alle otto","O trem parte às oito"],
    ["Dov'è la stazione?","Onde é a estação?"],
    ["Ho una prenotazione","Tenho uma reserva"],
    ["Oggi fa caldo","Hoje está quente"],
    ["Domani piove","Amanhã chove"],
    ["Mi sveglio alle sette","Acordo às sete"],
    ["Quanto costa questo?","Quanto custa isto?"],
    ["Vado al supermercato","Vou ao supermercado"],
    ["La città è molto bella","A cidade é muito bonita"],
    ["Mi piace giocare a calcio","Gosto de jogar futebol"],
    ["Ho mal di testa","Estou com dor de cabeça"],
    ["Il mio hobby è leggere","Meu hobby é ler"]
  ],
  b1: [
    ["Lavoro in un ufficio","Trabalho em um escritório"],
    ["Lei è un medico","Ela é médica"],
    ["Secondo me è giusto","Na minha opinião é justo"],
    ["Non sono d'accordo","Não concordo"],
    ["Ieri sono andato al mare","Ontem fui ao mar"],
    ["Ho visto un bel film","Vi um bom filme"],
    ["Mi fido di te","Eu confio em você"],
    ["Uso il computer ogni giorno","Uso o computador todo dia"],
    ["Dobbiamo proteggere l'ambiente","Devemos proteger o meio ambiente"],
    ["Questa ricetta è facile","Esta receita é fácil"],
    ["Buon compleanno!","Feliz aniversário!"],
    ["Sono molto emozionato","Estou muito empolgado"]
  ],
  b2: [
    ["L'economia sta crescendo","A economia está crescendo"],
    ["La società sta cambiando","A sociedade está mudando"],
    ["Credo che sia vero","Acredito que seja verdade"],
    ["È importante che tu studi","É importante que você estude"],
    ["L'anno prossimo andrò in Italia","Ano que vem irei à Itália"],
    ["Spero che tutto vada bene","Espero que tudo corra bem"],
    ["La ricerca ha dato buoni risultati","A pesquisa deu bons resultados"],
    ["Questo quadro è un capolavoro","Este quadro é uma obra-prima"],
    ["Benché sia stanco, continuo","Embora esteja cansado, continuo"],
    ["La stampa diffonde la notizia","A imprensa divulga a notícia"]
  ],
  c1: [
    ["In bocca al lupo per l'esame!","Boa sorte na prova!"],
    ["Sono al verde questo mese","Estou sem dinheiro este mês"],
    ["Dobbiamo firmare il contratto","Devemos assinar o contrato"],
    ["La negoziazione è andata bene","A negociação correu bem"],
    ["Sostengo la mia tesi","Sustento minha tese"],
    ["Questo romanzo è coinvolgente","Este romance é envolvente"],
    ["La metafora è potente","A metáfora é poderosa"],
    ["L'empatia è fondamentale","A empatia é fundamental"]
  ],
  c2: [
    ["Ormai parlo fluentemente","A esta altura falo fluentemente"],
    ["Tuttavia, resto umile","Contudo, permaneço humilde"],
    ["Ebbene, cosa facciamo?","Pois bem, o que fazemos?"],
    ["Chi dorme non piglia pesci","Quem dorme não pesca"],
    ["Il mondo è paese","O mundo é pequeno"],
    ["La retorica richiede pratica","A retórica exige prática"],
    ["Questa tesi è innovativa","Esta tese é inovadora"],
    ["È una figata pazzesca","É algo incrivelmente irado"]
  ]
};
