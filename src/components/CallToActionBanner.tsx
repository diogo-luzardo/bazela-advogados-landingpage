import React from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { MessageCircle } from 'lucide-react';

export const CallToActionBanner: React.FC = () => {
  const { currentTheme } = useTheme();

  const handleConsultationClick = () => {
    const text = 'Olá! Preciso de orientações de um advogado e gostaria de agendar uma consulta com o escritório Bazela & Freitas.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2" id="cta-advogado">
      
      {/* Left Column (50%): Dark classic image with overlay and "Precisa de um advogado?" */}
      <div className="relative min-h-[220px] sm:min-h-[280px] flex items-center justify-center p-8 sm:p-12 overflow-hidden bg-slate-950 text-center">
        {/* Background photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80)'
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90" />

        <div className="relative z-10">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight tracking-wide"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Precisa de um<br />advogado?
          </h2>
        </div>
      </div>

      {/* Right Column (50%): Solid deep navy (#30437e) with "Entre em contato e agende uma consulta jurídica." + "Clique aqui" */}
      <div 
        className="min-h-[220px] sm:min-h-[280px] flex flex-col items-center justify-center p-8 sm:p-12 text-center space-y-6"
        style={{ backgroundColor: currentTheme.primary || '#30437e' }}
      >
        <h2 
          className="text-xl sm:text-2xl lg:text-3xl font-serif text-white font-normal leading-snug max-w-md tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Entre em contato e agende uma consulta jurídica.
        </h2>

        {/* Pulse Button "Clique aqui" */}
        <div>
          <button
            onClick={handleConsultationClick}
            className="px-8 py-3.5 rounded-xs border-2 border-white text-white font-serif text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200 hover:bg-white hover:text-slate-900 cursor-pointer shadow-md hover:scale-105"
          >
            Clique aqui
          </button>
        </div>
      </div>

    </section>
  );
};
