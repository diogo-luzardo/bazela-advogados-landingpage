export interface ThemeOption {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  fontDisplay: string;
  fontDisplayName: string;
  fontBody: string;
  fontBodyName: string;
  primary: string;
  secondary: string;
  accent: string;
  accentHover: string;
  accentLight: string;
  bgPage: string;
  bgSurface: string;
  textMain: string;
  textMuted: string;
  border: string;
  tag: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  scopeItems: string[];
  keyHighlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  roleOrSegment: string;
  city: string;
  rating: number;
  comment: string;
  area: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'consultas' | 'prazos' | 'honorarios';
}

export interface OfficeLocation {
  name: string;
  address: string;
  complement: string;
  neighborhood: string;
  cityState: string;
  cep: string;
  metroDistance: string;
  phone: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  oabNumber: string;
  hours: string;
  googleMapsEmbedUrl: string;
}
