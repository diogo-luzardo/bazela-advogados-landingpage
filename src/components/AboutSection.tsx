import React, { useState } from 'react';
import { OFFICE_INFO, ABOUT_FIRM } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { MessageCircle, X, ShieldCheck, CheckCircle2, Award, Clock, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const text = 'Olá! Gostaria de uma consulta com os advogados da Bazela & Freitas Associados.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      id="o-escritorio" 
      className="py-16 sm:py-24 bg-white border-b border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matching the exact "Bem vindo" + "BRANCALEÃO & MARIGO ADVOGADOS ASSOCIADOS" style) */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <span 
            className="text-lg sm:text-xl font-serif text-[#4a90e2] block font-normal tracking-wide"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Bem vindo
          </span>

          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 uppercase tracking-wide"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Bazela &amp; Freitas Advogados Associados
          </h2>
        </div>

        {/* Two Column Layout (Exact 50/50 from Brancaleão & Marigo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (50%): Legal Image + WhatsApp Box underneath */}
          <div className="lg:col-span-6 space-y-6">
            <div className="overflow-hidden rounded-xs border border-slate-200 shadow-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe de advogados em reunião de estratégia jurídica e análise de processos no escritório"
                className="w-full h-72 sm:h-84 object-cover object-center transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Info Box "Consulte-nos (11) 98765-4321" (Direct replica of pp-info-box) */}
            <a
              href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 p-3.5 border-2 border-slate-900 rounded-sm hover:bg-slate-50 transition-colors shadow-2xs group"
              style={{ borderColor: currentTheme.primary }}
              aria-label="Consulte-nos pelo WhatsApp"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="leading-tight text-left">
                <h4 className="text-xs font-serif font-bold uppercase text-slate-900 tracking-wider">
                  Consulte-nos
                </h4>
                <h5 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
                  {OFFICE_INFO.whatsapp}
                </h5>
              </div>
            </a>
          </div>

          {/* Right Column (50%): Text editor + "Saiba mais" button */}
          <div className="lg:col-span-6 space-y-6 text-slate-700 leading-relaxed font-sans">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
              Acreditamos que para gerar resultados é preciso dedicação e advogados em constante atualizações das novas leis e normas no Brasil, e assim, apresentar soluções justas perante a lei e aos seus direitos.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              O escritório <strong className="font-semibold text-slate-900">Bazela &amp; Freitas Advogados Associados</strong> foi constituído para prestar uma assistência completa e personalizada na área do direito. Sediado no coração corporativo de Santana, a 180 metros do Metrô Santana, unimos o acolhimento do atendimento presencial à agilidade da advocacia digital em todo o estado de São Paulo.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Atuação conduzida pelos sócios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Prevenção e redução de passivos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Sigilo profissional rigoroso (OAB)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Sede nobre no Metrô Santana</span>
              </div>
            </div>

            {/* Elementor-style Pulse Button "Saiba mais" */}
            <div className="pt-3">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-block px-7 py-3 rounded-xs text-white font-serif font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:opacity-90 cursor-pointer shadow-sm hover:scale-102"
                style={{ backgroundColor: currentTheme.primary }}
              >
                Saiba mais
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Detail Modal for "Saiba mais" */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xs border border-slate-300 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#30437e] block">
                  Institucional
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  Bazela &amp; Freitas Advogados Associados
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Narrative */}
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-sans">
              <p>
                {ABOUT_FIRM.lead}
              </p>
              {ABOUT_FIRM.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Transparência &amp; Ética
                  </h4>
                  <p className="text-xs text-slate-500">
                    Comunicação constante e realista sobre riscos, prazos e viabilidade em todas as fases processuais.
                  </p>
                </div>

                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#30437e]" />
                    Sede Santana (180m Metrô)
                  </h4>
                  <p className="text-xs text-slate-500">
                    {OFFICE_INFO.address}, {OFFICE_INFO.complement} - Edifício Santana Corporate.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer action */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                {OFFICE_INFO.oabNumber}
              </span>
              <button
                onClick={() => {
                  setModalOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar com Advogado no WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
