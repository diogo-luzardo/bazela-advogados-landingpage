import React from 'react';
import { Logo } from './Logo';
import { OFFICE_INFO } from '../data/firmData';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  ArrowRight
} from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer 
      id="contato"
      className="bg-[#060C15] text-slate-300 font-sans border-t border-white/10"
    >
      {/* Main 4 Columns Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1 (lg:col-span-4): Logo, Bio, OAB Badge & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="dark" size="lg" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Advocacia pautada pela ética, proximidade e responsabilidade, com atendimento direto pelos sócios a trabalhadores, empresas e famílias.
            </p>

            {/* OAB Badge Box */}
            <div className="inline-block px-3 py-1.5 rounded border border-[#C5A059]/40 bg-white/5 text-[11px] font-semibold text-[#C5A059]">
              OAB/SP 48.912 — Sociedade de Advogados
            </div>
          </div>

          {/* Column 2 (lg:col-span-2): Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                NAVEGAÇÃO
              </span>
              <span className="w-6 h-[1.5px] bg-[#C5A059] mt-1" />
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
              <li>
                <a href="#inicio" className="hover:text-[#C5A059] transition-colors">Início</a>
              </li>
              <li>
                <a href="#o-escritorio" className="hover:text-[#C5A059] transition-colors">O Escritório</a>
              </li>
              <li>
                <a href="#areas-de-atuacao" className="hover:text-[#C5A059] transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#C5A059] transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Column 3 (lg:col-span-3): Practice Areas Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                ÁREAS DE ATUAÇÃO
              </span>
              <span className="w-6 h-[1.5px] bg-[#C5A059] mt-1" />
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
              <li>
                <a href="#areas-de-atuacao" className="hover:text-[#C5A059] transition-colors">Direito do Trabalho</a>
              </li>
              <li>
                <a href="#areas-de-atuacao" className="hover:text-[#C5A059] transition-colors">Direito Cível</a>
              </li>
              <li>
                <a href="#areas-de-atuacao" className="hover:text-[#C5A059] transition-colors">Direito de Família e Sucessões</a>
              </li>
              <li>
                <a href="#areas-de-atuacao" className="hover:text-[#C5A059] transition-colors">Direito Previdenciário</a>
              </li>
            </ul>
          </div>

          {/* Column 4 (lg:col-span-3): Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                CONTATO
              </span>
              <span className="w-6 h-[1.5px] bg-[#C5A059] mt-1" />
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-sans leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>
                  Avenida Nova Cantareira, 2213, conjunto 72 — Tucuruvi — São Paulo/SP<br />
                  CEP 02331-003
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="tel:1122410304" className="hover:text-white transition-colors">(11) 2241-0304</a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {OFFICE_INFO.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href={`mailto:${OFFICE_INFO.email}`} className="hover:text-white transition-colors">
                  contato@bazelaefreitas.adv.br
                </a>
              </div>

              <div className="pt-2">
                <a 
                  href={OFFICE_INFO.googleMapsEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] hover:underline uppercase tracking-wider"
                >
                  <span>VER LOCALIZAÇÃO NO MAPA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} Bazela &amp; Freitas Advogados. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="#privacidade" className="hover:text-slate-200 transition-colors">Política de Privacidade</a>
          <span>|</span>
          <a href="#cookies" className="hover:text-slate-200 transition-colors">Política de Cookies</a>
        </div>
      </div>
    </footer>
  );
};
