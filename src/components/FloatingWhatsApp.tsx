import React, { useState } from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const handleOpenWhatsApp = () => {
    const message = 'Olá! Gostaria de falar com um advogado do escritório Bazela & Freitas Advogados Associados.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end" id="joinchat-widget">
      
      {/* JoinChat Popup Window */}
      {isOpen && (
        <div className="mb-3 w-76 sm:w-80 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in fade-in slide-in-from-bottom-2 duration-150">
          
          {/* JoinChat Header (WhatsApp dark green #075E54) */}
          <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-sans text-white">
                  Bazela &amp; Freitas Advogados
                </h4>
                <p className="text-[10px] text-emerald-200 font-sans">
                  Online agora • Resposta rápida
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded transition-colors cursor-pointer"
              aria-label="Fechar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* JoinChat Chat Body (Light WhatsApp beige background #ECE5DD) */}
          <div className="p-4 bg-[#E5DDD5] bg-opacity-70 space-y-4">
            {/* Message Bubble */}
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-xs text-xs text-slate-800 leading-relaxed font-sans relative">
              <p>
                Olá! Como podemos ajudar você hoje? Envie uma mensagem e fale diretamente com um de nossos advogados.
              </p>
              <span className="text-[9px] text-slate-400 block text-right mt-1">Agora</span>
            </div>

            {/* Action Button: "Abrir Whatsapp" */}
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir Whatsapp</span>
            </button>
          </div>

        </div>
      )}

      {/* Button & Tooltip Row */}
      <div className="flex items-center gap-2.5">
        {/* Tooltip Bubble: "Olá, precisa de ajuda?" */}
        {!isOpen && !tooltipDismissed && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-1.5 bg-white text-slate-800 text-xs font-medium py-2 px-3 rounded-full shadow-lg border border-slate-200 cursor-pointer animate-in fade-in slide-in-from-right-2 duration-200 hover:bg-slate-50"
          >
            <span>Olá, precisa de ajuda?</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setTooltipDismissed(true);
              }}
              className="text-slate-400 hover:text-slate-600 ml-1"
              title="Fechar balão"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Circular WhatsApp Button (#25D366) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir atendimento no WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer relative group"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      </div>

    </div>
  );
};
