import React from 'react';
import { User, Building2, ChevronRight } from 'lucide-react';
import { OFFICE_INFO } from '../data/firmData';

export const AudiencePathways: React.FC = () => {
  const handleConsultWorker = () => {
    const text = 'Olá! Sou trabalhador e gostaria de uma orientação jurídica sobre os meus direitos trabalhistas.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleConsultCompany = () => {
    const text = 'Olá! Represento uma empresa e gostaria de uma assessoria jurídica preventiva/contenciosa.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-12 lg:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] block">
            ATUAÇÃO ESPECIALIZADA
          </span>

          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0F1B2D] tracking-tight"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            Como podemos ajudar?
          </h2>

          <div className="flex justify-center pt-1">
            <span className="w-10 h-[2.5px] bg-[#CCA762] rounded-full" />
          </div>
        </div>

        {/* 2 Interactive Audience Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Worker */}
          <div 
            onClick={handleConsultWorker}
            className="bg-white rounded-md p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:border-[#CCA762]/60 transition-all duration-300 flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-md border border-[#CCA762]/40 bg-[#FBF9F4] text-[#CCA762] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#CCA762] group-hover:text-white transition-all duration-300">
                <User className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="space-y-0.5">
                <h3 
                  className="text-lg sm:text-xl font-serif font-bold text-[#0F1B2D] group-hover:text-[#CCA762] transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Sou trabalhador
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                  Orientação jurídica para a defesa dos seus direitos trabalhistas, com atendimento humano e especializado.
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#CCA762] group-hover:translate-x-1.5 transition-all flex-shrink-0 ml-3" />
          </div>

          {/* Card 2: Company */}
          <div 
            onClick={handleConsultCompany}
            className="bg-white rounded-md p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:border-[#CCA762]/60 transition-all duration-300 flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-md border border-[#CCA762]/40 bg-[#FBF9F4] text-[#CCA762] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#CCA762] group-hover:text-white transition-all duration-300">
                <Building2 className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="space-y-0.5">
                <h3 
                  className="text-lg sm:text-xl font-serif font-bold text-[#0F1B2D] group-hover:text-[#CCA762] transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Represento uma empresa
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                  Assessoria jurídica preventiva e contenciosa para empresas de todos os portes.
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#CCA762] group-hover:translate-x-1.5 transition-all flex-shrink-0 ml-3" />
          </div>

        </div>

      </div>
    </section>
  );
};
