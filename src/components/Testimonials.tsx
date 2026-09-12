import React from 'react';
import { TESTIMONIALS, OFFICE_INFO } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { Star, MessageCircle, CalendarCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { currentTheme } = useTheme();

  const handleWhatsAppConsult = () => {
    const text = 'Olá! Gostaria de agendar uma consulta jurídica com o escritório Bazela & Freitas Advogados Associados.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      className="py-16 lg:py-24 border-b transition-colors"
      style={{ 
        backgroundColor: currentTheme.bgSurface,
        borderColor: currentTheme.border
      }} 
      id="depoimentos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.accent }} />
            <span 
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: currentTheme.accent }}
            >
              Reconhecimento &amp; Confiança
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: currentTheme.fontDisplay }}
          >
            Depoimentos de Nossos Clientes
          </h2>

          <div 
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: currentTheme.accent }}
          />

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            A satisfação e a segurança jurídica de quem confia suas causas ao escritório Bazela &amp; Freitas Advogados Associados.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-sm p-7 border shadow-2xs flex flex-col justify-between space-y-6 transition-all duration-200 hover:shadow-sm"
              style={{ 
                backgroundColor: currentTheme.bgPage,
                borderColor: currentTheme.border
              }}
            >
              <div className="space-y-4">
                {/* Area badge & Stars */}
                <div className="flex items-center justify-between">
                  <span 
                    className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                    style={{ 
                      borderColor: currentTheme.border,
                      color: currentTheme.accent,
                      backgroundColor: currentTheme.bgSurface
                    }}
                  >
                    {item.area}
                  </span>

                  <div className="flex items-center gap-1" style={{ color: currentTheme.accent }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-sans">
                  "{item.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t" style={{ borderColor: currentTheme.border }}>
                <h4 className="text-sm font-bold text-slate-900">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500">
                  {item.roleOrSegment} • {item.city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={handleWhatsAppConsult}
            className="inline-flex items-center justify-center gap-2.5 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-sm shadow-xs cursor-pointer transition-all hover:opacity-95"
            style={{ backgroundColor: currentTheme.primary }}
          >
            <CalendarCheck className="w-4 h-4" style={{ color: currentTheme.accent }} />
            <span>Agendar Consulta com Advogado</span>
          </button>
        </div>

      </div>
    </section>
  );
};
