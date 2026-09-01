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
    sm: 'h-9 sm:h-11 max-w-[170px]',
    md: 'h-14 sm:h-16 max-w-[240px]',
    lg: 'h-20 sm:h-24 max-w-[320px]'
  };

  if (isDark) {
    return (
      <div className="inline-flex items-center select-none group" id="brand-logo-footer">
        <div className="bg-white p-3 sm:p-4 rounded-xs shadow-md border border-[#C5A059]/40 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
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
