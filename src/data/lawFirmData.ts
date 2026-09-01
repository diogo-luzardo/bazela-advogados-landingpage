import { FAQItem, OfficeLocation, PracticeArea, Testimonial } from '../types';

export const OFFICE_INFO: OfficeLocation = {
  name: 'Bazela & Freitas Advogados',
  address: 'Avenida Nova Cantareira, 2213',
  complement: 'Conjunto 72',
  neighborhood: 'Tucuruvi (Zona Norte)',
  cityState: 'São Paulo/SP',
  cep: '02331-003',
  metroDistance: 'Próximo às estações de Metrô Tucuruvi e Parada Inglesa (Linha 1-Azul)',
  busTerminalDistance: 'Fácil acesso ao Terminal Urbano de Ônibus Tucuruvi',
  landmarks: [
    'Na Avenida Nova Cantareira',
    'Próximo ao Metrô e Shopping Tucuruvi',
    'Fácil acesso pela Av. Mazzei e Av. Tucuruvi',
    'Estacionamento e total acessibilidade no local'
  ],
  phone: '(11) 2978-4500',
  whatsapp: '(11) 98765-4321',
  whatsappRaw: '5511987654321',
  email: 'contato@bazelaefreitas.adv.br',
  oabNumber: 'OAB/SP 48.912 / Sociedade de Advogados',
  hours: 'Segunda a Sexta: 08h30 às 18h30 | Plantão WhatsApp 24h para Trabalhadores',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Avenida+Nova+Cantareira+2213+Tucuruvi+Sao+Paulo+SP&t=&z=16&ie=UTF8&iwloc=&output=embed'
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'rescisao-indireta',
    title: 'Rescisão Indireta (A "Justa Causa no Patrão")',
    shortDesc: 'A empresa atrasa salário, não deposita FGTS ou exige além do contrato? Você pode sair com todos os direitos.',
    fullDesc: 'Quando o empregador descumpre as obrigações da CLT, o trabalhador não precisa pedir demissão e perder seus direitos. Através da rescisão indireta, você sai recebendo aviso prévio indenizado, saque do FGTS com 40% de multa e seguro-desemprego.',
    iconName: 'ShieldAlert',
    cltArticle: 'Art. 483 da CLT',
    commonSigns: [
      'FGTS em atraso há mais de 3 meses',
      'Atrasos reiterados no pagamento de salários',
      'Assédio moral, humilhações ou metas inatingíveis',
      'Exigência de tarefas alheias ao contrato de trabalho'
    ],
    rightsRecoverable: [
      'Saque total do FGTS + Multa de 40%',
      'Aviso prévio indenizado e proporcional',
      'Liberação das guias de Seguro-Desemprego',
      '13º salário e férias proporcionais com 1/3'
    ]
  },
  {
    id: 'verbas-rescisorias',
    title: 'Demissão & Verbas Rescisórias Incompletas',
    shortDesc: 'Foi demitido sem justa causa ou forçado a assinar acordo prejudicial? Revisamos cada centavo da sua rescisão.',
    fullDesc: 'Mais de 60% dos cálculos rescisórios contêm erros em favor da empresa. Auditamos médias de horas extras, adicionais de periculosidade/insalubridade, reflexos em 13º e férias, e cobramos a multa do Artigo 477 caso a empresa tenha atrasado o pagamento.',
    iconName: 'ReceiptCheck',
    cltArticle: 'Art. 477 da CLT',
    commonSigns: [
      'Pagamento da rescisão feito após 10 dias da demissão',
      'Descontos indevidos no Termo de Rescisão (TRCT)',
      'Não pagamento da multa de 40% sobre o saldo real do FGTS',
      'Forçado a assinar carta de demissão contra sua vontade'
    ],
    rightsRecoverable: [
      'Multa do art. 477 (um salário integral pelo atraso)',
      'Diferenças de médias salariais e adicionais',
      'Indenização por quebra contratual',
      'Reversão de justa causa indevida'
    ]
  },
  {
    id: 'horas-extras',
    title: 'Horas Extras, Noturno & Banco de Horas Inválido',
    shortDesc: 'Faz jornada além de 8h/dia, trabalha em folgas ou feriados sem receber ou com banco de horas ilegal?',
    fullDesc: 'Se sua jornada ultrapassa os limites legais ou a empresa mascara as horas extras em "bancos de horas" irregulares, você tem direito ao pagamento com adicional mínimo de 50% (dias normais) e 100% (domingos e feriados), além de reflexos em todas as verbas.',
    iconName: 'ClockAlert',
    cltArticle: 'Art. 58 e 59 da CLT / Súmula 85 TST',
    commonSigns: [
      'Proibido de registrar o horário real no cartão de ponto',
      'Trabalho em grupo de WhatsApp fora do expediente',
      'Intervalo de almoço reduzido (menos de 1 hora)',
      'Jornada noturna (22h às 05h) sem adicional noturno de 20%'
    ],
    rightsRecoverable: [
      'Horas extras acumuladas dos últimos 5 anos com juros',
      'Reflexos em DSR, Férias, 13º Salário e FGTS + 40%',
      'Hora extra intrajornada por almoço não usufruído',
      'Adicional noturno e hora ficta reduzida'
    ]
  },
  {
    id: 'pejizacao-vinculo',
    title: 'Reconhecimento de Vínculo (Fraude PJ / MEI)',
    shortDesc: 'Contratado como PJ ou MEI, mas tinha chefe, horário e cumpria ordens? Exija seus direitos da CLT retroativos.',
    fullDesc: 'A "pejização" é uma fraude comum onde a empresa contrata o trabalhador como pessoa jurídica para sonegar encargos. Se havia subordinação, habitualidade, onerosidade e pessoalidade, a Justiça do Trabalho reconhece o vínculo com carteira assinada.',
    iconName: 'FileBadge',
    cltArticle: 'Art. 3º e 9º da CLT',
    commonSigns: [
      'Obrigatoriedade de abrir CNPJ para começar a trabalhar',
      'Cumprimento de escala, horário fixo e metas da chefia',
      'Exclusividade ou impossibilidade de enviar substituto',
      'Sem férias remuneradas nem 13º salário'
    ],
    rightsRecoverable: [
      'Registro na CTPS retroativo a todo o período trabalhado',
      'Pagamento de todo o FGTS (8% ao mês) + Multa de 40%',
      '13º salários e férias integrais + 1/3 de todo o contrato',
      'Aviso prévio e benefícios da convenção coletiva da categoria'
    ]
  },
  {
    id: 'acidente-doenca',
    title: 'Acidente de Trabalho, Burnout & Doenças Ocupacionais',
    shortDesc: 'Adquiriu lesão (LER/DORT), depressão por estresse ou sofreu acidente? Você tem estabilidade de 12 meses e indenização.',
    fullDesc: 'Trabalhadores acidentados ou que desenvolveram doenças em decorrência das funções (incluindo Síndrome de Burnout, problemas de coluna e lesões por esforço repetitivo) têm direito à estabilidade provisória, emissão de CAT e indenização por danos materiais e morais.',
    iconName: 'HeartPulse',
    cltArticle: 'Art. 118 da Lei 8.213/91',
    commonSigns: [
      'Empresa se recusou a emitir a CAT (Comunicação de Acidente)',
      'Demissão logo após retorno de afastamento médico pelo INSS',
      'Cobranças desumanas que causaram ansiedade ou depressão',
      'Falta de EPIs (Equipamentos de Proteção Individual)'
    ],
    rightsRecoverable: [
      'Estabilidade de 12 meses (ou pagamento dos salários)',
      'Indenização por danos morais, estéticos e materiais',
      'Pensão mensal em caso de incapacidade parcial ou total',
      'Reembolso integral de medicamentos e tratamentos médicos'
    ]
  },
  {
    id: 'assedio-moral',
    title: 'Assédio Moral & Danos Morais no Trabalho',
    shortDesc: 'Vítima de perseguição, xingamentos, isolamento, metas abusivas ou preconceito? Busque reparação na Justiça.',
    fullDesc: 'O ambiente de trabalho deve respeitar a dignidade humana. Práticas como humilhações públicas, ameaças constantes de demissão, apelidos pejorativos ou vigilância excessiva geram o dever do empregador de indenizar por danos morais e ensejam rescisão indireta.',
    iconName: 'UserX',
    cltArticle: 'Art. 223-A a 223-G da CLT',
    commonSigns: [
      'Humilhações diante de colegas de trabalho ou clientes',
      'Metas inatingíveis com punições vexatórias',
      'Isolamento proposital ou recusa de dar tarefas (ócio forçado)',
      'Invasão de privacidade e cobranças fora do horário'
    ],
    rightsRecoverable: [
      'Indenização por Danos Morais fixada pela Justiça',
      'Rescisão Indireta imediata com todas as verbas',
      'Ressarcimento de despesas com tratamento psicológico',
      'Cessação imediata da conduta abusiva'
    ]
  },
  {
    id: 'estabilidade-gestante',
    title: 'Estabilidade da Gestante & Demissão Indevida',
    shortDesc: 'Ficou grávida durante o contrato ou aviso prévio e foi demitida? A lei garante seu emprego e salário.',
    fullDesc: 'A trabalhadora gestante tem estabilidade provisória desde a confirmação da gravidez até 5 meses após o parto, inclusive durante o período de experiência ou aviso prévio trabalhado/indenizado. A demissão sem justa causa é nula de pleno direito.',
    iconName: 'Baby',
    cltArticle: 'Art. 10, II, "b" do ADCT / Súmula 244 TST',
    commonSigns: [
      'Demissão durante o contrato de experiência estando grávida',
      'Gravidez descoberta durante o cumprimento do aviso prévio',
      'Pressão para pedir demissão após comunicar gestação',
      'Recusa da empresa em reintegrar ou pagar salários'
    ],
    rightsRecoverable: [
      'Reintegração imediata ao posto de trabalho',
      'Indenização substitutiva de todos os salários e benefícios até 5 meses pós-parto',
      'Licença-maternidade remunerada e reflexos',
      'Danos morais em caso de discriminação'
    ]
  },
  {
    id: 'insalubridade-periculosidade',
    title: 'Adicionais de Insalubridade & Periculosidade',
    shortDesc: 'Trabalha em contato com produtos químicos, ruído excessivo, frio, calor, eletricidade ou risco de vida?',
    fullDesc: 'Atividades em contato com agentes nocivos à saúde garantem adicional de insalubridade (10%, 20% ou 40% sobre o salário mínimo). Já funções expostas a inflamáveis, explosivos, alta tensão ou risco de violência física dão direito ao adicional de periculosidade (30% sobre o salário base).',
    iconName: 'Flame',
    cltArticle: 'Art. 189 a 197 da CLT / NR-15 e NR-16',
    commonSigns: [
      'Trabalho em limpeza de banheiros de grande circulação ou lixo',
      'Contato diário com óleos, graxas, solventes ou cimento sem EPI adequado',
      'Operação de motos ou trabalho na segurança patrimonial',
      'Ambientes hospitalares ou frigoríficos sem o devido adicional'
    ],
    rightsRecoverable: [
      'Adicional de 10% a 40% (insalubridade) ou 30% (periculosidade)',
      'Pagamento retroativo dos últimos 5 anos de contrato',
      'Reflexos no FGTS, 13º salário, férias e rescisão',
      'Tempo especial para contagem de aposentadoria no INSS'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carlos Eduardo M.',
    profession: 'Operador de Máquinas',
    neighborhood: 'Santana - São Paulo',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Fui demitido de uma indústria na Zona Norte e a empresa não queria pagar minhas mais de 400 horas extras acumuladas. O Dr. da Bazela & Freitas me atendeu no escritório deles perto do metrô Santana com extrema clareza. Conseguimos um acordo excelente e recebi tudo o que era meu por direito!',
    outcome: 'Recuperou R$ 48.700 em horas extras e reflexos rescisórios',
    tag: 'Horas Extras & Verbas'
  },
  {
    id: 'test-2',
    name: 'Mariana S. Ribeiro',
    profession: 'Vendedora Comercial',
    neighborhood: 'Tucuruvi (Zona Norte)',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'Trabalhava sob constante pressão e assédio moral, além da empresa estar há 8 meses sem depositar meu FGTS. Consegui a Rescisão Indireta com a Bazela & Freitas sem precisar abrir mão de nenhum direito. Atendimento 100% transparente pelo WhatsApp e presencialmente.',
    outcome: 'Rescisão Indireta deferida com multa de 40% e seguro-desemprego',
    tag: 'Rescisão Indireta'
  },
  {
    id: 'test-3',
    name: 'Roberto Alves Santos',
    profession: 'Analista de Logística (Ex-PJ)',
    neighborhood: 'Vila Guilherme - SP',
    rating: 5,
    date: 'Há 3 meses',
    comment: 'Me obrigaram a abrir um CNPJ MEI para trabalhar na empresa, mas eu tinha horário rígido, chefe e metas iguais a qualquer funcionário CLT. A equipe da Bazela & Freitas comprovou o vínculo empregatício na Vara do Trabalho e recebi todo o FGTS e 13º retroativo de 3 anos.',
    outcome: 'Vínculo PJ reconhecido com indenização de R$ 62.000',
    tag: 'Fraude PJ / Vínculo'
  },
  {
    id: 'test-4',
    name: 'Juliana P. Mendes',
    profession: 'Técnica de Enfermagem',
    neighborhood: 'Mandaqui / Santana',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'Sofri uma lesão na coluna ao movimentar pacientes e fui demitida 15 dias após voltar do INSS. O escritório entrou com ação de imediato por causa da estabilidade de 12 meses. Profissionais humanos, atenciosos e muito competentes.',
    outcome: 'Indenização do período de estabilidade acidentária + Danos Morais',
    tag: 'Acidente de Trabalho'
  },
  {
    id: 'test-5',
    name: 'Fernando Guimarães',
    profession: 'Motorista de Distribuição',
    neighborhood: 'Tucuruvi - Zona Norte',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Escritório super bem localizado na Avenida Nova Cantareira no Tucuruvi. Facilidade imensa para ir e conversar. Acompanhamento do processo foi impecável, sempre me avisando de cada andamento pelo WhatsApp.',
    outcome: 'Acordo homologado com recebimento rápido de verbas rescisórias',
    tag: 'Atendimento Tucuruvi'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Fui demitido sem justa causa. Qual é o prazo legal para a empresa pagar minha rescisão?',
    category: 'demissao',
    googleSearchVolumeBadge: 'Mais buscada no Google',
    cltReference: 'Art. 477, § 6º e § 8º da CLT',
    answer: 'Pela Reforma Trabalhista, o empregador tem até 10 (dez) dias corridos a contar do término do contrato para efetuar o pagamento de todas as verbas rescisórias e entregar a documentação (guias do FGTS e seguro-desemprego). Caso a empresa atrase mesmo que 1 único dia, é obrigada por lei a pagar uma multa no valor de 1 salário integral do trabalhador.'
  },
  {
    id: 'faq-2',
    question: 'A empresa não deposita meu FGTS ou atrasa salários. Posso pedir "Rescisão Indireta" e receber todos os direitos?',
    category: 'demissao',
    googleSearchVolumeBadge: 'Alta Relevância',
    cltReference: 'Art. 483, "d" da CLT',
    answer: 'Sim! A ausência de recolhimento de FGTS e o atraso salarial reiterado são faltas graves do empregador. Pela Rescisão Indireta (popularmente chamada de justa causa no patrão), você sai da empresa recebendo TODOS os direitos de uma demissão sem justa causa: aviso prévio indenizado, multa de 40% sobre o saldo total do FGTS, saque imediato do FGTS e liberação das guias de Seguro-Desemprego.'
  },
  {
    id: 'faq-3',
    question: 'Trabalho como PJ / MEI mas tenho horário, chefe e metas. Tenho direitos trabalhistas da CLT?',
    category: 'pj',
    googleSearchVolumeBadge: 'Dúvida Frequente SP',
    cltReference: 'Art. 3º e 9º da CLT (Fraude Contratual)',
    answer: 'Sim! No Direito do Trabalho vigora o "Princípio da Primazia da Realidade", o que significa que o que vale é o que acontece na prática, e não o papel que você assinou. Se você tinha subordinação (recebia ordens), habitualidade (trabalho frequente), pessoalidade (não podia mandar outra pessoa no seu lugar) e onerosidade (salário), a Justiça do Trabalho anula o contrato PJ e condena a empresa a pagar carteira assinada retroativa, FGTS de todo o período com 40%, 13º, férias + 1/3 e adicionais.'
  },
  {
    id: 'faq-4',
    question: 'Trabalho mais de 8 horas por dia ou nos fins de semana e a empresa não paga. Quanto tempo tenho para cobrar?',
    category: 'horas',
    googleSearchVolumeBadge: 'Busca Top CLT',
    cltReference: 'Art. 7º, XXIX da Constituição Federal e Art. 59 da CLT',
    answer: 'Você pode cobrar as horas extras não pagas dos últimos 5 (cinco) anos trabalhados contados retroativamente da data em que entrar com a ação trabalhista. As horas extras têm adicional mínimo de 50% em dias normais e 100% aos domingos e feriados. ATENÇÃO: Após ser demitido ou sair da empresa, você tem o prazo máximo de 2 (dois) anos para ingressar com a ação.'
  },
  {
    id: 'faq-5',
    question: 'Sofri um acidente no trabalho ou desenvolvi doença profissional (LER, Burnout). Posso ser demitido?',
    category: 'saude',
    googleSearchVolumeBadge: 'Direitos Acidentários',
    cltReference: 'Art. 118 da Lei 8.213/91 e Súmula 378 do TST',
    answer: 'Não! O empregado que sofreu acidente de trabalho ou adquiriu doença ocupacional e ficou afastado pelo INSS (auxílio-doença acidentário B91) tem estabilidade no emprego por no mínimo 12 (doze) meses após o retorno ao trabalho. Se a empresa demitir, deverá reintegrar o funcionário ou pagar todos os salários e benefícios do período de estabilidade, além de eventuais indenizações por danos morais e materiais.'
  },
  {
    id: 'faq-6',
    question: 'Quanto custa uma consulta com advogado trabalhista e como funcionam os honorários?',
    category: 'geral',
    googleSearchVolumeBadge: 'Transparência OAB',
    cltReference: 'Tabela de Honorários OAB/SP',
    answer: 'No escritório Bazela & Freitas Advogados, a análise inicial do seu caso e a simulação de direitos trabalhistas são realizadas sem compromisso para orientar o trabalhador. Atuamos predominantemente no sistema de honorários de êxito (conforme regulamentado pela OAB/SP), ou seja, a remuneração do escritório ocorre apenas ao final da ação quando você receber seus direitos na Justiça.'
  },
  {
    id: 'faq-7',
    question: 'O atendimento pode ser presencial no escritório ou totalmente online?',
    category: 'geral',
    googleSearchVolumeBadge: 'Zona Norte SP',
    cltReference: 'Atendimento Híbrido Seguro',
    answer: 'Oferecemos as duas opções para seu conforto e segurança! Nosso escritório fica em localização privilegiada na Avenida Nova Cantareira, 2213, Conjunto 72 (Tucuruvi, Zona Norte de SP), com salas privativas e acessibilidade. Caso prefira não se deslocar, realizamos todo o atendimento digital pelo WhatsApp, envio de documentos seguro e reuniões por videoconferência.'
  }
];

