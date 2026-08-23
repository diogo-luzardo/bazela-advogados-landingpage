import React, { useState } from 'react';
import { TESTIMONIALS, OFFICE_INFO } from '../data/lawFirmData';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  MessageCircle, 
  BadgeCheck, 
  ThumbsUp 
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('Todos');

  const tags = ['Todos', 'Rescisão Indireta', 'Horas Extras & Verbas', 'Fraude PJ / Vínculo', 'Acidente de Trabalho', 'Atendimento Santana'];

  const filteredTestimonials = selectedTag === 'Todos'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.tag === selectedTag);

  const handleWhatsAppReview = () => {
    const text = 'Olá! Vi os depoimentos e resultados no site e gostaria de uma avaliação para o meu caso trabalhista.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-white text-[#2C3E50] border-b border-[#E5E7EB]" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Geometric Balance Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C5A059]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A2B45]">
              Casos Conduzidos com Ética e Rigor
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A2B45] tracking-tight font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
            Depoimentos de Trabalhadores Atendidos
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Veja a experiência real de quem confiou seus direitos trabalhistas ao escritório Bazela &amp; Freitas Advogados em Santana e na Zona Norte de São Paulo.
          </p>

          {/* Rating Summary Card with Geometric Border */}
          <div className="inline-flex items-center gap-4 bg-[#F8F9FA] px-5 py-2.5 rounded-xs border border-[#E5E7EB] shadow-xs mt-2">
            <div className="flex items-center gap-1 text-[#C5A059]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
              ))}
            </div>
            <div className="text-left text-xs">
              <strong className="text-[#1A2B45] font-bold block">4.9 de 5.0 estrelas</strong>
              <span className="text-slate-500">Google Avaliações (+180 clientes)</span>
            </div>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#1A2B45] text-white border-[#1A2B45]'
                  : 'bg-[#F8F9FA] text-slate-600 border-[#E5E7EB] hover:border-slate-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid with Geometric Left-Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F9FA] rounded-xs p-6 border-l-4 border-[#1A2B45] border-y border-r border-[#E5E7EB] shadow-xs hover:border-l-[#C5A059] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Top Row: Stars + Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Outcome Badge */}
              <div className="space-y-3 pt-3 border-t border-[#E5E7EB]">
                <div className="p-2.5 rounded-xs bg-white border border-[#E5E7EB] text-slate-800 text-xs font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Resultado:</strong> {item.outcome}</span>
                </div>

                {/* Worker Bio */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="text-xs font-bold text-[#1A2B45]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {item.profession}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-white px-2 py-0.5 rounded-xs border border-[#E5E7EB]">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    <span>{item.neighborhood}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={handleWhatsAppReview}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase px-6 py-3.5 rounded-sm shadow-xs cursor-pointer transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com o Advogado Trabalhista no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
