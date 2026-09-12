import React, { useState } from 'react';
import { FAQ_ITEMS, OFFICE_INFO } from '../data/firmData';
import { FAQItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppForFaq = (faq: FAQItem) => {
    const text = `Olá! Estava lendo o FAQ no site da Bazela & Freitas sobre: "${faq.question}". Gostaria de orientações para o meu caso.`;
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      className="py-16 lg:py-24 border-b transition-colors"
      style={{ 
        backgroundColor: currentTheme.bgPage,
        borderColor: currentTheme.border
      }} 
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.accent }} />
            <span 
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: currentTheme.accent }}
            >
              Esclarecimentos Preliminares
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: currentTheme.fontDisplay }}
          >
            Dúvidas Frequentes
          </h2>

          <div 
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: currentTheme.accent }}
          />

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Respostas claras sobre como funciona o atendimento, contratação e condução das demandas jurídicas em nosso escritório.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-sm border transition-all duration-150 overflow-hidden shadow-2xs"
                style={{ 
                  backgroundColor: currentTheme.bgSurface,
                  borderColor: currentTheme.border
                }}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>

                  <span 
                    className="p-1 rounded-full border transition-colors flex-shrink-0"
                    style={{ 
                      borderColor: currentTheme.border,
                      color: currentTheme.accent
                    }}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4 border-t" style={{ borderColor: currentTheme.border }}>
                    <p className="font-sans">
                      {faq.answer}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Ficou com alguma dúvida específica?</span>
                      <button
                        onClick={() => handleWhatsAppForFaq(faq)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors hover:underline cursor-pointer"
                        style={{ color: currentTheme.accent }}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Falar com Advogado</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
