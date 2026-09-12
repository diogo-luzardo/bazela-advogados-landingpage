import React, { useState, useEffect, useRef } from 'react';
import { OFFICE_INFO } from '../data/firmData';
import { useTheme } from '../context/ThemeContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  bgImage: string;
}

export const Hero: React.FC = () => {
  const { currentTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      id: 1,
      title: '“Nós somos o que fazemos repetidamente; por isso, a excelência é um hábito, não uma atitude”',
      subtitle: 'Aristóteles',
      buttonText: 'Saiba mais',
      buttonHref: '#o-escritorio',
      bgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80' // Lady Justice statue
    },
    {
      id: 2,
      title: 'Um bom advogado não vê apenas facilidades e resultados. Todo processo traz riscos que precisam ser esclarecidos ao cliente.',
      subtitle: 'Compromisso com a Verdade & Ética',
      buttonText: 'Entre em contato',
      buttonHref: '#contato',
      bgImage: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1920&q=80' // Classical scales of justice
    },
    {
      id: 3,
      title: '“A verdadeira advocacia é aquela que combina preparo técnico irrestrito com sensibilidade humana e lealdade a cada causa.”',
      subtitle: 'Bazela & Freitas Advogados Associados',
      buttonText: 'Consulte-nos',
      buttonHref: `https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta jurídica com o escritório Bazela & Freitas Advogados Associados.')}`,
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80' // Prestigious architecture
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 7000); // 7s delay just like Sina Slider in reference HTML

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isPaused]);

  return (
    <section 
      id="inicio"
      className="relative w-full overflow-hidden select-none bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ minHeight: '560px', height: '70vh', maxHeight: '720px' }}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Deep Classical Navy/Dark Blue Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out"
              style={{ 
                backgroundImage: `url(${slide.bgImage})`,
                transform: isActive ? 'scale(1.04)' : 'scale(1)'
              }}
            />
            
            {/* Dark Blue Overlay with gradient and subtle texture */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/70"
            />
            
            {/* Subtle radial glow in the center for depth */}
            <div className="absolute inset-0 bg-radial-at-c from-[#30437e]/20 via-transparent to-black/60" />

            {/* Slide Content (Centered/Left aligned like Brancaleão & Marigo) */}
            <div className="relative h-full max-w-5xl mx-auto px-6 sm:px-12 flex flex-col justify-center items-center text-center">
              
              {/* Quote / Main Headline */}
              <h1 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-snug sm:leading-tight font-medium max-w-4xl tracking-tight transition-all duration-700 delay-100 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                {slide.title}
              </h1>

              {/* Subtitle / Author */}
              {slide.subtitle && (
                <h2 
                  className={`mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 font-serif italic tracking-wider transition-all duration-700 delay-200 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  {slide.subtitle}
                </h2>
              )}

              {/* Action Button (Styled after the Sina button: border, dark, pulse) */}
              <div 
                className={`mt-8 sm:mt-10 transition-all duration-700 delay-300 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <a
                  href={slide.buttonHref}
                  target={slide.buttonHref.startsWith('http') ? '_blank' : '_self'}
                  rel={slide.buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block px-8 py-3.5 sm:px-10 sm:py-4 rounded-xs border-2 text-white font-serif text-xs sm:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900 cursor-pointer shadow-lg"
                  style={{ 
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)'
                  }}
                >
                  {slide.buttonText}
                </a>
              </div>

            </div>
          </div>
        );
      })}

      {/* Slider Left Arrow Navigation (owl-prev style) */}
      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Slider Right Arrow Navigation (owl-next style) */}
      <button
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer shadow-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir para o slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide 
                ? 'w-8 h-2 bg-white' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
