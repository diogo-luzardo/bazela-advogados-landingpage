import React from 'react';
import { danielImg, dalilaImg } from '../assets';
import { OFFICE_INFO } from '../data/firmData';
import { Scale, ArrowRight } from 'lucide-react';

export const Partners: React.FC = () => {
  const handleConsultPartner = (partnerName: string) => {
    const text = `Olá! Vi o perfil do(a) Dr(a). ${partnerName} e gostaria de agendar uma consulta jurídica no escritório Bazela & Freitas.`;
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const partners = [
    {
      name: 'Dr. Daniel Bazela',
      role: 'SÓCIO FUNDADOR',
      image: danielImg,
      objectPosition: 'object-[center_12%]',
      specialty: 'Direito do Trabalho, Direito Cível e Direito de Família',
      bio: 'Advogado com mais de 15 anos de atuação, dedicado à condução estratégica de processos judiciais, negociações e soluções preventivas para pessoas e empresas.'
    },
    {
      name: 'Dra. Dalila Freitas Bazela',
      role: 'SÓCIA FUNDADORA',
      image: dalilaImg,
      objectPosition: 'object-[center_top]',
      specialty: 'Especialista em Direito do Trabalho',
      bio: 'Advogada trabalhista com mais de 15 anos de atuação na defesa de trabalhadores, com atendimento próximo, análise detalhada e acompanhamento direto de cada caso.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200" id="socios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12 lg:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#CCA762] block">
            QUEM CONDUZ CADA CASO
          </span>

          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0F1B2D] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Conheça nossos advogados
          </h2>

          <div className="flex justify-center pt-1">
            <span className="w-10 h-[2.5px] bg-[#CCA762] rounded-full" />
          </div>
        </div>

        {/* 2 Side-by-Side Cards with Large Flush Portrait Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-md border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group"
            >
              {/* Partner Portrait: Large, prominent, flush on the left */}
              <div className="w-full sm:w-[44%] md:w-[42%] min-h-[320px] sm:min-h-[380px] relative bg-slate-100 flex-shrink-0 overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${partner.objectPosition}`}
                />
              </div>

              {/* Partner Info: Right side with generous breathing room */}
              <div className="flex-1 p-6 sm:p-7 md:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <h3 
                      className="text-2xl sm:text-[26px] font-serif font-bold text-[#0F1B2D] leading-tight"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {partner.name}
                    </h3>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#CCA762] block mt-1">
                      {partner.role}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs font-medium text-slate-700 pt-1">
                    <Scale className="w-4 h-4 text-[#CCA762] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{partner.specialty}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pt-1">
                    {partner.bio}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleConsultPartner(partner.name)}
                    className="border border-[#0F1B2D] hover:bg-[#0F1B2D] text-[#0F1B2D] hover:text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-[3px] inline-flex items-center gap-2.5 transition-all cursor-pointer shadow-xs hover:shadow-md"
                  >
                    <span>CONHEÇA A ATUAÇÃO</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