export const TRIAGE_QUESTIONS = [
  {
    id: 'problem',
    title: '1. Qual é a principal situação que você está enfrentando?',
    options: [
      { id: 'rescisao_atrasada', label: 'Fui demitido e não recebi minhas verbas rescisórias ou atrasou', tag: 'Verbas Rescisórias' },
      { id: 'fgts_atrasado', label: 'A empresa não deposita meu FGTS há meses ou atrasa salário', tag: 'Rescisão Indireta' },
      { id: 'horas_extras', label: 'Faço muitas horas extras e a empresa não paga ou usa banco falso', tag: 'Horas Extras' },
      { id: 'pj_fraude', label: 'Trabalho como PJ / MEI mas cumpro horário e recebo ordens como CLT', tag: 'Vínculo Empregatício' },
      { id: 'acidente_doenca', label: 'Sofri acidente de trabalho ou estou afastado por doença ocupacional / Burnout', tag: 'Estabilidade & Danos' },
      { id: 'assedio_moral', label: 'Estou sofrendo assédio moral, humilhações ou perseguição no trabalho', tag: 'Assédio Moral' },
      { id: 'gestante', label: 'Fui demitida grávida ou durante o período de estabilidade', tag: 'Estabilidade Gestante' },
      { id: 'outro', label: 'Outro problema trabalhista (quero tirar dúvidas gerais)', tag: 'Consulta Trabalhista' }
    ]
  },
  {
    id: 'time',
    title: '2. Há quanto tempo você trabalha ou trabalhou nessa empresa?',
    options: [
      { id: 'menos_1_ano', label: 'Menos de 1 ano', tag: 'Contrato Recente' },
      { id: '1_a_3_anos', label: 'De 1 a 3 anos', tag: 'Contrato Médio' },
      { id: '3_a_5_anos', label: 'De 3 a 5 anos', tag: 'Direitos Acumulados' },
      { id: 'mais_5_anos', label: 'Mais de 5 anos', tag: 'Alto Valor Rescisório' }
    ]
  },
  {
    id: 'contract_type',
    title: '3. Qual era o seu formato de contratação?',
    options: [
      { id: 'clt_assinada', label: 'Carteira assinada (CLT)', tag: 'CLT' },
      { id: 'sem_registro', label: 'Trabalhei sem carteira assinada ("no escuro")', tag: 'Sem Registro' },
      { id: 'pj_mei', label: 'Pessoa Jurídica (PJ) ou MEI', tag: 'Contrato PJ' },
      { id: 'estagio_terceirizado', label: 'Terceirizado ou Estágio irregular', tag: 'Terceirizado' }
    ]
  }
];

