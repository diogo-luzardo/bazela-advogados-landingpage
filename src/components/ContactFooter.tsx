import React from 'react';
import { Logo } from './Logo';
import { OFFICE_INFO } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <footer 
      id="contato"
      className="text-slate-300 transition-colors"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #090E17 100%)'
      }}
    >
      {/* 4 Columns Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1 (lg:col-span-4): White Logo + Bio + Social icons */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="dark" size="lg" />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pr-4">
              O escritório <strong className="text-white font-medium">Bazela &amp; Freitas Advogados Associados</strong> foi constituído para prestar uma assistência completa na área do direito, com atuação pautada pela dedicação constante, ética e busca incansável pelas melhores soluções jurídicas para seus direitos e patrimônio.
            </p>

            {/* Social Icons (Instagram & Facebook in square rounded format like reference) */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{OFFICE_INFO.oabNumber}</span>
            </div>
          </div>

          {/* Column 2 (lg:col-span-2): "Menu" */}
          <div className="lg:col-span-2 space-y-4">
            <h3 
              className="text-lg font-serif font-bold text-white tracking-wide border-b border-white/10 pb-2 inline-block"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Menu
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'O Escritório', href: '#o-escritorio' },
                { label: 'Áreas de Atuação', href: '#areas-de-atuacao' },
                { label: 'Serviços', href: '#areas-de-atuacao' },
                { label: 'Artigos', href: '#artigos' },
                { label: 'Contato', href: '#contato' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (lg:col-span-3): "Atuação" */}
          <div className="lg:col-span-3 space-y-4">
            <h3 
              className="text-lg font-serif font-bold text-white tracking-wide border-b border-white/10 pb-2 inline-block"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Atuação
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-slate-300">
              {[
                'Trabalhista',
                'Família',
                'Cível',
                'Previdenciário',
                'Defesa do Consumidor',
                'Imobiliário & Contratos'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <a href="#areas-de-atuacao">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (lg:col-span-3): "Contato" */}
          <div className="lg:col-span-3 space-y-4">
            <h3 
              className="text-lg font-serif font-bold text-white tracking-wide border-b border-white/10 pb-2 inline-block"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Contato
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {OFFICE_INFO.address}, {OFFICE_INFO.complement}<br />
                  {OFFICE_INFO.neighborhood} – {OFFICE_INFO.cityState}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <a href={`mailto:${OFFICE_INFO.email}`} className="hover:text-white transition-colors">
                  {OFFICE_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <a href={`tel:${OFFICE_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors font-semibold">
                  {OFFICE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain flex-shrink-0" />
                <a 
                  href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
                >
                  {OFFICE_INFO.whatsapp}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar (Matching section c365744 from Brancaleão & Marigo) */}
      <div className="py-5 px-4 text-center text-xs text-slate-400 bg-[#070b12]">
        <p>
          Copyright © {new Date().getFullYear()} Bazela &amp; Freitas - Advogados Associados - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
