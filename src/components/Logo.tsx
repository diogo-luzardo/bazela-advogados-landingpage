import React from 'react';
import { logoImg } from '../assets';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md'
}) => {
  const isDark = variant === 'dark';

  const logoHeights = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-[72px]',
    lg: 'h-20 sm:h-[105px]'
  };

  return (
    <div className="flex items-center select-none group" id="brand-logo">
      <div 
        className={`transition-transform duration-200 group-hover:scale-103 ${
          isDark ? 'bg-white/95 p-1.5 rounded-sm shadow-xs border border-white/20' : ''
        }`}
      >
        <img
          src={logoImg}
          alt="Bazela & Freitas Advogados"
          className={`${logoHeights[size]} w-auto object-contain ${
            !isDark ? 'mix-blend-multiply' : ''
          }`}
        />
      </div>
    </div>
  );
};
