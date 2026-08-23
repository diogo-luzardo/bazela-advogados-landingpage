import React from 'react';

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
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-sm tracking-tight',
    md: 'text-base sm:text-lg tracking-tight',
    lg: 'text-xl sm:text-2xl tracking-tight'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.2em]',
    lg: 'text-xs tracking-[0.25em]'
  };

  return (
    <div className="flex items-center gap-3 select-none group" id="brand-logo">
      {/* Monogram Geometric Emblem */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center rounded-xs transition-transform duration-200 group-hover:scale-105 border ${
          isDark
            ? 'bg-[#1A2B45] border-[#C5A059]/40 text-white'
            : 'bg-[#1A2B45] border-[#1A2B45] text-white'
        }`}
      >
        <span
          className="font-brand font-bold"
          style={{
            fontSize: size === 'sm' ? '16px' : size === 'md' ? '20px' : '28px',
            fontFamily: "'Cinzel', serif",
            color: '#FFFFFF'
          }}
        >
          BF
        </span>
        <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-[#C5A059]" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-brand font-bold uppercase leading-tight ${titleSizes[size]} ${
            isDark ? 'text-white' : 'text-[#1A2B45]'
          }`}
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Bazela &amp; Freitas
        </span>

        {showSubtitle && (
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className={`font-sans font-bold uppercase ${subSizes[size]} ${
                isDark ? 'text-[#C5A059]' : 'text-[#C5A059]'
              }`}
            >
              Direito do Trabalho
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
