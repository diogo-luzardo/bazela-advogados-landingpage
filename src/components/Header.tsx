import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { OFFICE_INFO } from '../data/lawFirmData';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Menu, 
  X, 
  Clock, 
  ShieldCheck, 
  Type, 
  Sun, 
  Moon 
} from 'lucide-react';

interface HeaderProps {
  fontSizeLevel: number;
  setFontSizeLevel: React.Dispatch<React.SetStateAction<number>>;
  highContrast: boolean;
  setHighContrast: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  fontSizeLevel,
  setFontSizeLevel,
  highContrast,
  setHighContrast
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Áreas de Atuação', href: '#areas-de-atuacao' },
    { label: 'Localização Santana', href: '#localizacao-santana' },
    { label: 'Simulador de Direitos', href: '#simulador-direitos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de uma orientação com um advogado trabalhista da Bazela & Freitas em Santana.'
    );
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200" id="main-header">
      {/* Top Bar with Location, Hours and Accessibility */}
      <div className="bg-[#1A2B45] text-slate-200 border-b border-[#0F172A] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-bold uppercase tracking-wider text-[11px]">
              <span className="w-2 h-2 bg-[#C5A059]" />
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Santana, Zona Norte - SP (A 180m do Metrô Santana)</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Seg a Sex 8h30 às 18h30 | Plantão WhatsApp 24h</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{OFFICE_INFO.oabNumber}</span>
            </div>
          </div>

          {/* Accessibility & Direct Phone */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#0F172A] rounded-xs border border-slate-700/80 px-2 py-0.5 gap-1 text-[11px]">
              <span className="text-slate-400 flex items-center gap-1">
                <Type className="w-3 h-3 text-[#C5A059]" /> Acessibilidade:
              </span>
              <button
                onClick={() => setFontSizeLevel((prev) => Math.max(-1, prev - 1))}
                className="px-1.5 py-0.5 hover:bg-slate-800 rounded-xs text-slate-200"
                title="Diminuir fonte"
                aria-label="Diminuir tamanho da fonte"
              >
                A-
              </button>
              <button
                onClick={() => setFontSizeLevel(0)}
                className="px-1.5 py-0.5 hover:bg-slate-800 rounded-xs text-slate-200 font-semibold"
                title="Tamanho padrão"
                aria-label="Tamanho normal da fonte"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel((prev) => Math.min(2, prev + 1))}
                className="px-1.5 py-0.5 hover:bg-slate-800 rounded-xs text-slate-200 font-bold"
                title="Aumentar fonte"
                aria-label="Aumentar tamanho da fonte"
              >
                A+
              </button>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`ml-1 px-1.5 py-0.5 rounded-xs flex items-center gap-1 ${
                  highContrast ? 'bg-[#C5A059] text-slate-950 font-bold' : 'hover:bg-slate-800 text-slate-200'
                }`}
                title="Alternar Alto Contraste"
                aria-label="Alternar Alto Contraste"
              >
                {highContrast ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
                <span className="hidden sm:inline">Contraste</span>
              </button>
            </div>

            <a
              href={`tel:${OFFICE_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="hidden lg:flex items-center gap-1 text-slate-200 hover:text-[#C5A059] font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{OFFICE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white shadow-sm py-3 border-b-2 border-[#1A2B45]'
            : 'bg-white py-4 border-b-2 border-[#1A2B45]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center" aria-label="Página inicial Bazela & Freitas Advogados">
            <Logo size="md" variant="light" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1A2B45] hover:text-[#C5A059] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* WhatsApp CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              id="header-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs px-5 py-2.5 rounded-sm shadow-sm transition-all duration-200 uppercase cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consultar WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="sm:hidden flex items-center justify-center p-2 bg-[#25D366] text-white rounded-xs"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A2B45] hover:text-black focus:outline-none"
              aria-label="Abrir Menu de Navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A2B45] text-white border-t border-slate-700 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-700 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase py-3 px-4 rounded-xs shadow"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Atendimento WhatsApp Plantão</span>
              </button>

              <div className="text-xs text-slate-300 text-center flex flex-col gap-1 py-1">
                <span>📍 Rua Voluntários da Pátria, 2816 - Santana</span>
                <span>Ao lado da Estação Metrô Santana</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
