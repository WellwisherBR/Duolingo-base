const RAW_CONTENT = [
  { level: "A1", unit: 1, lessonId: "A1-U1L1", title: "Saudações", icon: "👋", words: [
      { it: "hello", pt: "olá" },
      { it: "goodbye", pt: "adeus" },
      { it: "good morning", pt: "bom dia" },
      { it: "good evening", pt: "boa noite" },
      { it: "hi", pt: "oi" },
      { it: "see you", pt: "até logo" },
      { it: "welcome", pt: "bem-vindo" },
      { it: "good afternoon", pt: "boa tarde" },
      { it: "take care", pt: "se cuida" },
      { it: "good night", pt: "boa noite (dormir)" }
    ], phrases: [
      { it: "Hello, how are you?", pt: "Olá, como você está?" },
      { it: "Good morning, everyone.", pt: "Bom dia a todos." },
      { it: "See you tomorrow.", pt: "Até amanhã." }
    ] },

  { level: "A1", unit: 1, lessonId: "A1-U1L2", title: "Apresentações", icon: "🤝", words: [
      { it: "name", pt: "nome" },
      { it: "man", pt: "homem" },
      { it: "woman", pt: "mulher" },
      { it: "boy", pt: "menino" },
      { it: "girl", pt: "menina" },
      { it: "I", pt: "eu" },
      { it: "you", pt: "você" },
      { it: "he", pt: "ele" },
      { it: "she", pt: "ela" },
      { it: "friend", pt: "amigo" }
    ], phrases: [
      { it: "My name is John.", pt: "Meu nome é John." },
      { it: "I am a student.", pt: "Eu sou um estudante." },
      { it: "She is my friend.", pt: "Ela é minha amiga." }
    ] },

  { level: "A1", unit: 1, lessonId: "A1-U1L3", title: "Polidez", icon: "🙏", words: [
      { it: "please", pt: "por favor" },
      { it: "thank you", pt: "obrigado" },
      { it: "sorry", pt: "desculpa" },
      { it: "excuse me", pt: "com licença" },
      { it: "yes", pt: "sim" },
      { it: "no", pt: "não" },
      { it: "you're welcome", pt: "de nada" },
      { it: "no problem", pt: "sem problema" },
      { it: "of course", pt: "claro" },
      { it: "don't worry", pt: "não se preocupe" }
    ], phrases: [
      { it: "Thank you very much.", pt: "Muito obrigado." },
      { it: "Excuse me, please.", pt: "Com licença, por favor." },
      { it: "I am sorry.", pt: "Me desculpe." }
    ] },

  { level: "A1", unit: 1, lessonId: "A1-U1L4", title: "Números", icon: "🔢", words: [
      { it: "one", pt: "um" },
      { it: "two", pt: "dois" },
      { it: "three", pt: "três" },
      { it: "four", pt: "quatro" },
      { it: "five", pt: "cinco" },
      { it: "six", pt: "seis" },
      { it: "seven", pt: "sete" },
      { it: "eight", pt: "oito" },
      { it: "nine", pt: "nove" },
      { it: "ten", pt: "dez" }
    ], phrases: [
      { it: "I have two apples.", pt: "Eu tenho duas maçãs." },
      { it: "There are five chairs.", pt: "Há cinco cadeiras." },
      { it: "I need one pen.", pt: "Eu preciso de uma caneta." }
    ] },

  { level: "A1", unit: 1, lessonId: "A1-U1L5", title: "Cores", icon: "🎨", words: [
      { it: "red", pt: "vermelho" },
      { it: "blue", pt: "azul" },
      { it: "green", pt: "verde" },
      { it: "yellow", pt: "amarelo" },
      { it: "white", pt: "branco" },
      { it: "black", pt: "preto" },
      { it: "orange", pt: "laranja" },
      { it: "purple", pt: "roxo" },
      { it: "brown", pt: "marrom" },
      { it: "pink", pt: "rosa" }
    ], phrases: [
      { it: "The sky is blue.", pt: "O céu é azul." },
      { it: "I like the green shirt.", pt: "Eu gosto da camisa verde." },
      { it: "The apple is red.", pt: "A maçã é vermelha." }
    ] },

  { level: "A1", unit: 1, lessonId: "A1-U1L6", title: "Números 2", icon: "🔢", words: [
      { it: "eleven", pt: "onze" },
      { it: "twelve", pt: "doze" },
      { it: "thirteen", pt: "treze" },
      { it: "fourteen", pt: "quatorze" },
      { it: "fifteen", pt: "quinze" },
      { it: "sixteen", pt: "dezesseis" },
      { it: "seventeen", pt: "dezessete" },
      { it: "eighteen", pt: "dezoito" },
      { it: "nineteen", pt: "dezenove" },
      { it: "twenty", pt: "vinte" }
    ], phrases: [
      { it: "She is twenty years old.", pt: "Ela tem vinte anos." },
      { it: "There are twelve months.", pt: "Há doze meses." },
      { it: "I have fifteen books.", pt: "Eu tenho quinze livros." }
    ] },

  { level: "A1", unit: 1, lessonId: "A1-U1L7", title: "Formas e tamanhos", icon: "📐", words: [
      { it: "big", pt: "grande" },
      { it: "small", pt: "pequeno" },
      { it: "long", pt: "longo" },
      { it: "short", pt: "curto" },
      { it: "tall", pt: "alto" },
      { it: "round", pt: "redondo" },
      { it: "square", pt: "quadrado" },
      { it: "heavy", pt: "pesado" },
      { it: "light", pt: "leve" },
      { it: "wide", pt: "largo" }
    ], phrases: [
      { it: "The house is big.", pt: "A casa é grande." },
      { it: "The table is round.", pt: "A mesa é redonda." },
      { it: "The box is heavy.", pt: "A caixa é pesada." }
    ] },

  { level: "A1", unit: 1, lessonId: "A1-U1L8", title: "Frases essenciais", icon: "💬", words: [
      { it: "question", pt: "pergunta" },
      { it: "answer", pt: "resposta" },
      { it: "word", pt: "palavra" },
      { it: "sentence", pt: "frase" },
      { it: "language", pt: "idioma" },
      { it: "meaning", pt: "significado" },
      { it: "example", pt: "exemplo" },
      { it: "help", pt: "ajuda" },
      { it: "slow", pt: "devagar" },
      { it: "again", pt: "de novo" }
    ], phrases: [
      { it: "What does it mean?", pt: "O que isso significa?" },
      { it: "Please speak slowly.", pt: "Por favor, fale devagar." },
      { it: "Can you repeat, please?", pt: "Você pode repetir, por favor?" }
    ] },

  { level: "A1", unit: 2, lessonId: "A1-U2L1", title: "Família", icon: "👨‍👩‍👧", words: [
      { it: "mother", pt: "mãe" },
      { it: "father", pt: "pai" },
      { it: "brother", pt: "irmão" },
      { it: "sister", pt: "irmã" },
      { it: "grandmother", pt: "avó" },
      { it: "grandfather", pt: "avô" },
      { it: "son", pt: "filho" },
      { it: "daughter", pt: "filha" },
      { it: "family", pt: "família" },
      { it: "uncle", pt: "tio" }
    ], phrases: [
      { it: "My mother is kind.", pt: "Minha mãe é gentil." },
      { it: "I have one brother.", pt: "Eu tenho um irmão." },
      { it: "This is my family.", pt: "Esta é minha família." }
    ] },

  { level: "A1", unit: 2, lessonId: "A1-U2L2", title: "Comida 1", icon: "🍎", words: [
      { it: "apple", pt: "maçã" },
      { it: "bread", pt: "pão" },
      { it: "water", pt: "água" },
      { it: "milk", pt: "leite" },
      { it: "cheese", pt: "queijo" },
      { it: "egg", pt: "ovo" },
      { it: "rice", pt: "arroz" },
      { it: "meat", pt: "carne" },
      { it: "fruit", pt: "fruta" },
      { it: "vegetable", pt: "vegetal" }
    ], phrases: [
      { it: "I eat bread every day.", pt: "Eu como pão todo dia." },
      { it: "I drink water.", pt: "Eu bebo água." },
      { it: "The fruit is fresh.", pt: "A fruta está fresca." }
    ] },

  { level: "A1", unit: 2, lessonId: "A1-U2L3", title: "Bebidas", icon: "🥤", words: [
      { it: "coffee", pt: "café" },
      { it: "tea", pt: "chá" },
      { it: "juice", pt: "suco" },
      { it: "soda", pt: "refrigerante" },
      { it: "wine", pt: "vinho" },
      { it: "beer", pt: "cerveja" },
      { it: "hot chocolate", pt: "chocolate quente" },
      { it: "sparkling water", pt: "água com gás" },
      { it: "smoothie", pt: "vitamina" },
      { it: "lemonade", pt: "limonada" }
    ], phrases: [
      { it: "I like coffee in the morning.", pt: "Eu gosto de café de manhã." },
      { it: "Do you want some tea?", pt: "Você quer um pouco de chá?" },
      { it: "The juice is cold.", pt: "O suco está gelado." }
    ] },

  { level: "A1", unit: 2, lessonId: "A1-U2L4", title: "Casa", icon: "🏠", words: [
      { it: "house", pt: "casa" },
      { it: "door", pt: "porta" },
      { it: "window", pt: "janela" },
      { it: "table", pt: "mesa" },
      { it: "chair", pt: "cadeira" },
      { it: "bed", pt: "cama" },
      { it: "kitchen", pt: "cozinha" },
      { it: "bathroom", pt: "banheiro" },
      { it: "living room", pt: "sala de estar" },
      { it: "garden", pt: "jardim" }
    ], phrases: [
      { it: "The door is open.", pt: "A porta está aberta." },
      { it: "I am in the kitchen.", pt: "Eu estou na cozinha." },
      { it: "The bed is comfortable.", pt: "A cama é confortável." }
    ] },

  { level: "A1", unit: 2, lessonId: "A1-U2L5", title: "Comida 2", icon: "🍝", words: [
      { it: "chicken", pt: "frango" },
      { it: "fish", pt: "peixe" },
      { it: "soup", pt: "sopa" },
      { it: "salad", pt: "salada" },
      { it: "pasta", pt: "macarrão" },
      { it: "potato", pt: "batata" },
      { it: "tomato", pt: "tomate" },
      { it: "onion", pt: "cebola" },
      { it: "carrot", pt: "cenoura" },
      { it: "dessert", pt: "sobremesa" }
    ], phrases: [
      { it: "The soup is hot.", pt: "A sopa está quente." },
      { it: "I eat fish twice a week.", pt: "Eu como peixe duas vezes por semana." },
      { it: "The salad is fresh.", pt: "A salada está fresca." }
    ] },

  { level: "A1", unit: 2, lessonId: "A1-U2L6", title: "Roupas", icon: "👕", words: [
      { it: "shirt", pt: "camisa" },
      { it: "pants", pt: "calça" },
      { it: "dress", pt: "vestido" },
      { it: "shoes", pt: "sapatos" },
      { it: "hat", pt: "chapéu" },
      { it: "jacket", pt: "jaqueta" },
      { it: "socks", pt: "meias" },
      { it: "skirt", pt: "saia" },
      { it: "coat", pt: "casaco" },
      { it: "belt", pt: "cinto" }
    ], phrases: [
      { it: "I wear a blue shirt.", pt: "Eu uso uma camisa azul." },
      { it: "The shoes are new.", pt: "Os sapatos são novos." },
      { it: "She has a red dress.", pt: "Ela tem um vestido vermelho." }
    ] },

  { level: "A1", unit: 2, lessonId: "A1-U2L7", title: "Compras", icon: "🛒", words: [
      { it: "shop", pt: "loja" },
      { it: "price", pt: "preço" },
      { it: "cheap", pt: "barato" },
      { it: "expensive", pt: "caro" },
      { it: "money", pt: "dinheiro" },
      { it: "buy", pt: "comprar" },
      { it: "sell", pt: "vender" },
      { it: "pay", pt: "pagar" },
      { it: "discount", pt: "desconto" },
      { it: "receipt", pt: "recibo" }
    ], phrases: [
      { it: "How much is it?", pt: "Quanto custa?" },
      { it: "It is too expensive.", pt: "Está muito caro." },
      { it: "I want to buy this.", pt: "Eu quero comprar isto." }
    ] },

  { level: "A1", unit: 3, lessonId: "A1-U3L1", title: "Animais", icon: "🐶", words: [
      { it: "dog", pt: "cachorro" },
      { it: "cat", pt: "gato" },
      { it: "bird", pt: "pássaro" },
      { it: "horse", pt: "cavalo" },
      { it: "fish", pt: "peixe" },
      { it: "rabbit", pt: "coelho" },
      { it: "cow", pt: "vaca" },
      { it: "sheep", pt: "ovelha" },
      { it: "chicken", pt: "galinha" },
      { it: "pig", pt: "porco" }
    ], phrases: [
      { it: "The dog is friendly.", pt: "O cachorro é amigável." },
      { it: "I have a cat at home.", pt: "Eu tenho um gato em casa." },
      { it: "The horse runs fast.", pt: "O cavalo corre rápido." }
    ] },

  { level: "A1", unit: 3, lessonId: "A1-U3L2", title: "Corpo humano", icon: "🧍", words: [
      { it: "head", pt: "cabeça" },
      { it: "arm", pt: "braço" },
      { it: "leg", pt: "perna" },
      { it: "hand", pt: "mão" },
      { it: "foot", pt: "pé" },
      { it: "eye", pt: "olho" },
      { it: "mouth", pt: "boca" },
      { it: "ear", pt: "orelha" },
      { it: "nose", pt: "nariz" },
      { it: "back", pt: "costas" }
    ], phrases: [
      { it: "My head hurts.", pt: "Minha cabeça dói." },
      { it: "I raise my hand.", pt: "Eu levanto a mão." },
      { it: "She has blue eyes.", pt: "Ela tem olhos azuis." }
    ] },

  { level: "A1", unit: 3, lessonId: "A1-U3L3", title: "Escola", icon: "🎒", words: [
      { it: "school", pt: "escola" },
      { it: "teacher", pt: "professor" },
      { it: "student", pt: "aluno" },
      { it: "book", pt: "livro" },
      { it: "pen", pt: "caneta" },
      { it: "pencil", pt: "lápis" },
      { it: "classroom", pt: "sala de aula" },
      { it: "lesson", pt: "lição" },
      { it: "homework", pt: "dever de casa" },
      { it: "exam", pt: "prova" }
    ], phrases: [
      { it: "I go to school every day.", pt: "Eu vou à escola todo dia." },
      { it: "The teacher is nice.", pt: "O professor é legal." },
      { it: "I finished my homework.", pt: "Eu terminei meu dever de casa." }
    ] },

  { level: "A1", unit: 3, lessonId: "A1-U3L4", title: "Transporte", icon: "🚌", words: [
      { it: "car", pt: "carro" },
      { it: "bus", pt: "ônibus" },
      { it: "train", pt: "trem" },
      { it: "plane", pt: "avião" },
      { it: "bike", pt: "bicicleta" },
      { it: "taxi", pt: "táxi" },
      { it: "ship", pt: "navio" },
      { it: "station", pt: "estação" },
      { it: "airport", pt: "aeroporto" },
      { it: "ticket", pt: "bilhete" }
    ], phrases: [
      { it: "I take the bus to work.", pt: "Eu pego o ônibus para o trabalho." },
      { it: "The plane is on time.", pt: "O avião está no horário." },
      { it: "I bought a train ticket.", pt: "Eu comprei um bilhete de trem." }
    ] },

  { level: "A1", unit: 3, lessonId: "A1-U3L5", title: "Lugares na cidade", icon: "🏙️", words: [
      { it: "city", pt: "cidade" },
      { it: "street", pt: "rua" },
      { it: "park", pt: "parque" },
      { it: "hospital", pt: "hospital" },
      { it: "bank", pt: "banco" },
      { it: "restaurant", pt: "restaurante" },
      { it: "library", pt: "biblioteca" },
      { it: "museum", pt: "museu" },
      { it: "church", pt: "igreja" },
      { it: "square", pt: "praça" }
    ], phrases: [
      { it: "The park is beautiful.", pt: "O parque é bonito." },
      { it: "I work near the bank.", pt: "Eu trabalho perto do banco." },
      { it: "The museum is open today.", pt: "O museu está aberto hoje." }
    ] },

  { level: "A1", unit: 3, lessonId: "A1-U3L6", title: "Clima", icon: "🌤️", words: [
      { it: "sun", pt: "sol" },
      { it: "rain", pt: "chuva" },
      { it: "snow", pt: "neve" },
      { it: "wind", pt: "vento" },
      { it: "cloud", pt: "nuvem" },
      { it: "hot", pt: "quente" },
      { it: "cold", pt: "frio" },
      { it: "warm", pt: "morno" },
      { it: "storm", pt: "tempestade" },
      { it: "fog", pt: "neblina" }
    ], phrases: [
      { it: "It is sunny today.", pt: "Está ensolarado hoje." },
      { it: "It is raining now.", pt: "Está chovendo agora." },
      { it: "It is very cold outside.", pt: "Está muito frio lá fora." }
    ] },

  { level: "A1", unit: 3, lessonId: "A1-U3L7", title: "Verbos básicos", icon: "🏃", words: [
      { it: "go", pt: "ir" },
      { it: "come", pt: "vir" },
      { it: "eat", pt: "comer" },
      { it: "drink", pt: "beber" },
      { it: "sleep", pt: "dormir" },
      { it: "read", pt: "ler" },
      { it: "write", pt: "escrever" },
      { it: "speak", pt: "falar" },
      { it: "see", pt: "ver" },
      { it: "hear", pt: "ouvir" }
    ], phrases: [
      { it: "I go to work in the morning.", pt: "Eu vou ao trabalho de manhã." },
      { it: "She reads a book.", pt: "Ela lê um livro." },
      { it: "We eat dinner together.", pt: "Nós jantamos juntos." }
    ] },

  { level: "A1", unit: 3, lessonId: "A1-U3L8", title: "Hora e dias", icon: "⏰", words: [
      { it: "today", pt: "hoje" },
      { it: "tomorrow", pt: "amanhã" },
      { it: "yesterday", pt: "ontem" },
      { it: "week", pt: "semana" },
      { it: "month", pt: "mês" },
      { it: "year", pt: "ano" },
      { it: "hour", pt: "hora" },
      { it: "minute", pt: "minuto" },
      { it: "early", pt: "cedo" },
      { it: "late", pt: "tarde" }
    ], phrases: [
      { it: "I wake up early.", pt: "Eu acordo cedo." },
      { it: "See you tomorrow.", pt: "Te vejo amanhã." },
      { it: "The meeting is at three.", pt: "A reunião é às três." }
    ] }
];
