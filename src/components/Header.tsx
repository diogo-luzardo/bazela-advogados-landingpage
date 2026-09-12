import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { OFFICE_INFO } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { whatsappImg } from '../assets';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  MessageCircle,
  Type,
  Sun,
  Moon
} from 'lucide-react';

interface HeaderProps {
  fontSizeLevel?: number;
  setFontSizeLevel?: React.Dispatch<React.SetStateAction<number>>;
  highContrast?: boolean;
  setHighContrast?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  fontSizeLevel = 0,
  setFontSizeLevel,
  highContrast = false,
  setHighContrast
}) => {
  const { currentTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'o-escritorio', 'areas-de-atuacao', 'servicos', 'artigos', 'contato'];
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
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'o-escritorio', label: 'O Escritório', href: '#o-escritorio' },
    { id: 'areas-de-atuacao', label: 'Áreas de Atuação', href: '#areas-de-atuacao' },
    { id: 'servicos', label: 'Serviços', href: '#areas-de-atuacao' },
    { id: 'artigos', label: 'Artigos', href: '#artigos' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="w-full z-40 relative shadow-2xs" id="site-header">
      {/* 1. Elementor Top Section (White background with contact items and social icons) */}
      <div className="bg-white border-b border-slate-200 text-xs text-slate-700 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Contact info with icons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[12px]">
            <a 
              href={`tel:${OFFICE_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>{OFFICE_INFO.phone}</span>
            </a>

            <a 
              href={`mailto:${OFFICE_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-600" />
              <span>{OFFICE_INFO.email}</span>
            </a>

            <div className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-slate-600" />
              <span>Santana – São Paulo / SP</span>
            </div>
          </div>

          {/* Right: Accessibility Controls & Social Icons */}
          <div className="flex items-center gap-3">
            {setFontSizeLevel && (
              <div className="hidden md:flex items-center border border-slate-200 rounded-xs px-2 py-0.5 gap-1 text-[11px] text-slate-600">
                <span className="flex items-center gap-1"><Type className="w-3 h-3" /> Fonte:</span>
                <button
                  onClick={() => setFontSizeLevel((prev) => Math.max(-1, prev - 1))}
                  className="px-1 hover:bg-slate-100 rounded cursor-pointer"
                  title="Diminuir fonte"
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSizeLevel(0)}
                  className="px-1 hover:bg-slate-100 rounded font-semibold cursor-pointer"
                  title="Fonte padrão"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSizeLevel((prev) => Math.min(2, prev + 1))}
                  className="px-1 hover:bg-slate-100 rounded font-bold cursor-pointer"
                  title="Aumentar fonte"
                >
                  A+
                </button>
                {setHighContrast && (
                  <button
                    onClick={() => setHighContrast(!highContrast)}
                    className="ml-1 px-1 hover:bg-slate-100 rounded cursor-pointer"
                    title="Alto Contraste"
                  >
                    {highContrast ? <Sun className="w-3 h-3 text-amber-500" /> : <Moon className="w-3 h-3 text-slate-600" />}
                  </button>
                )}
              </div>
            )}

            {/* Social Media Icons (Facebook and Instagram styled like Brancaleão & Marigo) */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-xs bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Facebook Bazela & Freitas"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-xs bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram Bazela & Freitas"
              >
                <span className="text-[10px] font-bold">in</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Column 1: Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" aria-label="Bazela & Freitas Advogados - Página Inicial">
              <Logo size="md" variant="light" />
            </a>
          </div>

          {/* Column 2: Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-serif text-[13px] font-semibold tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#30437e] font-bold'
                      : 'text-slate-800 hover:text-[#30437e]'
                  }`}
                  style={{
                    color: isActive ? currentTheme.primary : undefined
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: currentTheme.primary }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

            {/* Column 3: Info Box "Consulte-nos" (Brancaleão style with border and WhatsApp icon) */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={handleWhatsAppConsult}
              className="border-2 border-slate-900 rounded-sm px-4 py-2 flex items-center gap-3 hover:bg-slate-50 transition-all cursor-pointer group text-left"
              style={{ borderColor: currentTheme.primary }}
              aria-label="Consulte-nos pelo WhatsApp"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs p-1.5">
                <img src={whatsappImg} alt="WhatsApp" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <span className="block text-[11px] font-serif font-bold text-slate-900 uppercase tracking-wider">
                  Consulte-nos
                </span>
                <span className="block text-[13px] font-bold text-slate-800 tracking-tight">
                  {OFFICE_INFO.whatsapp}
                </span>
              </div>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppConsult}
              className="sm:hidden p-2 rounded-sm bg-emerald-500 text-white"
              aria-label="WhatsApp"
            >
              <img src={whatsappImg} alt="WhatsApp" className="w-5 h-5 object-contain" />
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

      {/* Mobile Offcanvas / Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f172a] text-white px-6 py-6 space-y-4 border-b border-slate-800 shadow-xl animate-in fade-in duration-150">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded text-sm font-serif font-semibold text-slate-200 hover:text-white hover:bg-white/10"
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
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
            >
              <img src={whatsappImg} alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Consulte-nos: {OFFICE_INFO.whatsapp}</span>
            </button>

            <div className="text-xs text-slate-400 space-y-1 text-center">
              <p>📍 {OFFICE_INFO.address} - {OFFICE_INFO.neighborhood}</p>
              <p>Metrô Santana • São Paulo - SP</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
