import React from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { 
  FileText, 
  FileEdit, 
  Users, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

export const PracticeAreas: React.FC = () => {
  const handleConsultArea = (areaName: string) => {
    const text = `Olá! Gostaria de mais informações sobre a atuação em ${areaName} no escritório Bazela & Freitas.`;
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const areas = [
    {
      id: 'trabalho',
      title: 'DIREITO DO TRABALHO',
      subtitle: 'Para trabalhadores e empresas',
      body: 'Reclamações trabalhistas, defesas empresariais, rescisões, horas extras, acidentes, doenças ocupacionais e execução trabalhista.',
      icon: FileText,
      highlight: true
    },
    {
      id: 'civel',
      title: 'DIREITO CÍVEL',
      subtitle: 'Contratos, responsabilidade e patrimônio',
      body: 'Análise e revisão de contratos, indenizações, cobranças, conflitos patrimoniais e demandas imobiliárias.',
      icon: FileEdit,
      highlight: false
    },
    {
      id: 'familia',
      title: 'DIREITO DE FAMÍLIA E SUCESSÕES',
      subtitle: 'Soluções jurídicas para questões familiares',
      body: 'Divórcio, guarda, alimentos, inventário, partilha de bens, união estável e planejamento sucessório.',
      icon: Users,
      highlight: false
    },
    {
      id: 'previdenciario',
      title: 'DIREITO PREVIDENCIÁRIO',
      subtitle: 'Proteção dos seus direitos previdenciários',
      body: 'Aposentadorias, benefícios por incapacidade, pensão por morte, revisões e planejamento previdenciário.',
      icon: ShieldCheck,
      highlight: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200" id="areas-de-atuacao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              COMO PODEMOS AJUDAR
            </span>
            <span className="w-8 h-[2px] bg-[#C5A059] mt-1.5" />
          </div>

          <h2 
            className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1B2D] tracking-tight"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Áreas de atuação
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Atuação jurídica personalizada, com análise cuidadosa de cada caso e acompanhamento direto pelos advogados do escritório.
          </p>
        </div>

        {/* 4 Cards Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {areas.map((area) => {
            const Icon = area.icon;
            if (area.highlight) {
              return (
                <div
                  key={area.id}
                  className="bg-[#0F1B2D] text-white rounded-md p-7 sm:p-9 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-7 relative overflow-hidden group border border-[#0F1B2D] hover:border-[#CCA762]/40"
                >
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-md bg-white/10 border border-[#CCA762]/40 text-[#CCA762] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 stroke-[1.5]" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 
                        className="text-lg sm:text-xl font-serif font-bold tracking-wide uppercase text-white"
                        style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                      >
                        {area.title}
                      </h3>
                      <div className="w-8 h-[2px] bg-[#CCA762] group-hover:w-12 transition-all duration-300" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 pt-1">
                        {area.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {area.body}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleConsultArea(area.title)}
                      className="border border-white/40 hover:border-white bg-white/5 hover:bg-white/10 text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md flex items-center gap-2 transition-all cursor-pointer group-hover:bg-white group-hover:text-[#0F1B2D]"
                    >
                      <span>CONHEÇA NOSSA ATUAÇÃO</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={area.id}
                className="bg-white text-slate-900 rounded-md p-7 sm:p-9 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-[#CCA762]/50 transition-all duration-300 flex flex-col justify-between space-y-7 group"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-md bg-[#FBF9F4] border border-[#CCA762]/40 text-[#CCA762] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#CCA762] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 
                      className="text-lg sm:text-xl font-serif font-bold tracking-wide uppercase text-[#0F1B2D] group-hover:text-[#CCA762] transition-colors"
                      style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                    >
                      {area.title}
                    </h3>
                    <div className="w-8 h-[2px] bg-[#CCA762] group-hover:w-12 transition-all duration-300" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 pt-1">
                      {area.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {area.body}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => handleConsultArea(area.title)}
                    className="border border-[#0F1B2D] hover:bg-[#0F1B2D] text-[#0F1B2D] hover:text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <span>CONHEÇA NOSSA ATUAÇÃO</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
