import React from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { heroJusticeImg } from '../assets';
import { ArrowRight, Gavel } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    const text = 'Olá! Gostaria de uma orientação jurídica com o escritório Bazela & Freitas.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      id="inicio"
      className="relative w-full overflow-hidden select-none bg-[#070E18] text-white py-14 sm:py-18 lg:py-22"
    >
      {/* High-Resolution Lady Justice Background Artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroJusticeImg}
          alt="Estátua da Justiça e Arquitetura Jurídica"
          className="w-full h-full object-cover object-right sm:object-[80%_center] lg:object-[right_center]"
        />
        {/* Subtle, soft left vignette to blend perfectly into dark background without covering the statue */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070E18] via-[#070E18]/60 via-30% to-transparent to-55% pointer-events-none" />
        {/* Mobile-only overlay for text legibility on small screens */}
        <div className="lg:hidden absolute inset-0 bg-[#070E18]/80 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (Main Text & Calls to Action) */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            
            {/* Category Tag */}
            <div className="inline-flex items-center">
              <span className="text-[11px] sm:text-xs font-serif font-bold uppercase tracking-[0.28em] text-[#CCA762]">
                TRADIÇÃO &nbsp;|&nbsp; TÉCNICA &nbsp;|&nbsp; RESULTADOS
              </span>
            </div>

            {/* Main Headline (Exact Playfair Display typography matching photo) */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold text-white leading-[1.18] tracking-tight max-w-2xl"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              Advocacia estratégica para{' '}
              <span 
                className="text-[#CCA762] block sm:inline font-bold"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                trabalhadores, empresas e famílias
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-sans leading-relaxed">
              Atendimento próximo, análise responsável e atuação jurídica conduzida diretamente pelos sócios.
            </p>

            {/* Accent divider line above gavel callout */}
            <div className="w-12 h-[2px] bg-[#CCA762] opacity-90" />

            {/* Highlight Gavel Callout (Clean layout matching photo without heavy box) */}
            <div className="flex items-start gap-3.5 max-w-xl pt-0.5">
              <Gavel className="w-5 h-5 text-[#CCA762] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                <strong 
                  className="text-[#CCA762] font-semibold block mb-0.5 text-sm sm:text-[15px]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Sua empresa recebeu uma reclamação trabalhista?
                </strong>
                <span className="text-slate-300 font-sans text-xs sm:text-[13px]">
                  Entenda os próximos passos e prepare sua defesa com orientação jurídica.
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={handleWhatsApp}
                className="relative overflow-hidden bg-[#18A148] hover:bg-[#158C3E] text-white font-serif font-bold text-xs uppercase tracking-[0.12em] px-6 py-3.5 rounded-[4px] flex items-center gap-2.5 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {/* Subtle luxury light sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-luxury-shimmer" />

                {/* Official WhatsApp icon */}
                <svg className="w-4 h-4 fill-current relative z-10" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="relative z-10">FALAR NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4 ml-0.5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#o-escritorio"
                className="border border-white/50 hover:border-white bg-transparent hover:bg-white/10 text-white font-serif font-bold text-xs uppercase tracking-[0.12em] px-6 py-3.5 rounded-[4px] flex items-center gap-2.5 backdrop-blur-xs transition-all cursor-pointer"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <span>CONHEÇA O ESCRITÓRIO</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column is kept empty to let Lady Justice statue and stone wall breathe */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </div>
    </section>
  );
};

