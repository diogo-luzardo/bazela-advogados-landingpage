import React from 'react';
import { OFFICE_INFO } from '../data/lawFirmData';
import { 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Scale, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsAppConsult = (subject?: string) => {
    const text = subject
      ? `Olá, Bazela & Freitas Advogados. Gostaria de tirar dúvidas sobre ${subject}. Podem me orientar?`
      : 'Olá, Bazela & Freitas Advogados! Preciso de orientação com um advogado especialista em Direito do Trabalho no Tucuruvi.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-white text-[#2C3E50] border-b-2 border-[#1A2B45]" id="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Copy & Lead Capture */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] pb-8 lg:pb-0">
            
            {/* Top Local SEO & Credibility Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C5A059]" />
              <span className="text-[#C5A059] font-bold text-xs sm:text-sm uppercase tracking-widest">
                Especialistas em causas trabalhistas • Tucuruvi - Zona Norte SP
              </span>
            </div>

            {/* Main Headline with Geometric Balance Styling */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A2B45] leading-[1.15] tracking-tight font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
              Protegemos os seus direitos no <span className="border-b-4 border-[#C5A059] pb-0.5">trabalho</span>.
            </h1>

            {/* Subheading focusing on worker rights protection */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-xl">
              Localização estratégica na Av. Nova Cantareira, 2213 (Tucuruvi). Atuação especializada e célere em <strong className="text-[#1A2B45] font-semibold">Rescisão Indireta</strong>, <strong className="text-[#1A2B45] font-semibold">Horas Extras</strong>, <strong className="text-[#1A2B45] font-semibold">Fraude de PJ/MEI</strong> e <strong className="text-[#1A2B45] font-semibold">Verbas Rescisórias</strong>.
            </p>

            {/* Geometric Experience Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-4 border-[#1A2B45] pl-3 py-1">
                <span className="block text-2xl font-bold text-[#1A2B45] font-brand">+15 anos</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Tradição Jurídica</span>
              </div>
              <div className="border-l-4 border-[#C5A059] pl-3 py-1">
                <span className="block text-2xl font-bold text-[#1A2B45] font-brand">+2.800</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Causas Conduzidas</span>
              </div>
              <div className="border-l-4 border-[#1A2B45] pl-3 py-1 col-span-2 sm:col-span-1">
                <span className="block text-2xl font-bold text-[#1A2B45] font-brand">Tucuruvi</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Zona Norte SP</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => handleWhatsAppConsult()}
                id="hero-primary-cta"
                className="bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-sm shadow-sm flex items-center justify-center gap-2 uppercase tracking-wider transition-all duration-150 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar Advogado no WhatsApp</span>
              </button>

              <a
                href="#simulador-direitos"
                id="hero-secondary-cta"
                className="bg-[#1A2B45] hover:bg-[#0F172A] text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-sm shadow-sm flex items-center justify-center gap-2 uppercase tracking-wider transition-all duration-150 text-center"
              >
                <TrendingUp className="w-4 h-4 text-[#C5A059]" />
                <span>Simular Meus Direitos</span>
              </a>
            </div>

            {/* Trust Rating Banner */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-bold text-[#1A2B45]">4.9 / 5.0</span>
              <span className="text-slate-500">Avaliações no Google Meu Negócio (+180 trabalhadores atendidos)</span>
            </div>

          </div>

          {/* Right Column: Geometric Fast Triage Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#F8F9FA] rounded-sm p-6 sm:p-7 border border-[#E5E7EB] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                <div className="flex items-center gap-2 text-[#1A2B45] text-xs font-black uppercase tracking-[0.2em]">
                  <span className="w-2 h-2 bg-[#C5A059]" />
                  <span>Análise de Caso Preliminar</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#C5A059] tracking-widest bg-white px-2 py-0.5 border border-[#E5E7EB]">
                  Plantão Tucuruvi
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#1A2B45] font-brand leading-snug" style={{ fontFamily: "'Cinzel', serif" }}>
                Qual situação você deseja resolver?
              </h2>

              {/* Fast Direct WhatsApp Triggers with Geometric Left-Borders */}
              <div className="space-y-2.5">
                {[
                  {
                    title: 'A empresa não paga meu FGTS ou atrasa salário',
                    badge: 'Rescisão Indireta (Art. 483 CLT)',
                    query: 'FGTS e Salários Atrasados (Rescisão Indireta)'
                  },
                  {
                    title: 'Fui demitido e quero auditar minhas verbas rescisórias',
                    badge: 'Cálculo de Verbas Rescisórias',
                    query: 'Cálculo de Verbas Rescisórias e Demissão'
                  },
                  {
                    title: 'Trabalho mais de 8h ou finais de semana sem receber',
                    badge: 'Horas Extras Não Pagas',
                    query: 'Cobrança de Horas Extras e Banco de Horas'
                  },
                  {
                    title: 'Fui contratado como PJ/MEI com chefe e horário',
                    badge: 'Fraude PJ / Vínculo CLT',
                    query: 'Vínculo Empregatício Fraude PJ MEI'
                  },
                  {
                    title: 'Sofri acidente de trabalho ou fui demitida grávida',
                    badge: 'Estabilidade Provisória',
                    query: 'Estabilidade Acidentária ou Gestante'
                  }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleWhatsAppConsult(item.query)}
                    className="w-full text-left p-3.5 bg-white hover:bg-slate-50 border-l-4 border-[#1A2B45] border-y border-r border-slate-200 hover:border-l-[#C5A059] transition-colors shadow-xs flex items-center justify-between group cursor-pointer"
                  >
                    <div className="space-y-0.5 pr-2">
                      <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider block">
                        {item.badge}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#1A2B45] leading-snug">
                        {item.title}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1A2B45] flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>

              {/* Office Proximity Sub-banner */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-600 bg-white p-3 border border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Resposta média em <strong>5 minutos</strong></span>
                </div>
                <span className="text-[#C5A059] font-bold uppercase tracking-wider text-[10px]">Sigilo OAB/SP</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
