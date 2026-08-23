import React, { useState } from 'react';
import { PRACTICE_AREAS, OFFICE_INFO } from '../data/lawFirmData';
import { PracticeArea } from '../types';
import { 
  ShieldAlert, 
  Receipt, 
  Clock, 
  FileCheck2, 
  HeartPulse, 
  UserX, 
  Baby, 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Search,
  Scale
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldAlert,
  ReceiptCheck: Receipt,
  ClockAlert: Clock,
  FileBadge: FileCheck2,
  HeartPulse,
  UserX,
  Baby,
  Flame,
};

export const PracticeAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = PRACTICE_AREAS.filter((area) =>
    area.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.commonSigns.some(sign => sign.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleWhatsAppForArea = (area: PracticeArea) => {
    const text = `Olá, Bazela & Freitas Advogados! Estou com dúvidas sobre *${area.title}* (${area.cltArticle || 'Direito Trabalhista'}). Podem analisar minha situação?`;
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FA] text-[#2C3E50] border-b border-[#E5E7EB]" id="areas-de-atuacao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Geometric Balance Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C5A059]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A2B45]">
              Especialidades em Direito do Trabalho
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A2B45] tracking-tight font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
            Causas Trabalhistas que Patrocinamos em Santana
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Conheça as principais causas que atuamos na Justiça do Trabalho. Identifique sua situação e fale diretamente com nossos advogados especialistas para resguardar seus direitos e prazos.
          </p>

          {/* Quick Search Input */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por direito (ex: FGTS, horas extras, justa causa...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-[#E5E7EB] bg-white text-xs sm:text-sm text-slate-800 focus:border-[#1A2B45] focus:outline-none shadow-xs"
                aria-label="Pesquisar especialidade trabalhista"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold uppercase"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Practice Cards Grid with Geometric Framing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {filteredAreas.map((area) => {
            const IconComponent = ICON_MAP[area.iconName] || Scale;
            return (
              <div
                key={area.id}
                id={`card-${area.id}`}
                className="bg-white rounded-xs p-6 border-t-4 border-t-[#1A2B45] border-x border-b border-[#E5E7EB] shadow-xs hover:border-t-[#C5A059] transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & CLT Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#1A2B45] text-[#C5A059] flex items-center justify-center rounded-xs shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {area.cltArticle && (
                      <span className="text-[10px] font-bold text-[#1A2B45] bg-[#F8F9FA] border border-[#E5E7EB] px-2.5 py-1 uppercase tracking-wider">
                        {area.cltArticle}
                      </span>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-[#1A2B45] font-brand leading-snug group-hover:text-[#C5A059] transition-colors">
                    {area.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.shortDesc}
                  </p>

                  {/* Common Signs Preview */}
                  <div className="pt-2 border-t border-[#E5E7EB] space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Sinais comuns:
                    </span>
                    {area.commonSigns.slice(0, 2).map((sign, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex flex-col gap-2">
                  <button
                    onClick={() => handleWhatsAppForArea(area)}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase py-2.5 px-4 rounded-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Avaliar via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSelectedArea(area)}
                    className="w-full flex items-center justify-center gap-1.5 text-slate-600 hover:text-[#1A2B45] font-bold text-xs uppercase py-1.5 transition-colors cursor-pointer"
                  >
                    <span>Ver direitos recuperáveis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAreas.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p>Nenhuma especialidade encontrada para "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-2 text-xs text-[#1A2B45] font-bold uppercase underline"
            >
              Ver todas as áreas
            </button>
          </div>
        )}

      </div>

      {/* Modal / Detailed Drawer for Full Practice Area Breakdown */}
      {selectedArea && (
        <div
          className="fixed inset-0 z-50 bg-[#0F172A]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedArea(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-xs max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-[#1A2B45] max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b-2 border-[#1A2B45] pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest block">
                  {selectedArea.cltArticle || 'Direito do Trabalho'}
                </span>
                <h3 id="modal-title" className="text-2xl font-bold text-[#1A2B45] font-brand">
                  {selectedArea.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArea(null)}
                className="p-1 text-slate-400 hover:text-[#1A2B45] font-bold text-lg"
                aria-label="Fechar janela"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <p className="text-sm sm:text-base font-medium text-[#1A2B45]">
                {selectedArea.fullDesc}
              </p>

              {/* Signs / Red flags */}
              <div className="bg-[#F8F9FA] border-l-4 border-[#C5A059] border-y border-r border-[#E5E7EB] p-4 space-y-2">
                <h4 className="font-bold text-[#1A2B45] text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
                  Sinais de que você pode acionar a Justiça do Trabalho:
                </h4>
                <ul className="space-y-1.5">
                  {selectedArea.commonSigns.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#C5A059] font-bold">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recoverable Rights */}
              <div className="bg-[#F8F9FA] border-l-4 border-[#1A2B45] border-y border-r border-[#E5E7EB] p-4 space-y-2">
                <h4 className="font-bold text-[#1A2B45] text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Direitos e Verbas que podemos recuperar para você:
                </h4>
                <ul className="space-y-1.5">
                  {selectedArea.rightsRecoverable.map((right, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom WhatsApp CTA */}
            <div className="pt-2 border-t border-[#E5E7EB] flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  handleWhatsAppForArea(selectedArea);
                  setSelectedArea(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase py-3.5 px-6 rounded-sm shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar no WhatsApp sobre este tema</span>
              </button>
              <button
                onClick={() => setSelectedArea(null)}
                className="px-5 py-3 text-slate-600 hover:text-slate-900 font-bold text-xs uppercase border border-[#E5E7EB] rounded-sm hover:bg-[#F8F9FA]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
