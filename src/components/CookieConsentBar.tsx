import React, { useState, useEffect } from 'react';

export const CookieConsentBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bf_cookie_consent');
    if (!consent) {
      // Show after a brief delay
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bf_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('bf_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      id="cookie-consent-banner"
      className="fixed bottom-20 left-4 sm:left-6 z-50 max-w-sm sm:max-w-md bg-white border border-slate-300 shadow-2xl p-4 rounded-xs text-xs text-slate-700 space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <p className="leading-relaxed">
        Utilizamos cookies que melhoram a sua experiência em nosso site. Ao clicar em <strong>“ACEITO”</strong>, você concorda com a utilização de TODOS os cookies nos termos da nossa Política de Privacidade e da LGPD.
      </p>

      <div className="flex items-center justify-end gap-2 pt-1">
        <button
          onClick={handleDecline}
          className="px-3 py-1.5 rounded-xs border border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors font-medium cursor-pointer"
        >
          Cancelar
        </button>

        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-xs bg-[#30437e] hover:bg-[#203060] text-white font-serif font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
        >
          ACEITO
        </button>
      </div>
    </div>
  );
};
