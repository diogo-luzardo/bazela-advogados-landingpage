import React, { useState } from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { Calendar, Clock, X, MessageCircle, ArrowRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  summary: string;
  fullText: string[];
}

export const ArticlesSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'art-1',
      title: 'Planejamento Sucessório e Inventário em Cartório: Agilidade e Economia',
      category: 'Família & Sucessões',
      date: '14 de Outubro, 2024',
      readTime: '4 min de leitura',
      imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      summary: 'Como o inventário extrajudicial em cartório e a doação de bens com reserva de usufruto evitam litígios familiares e reduzem despesas tributárias.',
      fullText: [
        'O falecimento de um ente querido é invariavelmente acompanhado por momentos de fragilidade emocional. No entanto, a abertura do inventário exige atenção técnica imediata para não ultrapassar os prazos legais que ensejam multas fiscais sobre o ITCMD.',
        'Desde a promulgação da Lei 11.441/2007, havendo herdeiros maiores e capazes e consenso quanto à partilha de bens, o inventário pode ser realizado inteiramente por via extrajudicial perante qualquer Cartório de Notas.',
        'Dentre as principais vantagens do inventário em cartório destacam-se a celeridade (resolvido habitualmente em semanas, contra anos de litígio judicial), a redução substancial de custas e a preservação da harmonia entre os sucessores.',
        'Nosso escritório atua em todas as etapas da partilha, levantamento de certidões negativas e minuta notarial com total discrição e zelo pelo patrimônio da família.'
      ]
    },
    {
      id: 'art-2',
      title: 'A Relevância da Auditoria e Prevenção de Passivos Trabalhistas para PMEs',
      category: 'Direito Trabalhista & Empresarial',
      date: '02 de Novembro, 2024',
      readTime: '5 min de leitura',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      summary: 'A advocacia preventiva reduz em até 70% o risco de autuações e condenações trabalhistas para pequenas e médias empresas.',
      fullText: [
        'Para empresas que buscam sustentabilidade financeira e crescimento no mercado paulista, a gestão de passivos trabalhistas deve ser tratada como prioridade estratégica.',
        'Grande parte das reclamações trabalhistas decorre de equívocos simples na formalização de contratos de trabalho, controle inadequado de jornadas suplementares, equiparações salariais indevidas ou falhas na concessão de intervalos intra e interjornada.',
        'A auditoria jurídica periódica (compliance trabalhista) mapeia as vulnerabilidades operacionais do negócio e adéqua as rotinas de recursos humanos às normas vigentes da CLT e às Súmulas dos Tribunais Regionais do Trabalho.',
        'O investimento na prevenção jurídica é comprovadamente muito menor do que os custos de condenações, depósitos recursais e honorários periciais em ações judiciais contenciosas.'
      ]
    },
    {
      id: 'art-3',
      title: 'Segurança em Contratos Imobiliários: Como Evitar Fraudes na Compra e Venda',
      category: 'Direito Imobiliário',
      date: '18 de Novembro, 2024',
      readTime: '4 min de leitura',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      summary: 'A importância da due diligence documental e verificação de certidões antes de assinar a escritura de um imóvel residencial ou comercial.',
      fullText: [
        'A aquisição de um imóvel residencial ou comercial representa, na maioria dos casos, o investimento das economias de uma vida ou um passo decisivo para os negócios de uma empresa.',
        'O maior equívoco cometido por compradores é confiar unicamente na certidão de matrícula do imóvel ou nas promessas contratuais da corretagem sem proceder a uma auditoria prévia aprofundada (due diligence).',
        'Processos judiciais em andamento contra os vendedores, débitos condominiais ou fiscais ocultos, indisponibilidades de bens registradas na Central Notarial de Serviços Compartilhados e riscos de fraude contra credores podem acarretar a anulação da venda.',
        'A assessoria de um advogado especializado na análise prévia de minutas e certidões confere segurança absoluta à negociação imobiliária.'
      ]
    }
  ];

  const handleWhatsAppConsult = (articleTitle?: string) => {
    const text = articleTitle 
      ? `Olá! Li o artigo "${articleTitle}" no site da Bazela & Freitas e gostaria de tirar uma dúvida jurídica.`
      : 'Olá! Gostaria de falar com um advogado sobre publicações jurídicas da Bazela & Freitas.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      id="artigos" 
      className="relative bg-white pt-12 pb-20 sm:pb-24 border-b border-slate-200"
    >
      {/* Elementor Shape Divider (Pyramids SVG top) */}
      <div className="absolute -top-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none text-white">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 fill-current"
        >
          <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-14">
          <h2 
            className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Artigos
          </h2>
          <div className="w-16 h-0.5 bg-[#30437e] mx-auto" />
          <p className="text-sm text-slate-600 font-sans max-w-xl mx-auto">
            Análises e orientações jurídicas práticas elaboradas pelos advogados da Bazela &amp; Freitas Associados.
          </p>
        </div>

        {/* 3 Posts Grid (Exact Elementor PowerPack skin card) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-xs border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Thumbnail Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#30437e] text-white text-[10px] font-serif font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-2xs">
                  {art.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                  </div>

                  <h3 
                    className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#30437e] transition-colors"
                    style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                  >
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-serif font-bold text-[#30437e]">
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pulse Button "Ver todos" */}
        <div className="mt-14 text-center">
          <button
            onClick={() => handleWhatsAppConsult()}
            className="inline-block px-8 py-3 rounded-xs text-white font-serif font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:opacity-90 cursor-pointer shadow-sm hover:scale-105"
            style={{ backgroundColor: currentTheme.primary || '#1a2530' }}
          >
            Ver todos
          </button>
        </div>

      </div>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xs border border-slate-300 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#30437e]">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug" style={{ fontFamily: "'Cinzel', Georgia, serif" }}>
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-800"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <img
              src={selectedArticle.imageUrl}
              alt={selectedArticle.title}
              className="w-full h-56 object-cover rounded-xs"
            />

            <div className="space-y-3.5 text-sm text-slate-700 leading-relaxed font-sans">
              {selectedArticle.fullText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Bazela &amp; Freitas Advogados Associados
              </span>
              <button
                onClick={() => {
                  const title = selectedArticle.title;
                  setSelectedArticle(null);
                  handleWhatsAppConsult(title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar sobre este tema no WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
