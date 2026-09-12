import { FAQItem, OfficeLocation, PracticeArea, Testimonial } from '../types';
import { danielImg, dalilaImg } from '../assets';

export const OFFICE_INFO: OfficeLocation = {
  name: 'Bazela & Freitas Advogados Associados',
  address: 'Rua Voluntários da Pátria, 2816',
  complement: 'Conjunto 52 - Edifício Santana Corporate',
  neighborhood: 'Santana (Zona Norte)',
  cityState: 'São Paulo - SP',
  cep: '02010-000',
  metroDistance: 'A 180 metros da Estação de Metrô Santana (Linha 1-Azul)',
  phone: '(11) 2978-4500',
  whatsapp: '(11) 98765-4321',
  whatsappRaw: '5511987654321',
  email: 'contato@bazelaefreitas.adv.br',
  oabNumber: 'OAB/SP 48.912 / Sociedade de Advogados',
  hours: 'Segunda a Sexta: 09h00 às 18h00 | Atendimento Presencial & Online',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7845371520626!2d-46.62685982379308!3d-23.504245678839074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce587eb0a0ad89%3A0x6b7ca2c5dbef92a5!2sSantana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr'
};

export const ABOUT_FIRM = {
  headline: 'Soluções Jurídicas com Rigor Técnico, Discrição e Atendimento Personalizado',
  lead: 'Com sede em Santana e atuação em todo o estado de São Paulo, o escritório Bazela & Freitas Advogados Associados nasceu com a vocação de oferecer advocacia de excelência para pessoas físicas e empresas.',
  paragraphs: [
    'Entendemos que cada demanda jurídica carrega histórias, patrimônios e decisões cruciais. Por essa razão, repudiamos soluções padronizadas. Nossos sócios e equipe dedicam-se pessoalmente a cada caso, desenhando estratégias sob medida que conciliam segurança preventiva e firmeza contenciosa.',
    'Pautados pela integridade, transparência irrestrita e respeito às normas éticas da OAB, oferecemos aos nossos clientes assessoria jurídica ágil, combinando o acolhimento do atendimento presencial com a comodidade e rapidez das ferramentas digitais modernas.'
  ],
  pillars: [
    {
      title: 'Atendimento Personalizado',
      desc: 'Cada cliente é atendido diretamente por profissionais experientes que compreendem suas necessidades específicas.'
    },
    {
      title: 'Transparência & Ética',
      desc: 'Comunicação clara e constante sobre cada etapa, viabilidade e riscos, sem termos jurídicos indecifráveis.'
    },
    {
      title: 'Excelência Estratégica',
      desc: 'Atuação multidisciplinar integrada para proteger seus interesses com segurança e resolutividade.'
    },
    {
      title: 'Localização Estratégica',
      desc: 'Estrutura corporativa nobre ao lado do Metrô Santana com estacionamento, acessibilidade e salas privativas.'
    }
  ]
};

export interface PartnerData {
  id: string;
  name: string;
  shortName: string;
  title: string;
  role: string;
  badge: string;
  experience: string;
  stats: string;
  image: string;
  lead: string;
  history: string[];
  highlights: string[];
  areas: string[];
  whatsappMessage: string;
}

