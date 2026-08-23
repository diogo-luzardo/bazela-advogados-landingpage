import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickStatsBar } from './components/QuickStatsBar';
import { PracticeAreas } from './components/PracticeAreas';
import { StrategicLocation } from './components/StrategicLocation';
import { InteractiveTriage } from './components/InteractiveTriage';
import { WhatsAppAutoFlowPreview } from './components/WhatsAppAutoFlowPreview';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

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
    <div
      className={`min-h-screen transition-colors duration-200 ${fontSizeClasses} ${
        highContrast ? 'bg-slate-950 text-amber-300 contrast-125' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-amber-400 focus:text-slate-950 focus:px-4 focus:py-2 focus:rounded-md focus:font-bold"
      >
        Pular para o conteúdo principal
      </a>

      {/* Main Header & Navbar */}
      <Header
        fontSizeLevel={fontSizeLevel}
        setFontSizeLevel={setFontSizeLevel}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Quick Numbers / Trust Bar */}
        <QuickStatsBar />

        {/* Practice Areas / Direitos do Trabalhador */}
        <PracticeAreas />

        {/* Strategic Location Santana & Zona Norte */}
        <StrategicLocation />

        {/* Interactive Labor Rights Simulator & WhatsApp Triage */}
        <InteractiveTriage />

        {/* WhatsApp Automated Response Flow Architecture */}
        <WhatsAppAutoFlowPreview />

        {/* Client Testimonials / Avaliações Google 5 Estrelas */}
        <Testimonials />

        {/* Searchable Google-Researched FAQ */}
        <FAQSection />
      </main>

      {/* Rich Footer with Location, Map, and SEO Directory */}
      <ContactFooter />

      {/* Sticky Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
