import React, { useState, useEffect, useRef } from 'react';
import { OFFICE_INFO, ABOUT_FIRM, PARTNERS_DATA } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Scale, 
  MapPin, 
  Briefcase,
  ExternalLink
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const slideCount = 3; // 0: Empresa/Logo, 1: Daniel, 2: Dalila
  const autoSlideDelay = 7000; // 7s exactly like the Hero slider

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  // Auto-play timer with pause on hover or when modal is open
  useEffect(() => {
    if (isPaused || modalOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoSlideDelay);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isPaused, modalOpen]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    if (diffX > 50) {
      nextSlide();
    } else if (diffX < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const handleWhatsAppOffice = () => {
    const text = 'Olá! Gostaria de uma consulta com os advogados da Bazela & Freitas Associados.';
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleWhatsAppPartner = (partnerName: string, message: string) => {
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const daniel = PARTNERS_DATA[0];
  const dalila = PARTNERS_DATA[1];

  return (
    <section 
      id="o-escritorio" 
      className="py-16 sm:py-24 bg-white border-b border-slate-200 transition-colors relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <span 
            className="text-lg sm:text-xl font-serif text-[#4a90e2] block font-normal tracking-wide"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Bem vindo
          </span>

          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 uppercase tracking-wide"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Bazela &amp; Freitas Advogados Associados
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-sans">
            Conheça nossa estrutura, nossos fundadores e a dedicação jurídica que nos consolida há mais de 15 anos em São Paulo.
          </p>
        </div>

        {/* Navigation Tabs (Quick Switcher with smooth state transition) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xs text-xs sm:text-sm font-serif font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              currentSlide === 0
                ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
            }`}
            style={{
              backgroundColor: currentSlide === 0 ? currentTheme.primary : undefined,
              borderColor: currentSlide === 0 ? currentTheme.primary : undefined
            }}
          >
            <Building2 className="w-4 h-4" />
            <span>1. O Escritório</span>
          </button>

          <button
            onClick={() => setCurrentSlide(1)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xs text-xs sm:text-sm font-serif font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              currentSlide === 1
                ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
            }`}
            style={{
              backgroundColor: currentSlide === 1 ? currentTheme.primary : undefined,
              borderColor: currentSlide === 1 ? currentTheme.primary : undefined
            }}
          >
            <Scale className="w-4 h-4" />
            <span>2. Dr. Daniel Bazela</span>
          </button>

          <button
            onClick={() => setCurrentSlide(2)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xs text-xs sm:text-sm font-serif font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              currentSlide === 2
                ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
            }`}
            style={{
              backgroundColor: currentSlide === 2 ? currentTheme.primary : undefined,
              borderColor: currentSlide === 2 ? currentTheme.primary : undefined
            }}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>3. Dra. Dalila Freitas</span>
          </button>
        </div>

        {/* Carousel Container with Hero-Style Stacked Fade & Ken Burns Transitions */}
        <div className="relative bg-slate-50/70 rounded-xs border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-xs min-h-[580px] lg:min-h-[520px] flex flex-col justify-between">
          
          {/* Arrow Navigation (Echoing the Hero slider style) */}
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 bg-white/95 text-slate-700 hover:text-slate-950 hover:bg-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 bg-white/95 text-slate-700 hover:text-slate-950 hover:bg-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slides Stack */}
          <div className="relative w-full">
            
            {/* ============================================================
                SLIDE 0: O ESCRITÓRIO & LOGO OFICIAL
               ============================================================ */}
            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                currentSlide === 0
                  ? 'opacity-100 z-10 relative'
                  : 'opacity-0 z-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Logo Visual + Ken Burns expansion + WhatsApp box */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white rounded-xs border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                    <div 
                      className="absolute top-0 left-0 right-0 h-1.5"
                      style={{ backgroundColor: currentTheme.primary }}
                    />

                    {/* Logo Image with Ken Burns smooth scale */}
                    <div className="w-full max-w-sm py-4 px-2 overflow-hidden">
                      <img
                        src="/logo.jpeg"
                        alt="Logo Oficial Bazela & Freitas Advogados Associados"
                        className={`w-full h-auto max-h-48 object-contain mx-auto transition-transform duration-5000 ease-out ${
                          currentSlide === 0 ? 'scale-104' : 'scale-100'
                        }`}
                        loading="lazy"
                      />
                    </div>

                    <div className="w-full pt-4 mt-2 border-t border-slate-100 flex flex-col gap-1.5 text-center">
                      <span className="text-xs font-serif font-bold uppercase text-slate-800 tracking-wider">
                        Sociedade de Advogados
                      </span>
                      <span className="text-[11px] text-slate-500 font-sans">
                        {OFFICE_INFO.oabNumber}
                      </span>
                      <span className="inline-flex items-center justify-center gap-1 text-[11px] text-slate-600 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {OFFICE_INFO.metroDistance}
                      </span>
                    </div>
                  </div>

                  {/* Info Box "Consulte-nos (11) 98765-4321" */}
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 bg-white border-2 rounded-xs hover:bg-slate-50 transition-colors shadow-2xs group w-full"
                    style={{ borderColor: currentTheme.primary }}
                    aria-label="Consulte-nos pelo WhatsApp"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm p-2">
                      <img src="/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
                    </div>
                    <div className="leading-tight text-left">
                      <h4 className="text-xs font-serif font-bold uppercase text-slate-900 tracking-wider">
                        Consulte-nos
                      </h4>
                      <h5 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
                        {OFFICE_INFO.whatsapp}
                      </h5>
                    </div>
                  </a>
                </div>

                {/* Right Column: Hero-style Staggered Text Animations */}
                <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed font-sans">
                  
                  {/* Tag with delay-100 */}
                  <div 
                    className={`inline-flex items-center gap-2 transition-all duration-700 delay-100 ${
                      currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: currentTheme.accent }}
                    />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Institucional • Tradição &amp; Rigor Técnico
                    </span>
                  </div>

                  {/* Headline with delay-200 */}
                  <h3 
                    className={`text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight transition-all duration-700 delay-200 ${
                      currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                    style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                  >
                    Soluções Jurídicas com Rigor Técnico, Discrição e Atendimento Personalizado
                  </h3>

                  {/* Lead paragraph with delay-300 */}
                  <p 
                    className={`text-base sm:text-lg text-slate-800 leading-relaxed font-normal transition-all duration-700 delay-300 ${
                      currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    Acreditamos que para gerar resultados é preciso dedicação diária e advogados em constante atualização das novas leis e jurisprudências no Brasil, apresentando soluções justas perante a lei e aos seus direitos.
                  </p>

                  {/* Secondary narrative with delay-400 */}
                  <p 
                    className={`text-sm sm:text-base text-slate-600 leading-relaxed transition-all duration-700 delay-400 ${
                      currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    O escritório <strong className="font-semibold text-slate-900">Bazela &amp; Freitas Advogados Associados</strong> foi constituído para prestar uma assistência completa e personalizada na área do direito. Sediado no coração corporativo de Santana, a 180 metros do Metrô Santana, unimos o acolhimento do atendimento presencial à agilidade da advocacia digital em todo o estado de São Paulo.
                  </p>

                  {/* Value Bullets with delay-500 */}
                  <div 
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 transition-all duration-700 delay-500 ${
                      currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Atuação conduzida diretamente pelos sócios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Prevenção estratégica e redução de passivos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Sigilo profissional rigoroso (Código de Ética OAB)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Sede nobre no Edifício Santana Corporate</span>
                    </div>
                  </div>

                  {/* Action Buttons with delay-600 */}
                  <div 
                    className={`pt-3 flex flex-wrap items-center gap-3 transition-all duration-700 delay-600 ${
                      currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xs text-white font-serif font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:opacity-90 cursor-pointer shadow-sm hover:scale-102"
                      style={{ backgroundColor: currentTheme.primary }}
                    >
                      <span>Saiba mais</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={handleWhatsAppOffice}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:scale-102"
                    >
                      <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                      <span>Falar no WhatsApp</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* ============================================================
                SLIDE 1: DR. DANIEL BAZELA
               ============================================================ */}
            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                currentSlide === 1
                  ? 'opacity-100 z-10 relative'
                  : 'opacity-0 z-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Portrait with Ken Burns smooth scale + WhatsApp button */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white rounded-xs border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col items-center relative overflow-hidden group">
                    <div className="relative w-full aspect-[3/4] max-w-sm rounded-xs overflow-hidden border-2 border-slate-900 shadow-xs bg-slate-100">
                      <img
                        src={daniel.image}
                        alt={`Foto do ${daniel.name}`}
                        className={`w-full h-full object-cover object-top transition-transform duration-5000 ease-out ${
                          currentSlide === 1 ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                      
                      <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                        <span className="text-xs font-serif font-bold uppercase tracking-wider bg-slate-900/90 px-2.5 py-1 rounded-xs backdrop-blur-xs border border-white/20">
                          {daniel.role}
                        </span>
                        <span className="bg-amber-500 text-slate-950 p-1.5 rounded-xs shadow-md">
                          <Scale className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="w-full mt-4 p-3 bg-slate-50 border-l-3 border-amber-500 rounded-xs flex items-center justify-between text-xs font-bold text-slate-800">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{daniel.stats}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">15+ Anos</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppPartner(daniel.name, daniel.whatsappMessage)}
                    className="flex items-center justify-center gap-3 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xs transition-colors shadow-sm w-full cursor-pointer group"
                  >
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                    <div className="text-left leading-tight">
                      <span className="text-[11px] uppercase tracking-wider font-semibold block text-emerald-100">
                        Contato Direto
                      </span>
                      <span className="text-sm font-bold block">
                        Falar com Dr. Daniel no WhatsApp
                      </span>
                    </div>
                  </button>
                </div>

                {/* Right Column: Hero-style Staggered Text Animations */}
                <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed font-sans">
                  
                  {/* Tag with delay-100 */}
                  <div 
                    className={`inline-flex items-center gap-2 transition-all duration-700 delay-100 ${
                      currentSlide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Sócio Fundador • Condução Estratégica &amp; Litígios
                    </span>
                  </div>

                  {/* Name and Badge with delay-200 */}
                  <div 
                    className={`transition-all duration-700 delay-200 ${
                      currentSlide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <h3 
                      className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight"
                      style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                    >
                      {daniel.name}
                    </h3>
                    <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mt-1">
                      {daniel.badge}
                    </p>
                  </div>

                  {/* Experience Badge with delay-300 */}
                  <div 
                    className={`inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-xs text-xs font-medium text-slate-700 transition-all duration-700 delay-300 ${
                      currentSlide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-slate-800" />
                    <span>{daniel.experience}</span>
                  </div>

                  {/* Lead paragraph with delay-400 */}
                  <p 
                    className={`text-base sm:text-lg text-slate-800 leading-relaxed font-normal transition-all duration-700 delay-400 ${
                      currentSlide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {daniel.lead}
                  </p>

                  {/* Narrative paragraphs with delay-500 */}
                  <div 
                    className={`space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed transition-all duration-700 delay-500 ${
                      currentSlide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {daniel.history.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Highlights List with delay-600 */}
                  <div 
                    className={`space-y-2 pt-2 border-t border-slate-200 transition-all duration-700 delay-600 ${
                      currentSlide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <span className="text-xs font-serif font-bold text-slate-900 uppercase tracking-wider block">
                      Principais Credenciais &amp; Histórico:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {daniel.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practice Area Chips with delay-700 */}
                  <div 
                    className={`flex flex-wrap gap-1.5 pt-2 transition-all duration-700 delay-700 ${
                      currentSlide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {daniel.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold uppercase tracking-wider bg-white text-slate-800 px-2.5 py-1 rounded-xs border border-slate-200 shadow-2xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleWhatsAppPartner(daniel.name, daniel.whatsappMessage)}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xs text-white font-serif font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:opacity-90 cursor-pointer shadow-sm hover:scale-102"
                      style={{ backgroundColor: currentTheme.primary }}
                    >
                      <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                      <span>Consultar Dr. Daniel Bazela</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* ============================================================
                SLIDE 2: DRA. DALILA FREITAS BAZELA
               ============================================================ */}
            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                currentSlide === 2
                  ? 'opacity-100 z-10 relative'
                  : 'opacity-0 z-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Portrait with Ken Burns smooth scale + WhatsApp button */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white rounded-xs border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col items-center relative overflow-hidden group">
                    <div className="relative w-full aspect-[3/4] max-w-sm rounded-xs overflow-hidden border-2 border-slate-900 shadow-xs bg-slate-100">
                      <img
                        src={dalila.image}
                        alt={`Foto da ${dalila.name}`}
                        className={`w-full h-full object-cover object-top transition-transform duration-5000 ease-out ${
                          currentSlide === 2 ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                      
                      <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                        <span className="text-xs font-serif font-bold uppercase tracking-wider bg-slate-900/90 px-2.5 py-1 rounded-xs backdrop-blur-xs border border-white/20">
                          {dalila.role}
                        </span>
                        <span className="bg-amber-500 text-slate-950 p-1.5 rounded-xs shadow-md">
                          <ShieldCheck className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="w-full mt-4 p-3 bg-slate-50 border-l-3 border-amber-500 rounded-xs flex items-center justify-between text-xs font-bold text-slate-800">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{dalila.stats}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">15+ Anos</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppPartner(dalila.name, dalila.whatsappMessage)}
                    className="flex items-center justify-center gap-3 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xs transition-colors shadow-sm w-full cursor-pointer group"
                  >
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                    <div className="text-left leading-tight">
                      <span className="text-[11px] uppercase tracking-wider font-semibold block text-emerald-100">
                        Contato Direto
                      </span>
                      <span className="text-sm font-bold block">
                        Falar com Dra. Dalila no WhatsApp
                      </span>
                    </div>
                  </button>
                </div>

                {/* Right Column: Hero-style Staggered Text Animations */}
                <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed font-sans">
                  
                  {/* Tag with delay-100 */}
                  <div 
                    className={`inline-flex items-center gap-2 transition-all duration-700 delay-100 ${
                      currentSlide === 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Sócia Fundadora • Defesa dos Direitos Trabalhistas
                    </span>
                  </div>

                  {/* Name and Badge with delay-200 */}
                  <div 
                    className={`transition-all duration-700 delay-200 ${
                      currentSlide === 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <h3 
                      className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight"
                      style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                    >
                      {dalila.name}
                    </h3>
                    <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mt-1">
                      {dalila.badge}
                    </p>
                  </div>

                  {/* Experience Badge with delay-300 */}
                  <div 
                    className={`inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-xs text-xs font-medium text-slate-700 transition-all duration-700 delay-300 ${
                      currentSlide === 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-slate-800" />
                    <span>{dalila.experience}</span>
                  </div>

                  {/* Lead paragraph with delay-400 */}
                  <p 
                    className={`text-base sm:text-lg text-slate-800 leading-relaxed font-normal transition-all duration-700 delay-400 ${
                      currentSlide === 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {dalila.lead}
                  </p>

                  {/* Narrative paragraphs with delay-500 */}
                  <div 
                    className={`space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed transition-all duration-700 delay-500 ${
                      currentSlide === 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {dalila.history.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Highlights List with delay-600 */}
                  <div 
                    className={`space-y-2 pt-2 border-t border-slate-200 transition-all duration-700 delay-600 ${
                      currentSlide === 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <span className="text-xs font-serif font-bold text-slate-900 uppercase tracking-wider block">
                      Principais Credenciais &amp; Histórico:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dalila.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practice Area Chips with delay-700 */}
                  <div 
                    className={`flex flex-wrap gap-1.5 pt-2 transition-all duration-700 delay-700 ${
                      currentSlide === 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {dalila.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold uppercase tracking-wider bg-white text-slate-800 px-2.5 py-1 rounded-xs border border-slate-200 shadow-2xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleWhatsAppPartner(dalila.name, dalila.whatsappMessage)}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xs text-white font-serif font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:opacity-90 cursor-pointer shadow-sm hover:scale-102"
                      style={{ backgroundColor: currentTheme.primary }}
                    >
                      <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                      <span>Consultar Dra. Dalila Freitas</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Bottom Dots Indicator (Identical to Hero slider dots with elongated active pill) */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
            <div className="text-xs font-serif font-semibold text-slate-500 uppercase tracking-wider">
              {currentSlide === 0 && '1 / 3 • O Escritório (Logo Oficial)'}
              {currentSlide === 1 && '2 / 3 • Dr. Daniel Bazela (Sócio Fundador)'}
              {currentSlide === 2 && '3 / 3 • Dra. Dalila Freitas (Sócia Fundadora)'}
            </div>

            {/* Slider Dots Indicator like Hero */}
            <div className="flex items-center gap-2.5">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Ir para o slide ${idx + 1}`}
                  className={`transition-all duration-500 rounded-full cursor-pointer ${
                    idx === currentSlide 
                      ? 'w-8 h-2.5 bg-slate-900 shadow-sm' 
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  style={{
                    backgroundColor: idx === currentSlide ? currentTheme.primary : undefined
                  }}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Detail Modal for "Saiba mais" (Institucional) */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xs border border-slate-300 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#30437e] block">
                  Institucional
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  Bazela &amp; Freitas Advogados Associados
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Narrative */}
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-sans">
              <p>
                {ABOUT_FIRM.lead}
              </p>
              {ABOUT_FIRM.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Transparência &amp; Ética
                  </h4>
                  <p className="text-xs text-slate-500">
                    Comunicação constante e realista sobre riscos, prazos e viabilidade em todas as fases processuais.
                  </p>
                </div>

                <div className="p-4 rounded border border-slate-200 bg-slate-50">
                  <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#30437e]" />
                    Sede Santana (180m Metrô)
                  </h4>
                  <p className="text-xs text-slate-500">
                    {OFFICE_INFO.address}, {OFFICE_INFO.complement} - Edifício Santana Corporate.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer action with official whatsapp.png */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                {OFFICE_INFO.oabNumber}
              </span>
              <button
                onClick={() => {
                  setModalOpen(false);
                  handleWhatsAppOffice();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:scale-102 transition-transform"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>Falar com Advogado no WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
