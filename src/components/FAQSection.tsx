import React, { useState } from 'react';
import { FAQ_LIST, OFFICE_INFO } from '../data/lawFirmData';
import { FAQItem } from '../types';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  BookOpen, 
  MessageCircle, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'demissao', label: 'Demissão & FGTS' },
    { id: 'horas', label: 'Horas Extras' },
    { id: 'pj', label: 'Contrato PJ / MEI' },
    { id: 'saude', label: 'Acidente & Saúde' },
    { id: 'geral', label: 'Honorários & Consulta' }
  ];

  const filteredFaqs = FAQ_LIST.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppForFaq = (faq: FAQItem) => {
    const text = `Olá, Bazela & Freitas Advogados! Estava lendo o FAQ no site sobre: "${faq.question}". Gostaria de entender como isso se aplica ao meu caso.`;
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-white text-[#2C3E50] border-b border-[#E5E7EB]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Geometric Balance Styling */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C5A059]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A2B45]">
              Respostas Baseadas na CLT e TST
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A2B45] tracking-tight font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
            Dúvidas Frequentes sobre Direitos Trabalhistas
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Reunimos as principais perguntas pesquisadas no Google por trabalhadores de Santana e da Zona Norte de São Paulo para esclarecer seus direitos com base na legislação.
          </p>

          {/* Search bar */}
          <div className="pt-2 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Digite sua dúvida (ex: prazo 10 dias, FGTS atrasado, MEI...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xs border border-[#E5E7EB] bg-[#F8F9FA] text-xs sm:text-sm text-[#1A2B45] focus:border-[#1A2B45] focus:outline-none shadow-xs"
              aria-label="Buscar dúvida frequente"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1A2B45] text-white border-[#1A2B45]'
                  : 'bg-[#F8F9FA] text-slate-600 border-[#E5E7EB] hover:border-slate-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List with Geometric Left-Border */}
        <div className="space-y-3.5 mt-8">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-xs border transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? 'border-l-4 border-l-[#C5A059] border-y border-r border-[#E5E7EB] bg-white shadow-xs'
                    : 'border-l-4 border-l-[#1A2B45] border-y border-r border-[#E5E7EB] bg-[#F8F9FA] hover:border-l-[#C5A059]'
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="space-y-1.5 pr-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {faq.googleSearchVolumeBadge && (
                        <span className="text-[10px] font-bold text-[#1A2B45] bg-[#F8F9FA] border border-[#C5A059] px-2 py-0.5 rounded-xs flex items-center gap-1 uppercase tracking-wider">
                          <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
                          {faq.googleSearchVolumeBadge}
                        </span>
                      )}
                      {faq.cltReference && (
                        <span className="text-[10px] font-mono text-slate-500 bg-white border border-[#E5E7EB] px-2 py-0.5 rounded-xs">
                          {faq.cltReference}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#1A2B45] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-1.5 rounded-xs bg-[#F8F9FA] border border-[#E5E7EB] text-[#1A2B45] flex-shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-[#E5E7EB] space-y-4">
                    <p className="font-normal text-slate-700">
                      {faq.answer}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 bg-[#F8F9FA] p-3 rounded-xs border border-[#E5E7EB] text-xs">
                      <span className="text-slate-600 font-medium">
                        Essa situação é parecida com a sua?
                      </span>
                      <button
                        onClick={() => handleWhatsAppForFaq(faq)}
                        className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold bg-white px-3 py-1.5 rounded-xs border border-emerald-300 shadow-xs cursor-pointer uppercase text-[11px]"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Esclarecer no WhatsApp</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 text-slate-500">
            <p>Nenhuma pergunta encontrada com os termos buscados.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
              }}
              className="mt-2 text-xs text-[#1A2B45] font-bold uppercase underline"
            >
              Ver todas as dúvidas
            </button>
          </div>
        )}

        {/* Still have questions card with Geometric Balance Styling */}
        <div className="mt-12 p-6 sm:p-8 rounded-xs bg-[#1A2B45] text-white border-l-4 border-l-[#C5A059] border-y border-r border-[#1A2B45] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
              Não encontrou a resposta para o seu caso?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Cada relação de trabalho é única. Envie sua dúvida diretamente para um de nossos advogados.
            </p>
          </div>
          <button
            onClick={() => {
              const text = 'Olá, Bazela & Freitas! Tenho uma dúvida sobre meus direitos trabalhistas que gostaria de esclarecer.';
              window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
            }}
            className="flex-shrink-0 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase px-6 py-3.5 rounded-sm shadow-xs cursor-pointer transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Fazer Pergunta no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
