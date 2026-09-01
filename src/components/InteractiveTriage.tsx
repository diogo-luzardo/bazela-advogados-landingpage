import React, { useState } from 'react';
import { OFFICE_INFO, TRIAGE_QUESTIONS } from '../data/lawFirmData';
import { 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  MessageCircle, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck,
  Scale,
  Sparkles
} from 'lucide-react';

export const InteractiveTriage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { label: string; tag: string }>>({});
  const [workerName, setWorkerName] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const questions = [
    {
      id: 'problem',
      title: '1. O que aconteceu na sua relação de trabalho?',
      subtitle: 'Selecione a situação principal que mais se aproxima do seu caso:',
      options: [
        {
          id: 'fgts_salario',
          label: 'A empresa não deposita meu FGTS há meses ou atrasa salários',
          tag: 'Rescisão Indireta (Art. 483 CLT)',
          alert: 'Falta grave do patrão: Você pode sair recebendo FGTS + 40% e seguro-desemprego!'
        },
        {
          id: 'verbas_demissao',
          label: 'Fui demitido e a empresa não pagou em 10 dias ou calculou verbas a menos',
          tag: 'Verbas Rescisórias (Art. 477 CLT)',
          alert: 'Direito à multa de 1 salário integral por atraso e revisão de médias.'
        },
        {
          id: 'horas_extras',
          label: 'Trabalho mais de 8h/dia, fins de semana ou sem intervalo de almoço',
          tag: 'Horas Extras & Intervalos',
          alert: 'Direito a adicional de 50% a 100% e reflexos em 13º, férias e FGTS dos últimos 5 anos.'
        },
        {
          id: 'pj_fraude',
          label: 'Fui contratado como MEI / PJ mas tinha chefe, horário e cumpria ordens',
          tag: 'Fraude PJ / Vínculo CLT',
          alert: 'Direito a carteira anotada retroativa e recebimento de todo FGTS, férias e 13º.'
        },
        {
          id: 'acidente_doenca',
          label: 'Sofri acidente de trabalho ou estou doente por causa do emprego (Burnout / LER)',
          tag: 'Estabilidade & Danos Morais',
          alert: 'Garantia de 12 meses de estabilidade e possível indenização por danos.'
        },
        {
          id: 'gestante',
          label: 'Estou grávida ou tive bebê recentemente e fui dispensada da empresa',
          tag: 'Estabilidade Gestante',
          alert: 'Demissão nula! Direito a reintegração ou indenização de todos os salários.'
        },
        {
          id: 'assedio',
          label: 'Sofro humilhações, perseguição, xingamentos ou isolamento no trabalho',
          tag: 'Assédio Moral no Trabalho',
          alert: 'Possibilidade de Rescisão Indireta e indenização por Danos Morais.'
        }
      ]
    },
    {
      id: 'time',
      title: '2. Quanto tempo de trabalho você tem nessa empresa?',
      subtitle: 'O tempo de contrato define o volume de direitos e reflexos acumulados:',
      options: [
        {
          id: 'menos_1_ano',
          label: 'Menos de 1 ano',
          tag: 'Contrato Recente',
          alert: 'Direitos proporcionais imediatos.'
        },
        {
          id: '1_a_3_anos',
          label: 'Entre 1 e 3 anos',
          tag: '1 a 3 anos',
          alert: 'Médias acumuladas de férias, FGTS e adicionais.'
        },
        {
          id: '3_a_5_anos',
          label: 'Entre 3 e 5 anos',
          tag: '3 a 5 anos',
          alert: 'Volume significativo de verbas e reflexos dos últimos 5 anos.'
        },
        {
          id: 'mais_5_anos',
          label: 'Mais de 5 anos',
          tag: 'Mais de 5 anos',
          alert: 'Atenção ao prazo limite de 5 anos para cobrança na Justiça (prescrição quinquenal).'
        }
      ]
    },
    {
      id: 'salary_range',
      title: '3. Qual era a sua faixa salarial mensal aproximada?',
      subtitle: 'Para termos uma estimativa preliminar das bases de cálculo:',
      options: [
        { id: 'ate_2k', label: 'Até R$ 2.000 por mês', tag: 'Faixa até R$ 2.000' },
        { id: '2k_a_4k', label: 'De R$ 2.000 a R$ 4.000 por mês', tag: 'Faixa R$ 2k-4k' },
        { id: '4k_a_8k', label: 'De R$ 4.000 a R$ 8.000 por mês', tag: 'Faixa R$ 4k-8k' },
        { id: 'acima_8k', label: 'Acima de R$ 8.000 por mês', tag: 'Faixa Acima de R$ 8k' }
      ]
    }
  ];

  const handleSelectOption = (questionId: string, option: { label: string; tag: string }) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option
    }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const resetSimulator = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCalculated(false);
    setWorkerName('');
  };

  const handleSendToWhatsApp = () => {
    const namePart = workerName.trim() ? `Meu nome é *${workerName.trim()}*.` : 'Olá!';
    const problemPart = answers.problem ? answers.problem.label : 'Não especificado';
    const timePart = answers.time ? answers.time.label : 'Não especificado';
    const salaryPart = answers.salary_range ? answers.salary_range.label : 'Não informado';

    const message = `${namePart} Fiz a *Simulação de Direitos Trabalhistas* no site da Bazela & Freitas:
    
📌 *Minha Situação:* ${problemPart}
⏱️ *Tempo de Empresa:* ${timePart}
💼 *Faixa Salarial:* ${salaryPart}

Gostaria de uma orientação com o advogado trabalhista sobre o meu caso no escritório do Tucuruvi / Zona Norte. Como podemos proceder?`;

    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-[#1A2B45] text-white border-b-4 border-[#C5A059]" id="simulador-direitos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title with Geometric Balance Styling */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C5A059]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#C5A059]">
              Triagem Preliminar de Direitos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-white font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
            Simulador de Direitos Trabalhistas
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans">
            Responda 3 perguntas rápidas para identificar possíveis irregularidades na sua relação de trabalho e enviar os dados prontos para o advogado avaliar.
          </p>
        </div>

        {/* Simulator Box with Geometric Card Structure */}
        <div className="mt-10 bg-white text-[#2C3E50] rounded-xs border-2 border-[#1A2B45] shadow-lg p-6 sm:p-8 relative">
          
          {/* Top Progress bar */}
          {!isCalculated && (
            <div className="space-y-2 mb-8 border-b border-[#E5E7EB] pb-4">
              <div className="flex items-center justify-between text-xs text-slate-600 font-bold uppercase tracking-wider">
                <span>Etapa {currentStep + 1} de {questions.length}</span>
                <span className="text-[#1A2B45]">{Math.round(((currentStep + 1) / questions.length) * 100)}% Concluído</span>
              </div>
              <div className="w-full bg-[#E5E7EB] h-1.5 rounded-none overflow-hidden">
                <div
                  className="bg-[#C5A059] h-full transition-all duration-200"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {!isCalculated ? (
            /* Question Steps */
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A2B45] font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
                  {questions[currentStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {questions[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(questions[currentStep].id, { label: opt.label, tag: opt.tag })}
                    className="w-full text-left p-4 rounded-xs bg-[#F8F9FA] hover:bg-white border-l-4 border-[#1A2B45] hover:border-l-[#C5A059] border-y border-r border-[#E5E7EB] transition-colors flex items-center justify-between group cursor-pointer shadow-xs"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="text-xs sm:text-sm font-bold text-[#1A2B45] group-hover:text-[#C5A059]">
                        {opt.label}
                      </span>
                      {'alert' in opt && (
                        <p className="text-xs text-slate-600 font-medium">
                          {opt.alert}
                        </p>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1A2B45] flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>

              {/* Back navigation */}
              {currentStep > 0 && (
                <div className="pt-4 flex justify-between items-center text-xs">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-slate-600 hover:text-[#1A2B45] flex items-center gap-1 font-bold uppercase tracking-wider"
                  >
                    ← Voltar pergunta anterior
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result & Instant WhatsApp Dispatch */
            <div className="space-y-6">
              <div className="p-4 rounded-xs bg-[#F8F9FA] border-l-4 border-emerald-600 border-y border-r border-[#E5E7EB] text-slate-800 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-emerald-800 uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Diagnóstico Preliminar Gerado</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                  Identificamos que a situação relatada pode configurar <strong>infração à CLT</strong> com direito a recebimento de verbas rescisórias integrais, adicionais ou indenizações compensatórias.
                </p>
              </div>

              {/* Summary breakdown */}
              <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xs p-5 space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A2B45]">
                  Resumo das Informações Selecionadas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xs border border-[#E5E7EB]">
                    <span className="text-slate-500 block mb-0.5 text-[10px] uppercase font-bold">Situação:</span>
                    <strong className="text-[#1A2B45] block">{answers.problem?.tag || answers.problem?.label}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-xs border border-[#E5E7EB]">
                    <span className="text-slate-500 block mb-0.5 text-[10px] uppercase font-bold">Tempo de Empresa:</span>
                    <strong className="text-[#1A2B45] block">{answers.time?.label}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-xs border border-[#E5E7EB]">
                    <span className="text-slate-500 block mb-0.5 text-[10px] uppercase font-bold">Faixa Salarial:</span>
                    <strong className="text-[#1A2B45] block">{answers.salary_range?.label}</strong>
                  </div>
                </div>
              </div>

              {/* Optional Name input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#1A2B45] uppercase tracking-wider">
                  Como gostaria de ser chamado pelo advogado? (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Seu nome ou primeiro nome"
                  value={workerName}
                  onChange={(e) => setWorkerName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xs bg-white border border-[#E5E7EB] text-[#1A2B45] placeholder-slate-400 text-xs sm:text-sm focus:border-[#1A2B45] focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSendToWhatsApp}
                  id="simulator-submit-whatsapp"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase py-3.5 px-6 rounded-sm shadow-xs transition-all cursor-pointer text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enviar Simulação no WhatsApp</span>
                </button>

                <button
                  onClick={resetSimulator}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase text-slate-700 hover:text-black bg-[#F8F9FA] hover:bg-slate-200 rounded-sm border border-[#E5E7EB] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Nova Simulação</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Atendimento confidencial e em conformidade com a OAB/SP.</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
