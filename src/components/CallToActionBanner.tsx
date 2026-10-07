import React from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { MessageCircle, ArrowRight, Laptop } from 'lucide-react';

export const CallToActionBanner: React.FC = () => {
  const handleWhatsApp = () => {
    const text = 'Olá! Preciso de orientação jurídica e gostaria de conversar com a equipe da Bazela & Freitas.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative bg-[#09111C] text-white py-16 lg:py-20 overflow-hidden border-b border-white/10">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-right opacity-20 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09111C] via-[#09111C]/95 to-[#09111C]/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl space-y-6">
          
          {/* Tag */}
          <div className="inline-flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              FALE CONOSCO
            </span>
            <span className="w-8 h-[2px] bg-[#C5A059] mt-1.5" />
          </div>

          {/* Title */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Precisa de orientação jurídica?
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Converse com nossa equipe e receba uma análise responsável sobre os próximos passos do seu caso.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={handleWhatsApp}
              className="bg-[#16A34A] hover:bg-[#15803D] text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md flex items-center gap-2.5 shadow-md hover:scale-102 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>FALAR PELO WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#contato"
              className="border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md flex items-center gap-2.5 backdrop-blur-xs transition-all cursor-pointer"
            >
              <span>OUTRAS FORMAS DE CONTATO</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Subtitle item */}
          <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
            <Laptop className="w-4 h-4 text-[#C5A059]" />
            <span>Atendimento presencial e digital</span>
          </div>

        </div>
      </div>
    </section>
  );
};
