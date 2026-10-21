import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AudiencePathways } from './components/AudiencePathways';
import { PracticeAreas } from './components/PracticeAreas';
import { AboutSection } from './components/AboutSection';
import { Partners } from './components/Partners';
import { CallToActionBanner } from './components/CallToActionBanner';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieConsentBar } from './components/CookieConsentBar';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#C5A059] selection:text-white">
        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#C5A059] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-bold"
        >
          Pular para o conteúdo principal
        </a>

        {/* 1. Header Navbar */}
        <Header />

        {/* Main Content */}
        <main id="main-content">
          {/* 2. Hero Section */}
          <Hero />

          {/* 3. Como podemos ajudar? (Sou trabalhador / Represento uma empresa) */}
          <AudiencePathways />

          {/* 4. Áreas de Atuação (2x2 Grid) */}
          <PracticeAreas />

          {/* 5. O Escritório */}
          <AboutSection />

          {/* 6. Conheça nossos advogados (Dr. Daniel & Dra. Dalila) */}
          <Partners />

          {/* 7. Call To Action Banner */}
          <CallToActionBanner />
        </main>

        {/* 9. Footer */}
        <ContactFooter />

        {/* Floating WhatsApp Widget */}
        <FloatingWhatsApp />

        {/* Cookie Consent Bar */}
        <CookieConsentBar />
      </div>
    </ThemeProvider>
  );
}
