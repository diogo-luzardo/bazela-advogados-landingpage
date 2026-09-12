import React from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { 
  MapPin, 
  Train, 
  Car, 
  Clock, 
  Phone, 
  CalendarCheck,
  Navigation,
  Building2,
  ShieldCheck
} from 'lucide-react';

export const StrategicLocation: React.FC = () => {
  const { currentTheme } = useTheme();

  const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Rua Voluntários da Pátria, 2816, Santana, São Paulo - SP'
  )}`;

  const wazeRouteUrl = `https://waze.com/ul?q=${encodeURIComponent(
    'Rua Voluntários da Pátria, 2816, Santana, São Paulo'
  )}`;

  const handleWhatsAppConsult = () => {
    const text = 'Olá! Gostaria de agendar uma consulta presencial no escritório de Santana (próximo ao Metrô).';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      className="py-16 lg:py-24 border-b transition-colors"
      style={{ 
        backgroundColor: currentTheme.bgPage,
        borderColor: currentTheme.border
      }} 
      id="localizacao"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.accent }} />
            <span 
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: currentTheme.accent }}
            >
              Localização Estratégica
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: currentTheme.fontDisplay }}
          >
            Sede Corporativa em Santana
          </h2>

          <div 
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: currentTheme.accent }}
          />

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Instalações confortáveis e privativas a apenas 180 metros do Metrô Santana, com estacionamento no local e infraestrutura completa para receber você e sua empresa.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div 
              className="rounded-sm p-7 sm:p-8 border shadow-2xs space-y-6"
              style={{ 
                backgroundColor: currentTheme.bgSurface,
                borderColor: currentTheme.border
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xs flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: currentTheme.accentLight,
                    color: currentTheme.accent
                  }}
                >
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest block" style={{ color: currentTheme.accent }}>
                    Edifício Santana Corporate
                  </span>
                  <h3 
                    className="text-xl font-bold font-serif text-slate-900"
                    style={{ fontFamily: currentTheme.fontDisplay }}
                  >
                    {OFFICE_INFO.name}
                  </h3>
                  <p className="text-sm text-slate-700 font-medium pt-1">
                    {OFFICE_INFO.address}, {OFFICE_INFO.complement}
                  </p>
                  <p className="text-xs text-slate-500">
                    {OFFICE_INFO.neighborhood} • {OFFICE_INFO.cityState} • CEP {OFFICE_INFO.cep}
                  </p>
                </div>
              </div>

              {/* Transportation Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div 
                  className="flex items-start gap-3 p-3.5 rounded border"
                  style={{ 
                    backgroundColor: currentTheme.bgPage,
                    borderColor: currentTheme.border
                  }}
                >
                  <Train className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                  <div>
                    <strong className="text-xs text-slate-900 block">Metrô Santana (Linha 1-Azul)</strong>
                    <span className="text-[11px] text-slate-500">180 metros (2 min a pé)</span>
                  </div>
                </div>

                <div 
                  className="flex items-start gap-3 p-3.5 rounded border"
                  style={{ 
                    backgroundColor: currentTheme.bgPage,
                    borderColor: currentTheme.border
                  }}
                >
                  <Car className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                  <div>
                    <strong className="text-xs text-slate-900 block">Estacionamento &amp; Acesso</strong>
                    <span className="text-[11px] text-slate-500">Av. Cruzeiro do Sul e Braz Leme</span>
                  </div>
                </div>
              </div>

              {/* Operating Info */}
              <div className="border-t pt-4 space-y-2 text-xs text-slate-600" style={{ borderColor: currentTheme.border }}>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span><strong>Atendimento:</strong> Segunda a Sexta, das 09h às 18h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span><strong>Telefone:</strong> {OFFICE_INFO.phone} • <strong>WhatsApp:</strong> {OFFICE_INFO.whatsapp}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={googleMapsRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] text-center py-2.5 px-3 rounded-sm border text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-black/5 transition-colors flex items-center justify-center gap-1.5"
                  style={{ borderColor: currentTheme.border }}
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Como Chegar (Maps)</span>
                </a>

                <button
                  onClick={handleWhatsAppConsult}
                  className="flex-1 min-w-[140px] text-center py-2.5 px-3 rounded-sm text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs hover:opacity-95"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <CalendarCheck className="w-3.5 h-3.5" style={{ color: currentTheme.accent }} />
                  <span>Agendar Horário</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div 
              className="w-full h-full min-h-[320px] rounded-sm border shadow-2xs overflow-hidden"
              style={{ borderColor: currentTheme.border }}
            >
              <iframe
                src={OFFICE_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização Bazela & Freitas Advogados Santana"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