export const WHATSAPP_AUTO_FLOW = [
  {
    step: '1. Mensagem de Boas-Vindas Imediata',
    botReply: 'Olá! Seja muito bem-vindo(a) ao Bazela & Freitas Advogados - Advocacia Trabalhista Tucuruvi / Zona Norte SP.',
    description: 'Resposta instantânea para que o trabalhador saiba que seu caso está sendo recebido de imediato.'
  },
  {
    step: '2. Identificação da Causa',
    botReply: 'Para direcionarmos você ao advogado trabalhista especialista, nos informe: 1) Nome 2) Resumo da situação na empresa 3) Se ainda está trabalhando.',
    description: 'Coleta preliminar dos dados essenciais para o advogado já iniciar com a estratégia correta.'
  },
  {
    step: '3. Triagem de Prazos Críticos (CLT)',
    botReply: 'Seu caso envolve prazo urgente (ex: demissão nos últimos 10 dias, gestante demitida ou acidente recente)? Vamos priorizar.',
    description: 'Garante que prazos prescricionais ou liminares de urgência não sejam perdidos.'
  },
  {
    step: '4. Atendimento Humanizado pelo Especialista',
    botReply: 'Um dos nossos advogados especialistas em Direito do Trabalho assumirá seu atendimento em instantes para tirar suas dúvidas e analisar seus documentos.',
    description: 'Transição suave da automação para o atendimento jurídico qualificado e ético.'
  }
];
