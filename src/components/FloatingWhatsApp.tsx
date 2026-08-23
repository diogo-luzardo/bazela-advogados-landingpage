import React, { useState } from 'react';
import { OFFICE_INFO } from '../data/lawFirmData';
import { MessageCircle, X, Send, ShieldCheck, Clock } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickQuestions = [
    'Demissão: prazo para pagar verbas',
    'Atraso de FGTS (Rescisão Indireta)',
    'Horas extras e adicional noturno',
    'Fraude de MEI / PJ sem carteira'
  ];

  const handleSend = (textToSend?: string) => {
    const message = textToSend || customMsg || 'Olá! Gostaria de conversar com um advogado trabalhista da Bazela & Freitas em Santana.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end" id="floating-whatsapp-container">
      {/* Pop-up Chat Card with Geometric Balance Frame */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-xs shadow-2xl border-2 border-[#1A2B45] overflow-hidden text-[#2C3E50]">
          
          {/* Card Header */}
          <div className="bg-[#1A2B45] p-3.5 text-white flex items-center justify-between border-b border-[#C5A059]/40">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xs bg-[#0F172A] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-bold text-xs font-brand">
                  BF
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-xs border border-[#1A2B45]" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight font-brand">
                  Bazela &amp; Freitas Advogados
                </h4>
                <p className="text-[10px] text-[#C5A059] font-semibold flex items-center gap-1 uppercase tracking-wider">
                  <Clock className="w-3 h-3" /> Plantão Trabalhista Santana
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 cursor-pointer"
              aria-label="Fechar pop-up"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 bg-[#F8F9FA] space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xs border-l-4 border-[#1A2B45] border-y border-r border-[#E5E7EB] shadow-xs space-y-1">
              <p className="text-[#1A2B45] font-semibold">
                👋 Olá! Está com problemas no trabalho ou foi demitido recentemente?
              </p>
              <p className="text-slate-600 text-[11px]">
                Nossa equipe atende trabalhadores de Santana e toda Zona Norte de SP. Escolha uma opção ou digite abaixo:
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(`Olá, gostaria de falar sobre: ${q}`)}
                  className="w-full text-left p-2 rounded-xs bg-white hover:bg-slate-100 text-[#1A2B45] border border-[#E5E7EB] hover:border-l-4 hover:border-l-[#C5A059] transition-all text-[11px] font-semibold flex items-center justify-between cursor-pointer"
                >
                  <span>{q}</span>
                  <span className="text-[#C5A059] font-bold">›</span>
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-1 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ou digite sua dúvida..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 text-xs bg-white border border-[#E5E7EB] rounded-xs focus:outline-none focus:border-[#1A2B45] text-[#1A2B45]"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 bg-[#25D366] hover:bg-[#20be5a] text-white rounded-xs cursor-pointer shadow-xs"
                aria-label="Enviar para WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Atendimento seguro e sob sigilo OAB</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        className="relative group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Conversar no WhatsApp"
      >
        {/* Unread Ping Badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white shadow-md animate-bounce">
          1
        </span>

        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp Advogado
        </span>
      </button>
    </div>
  );
};
