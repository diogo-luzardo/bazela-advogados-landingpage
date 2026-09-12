import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PracticeAreas } from './components/PracticeAreas';
import { CallToActionBanner } from './components/CallToActionBanner';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieConsentBar } from './components/CookieConsentBar';
import { FloatingThemeSwitcher } from './components/FloatingThemeSwitcher';

export default function App() {
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Dynamic font sizing multiplier for accessibility
  const fontSizeClasses = {
    [-1]: 'text-[14px]',
    [0]: 'text-[16px]',
    [1]: 'text-[18px]',
    [2]: 'text-[20px]',
  }[fontSizeLevel] || 'text-[16px]';

  return (
    <ThemeProvider>
      <div
        className={`min-h-screen transition-colors duration-200 ${fontSizeClasses} ${
          highContrast ? 'bg-slate-950 text-amber-300 contrast-125' : 'bg-white text-slate-800'
        }`}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}
      >
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-amber-400 focus:text-slate-950 focus:px-4 focus:py-2 focus:rounded-md focus:font-bold"
        >
          Pular para o conteúdo principal
        </a>

        {/* 1. Topbar & Header Navbar (Directly styled after Brancaleão & Marigo) */}
        <Header
          fontSizeLevel={fontSizeLevel}
          setFontSizeLevel={setFontSizeLevel}
          highContrast={highContrast}
          setHighContrast={setHighContrast}
        />

        {/* Main Content Sections (Clean, Multidisciplinary, True to Reference) */}
        <main id="main-content">
          {/* 2. Hero Section (Sina Slider banner with Lady Justice & Quotes) */}
          <Hero />

          {/* 3. Bem vindo / O Escritório (50/50 Layout: Lawyer photo + Consulte-nos box & Text + Saiba mais) */}
          <AboutSection />

          {/* 4. Áreas de Atuação (Balance Scale Icons Grid: Trabalhista, Família, Empresarial, Cível, etc.) */}
          <PracticeAreas />

          {/* 5. Split CTA Banner: "Precisa de um advogado?" (50% dark image, 50% navy blue) */}
          <CallToActionBanner />

          {/* 6. Artigos (Pyramid divider, 3 articles grid, read modals) */}
          <ArticlesSection />
        </main>

        {/* 7. 4-Column Footer & Copyright Bar */}
        <ContactFooter />

        {/* 8. JoinChat Floating WhatsApp Widget */}
        <FloatingWhatsApp />

        {/* 9. Cookie Consent Bar (LGPD) */}
        <CookieConsentBar />

        {/* 10. Floating Theme Switcher (Allows client to test 5 distinct visual styles) */}
        <FloatingThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