export const PARTNERS_DATA: PartnerData[] = [
  {
    id: 'daniel-bazela',
    name: 'Dr. Daniel Bazela',
    shortName: 'Dr. Daniel',
    title: 'Dr. Daniel Bazela',
    role: 'Sócio Fundador',
    badge: 'Especialista em Direito do Trabalho, Cível e Família',
    experience: 'Mais de 15 anos de experiência forense',
    stats: '+5.000 Processos Conduzidos',
    image: danielImg,
    lead: 'Advogado atuante com sólida trajetória jurídica e vasta experiência na condução estratégica de litígios complexos.',
    history: [
      'Ao longo de mais de 15 anos de prática jurídica ininterrupta, liderou a condução de mais de 5.000 ações judiciais, destacando-se pela combatividade técnica e oratória precisa perante os tribunais.',
      'Com atuação multidisciplinar, assessora pessoas físicas e empresas de forma personalizada tanto na esfera preventiva quanto no contencioso judicial, construindo defesas técnicas sob medida e negociando acordos sólidos para defender com rigor os direitos e o patrimônio de seus constituintes.'
    ],
    highlights: [
      'Especialista em Direito do Trabalho, Cível e Família',
      'Mais de 15 anos de experiência e prática forense contínua',
      'Atuação direta e estratégica em mais de 5.000 processos',
      'Atendimento consultivo e contencioso personalizado'
    ],
    areas: ['Direito do Trabalho', 'Direito Cível', 'Família & Sucessões', 'Litígios Estratégicos'],
    whatsappMessage: 'Olá, Dr. Daniel! Vi seu perfil no site da Bazela & Freitas e gostaria de uma orientação jurídica.'
  },
  {
    id: 'dalila-freitas',
    name: 'Dra. Dalila Freitas Bazela',
    shortName: 'Dra. Dalila',
    title: 'Dra. Dalila Freitas Bazela',
    role: 'Sócia Fundadora',
    badge: 'Advogada Especialista em Direito do Trabalho',
    experience: 'Mais de 15 anos de atuação dedicada',
    stats: 'Foco Exclusivo em Direito do Trabalho',
    image: dalilaImg,
    lead: 'Advogada especialista com sólida e reconhecida trajetória na defesa dos direitos dos trabalhadores.',
    history: [
      'Possui mais de 15 anos de dedicação exclusiva às relações do trabalho, com histórico de destaque no combate a fraudes contratuais (como pejotização abusiva e contratos MEI simulados), reversões de demissões injustas, rescisões indiretas e acordos de alta relevância.',
      'Reconhecida pelo atendimento acolhedor, ético e transparente, prioriza a análise detalhada de cada caso para esclarecer direitos, calcular com rigor todas as verbas devidas e lutar pela máxima reparação legal do trabalhador.'
    ],
    highlights: [
      'Advogada Especialista em Direito do Trabalho com foco exclusivo',
      'Mais de 15 anos de experiência e dedicação forense',
      'Atuação firme em verbas rescisórias, horas extras e rescisão indireta',
      'Acolhimento humanizado, transparente e próximo ao cliente'
    ],
    areas: ['Direito do Trabalho', 'Rescisão Indireta', 'Fraude PJ/MEI', 'Horas Extras & Adicionais', 'Acidentes & Doenças'],
    whatsappMessage: 'Olá, Dra. Dalila! Vi seu perfil no site da Bazela & Freitas e gostaria de uma orientação em Direito do Trabalho.'
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil-contratos',
    title: 'Direito Civil & Contratos',
    shortDesc: 'Elaboração de contratos seguros, cobranças estratégicas e defesa em ações indenizatórias.',
    fullDesc: 'Atuamos de forma consultiva e contenciosa na gestão de relações civis e comerciais. Redigimos e auditamos contratos de alta complexidade para blindar negócios, além de atuar vigorosamente em litígios envolvendo responsabilidade civil, perdas e danos e recuperação de créditos inadimplidos.',
    iconName: 'FileText',
    scopeItems: [
      'Elaboração, análise e revisão de instrumentos contratuais',
      'Ações de cobrança, execuções de títulos e recuperação de crédito',
      'Ações indenizatórias por danos morais e materiais',
      'Resolução de disputas obrigacionais e inadimplemento contratual'
    ],
    keyHighlights: [
      'Prevenção de litígios contratuais futuros',
      'Cobrança rápida judicial e extrajudicial',
      'Pareceres fundamentados com jurisprudência atualizada'
    ]
  },
  {
    id: 'familia-sucessoes',
    title: 'Família & Sucessões',
    shortDesc: 'Inventários ágeis, divórcios com equilíbrio patrimonial e planejamento sucessório familiar.',
    fullDesc: 'Tratamos questões de família e patrimônio com a sensibilidade e discrição que o momento exige. Especialistas na condução de inventários judiciais e extrajudiciais (em cartório), divórcios amigáveis ou litigiosos, regulamentação de guarda, alimentos e estruturação de planejamento sucessório para proteção do patrimônio familiar.',
    iconName: 'Users',
    scopeItems: [
      'Inventários judiciais e extrajudiciais em cartório',
      'Divórcio consensual e litigioso com partilha equilibrada de bens',
      'Pensão alimentícia, fixação, revisão e execução de alimentos',
      'Planejamento sucessório, testamentos e doações patrimoniais'
    ],
    keyHighlights: [
      'Agilidade em inventários extrajudiciais em cartório',
      'Soluções que evitam desgaste emocional entre herdeiros',
      'Total sigilo e acolhimento humano durante todo o processo'
    ]
  },
  {
    id: 'empresarial-societario',
    title: 'Direito Empresarial & Societário',
    shortDesc: 'Assessoria jurídica contínua, governança societária e proteção jurídica para empresas.',
    fullDesc: 'Apoiamos empresários e sociedades comerciais em suas tomadas de decisão diárias. Desde a constituição societária e redação de acordos de sócios até a assessoria jurídica preventiva mensal (compliance), redução de passivos e defesa em disputas societárias.',
    iconName: 'Briefcase',
    scopeItems: [
      'Assessoria jurídica empresarial preventiva (mensal ou por demanda)',
      'Elaboração de acordos de quotistas, sócios e estatutos sociais',
      'Mediação e defesa em dissolução de sociedades e disputas societárias',
      'Auditoria jurídica preventiva (due diligence) e gestão de riscos'
    ],
    keyHighlights: [
      'Redução comprovada de passivos jurídicos',
      'Segurança jurídica para crescimento e expansão da empresa',
      'Atendimento ágil alinhado à rotina dos gestores'
    ]
  },
  {
    id: 'imobiliario',
    title: 'Direito Imobiliário',
    shortDesc: 'Segurança em compra e venda de imóveis, usucapião, regularização fundiária e locações.',
    fullDesc: 'Oferecemos segurança jurídica integral para operações no mercado imobiliário. Realizamos auditoria documental aprofundada (due diligence) para aquisições seguras, atuamos em regularização de registros imobiliários, usucapião judicial e extrajudicial, além de contratos de locação comercial e ações de despejo.',
    iconName: 'Building2',
    scopeItems: [
      'Auditoria jurídica para compra e venda segura de imóveis',
      'Ações de usucapião judicial e extrajudicial em cartório',
      'Regularização de registros, escrituras e averbações de imóveis',
      'Elaboração de contratos de locação e ações de despejo ou renovatórias'
    ],
    keyHighlights: [
      'Blindagem contra fraudes em transações imobiliárias',
      'Regularização documental para viabilizar financiamentos e vendas',
      'Experiência em locações comerciais corporativas'
    ]
  },
  {
    id: 'trabalhista-previdenciario',
    title: 'Trabalhista & Previdenciário',
    shortDesc: 'Gestão preventiva de passivos trabalhistas e planejamento previdenciário estratégico.',
    fullDesc: 'Atuação equilibrada tanto no âmbito consultivo empresarial para adequação às normas da CLT e redução de riscos trabalhistas, quanto na defesa qualificada de direitos e benefícios previdenciários (aposentadorias, revisões de cálculo e concessões junto ao INSS).',
    iconName: 'Scale',
    scopeItems: [
      'Consultoria preventiva empresarial para adequação à CLT e NR',
      'Defesa técnica em reclamações trabalhistas contenciosas',
      'Planejamento previdenciário e cálculo do melhor momento para aposentadoria',
      'Requerimentos e recursos de benefícios previdenciários perante o INSS'
    ],
    keyHighlights: [
      'Mitigação preventiva de autuações e contingências trabalhistas',
      'Análise detalhada de vínculos e tempo de contribuição',
      'Atendimento ético e estritamente embasado na jurisprudência'
    ]
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    shortDesc: 'Defesa contra cobranças indevidas, fraudes bancárias e danos nas relações de consumo.',
    fullDesc: 'Garantimos a proteção dos direitos fundamentais nas relações de consumo. Atuamos em casos de golpes financeiros e fraudes bancárias, negativas indevidas de cobertura em planos de saúde, cancelamentos arbitrários de viagens e serviços, e reparação por inclusão indevida em cadastros restritivos.',
    iconName: 'ShieldCheck',
    scopeItems: [
      'Ações contra golpes e fraudes em instituições financeiras',
      'Obrigações de fazer contra negativas abusivas de planos de saúde',
      'Indenizações por negativação indevida (SPC/Serasa)',
      'Revisão de contratos com cláusulas leoninas ou abusivas'
    ],
    keyHighlights: [
      'Celeridade na obtenção de tutelas de urgência (liminares)',
      'Defesa incisiva do equilíbrio na relação de consumo',
      'Atuação voltada à rápida recomposição do prejuízo'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Henrique Vasconcelos',
    roleOrSegment: 'Empresário do Setor de Serviços',
    city: 'São Paulo - SP',
    rating: 5,
    comment: 'A assessoria jurídica mensal da Bazela & Freitas trouxe a tranquilidade que nossa empresa precisava. A revisão preventiva dos contratos e o suporte societário foram impecáveis.',
    area: 'Direito Empresarial'
  },
  {
    id: 't-2',
    name: 'Dra. Beatriz Camargo',
    roleOrSegment: 'Médica & Herdeira',
    city: 'Santana - São Paulo',
    rating: 5,
    comment: 'Concluímos o inventário de família em cartório com extrema rapidez e harmonia entre os herdeiros. O atendimento no escritório foi acolhedor, transparente e com total discrição.',
    area: 'Família & Sucessões'
  },
  {
    id: 't-3',
    name: 'Guilherme Toledo',
    roleOrSegment: 'Investidor Imobiliário',
    city: 'Zona Norte - SP',
    rating: 5,
    comment: 'A due diligence realizada pelo escritório antes da aquisição do imóvel comercial evitou que entrássemos em um negócio com pendências graves. Profissionalismo exemplar.',
    area: 'Direito Imobiliário'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a primeira consulta com o escritório?',
    answer: 'A primeira consulta é dedicada a compreender profundamente as particularidades do seu caso. Nossos advogados analisam os fatos e documentos preliminares para apresentar um diagnóstico jurídico realista, esclarecendo as alternativas, prazos prováveis e estratégias recomendadas.',
    category: 'consultas'
  },
  {
    id: 'faq-2',
    question: 'O atendimento pode ser realizado de forma 100% online ou presencial?',
    answer: 'Oferecemos as duas modalidades. Nosso escritório está localizado no Edifício Santana Corporate, a apenas 180 metros do Metrô Santana, com salas de reunião confortáveis e reservadas. Para clientes que preferem não se deslocar, realizamos consultas por videoconferência com envio seguro de documentos digitais.',
    category: 'consultas'
  },
  {
    id: 'faq-3',
    question: 'Como são estabelecidos os honorários advocatícios?',
    answer: 'Trabalhamos com clareza e transparência desde o primeiro contato, em estrita observância à Tabela de Honorários da OAB/SP e ao Código de Ética. Cada proposta é formalizada em contrato detalhado com descrição de serviços, sem surpresas ou cobranças ocultas.',
    category: 'honorarios'
  },
  {
    id: 'faq-4',
    question: 'Quais documentos devo ter em mãos para a primeira análise?',
    answer: 'Geralmente solicitamos documento de identificação pessoal (RG ou CNH), comprovante de endereço e os documentos específicos relativos ao tema em questão (por exemplo: contratos, certidões de imóveis, certidão de óbito e lista de bens para inventários, ou trocas de mensagens/notificações). Nossa equipe orienta a lista exata antes do encontro.',
    category: 'prazos'
  }
];
