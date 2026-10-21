import React from 'react';
import { User, Scale, Laptop } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="o-escritorio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-7">
          
          {/* Tag */}
          <div className="inline-flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              O ESCRITÓRIO
            </span>
            <span className="w-8 h-[2px] bg-[#C5A059] mt-1.5" />
          </div>

          {/* Title */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[38px] font-serif font-bold text-[#0F1B2D] leading-[1.2] tracking-tight uppercase"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            EXPERIÊNCIA JURÍDICA COM<br className="hidden sm:inline" /> ATENDIMENTO VERDADEIRAMENTE<br className="hidden sm:inline" /> PERSONALIZADO
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-3xl">
            <p>
              Desde 2009, o Bazela &amp; Freitas Advogados atua na prevenção e solução de conflitos, oferecendo orientação jurídica clara, responsável e adequada à realidade de cada cliente.
            </p>
            <p>
              O atendimento é conduzido por equipe altamente qualificada, desde a análise inicial até a conclusão do caso.
            </p>
          </div>

          {/* 3 Horizontal Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-3 max-w-4xl">
            {/* Card 1 */}
            <div className="flex items-center gap-3.5 p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80">
              <div className="w-11 h-11 rounded-lg bg-[#FDF8EE] text-[#C5A059] flex items-center justify-center flex-shrink-0 border border-[#C5A059]/40">
                <User className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Atendimento
              </span>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-3.5 p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80">
              <div className="w-11 h-11 rounded-lg bg-[#FDF8EE] text-[#C5A059] flex items-center justify-center flex-shrink-0 border border-[#C5A059]/40">
                <Scale className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Atuação preventiva<br />e contenciosa
              </span>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-3.5 p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80">
              <div className="w-11 h-11 rounded-lg bg-[#FDF8EE] text-[#C5A059] flex items-center justify-center flex-shrink-0 border border-[#C5A059]/40">
                <Laptop className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Atendimento<br />presencial e digital
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
