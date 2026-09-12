import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true
}) => {
  const { currentTheme } = useTheme();
  const isDark = variant === 'dark';

  const titleSizes = {
    sm: 'text-sm tracking-wide',
    md: 'text-base sm:text-lg tracking-wide',
    lg: 'text-xl sm:text-2xl tracking-wide'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.3em]'
  };

  return (
    <div className="flex items-center gap-3.5 select-none group" id="brand-logo">
      {/* Classic Roman Monogram BF inspired by BM in Brancaleão & Marigo */}
      <div className="flex items-baseline font-serif font-bold tracking-tight text-3xl sm:text-4xl leading-none">
        <span 
          className="relative inline-block transition-transform duration-200 group-hover:scale-105"
          style={{ 
            fontFamily: "'Cinzel', Georgia, serif",
            color: isDark ? '#FFFFFF' : '#1A2530'
          }}
        >
          B
        </span>
        <span 
          className="-ml-1 inline-block transition-transform duration-200 group-hover:scale-105"
          style={{ 
            fontFamily: "'Cinzel', Georgia, serif",
            color: isDark ? currentTheme.accent : currentTheme.accent
          }}
        >
          F
        </span>
      </div>

      {/* Vertical Divider Line */}
      <div 
        className="w-px h-8 sm:h-9 self-center opacity-30" 
        style={{ backgroundColor: isDark ? '#FFFFFF' : '#1A2530' }} 
      />

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-bold uppercase leading-tight ${titleSizes[size]}`}
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            color: isDark ? '#FFFFFF' : '#1A2530',
            letterSpacing: '0.08em'
          }}
        >
          Bazela &amp; Freitas
        </span>

        {showSubtitle && (
          <span
            className={`font-sans font-semibold uppercase mt-0.5 ${subSizes[size]}`}
            style={{ 
              color: isDark ? '#94A3B8' : '#64748B',
              letterSpacing: '0.22em'
            }}
          >
            Advogados Associados
          </span>
        )}
      </div>
    </div>
  );
};
