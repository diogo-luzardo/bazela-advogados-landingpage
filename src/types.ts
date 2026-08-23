export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  cltArticle?: string;
  commonSigns: string[];
  rightsRecoverable: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  profession: string;
  neighborhood: string;
  rating: number;
  date: string;
  comment: string;
  outcome: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  category: 'demissao' | 'horas' | 'beneficios' | 'pj' | 'saude' | 'geral';
  answer: string;
  googleSearchVolumeBadge?: string;
  cltReference?: string;
}

export interface TriageStep {
  id: string;
  question: string;
  options: {
    label: string;
    description?: string;
    alertTag?: string;
    points?: number;
  }[];
}

export interface OfficeLocation {
  name: string;
  address: string;
  complement: string;
  neighborhood: string;
  cityState: string;
  cep: string;
  metroDistance: string;
  busTerminalDistance: string;
  landmarks: string[];
  phone: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  oabNumber: string;
  hours: string;
  googleMapsEmbedUrl: string;
}
