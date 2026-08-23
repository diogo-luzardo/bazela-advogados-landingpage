import React from 'react';
import { OFFICE_INFO } from '../data/lawFirmData';
import { 
  MapPin, 
  Train, 
  Bus, 
  Car, 
  Accessibility, 
  Navigation, 
  Clock, 
  Phone, 
  MessageCircle, 
  ShieldCheck,
  Building2
} from 'lucide-react';

export const StrategicLocation: React.FC = () => {
  const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Rua Voluntários da Pátria, 2816, Santana, São Paulo - SP'
  )}`;

  const wazeRouteUrl = `https://waze.com/ul?q=${encodeURIComponent(
    'Rua Voluntários da Pátria, 2816, Santana, São Paulo'
  )}`;

  const handleWhatsAppConsult = () => {
    const text = 'Olá! Gostaria de agendar um atendimento presencial no escritório de Santana (próximo ao Metrô).';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const nearbyNeighborhoods = [
    'Santana',
    'Tucuruvi',
    'Jardim São Paulo',
    'Parada Inglesa',
    'Vila Guilherme',
    'Casa Verde',
    'Mandaqui',
    'Tremembé',
    'Jaçanã',
    'Vila Maria',
    'Imirim',
    'Lauzane Paulista',
    'Limão',
    'Carandiru'
  ];

  return (
    <section className="py-16 lg:py-24 bg-white text-[#2C3E50] border-b border-[#E5E7EB]" id="localizacao-santana">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C5A059]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A2B45]">
              Acesso Rápido e Centralizado • Zona Norte SP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A2B45] tracking-tight font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
            Apenas 180 Metros do Metrô Santana
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Sabemos que o trabalhador tem rotina corrida. Por isso, nosso escritório está situado no coração de Santana, a poucos passos da <strong className="text-[#1A2B45] font-semibold">Estação de Metrô Santana</strong> e do <strong className="text-[#1A2B45] font-semibold">Terminal Urbano de Ônibus</strong>, com estrutura 100% acessível e confortável.
          </p>
        </div>

        {/* Location Content Grid with Geometric Balance Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-stretch">
          
          {/* Left Column: Proximity & Accessibility Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Main Address Card with Geometric Left-Border */}
            <div className="bg-[#F8F9FA] border-l-4 border-[#1A2B45] border-y border-r border-[#E5E7EB] rounded-xs p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-[#1A2B45] text-[#C5A059] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest block">
                    Escritório Central Santana
                  </span>
                  <h3 className="text-lg font-bold text-[#1A2B45] font-brand">
                    {OFFICE_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {OFFICE_INFO.address}, {OFFICE_INFO.complement}
                  </p>
                  <p className="text-xs text-slate-500">
                    {OFFICE_INFO.neighborhood} • {OFFICE_INFO.cityState} • CEP {OFFICE_INFO.cep}
                  </p>
                </div>
              </div>

              {/* Distances and Transports */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xs bg-white border border-[#E5E7EB]">
                  <Train className="w-4 h-4 text-[#1A2B45] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#1A2B45] block">Metrô Santana (Linha 1-Azul)</span>
                    <span className="text-[11px] text-slate-600">Apenas 180 metros (2 min a pé)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xs bg-white border border-[#E5E7EB]">
                  <Bus className="w-4 h-4 text-[#1A2B45] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#1A2B45] block">Terminal de Ônibus Santana</span>
                    <span className="text-[11px] text-slate-600">Linhas de toda a Zona Norte</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xs bg-white border border-[#E5E7EB]">
                  <Car className="w-4 h-4 text-[#1A2B45] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#1A2B45] block">Vias de Acesso Fáceis</span>
                    <span className="text-[11px] text-slate-600">Av. Cruzeiro do Sul e Braz Leme</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xs bg-white border border-[#E5E7EB]">
                  <Accessibility className="w-4 h-4 text-[#1A2B45] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#1A2B45] block">Total Acessibilidade</span>
                    <span className="text-[11px] text-slate-600">Elevadores e vaga preferencial</span>
                  </div>
                </div>
              </div>

              {/* Working Hours & Contact */}
              <div className="border-t border-[#E5E7EB] pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span><strong>Horário:</strong> Seg a Sex das 08h30 às 18h30</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Salas de Atendimento Privativas</span>
                </div>
              </div>

              {/* Navigation Action Buttons with Geometric Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={googleMapsRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1A2B45] hover:bg-[#0F172A] text-white font-bold text-xs uppercase py-3 px-4 rounded-sm shadow-xs transition-colors text-center"
                >
                  <Navigation className="w-4 h-4 text-[#C5A059]" />
                  <span>Traçar Rota no Maps</span>
                </a>

                <a
                  href={wazeRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#F8F9FA] hover:bg-slate-200 text-[#1A2B45] border border-[#E5E7EB] font-bold text-xs uppercase py-3 px-4 rounded-sm shadow-xs transition-colors text-center"
                >
                  <span>Abrir no Waze</span>
                </a>

                <button
                  onClick={handleWhatsAppConsult}
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase py-3 px-4 rounded-sm shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar no WhatsApp</span>
                </button>
              </div>

            </div>

            {/* Neighborhoods Served in Zona Norte for SEO */}
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xs p-4 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A2B45] block">
                Atendimento rápido para moradores e trabalhadores de:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {nearbyNeighborhoods.map((bairro, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-xs border border-[#E5E7EB]"
                  >
                    {bairro}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed & Arrival Guide */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="bg-white rounded-xs overflow-hidden border-2 border-[#1A2B45] shadow-xs flex-1 min-h-[360px] relative flex flex-col">
              {/* Header on top of map */}
              <div className="bg-[#1A2B45] text-white px-4 py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Santana, São Paulo - SP</span>
                </div>
                <span className="text-[#C5A059] font-bold text-[10px] uppercase tracking-widest">
                  A 180m do Metrô
                </span>
              </div>

              <iframe
                title="Mapa de Localização Bazela & Freitas Santana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7845371520626!2d-46.62685982379308!3d-23.504245678839074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce587eb0a0ad89%3A0x6b7ca2c5dbef92a5!2sSantana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full flex-1 min-h-[380px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Bottom Quick Bar */}
              <div className="p-3 bg-[#F8F9FA] border-t border-[#E5E7EB] flex items-center justify-between text-xs text-slate-700">
                <span className="font-semibold text-[#1A2B45]">
                  📍 Rua Voluntários da Pátria, 2816 - Santana, SP
                </span>
                <span className="text-[#C5A059] font-bold uppercase tracking-wider text-[10px]">
                  Zona Norte
                </span>
              </div>
            </div>

            {/* Quick transport directions summary with Geometric Left-Border */}
            <div className="p-4 bg-[#F8F9FA] border-l-4 border-[#C5A059] border-y border-r border-[#E5E7EB] rounded-xs flex items-center justify-between text-xs text-[#1A2B45]">
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-[#1A2B45] flex-shrink-0" />
                <span>Desça na <strong>Estação Santana (Metrô Linha 1-Azul)</strong> e caminhe 2 minutos pela Voluntários da Pátria.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
