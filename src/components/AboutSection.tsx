import React from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { Users, Scale, Laptop, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const handleConsultOffice = () => {
    const text = 'Olá! Gostaria de conhecer melhor a história e os serviços do escritório Bazela & Freitas Advogados.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="o-escritorio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Tag */}
            <div className="inline-flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                O ESCRITÓRIO
              </span>
              <span className="w-8 h-[2px] bg-[#C5A059] mt-1.5" />
            </div>

            {/* Title */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0F1B2D] leading-[1.25] tracking-tight"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Experiência jurídica com atendimento verdadeiramente personalizado
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Desde 2009, o Bazela &amp; Freitas Advogados atua na prevenção e solução de conflitos, oferecendo orientação jurídica clara, responsável e adequada à realidade de cada cliente.
              </p>
              <p>
                O atendimento é conduzido diretamente pelos sócios, desde a análise inicial até a conclusão do caso, tanto para trabalhadores e famílias quanto para empresas.
              </p>
            </div>

            {/* 3 Horizontal Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-md bg-[#F8FAFC] border border-slate-200/80">
                <div className="w-9 h-9 rounded bg-[#FBF9F4] text-[#C5A059] flex items-center justify-center flex-shrink-0 border border-[#C5A059]/30">
                  <Users className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Atendimento direto pelos sócios
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-md bg-[#F8FAFC] border border-slate-200/80">
                <div className="w-9 h-9 rounded bg-[#FBF9F4] text-[#C5A059] flex items-center justify-center flex-shrink-0 border border-[#C5A059]/30">
                  <Scale className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Atuação preventiva e contenciosa
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-md bg-[#F8FAFC] border border-slate-200/80">
                <div className="w-9 h-9 rounded bg-[#FBF9F4] text-[#C5A059] flex items-center justify-center flex-shrink-0 border border-[#C5A059]/30">
                  <Laptop className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Atendimento presencial e digital
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleConsultOffice}
                className="bg-[#0F1B2D] hover:bg-[#1A2B45] text-white font-sans font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-md flex items-center gap-2.5 shadow-md hover:scale-102 transition-all cursor-pointer"
              >
                <span>CONHEÇA NOSSA HISTÓRIA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Office Image & Marble Wall Engraving */}
          <div className="lg:col-span-6">
            <div className="relative rounded-md overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Escritório Bazela & Freitas Advogados"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-103 transition-transform duration-500"
              />
              
              {/* Marble Overlay Wall Engraving overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D]/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white space-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] font-serif font-bold text-[#C5A059]">
                    DIREITO &nbsp;•&nbsp; ESTRATÉGIA &nbsp;•&nbsp; RESULTADOS
                  </p>
                  <p className="text-xs text-slate-300 font-sans">
                    Sede corporativa em Santana, São Paulo / SP
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
