import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { OFFICE_INFO } from '../data/firmData';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  MessageCircle,
  Instagram,
  Linkedin
} from 'lucide-react';

interface HeaderProps {
  fontSizeLevel?: number;
  setFontSizeLevel?: React.Dispatch<React.SetStateAction<number>>;
  highContrast?: boolean;
  setHighContrast?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'o-escritorio', 'areas-de-atuacao', 'contato'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppConsult = () => {
    const text = 'Olá! Gostaria de agendar uma consulta com os advogados da Bazela & Freitas.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const navLinks = [
    { id: 'inicio', label: 'INÍCIO', href: '#inicio' },
    { id: 'o-escritorio', label: 'O ESCRITÓRIO', href: '#o-escritorio' },
    { id: 'areas-de-atuacao', label: 'ÁREAS DE ATUAÇÃO', href: '#areas-de-atuacao' },
    { id: 'contato', label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className="w-full z-40 relative shadow-xs font-sans" id="site-header">
      {/* 1. Top Bar (Dark Navy Header matching Image 1) */}
      <div className="bg-[#0A131F] text-slate-300 py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Left: Contact Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-[12px] text-slate-300">
            <a 
              href={`tel:${OFFICE_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>(11) 2241-0304</span>
            </a>

            <span className="hidden sm:inline text-slate-600">|</span>

            <a 
              href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {OFFICE_INFO.whatsapp}</span>
            </a>

            <span className="hidden md:inline text-slate-600">|</span>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Avenida Nova Cantareira, 2213, conj. 72 — Tucuruvi — São Paulo/SP</span>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3 text-slate-300">
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A059] transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A059] transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar (Clean White Background) */}
      <div className="bg-white py-3 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo (Optically aligned flush with text below) */}
          <div className="flex-shrink-0 -ml-3 sm:-ml-4">
            <a href="#inicio" aria-label="Bazela & Freitas Advogados - Página Inicial">
              <Logo size="md" variant="light" />
            </a>
          </div>

          {/* Center Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-serif text-[14px] font-semibold text-slate-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors py-1 relative group ${
                    isActive
                      ? 'text-[#0F1B2D] font-bold'
                      : 'text-slate-700 hover:text-[#0F1B2D]'
                  }`}
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  {link.label}
                  {/* Active or Hover Gold Underline */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#C5A059] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right CTA Green Button with active pulse indicator */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={handleWhatsAppConsult}
              className="bg-[#16A34A] hover:bg-[#15803D] text-white font-sans font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md flex items-center gap-2 shadow-xs hover:shadow-md hover:scale-103 active:scale-97 transition-all cursor-pointer relative"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-100" />
              </span>
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fale conosco</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppConsult}
              className="sm:hidden p-2 rounded-md bg-[#16A34A] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-black cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A131F] text-white px-6 py-6 space-y-4 border-b border-slate-800 shadow-xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded text-sm font-serif font-semibold text-slate-200 hover:text-white hover:bg-white/10"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppConsult();
              }}
              className="w-full py-3 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp</span>
            </button>

            <div className="text-xs text-slate-400 space-y-1 text-center">
              <p>📍 Avenida Nova Cantareira, 2213, conj. 72 — Tucuruvi</p>
              <p>São Paulo - SP</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
