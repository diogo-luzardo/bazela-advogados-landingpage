import React, { useState } from 'react';
import { PRACTICE_AREAS, OFFICE_INFO } from '../data/firmData';
import { PracticeArea } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Scale, CheckCircle2, MessageCircle, X, ArrowRight } from 'lucide-react';

interface ExtendedArea {
  id: string;
  title: string;
  scopeList: string[];
  description: string;
}

export const PracticeAreas: React.FC = () => {
  const { currentTheme } = useTheme();
  const [selectedArea, setSelectedArea] = useState<ExtendedArea | null>(null);

  // Extended multidisciplinary areas matching the exact list in Brancaleão & Marigo:
  // TRABALHISTA, FAMÍLIA, LGPD / EMPRESARIAL, CÍVEL, PREVIDENCIÁRIO, DEFESA DO CONSUMIDOR, IMOBILIÁRIO, DIREITO MÉDICO
  const areasList: ExtendedArea[] = [
    {
      id: 'trabalhista',
      title: 'TRABALHISTA',
      description: 'Consultoria preventiva para empresas e defesa técnica rigorosa em reclamações trabalhistas contenciosas.',
      scopeList: [
        'Prevenção de passivos e autuações trabalhistas',
        'Auditoria de rotinas de RH, contratos e rescisões',
        'Defesa patronal em reclamações trabalhistas e acordos',
        'Rescisão indireta, horas extras e verbas rescisórias'
      ]
    },
    {
      id: 'familia',
      title: 'FAMÍLIA',
      description: 'Inventários judiciais e extrajudiciais (cartório), divórcios, alimentos e planejamento sucessório com equilíbrio e sigilo.',
      scopeList: [
        'Inventário extrajudicial em cartório (rápido e econômico)',
        'Divórcio consensual e litigioso com partilha de bens',
        'Pensão alimentícia, guarda compartilhada e visitas',
        'Pactos antenupciais e reconhecimento de união estável'
      ]
    },
    {
      id: 'empresarial',
      title: 'EMPRESARIAL & LGPD',
      description: 'Assessoria jurídica corporativa contínua, governança societária, contratos comerciais e adequação à LGPD.',
      scopeList: [
        'Assessoria jurídica consultiva mensal para empresas (PMEs)',
        'Elaboração de acordos de sócios e estatutos societários',
        'Mitigação de riscos jurídicos e compliance',
        'Políticas de privacidade e adequação à Lei Geral de Proteção de Dados'
      ]
    },
    {
      id: 'civel',
      title: 'CÍVEL',
      description: 'Gestão de litígios contratuais, ações indenizatórias por danos morais e materiais, execuções e recuperação de crédito.',
      scopeList: [
        'Elaboração, análise e revisão de instrumentos contratuais',
        'Ações de cobrança, execuções judiciais e recuperação de ativos',
        'Ações de reparação civil por danos morais e materiais',
        'Disputas societárias e inadimplemento obrigacional'
      ]
    },
    {
      id: 'previdenciario',
      title: 'PREVIDENCIÁRIO',
      description: 'Planejamento previdenciário minucioso, concessão e revisão de aposentadorias perante o INSS e Justiça Federal.',
      scopeList: [
        'Planejamento previdenciário e cálculo do momento ideal',
        'Aposentadoria por tempo de contribuição, idade e especial',
        'Revisões de benefícios e cálculo da vida toda',
        'Auxílios por incapacidade temporária (doença) e BPC/LOAS'
      ]
    },
    {
      id: 'consumidor',
      title: 'DEFESA DO CONSUMIDOR',
      description: 'Proteção contra cobranças indevidas, negativação irregular em órgãos de crédito, fraudes bancárias e planos de saúde.',
      scopeList: [
        'Ações contra golpes do Pix, fraudes bancárias e clonagem',
        'Obrigações de fazer contra negativas abusivas de planos de saúde',
        'Indenizações por negativação indevida (SPC / Serasa)',
        'Cancelamentos arbitrários de serviços e contratos leoninos'
      ]
    },
    {
      id: 'imobiliario',
      title: 'DIREITO IMOBILIÁRIO',
      description: 'Auditoria jurídica para compra e venda segura (due diligence), usucapião, regularização fundiária e locações.',
      scopeList: [
        'Due diligence imobiliária completa antes da compra',
        'Ações de usucapião judicial e extrajudicial em cartório',
        'Regularização de registros, averbações e escrituras públicas',
        'Elaboração de contratos de locação comercial e ações de despejo'
      ]
    },
    {
      id: 'medico',
      title: 'DIREITO MÉDICO & SAÚDE',
      description: 'Assessoria jurídica para profissionais da saúde, clínicas e pacientes na defesa de direitos fundamentais.',
      scopeList: [
        'Defesa ética profissional perante conselhos de classe (CRM / CRO)',
        'Elaboração de Termos de Consentimento Livre e Esclarecido (TCLE)',
        'Ações para obtenção judicial de medicamentos de alto custo',
        'Reajustes abusivos e carências ilegais em convênios médicos'
      ]
    }
  ];

  const handleWhatsAppForArea = (area: ExtendedArea) => {
    const text = `Olá! Gostaria de consultar um advogado da Bazela & Freitas sobre *${area.title}*.`;
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      id="areas-de-atuacao" 
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Layout matching Brancaleão & Marigo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Section Heading Title on Left (or Top on mobile) */}
          <div className="lg:col-span-3 space-y-4 pt-2">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Áreas de Atuação
            </h2>
            <div className="w-12 h-0.5 bg-[#30437e]" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Atuação jurídica multidisciplinar, preventiva e contenciosa, orientada por sólidos princípios éticos e rigor técnico.
            </p>
          </div>

          {/* Cards Grid (4 columns or 3 columns with Balance Icon like pp-info-box-top) */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {areasList.map((area) => (
                <div
                  key={area.id}
                  onClick={() => setSelectedArea(area)}
                  id={`area-card-${area.id}`}
                  className="bg-white rounded-xs border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer group hover:-translate-y-1"
                >
                  {/* Balance Scale Icon (Exact replica of icon-balance from Brancaleão & Marigo) */}
                  <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#c5a059] group-hover:text-[#30437e] group-hover:border-[#30437e]/30 transition-colors mb-4">
                    <Scale className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  {/* Title (All caps, bold, Cinzel serif font) */}
                  <h3 
                    className="font-serif font-bold text-sm sm:text-base text-slate-900 tracking-wider mb-2 group-hover:text-[#30437e] transition-colors"
                    style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                  >
                    {area.title}
                  </h3>

                  {/* Subtle hover prompt */}
                  <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 transition-colors flex items-center gap-1 mt-auto pt-2">
                    Saiba mais <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Modal for Area Details */}
      {selectedArea && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xs border border-slate-300 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5">
            
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#c5a059]">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">
                    Área de Atuação
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900" style={{ fontFamily: "'Cinzel', Georgia, serif" }}>
                    {selectedArea.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedArea(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedArea.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-serif font-bold text-slate-800 uppercase tracking-wider block">
                Principais demandas e serviços:
              </span>
              <div className="space-y-2">
                {selectedArea.scopeList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Atendimento presencial em Santana ou 100% online
              </span>

              <button
                onClick={() => {
                  setSelectedArea(null);
                  handleWhatsAppForArea(selectedArea);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar Advogado</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
