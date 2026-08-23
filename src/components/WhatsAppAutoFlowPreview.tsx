import React, { useState } from 'react';
import { OFFICE_INFO, WHATSAPP_AUTO_FLOW } from '../data/lawFirmData';
import { 
  Bot, 
  MessageSquareCode, 
  UserCheck, 
  CheckCheck, 
  Zap, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Send,
  MessageCircle
} from 'lucide-react';

export const WhatsAppAutoFlowPreview: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [userSimulationText, setUserSimulationText] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: '👋 Olá! Bem-vindo ao atendimento trabalhista da Bazela & Freitas Advogados (Santana - SP).', time: 'Agora' },
    { sender: 'bot', text: 'Sou o assistente de triagem jurídica. Para agilizar o seu caso com nosso advogado especialista, qual a sua dúvida principal?', time: 'Agora' }
  ]);

  const handleSimulateUserMessage = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const updated = [
      ...chatMessages,
      { sender: 'user', text, time: 'Agora' }
    ];
    setChatMessages(updated);
    setUserSimulationText('');

    // Simulate smart bot triage response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Entendido! Identificamos que o seu caso envolve prazos prioritários da CLT. Um dos nossos advogados especialistas em Santana já recebeu suas informações e vai continuar seu atendimento diretamente no WhatsApp.`,
          time: 'Agora'
        }
      ]);
    }, 600);
  };

  const handleOpenRealWhatsApp = () => {
    const text = 'Olá, Bazela & Freitas! Vi a estrutura de atendimento no site e gostaria de iniciar minha consulta trabalhista.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FA] text-[#2C3E50] border-b border-[#E5E7EB]" id="atendimento-whatsapp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Geometric Balance Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C5A059]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A2B45]">
              Atendimento Imediato • Plantão 24 Horas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A2B45] tracking-tight font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
            Estrutura de Triagem &amp; Resposta Automática no WhatsApp
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Para que você não perca prazos da Justiça do Trabalho, nossa infraestrutura acolhe o trabalhador 24 horas por dia com triagem preliminar inteligente e encaminhamento imediato ao advogado especialista em Santana.
          </p>
        </div>

        {/* Content Layout: Left Flow Steps, Right Interactive Chat Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-center">
          
          {/* Left Column: Triage Flow Steps */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-3">
              {WHATSAPP_AUTO_FLOW.map((flow, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-4 rounded-xs border transition-all cursor-pointer ${
                    activeStepIndex === index
                      ? 'bg-white border-l-4 border-l-[#C5A059] border-y border-r border-[#E5E7EB] shadow-xs'
                      : 'bg-white/80 border border-[#E5E7EB] hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-xs flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                        activeStepIndex === index
                          ? 'bg-[#1A2B45] text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A2B45] flex items-center gap-2">
                        {flow.step}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {flow.description}
                      </p>
                      <div className="mt-2 text-[11px] bg-[#F8F9FA] p-2.5 rounded-xs border border-[#E5E7EB] text-[#1A2B45] font-mono">
                        "{flow.botReply}"
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleOpenRealWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase py-3.5 px-6 rounded-sm shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Testar Atendimento no WhatsApp Real</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Screen Mockup with Geometric Balance Frame */}
          <div className="lg:col-span-6">
            <div className="max-w-md mx-auto bg-[#0b141a] rounded-xs overflow-hidden border-2 border-[#1A2B45] shadow-xl">
              
              {/* WhatsApp Header Mockup */}
              <div className="bg-[#1A2B45] p-3.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-xs bg-[#0F172A] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-bold text-xs font-brand">
                      BF
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-xs border border-[#1A2B45]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      Bazela &amp; Freitas Advogados
                    </h4>
                    <p className="text-[10px] text-[#C5A059] font-semibold uppercase tracking-wider">
                      Online • Advocacia Trabalhista Santana
                    </p>
                  </div>
                </div>
                <div className="text-[9px] text-[#C5A059] bg-[#0F172A] border border-[#C5A059]/30 px-2 py-0.5 rounded-xs font-bold uppercase">
                  OAB/SP
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-4 space-y-3 min-h-[300px] max-h-[360px] overflow-y-auto bg-[#0c1317]">
                <div className="text-center">
                  <span className="text-[10px] bg-[#182229] text-slate-400 px-2.5 py-1 rounded-xs border border-slate-800">
                    🔒 Mensagens protegidas por sigilo profissional
                  </span>
                </div>

                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xs p-3 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#005c4b] text-white'
                          : 'bg-[#202c33] text-slate-100 border border-slate-700/60'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 text-[9px] text-slate-400 mt-1">
                        <span>{msg.time}</span>
                        {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-sky-400" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fast Quick Buttons to Test */}
              <div className="p-2.5 bg-[#111b21] border-t border-slate-800 space-y-2">
                <span className="text-[10px] text-slate-400 block px-1 uppercase font-bold tracking-wider">
                  Teste uma dúvida rápida abaixo:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'A empresa atrasou meu salário',
                    'Fui demitido sem justa causa',
                    'Trabalho como PJ sem carteira'
                  ].map((quickText, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSimulateUserMessage(quickText)}
                      className="text-[10px] bg-[#202c33] hover:bg-[#2a3942] text-slate-200 px-2.5 py-1 rounded-xs border border-slate-700 cursor-pointer uppercase font-semibold"
                    >
                      {quickText}
                    </button>
                  ))}
                </div>

                {/* Input simulator */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSimulateUserMessage(userSimulationText);
                  }}
                  className="flex items-center gap-2 pt-1"
                >
                  <input
                    type="text"
                    placeholder="Digite sua dúvida trabalhista..."
                    value={userSimulationText}
                    onChange={(e) => setUserSimulationText(e.target.value)}
                    className="flex-1 bg-[#2a3942] text-white text-xs px-3 py-2 rounded-xs focus:outline-none placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-[#00a884] hover:bg-[#029071] text-white rounded-xs flex items-center justify-center cursor-pointer"
                    aria-label="Enviar mensagem simulada"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
