import React from 'react';
import logoImg from '../assets/logo.jpeg';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-w-[140px]',
    md: 'h-11 sm:h-12 max-w-[190px]',
    lg: 'h-14 sm:h-16 max-w-[240px]'
  };

  if (isDark) {
    return (
      <div className="inline-flex items-center select-none group" id="brand-logo-footer">
        <div className="bg-white p-2 sm:p-2.5 rounded-xs shadow-md border border-[#C5A059]/40 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
          <img
            src={logoImg}
            alt="Bazela & Freitas Advogados"
            className={`${sizeClasses[size]} w-auto object-contain`}
            loading="eager"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center select-none group" id="brand-logo">
      <img
        src={logoImg}
        alt="Bazela & Freitas Advogados"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );
};
