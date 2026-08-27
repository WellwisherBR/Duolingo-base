const RAW_CONTENT_EXTRA = [
  { level: "A1", unit: 4, lessonId: "A1-U4L1", title: "Profissões", icon: "💼", words: [
      { it: "médico", pt: "médico" },
      { it: "enfermero", pt: "enfermeiro" },
      { it: "profesor", pt: "professor" },
      { it: "ingeniero", pt: "engenheiro" },
      { it: "policía", pt: "policial" },
      { it: "bombero", pt: "bombeiro" },
      { it: "cocinero", pt: "chef" },
      { it: "conductor", pt: "motorista" },
      { it: "abogado", pt: "advogado" },
      { it: "agricultor", pt: "fazendeiro" }
    ], phrases: [
      { it: "Ella es médica.", pt: "Ela é médica." },
      { it: "Él trabaja como conductor.", pt: "Ele trabalha como motorista." },
      { it: "Quiero ser profesor.", pt: "Quero ser professor." }
    ] },

  { level: "A1", unit: 4, lessonId: "A1-U4L2", title: "Direções", icon: "🧭", words: [
      { it: "izquierda", pt: "esquerda" },
      { it: "derecha", pt: "direita" },
      { it: "recto", pt: "reto" },
      { it: "cerca", pt: "perto" },
      { it: "lejos", pt: "longe" },
      { it: "entre", pt: "entre" },
      { it: "detrás", pt: "atrás" },
      { it: "delante de", pt: "na frente de" },
      { it: "esquina", pt: "esquina" },
      { it: "semáforo", pt: "semáforo" }
    ], phrases: [
      { it: "Gire a la izquierda en la esquina.", pt: "Vire à esquerda na esquina." },
      { it: "Vaya recto.", pt: "Vá reto em frente." },
      { it: "El banco está cerca del parque.", pt: "O banco fica perto do parque." }
    ] },

  { level: "A1", unit: 4, lessonId: "A1-U4L3", title: "Restaurante", icon: "🍽️", words: [
      { it: "menú", pt: "cardápio" },
      { it: "camarero", pt: "garçom" },
      { it: "cuenta", pt: "conta" },
      { it: "mesa", pt: "mesa" },
      { it: "reserva", pt: "reserva" },
      { it: "pedido", pt: "pedido" },
      { it: "desayuno", pt: "café da manhã" },
      { it: "almuerzo", pt: "almoço" },
      { it: "cena", pt: "jantar" },
      { it: "propina", pt: "gorjeta" }
    ], phrases: [
      { it: "¿Puedo ver el menú, por favor?", pt: "Posso ver o cardápio, por favor?" },
      { it: "La cuenta, por favor.", pt: "A conta, por favor." },
      { it: "Quisiera una mesa para dos.", pt: "Gostaria de uma mesa para dois." }
    ] },

  { level: "A1", unit: 4, lessonId: "A1-U4L4", title: "Telefone", icon: "📱", words: [
      { it: "teléfono", pt: "telefone" },
      { it: "llamada", pt: "ligação" },
      { it: "mensaje", pt: "mensagem" },
      { it: "número", pt: "número" },
      { it: "contestar", pt: "atender" },
      { it: "colgar", pt: "desligar" },
      { it: "ocupado", pt: "ocupado" },
      { it: "número equivocado", pt: "número errado" },
      { it: "buzón de voz", pt: "caixa postal" },
      { it: "señal", pt: "sinal" }
    ], phrases: [
      { it: "¿Puedo tener tu número?", pt: "Posso ter seu número?" },
      { it: "Te llamaré más tarde.", pt: "Te ligo mais tarde." },
      { it: "Por favor, deja un mensaje.", pt: "Por favor, deixe uma mensagem." }
    ] },

  { level: "A1", unit: 4, lessonId: "A1-U4L5", title: "Sentimentos", icon: "😊", words: [
      { it: "feliz", pt: "feliz" },
      { it: "triste", pt: "triste" },
      { it: "enfadado", pt: "bravo" },
      { it: "cansado", pt: "cansado" },
      { it: "hambriento", pt: "com fome" },
      { it: "sediento", pt: "com sede" },
      { it: "asustado", pt: "com medo" },
      { it: "sorprendido", pt: "surpreso" },
      { it: "aburrido", pt: "entediado" },
      { it: "emocionado", pt: "animado" }
    ], phrases: [
      { it: "Estoy muy feliz hoy.", pt: "Estou muito feliz hoje." },
      { it: "Ella parece cansada.", pt: "Ela parece cansada." },
      { it: "¿Tienes hambre?", pt: "Você está com fome?" }
    ] },

  { level: "A2", unit: 1, lessonId: "A2-U1L1", title: "Rotina diária", icon: "🌅", words: [
      { it: "despertarse", pt: "acordar" },
      { it: "cepillarse los dientes", pt: "escovar os dentes" },
      { it: "ducharse", pt: "tomar banho" },
      { it: "vestirse", pt: "vestir-se" },
      { it: "desayunar", pt: "tomar café da manhã" },
      { it: "ir al trabajo", pt: "ir ao trabalho" },
      { it: "almorzar", pt: "almoçar" },
      { it: "volver a casa", pt: "voltar para casa" },
      { it: "ver la televisión", pt: "assistir TV" },
      { it: "acostarse", pt: "ir dormir" }
    ], phrases: [
      { it: "Me despierto a las siete.", pt: "Acordo às sete." },
      { it: "Ella se ducha cada mañana.", pt: "Ela toma banho toda manhã." },
      { it: "Vemos la televisión después de cenar.", pt: "Assistimos TV depois do jantar." }
    ] },

  { level: "A2", unit: 1, lessonId: "A2-U1L2", title: "Estações", icon: "🍂", words: [
      { it: "primavera", pt: "primavera" },
      { it: "verano", pt: "verão" },
      { it: "otoño", pt: "outono" },
      { it: "invierno", pt: "inverno" },
      { it: "estación", pt: "estação" },
      { it: "temperatura", pt: "temperatura" },
      { it: "pronóstico", pt: "previsão" },
      { it: "grado", pt: "grau" },
      { it: "paraguas", pt: "guarda-chuva" },
      { it: "impermeable", pt: "capa de chuva" }
    ], phrases: [
      { it: "El verano es mi estación favorita.", pt: "Verão é minha estação favorita." },
      { it: "La temperatura está bajando.", pt: "A temperatura está caindo." },
      { it: "Lleva un paraguas, puede llover.", pt: "Leve um guarda-chuva, pode chover." }
    ] },

  { level: "A2", unit: 1, lessonId: "A2-U1L3", title: "Viagem", icon: "✈️", words: [
      { it: "viaje", pt: "viagem" },
      { it: "equipaje", pt: "bagagem" },
      { it: "pasaporte", pt: "passaporte" },
      { it: "hotel", pt: "hotel" },
      { it: "reserva", pt: "reserva" },
      { it: "salida", pt: "partida" },
      { it: "llegada", pt: "chegada" },
      { it: "vuelo", pt: "voo" },
      { it: "turista", pt: "turista" },
      { it: "visita turística", pt: "passeio turístico" }
    ], phrases: [
      { it: "Reservé una habitación de hotel.", pt: "Reservei um quarto de hotel." },
      { it: "El vuelo se retrasó.", pt: "O voo atrasou." },
      { it: "¿Dónde está mi equipaje?", pt: "Onde está minha bagagem?" }
    ] },

  { level: "A2", unit: 1, lessonId: "A2-U1L4", title: "Saúde básica", icon: "🏥", words: [
      { it: "médico", pt: "médico" },
      { it: "medicina", pt: "remédio" },
      { it: "dolor de cabeza", pt: "dor de cabeça" },
      { it: "fiebre", pt: "febre" },
      { it: "resfriado", pt: "resfriado" },
      { it: "tos", pt: "tosse" },
      { it: "dolor", pt: "dor" },
      { it: "farmacia", pt: "farmácia" },
      { it: "cita", pt: "consulta" },
      { it: "sano", pt: "saudável" }
    ], phrases: [
      { it: "Tengo dolor de cabeza.", pt: "Estou com dor de cabeça." },
      { it: "Deberías ver a un médico.", pt: "Você deveria ver um médico." },
      { it: "Necesito comprar medicina.", pt: "Preciso comprar remédio." }
    ] },

  { level: "A2", unit: 1, lessonId: "A2-U1L5", title: "Tempo livre", icon: "🎮", words: [
      { it: "pasatiempo", pt: "passatempo" },
      { it: "música", pt: "música" },
      { it: "película", pt: "filme" },
      { it: "juego", pt: "jogo" },
      { it: "deporte", pt: "esporte" },
      { it: "viajar", pt: "viajar" },
      { it: "bailar", pt: "dançar" },
      { it: "cantar", pt: "cantar" },
      { it: "cocinar", pt: "cozinhar" },
      { it: "pintar", pt: "pintar" }
    ], phrases: [
      { it: "¿Cuál es tu pasatiempo?", pt: "Qual é o seu passatempo?" },
      { it: "Me gusta jugar al fútbol.", pt: "Gosto de jogar futebol." },
      { it: "A ella le gusta leer libros.", pt: "Ela gosta de ler livros." }
    ] },

  { level: "A2", unit: 1, lessonId: "A2-U1L6", title: "Adjetivos comuns", icon: "✨", words: [
      { it: "bonito", pt: "bonito" },
      { it: "feo", pt: "feio" },
      { it: "rápido", pt: "rápido" },
      { it: "lento", pt: "lento" },
      { it: "fácil", pt: "fácil" },
      { it: "difícil", pt: "difícil" },
      { it: "nuevo", pt: "novo" },
      { it: "viejo", pt: "velho" },
      { it: "joven", pt: "jovem" },
      { it: "limpio", pt: "limpo" }
    ], phrases: [
      { it: "La ciudad es bonita.", pt: "A cidade é bonita." },
      { it: "Este ejercicio es fácil.", pt: "Este exercício é fácil." },
      { it: "Él conduce un coche rápido.", pt: "Ele dirige um carro rápido." }
    ] },

  { level: "A2", unit: 1, lessonId: "A2-U1L7", title: "Passado simples", icon: "🕰️", words: [
      { it: "ayer", pt: "ontem" },
      { it: "la semana pasada", pt: "semana passada" },
      { it: "hace", pt: "atrás" },
      { it: "fui", pt: "fui/foi" },
      { it: "vi", pt: "vi/viu" },
      { it: "compré", pt: "comprei/comprou" },
      { it: "hice", pt: "fiz/fez" },
      { it: "tomé", pt: "peguei/pegou" },
      { it: "comí", pt: "comi/comeu" },
      { it: "bebí", pt: "bebi/bebeu" }
    ], phrases: [
      { it: "Fui al parque ayer.", pt: "Fui ao parque ontem." },
      { it: "Ella compró un vestido nuevo.", pt: "Ela comprou um vestido novo." },
      { it: "Comimos pizza anoche.", pt: "Comemos pizza ontem à noite." }
    ] },

  { level: "A2", unit: 1, lessonId: "A2-U1L8", title: "Casa e móveis", icon: "🛋️", words: [
      { it: "sofá", pt: "sofá" },
      { it: "armario", pt: "guarda-roupa" },
      { it: "estante", pt: "prateleira" },
      { it: "espejo", pt: "espelho" },
      { it: "lámpara", pt: "abajur" },
      { it: "alfombra", pt: "tapete" },
      { it: "almohada", pt: "travesseiro" },
      { it: "manta", pt: "cobertor" },
      { it: "nevera", pt: "geladeira" },
      { it: "horno", pt: "forno" }
    ], phrases: [
      { it: "El sofá es cómodo.", pt: "O sofá é confortável." },
      { it: "Los libros están en el estante.", pt: "Os livros estão na prateleira." },
      { it: "La comida está en la nevera.", pt: "A comida está na geladeira." }
    ] },

  { level: "B1", unit: 1, lessonId: "B1-U1L1", title: "Trabalho e carreira", icon: "💼", words: [
      { it: "empleo", pt: "emprego" },
      { it: "salario", pt: "salário" },
      { it: "entrevista", pt: "entrevista" },
      { it: "currículum", pt: "currículo" },
      { it: "colega", pt: "colega" },
      { it: "jefe", pt: "chefe" },
      { it: "reunión", pt: "reunião" },
      { it: "plazo", pt: "prazo" },
      { it: "ascenso", pt: "promoção" },
      { it: "renunciar", pt: "pedir demissão" }
    ], phrases: [
      { it: "Tengo una entrevista de trabajo mañana.", pt: "Tenho uma entrevista de emprego amanhã." },
      { it: "Ella recibió un ascenso en el trabajo.", pt: "Ela recebeu uma promoção no trabalho." },
      { it: "El plazo es el próximo viernes.", pt: "O prazo é na próxima sexta-feira." }
    ] },

  { level: "B1", unit: 1, lessonId: "B1-U1L2", title: "Tecnologia", icon: "💻", words: [
      { it: "computadora", pt: "computador" },
      { it: "pantalla", pt: "tela" },
      { it: "teclado", pt: "teclado" },
      { it: "contraseña", pt: "senha" },
      { it: "sitio web", pt: "site" },
      { it: "descargar", pt: "baixar" },
      { it: "subir", pt: "enviar" },
      { it: "buscar", pt: "pesquisar" },
      { it: "aplicación", pt: "aplicativo" },
      { it: "inalámbrico", pt: "sem fio" }
    ], phrases: [
      { it: "Olvidé mi contraseña.", pt: "Esqueci minha senha." },
      { it: "Descarga la aplicación en tu teléfono.", pt: "Baixe o aplicativo no seu celular." },
      { it: "El sitio web está cargando lentamente.", pt: "O site está carregando devagar." }
    ] },

  { level: "B1", unit: 1, lessonId: "B1-U1L3", title: "Meio ambiente", icon: "🌍", words: [
      { it: "medio ambiente", pt: "meio ambiente" },
      { it: "contaminación", pt: "poluição" },
      { it: "reciclar", pt: "reciclar" },
      { it: "basura", pt: "lixo" },
      { it: "energía", pt: "energia" },
      { it: "cambio climático", pt: "mudança climática" },
      { it: "bosque", pt: "floresta" },
      { it: "océano", pt: "oceano" },
      { it: "proteger", pt: "proteger" },
      { it: "sostenible", pt: "sustentável" }
    ], phrases: [
      { it: "Debemos proteger el medio ambiente.", pt: "Devemos proteger o meio ambiente." },
      { it: "Reciclar reduce la basura.", pt: "Reciclar reduz o lixo." },
      { it: "El cambio climático es un problema grave.", pt: "A mudança climática é um problema sério." }
    ] },

  { level: "B1", unit: 1, lessonId: "B1-U1L4", title: "Educação", icon: "🎓", words: [
      { it: "universidad", pt: "universidade" },
      { it: "título", pt: "diploma" },
      { it: "curso", pt: "curso" },
      { it: "conferencia", pt: "palestra" },
      { it: "investigación", pt: "pesquisa" },
      { it: "conocimiento", pt: "conhecimento" },
      { it: "habilidad", pt: "habilidade" },
      { it: "graduarse", pt: "formar-se" },
      { it: "beca", pt: "bolsa de estudos" },
      { it: "campus", pt: "campus" }
    ], phrases: [
      { it: "Ella estudia en la universidad.", pt: "Ela estuda na universidade." },
      { it: "Él se graduó el año pasado.", pt: "Ele se formou no ano passado." },
      { it: "Conseguí una beca.", pt: "Ganhei uma bolsa de estudos." }
    ] },

  { level: "B1", unit: 1, lessonId: "B1-U1L5", title: "Vida na cidade", icon: "🏙️", words: [
      { it: "barrio", pt: "bairro" },
      { it: "concurrido", pt: "lotado" },
      { it: "ruidoso", pt: "barulhento" },
      { it: "seguro", pt: "seguro" },
      { it: "alquiler", pt: "aluguel" },
      { it: "metro", pt: "metrô" },
      { it: "tráfico", pt: "trânsito" },
      { it: "centro", pt: "centro" },
      { it: "suburbio", pt: "subúrbio" },
      { it: "desplazamiento", pt: "deslocamento" }
    ], phrases: [
      { it: "El barrio es tranquilo.", pt: "O bairro é tranquilo." },
      { it: "El tráfico está terrible hoy.", pt: "O trânsito está terrível hoje." },
      { it: "Tomo el metro para ir al trabajo.", pt: "Pego o metrô para ir ao trabalho." }
    ] },

  { level: "B1", unit: 1, lessonId: "B1-U1L6", title: "Saúde e bem-estar", icon: "🧘", words: [
      { it: "ejercicio", pt: "exercício" },
      { it: "dieta", pt: "dieta" },
      { it: "estrés", pt: "estresse" },
      { it: "relajarse", pt: "relaxar" },
      { it: "salud mental", pt: "saúde mental" },
      { it: "hábito", pt: "hábito" },
      { it: "descanso", pt: "descanso" },
      { it: "vitamina", pt: "vitamina" },
      { it: "lesión", pt: "lesão" },
      { it: "recuperación", pt: "recuperação" }
    ], phrases: [
      { it: "El ejercicio es bueno para la salud.", pt: "Exercício é bom para a saúde." },
      { it: "Necesitas descansar y relajarte.", pt: "Você precisa descansar e relaxar." },
      { it: "Una dieta equilibrada es importante.", pt: "Uma dieta equilibrada é importante." }
    ] },

  { level: "B2", unit: 1, lessonId: "B2-U1L1", title: "Negócios", icon: "📈", words: [
      { it: "empresa", pt: "empresa" },
      { it: "beneficio", pt: "lucro" },
      { it: "pérdida", pt: "prejuízo" },
      { it: "inversión", pt: "investimento" },
      { it: "mercado", pt: "mercado" },
      { it: "estrategia", pt: "estratégia" },
      { it: "negociar", pt: "negociar" },
      { it: "contrato", pt: "contrato" },
      { it: "startup", pt: "startup" },
      { it: "ingresos", pt: "receita" }
    ], phrases: [
      { it: "La empresa obtuvo beneficios este año.", pt: "A empresa teve lucro este ano." },
      { it: "Necesitamos negociar el contrato.", pt: "Precisamos negociar o contrato." },
      { it: "El mercado es muy competitivo.", pt: "O mercado está muito competitivo." }
    ] },

  { level: "B2", unit: 1, lessonId: "B2-U1L2", title: "Sociedade", icon: "🏛️", words: [
      { it: "sociedad", pt: "sociedade" },
      { it: "ciudadano", pt: "cidadão" },
      { it: "derechos", pt: "direitos" },
      { it: "igualdad", pt: "igualdade" },
      { it: "comunidad", pt: "comunidade" },
      { it: "voluntario", pt: "voluntário" },
      { it: "caridad", pt: "caridade" },
      { it: "ley", pt: "lei" },
      { it: "justicia", pt: "justiça" },
      { it: "libertad", pt: "liberdade" }
    ], phrases: [
      { it: "Todos merecen derechos iguales.", pt: "Todos merecem direitos iguais." },
      { it: "Ella es voluntaria en la caridad.", pt: "Ela é voluntária na instituição de caridade." },
      { it: "La libertad de expresión es esencial.", pt: "A liberdade de expressão é essencial." }
    ] },

  { level: "B2", unit: 1, lessonId: "B2-U1L3", title: "Cultura e arte", icon: "🎭", words: [
      { it: "arte", pt: "arte" },
      { it: "cultura", pt: "cultura" },
      { it: "tradición", pt: "tradição" },
      { it: "patrimonio", pt: "patrimônio" },
      { it: "festival", pt: "festival" },
      { it: "exposición", pt: "exposição" },
      { it: "actuación", pt: "apresentação" },
      { it: "literatura", pt: "literatura" },
      { it: "obra maestra", pt: "obra-prima" },
      { it: "inspiración", pt: "inspiração" }
    ], phrases: [
      { it: "La exposición fue impresionante.", pt: "A exposição foi impressionante." },
      { it: "Debemos preservar nuestro patrimonio.", pt: "Devemos preservar nosso patrimônio." },
      { it: "La actuación fue impresionante.", pt: "A apresentação foi de tirar o fôlego." }
    ] },

  { level: "B2", unit: 1, lessonId: "B2-U1L4", title: "Ciência", icon: "🔬", words: [
      { it: "ciencia", pt: "ciência" },
      { it: "experimento", pt: "experimento" },
      { it: "teoría", pt: "teoria" },
      { it: "descubrimiento", pt: "descoberta" },
      { it: "laboratorio", pt: "laboratório" },
      { it: "evidencia", pt: "evidência" },
      { it: "hipótesis", pt: "hipótese" },
      { it: "innovación", pt: "inovação" },
      { it: "datos", pt: "dados" },
      { it: "avance", pt: "avanço" }
    ], phrases: [
      { it: "El experimento demostró la teoría.", pt: "O experimento provou a teoria." },
      { it: "Los científicos lograron un avance.", pt: "Cientistas fizeram um avanço." },
      { it: "Necesitamos más evidencia.", pt: "Precisamos de mais evidências." }
    ] },

  { level: "B2", unit: 1, lessonId: "B2-U1L5", title: "Emoções complexas", icon: "🎭", words: [
      { it: "ansiedad", pt: "ansiedade" },
      { it: "gratitud", pt: "gratidão" },
      { it: "decepción", pt: "decepção" },
      { it: "empatía", pt: "empatia" },
      { it: "nostalgia", pt: "nostalgia" },
      { it: "confianza", pt: "confiança" },
      { it: "frustración", pt: "frustração" },
      { it: "compasión", pt: "compaixão" },
      { it: "envidia", pt: "inveja" },
      { it: "serenidad", pt: "serenidade" }
    ], phrases: [
      { it: "Ella sintió un sentimiento de gratitud.", pt: "Ela sentiu um sentimento de gratidão." },
      { it: "Él demostró gran empatía.", pt: "Ele demonstrou grande empatia." },
      { it: "La noticia causó decepción.", pt: "A notícia causou decepção." }
    ] },

  { level: "C1", unit: 1, lessonId: "C1-U1L1", title: "Acadêmico", icon: "📖", words: [
      { it: "tesis", pt: "tese" },
      { it: "argumento", pt: "argumento" },
      { it: "metodología", pt: "metodologia" },
      { it: "análisis", pt: "análise" },
      { it: "conclusión", pt: "conclusão" },
      { it: "bibliografía", pt: "bibliografia" },
      { it: "resumen", pt: "resumo" },
      { it: "revisión por pares", pt: "revisão por pares" },
      { it: "paradigma", pt: "paradigma" },
      { it: "empírico", pt: "empírico" }
    ], phrases: [
      { it: "La tesis presenta un argumento novedoso.", pt: "A tese apresenta um argumento inédito." },
      { it: "La metodología fue rigurosa.", pt: "A metodologia foi rigorosa." },
      { it: "Los hallazgos son empíricos.", pt: "Os resultados são empíricos." }
    ] },

  { level: "C1", unit: 1, lessonId: "C1-U1L2", title: "Política e debate", icon: "🗳️", words: [
      { it: "elección", pt: "eleição" },
      { it: "candidato", pt: "candidato" },
      { it: "política pública", pt: "política pública" },
      { it: "debate", pt: "debate" },
      { it: "campaña", pt: "campanha" },
      { it: "gobierno", pt: "governo" },
      { it: "oposición", pt: "oposição" },
      { it: "reforma", pt: "reforma" },
      { it: "consenso", pt: "consenso" },
      { it: "rendición de cuentas", pt: "responsabilidade" }
    ], phrases: [
      { it: "Las elecciones son el próximo mes.", pt: "As eleições são no próximo mês." },
      { it: "Llegaron a un consenso.", pt: "Eles chegaram a um consenso." },
      { it: "El gobierno anunció una reforma.", pt: "O governo anunciou uma reforma." }
    ] },

  { level: "C1", unit: 1, lessonId: "C1-U1L3", title: "Conceitos abstratos", icon: "🧠", words: [
      { it: "ambigüedad", pt: "ambiguidade" },
      { it: "paradoja", pt: "paradoxo" },
      { it: "pragmático", pt: "pragmático" },
      { it: "ambiguo", pt: "ambíguo" },
      { it: "inherente", pt: "inerente" },
      { it: "sutil", pt: "sutil" },
      { it: "profundo", pt: "profundo" },
      { it: "coherente", pt: "coerente" },
      { it: "dicotomía", pt: "dicotomia" },
      { it: "matiz", pt: "nuance" }
    ], phrases: [
      { it: "La declaración es ambigua.", pt: "A declaração é ambígua." },
      { it: "Es una paradoja de la vida moderna.", pt: "É um paradoxo da vida moderna." },
      { it: "Debemos considerar cada matiz.", pt: "Devemos considerar cada nuance." }
    ] },

  { level: "C2", unit: 1, lessonId: "C2-U1L1", title: "Expressões idiomáticas", icon: "💡", words: [
      { it: "romper el hielo", pt: "quebrar o gelo" },
      { it: "dar en el clavo", pt: "acertar na mosca" },
      { it: "de uvas a brevas", pt: "muito raramente" },
      { it: "pan comido", pt: "moleza" },
      { it: "estar pachucha", pt: "indisposto" },
      { it: "irse de la lengua", pt: "revelar um segredo" },
      { it: "quemar las pestañas", pt: "trabalhar até tarde" },
      { it: "la pelota está en tu tejado", pt: "a decisão é sua" },
      { it: "soltar la sopa", pt: "contar o segredo" },
      { it: "costar un ojo de la cara", pt: "custar os olhos da cara" }
    ], phrases: [
      { it: "El examen fue pan comido.", pt: "A prova foi moleza." },
      { it: "Él está un poco pachucha.", pt: "Ele está se sentindo indisposto." },
      { it: "Ese coche cuesta un ojo de la cara.", pt: "Aquele carro custa os olhos da cara." }
    ] },

  { level: "C2", unit: 1, lessonId: "C2-U1L2", title: "Registro formal", icon: "🎩", words: [
      { it: "no obstante", pt: "não obstante" },
      { it: "además", pt: "além disso" },
      { it: "en consecuencia", pt: "consequentemente" },
      { it: "en adelante", pt: "doravante" },
      { it: "si bien", pt: "embora" },
      { it: "mientras que", pt: "ao passo que" },
      { it: "por lo tanto", pt: "portanto" },
      { it: "a pesar de", pt: "apesar de" },
      { it: "por otra parte", pt: "ademais" },
      { it: "así pues", pt: "assim" }
    ], phrases: [
      { it: "Estaba cansado; no obstante, continuó.", pt: "Ele estava cansado; não obstante, continuou." },
      { it: "Era arriesgado, si bien gratificante.", pt: "Era arriscado, embora recompensador." },
      { it: "Por lo tanto, debemos actuar ahora.", pt: "Portanto, devemos agir agora." }
    ] },

  { level: "C2", unit: 1, lessonId: "C2-U1L3", title: "Nuances de significado", icon: "🔍", words: [
      { it: "implicar", pt: "implicar/sugerir" },
      { it: "inferir", pt: "inferir" },
      { it: "connotación", pt: "conotação" },
      { it: "denotación", pt: "denotação" },
      { it: "eufemismo", pt: "eufemismo" },
      { it: "hipérbole", pt: "hipérbole" },
      { it: "ironía", pt: "ironia" },
      { it: "sarcasmo", pt: "sarcasmo" },
      { it: "alusión", pt: "alusão" },
      { it: "ambigüedad", pt: "ambiguidade" }
    ], phrases: [
      { it: "La palabra tiene una connotación negativa.", pt: "A palavra tem uma conotação negativa." },
      { it: "¿Estás insinuando que me equivoco?", pt: "Você está sugerindo que eu estou errado?" },
      { it: "Su tono estaba lleno de sarcasmo.", pt: "O tom dele estava cheio de sarcasmo." }
    ] }
];
