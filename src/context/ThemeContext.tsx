import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeOption } from '../types';

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'classico-nobre',
    name: 'Brancaleão Clássico',
    subtitle: 'Nobreza Jurídica & Distinção',
    description: 'Inspirado na alta tradição do direito, com Marinho Nobre, Dourado Imperial e tipografia Cinzel.',
    fontDisplay: "'Cinzel', Georgia, serif",
    fontDisplayName: 'Cinzel Serif',
    fontBody: "'Plus Jakarta Sans', sans-serif",
    fontBodyName: 'Plus Jakarta Sans',
    primary: '#0F172A',
    secondary: '#1E293B',
    accent: '#C5A059',
    accentHover: '#B38E46',
    accentLight: '#FDF8EE',
    bgPage: '#F8FAFC',
    bgSurface: '#FFFFFF',
    textMain: '#1E293B',
    textMuted: '#64748B',
    border: '#E2E8F0',
    tag: 'Estilo 1 • Mais Solicitado'
  },
  {
    id: 'minimalista-onyx',
    name: 'Minimalista Contemporâneo',
    subtitle: 'Quiet Luxury & Linhas Puras',
    description: 'Estética editorial clean com Carvão Onyx, detalhes em Champagne e a elegante Cormorant Garamond.',
    fontDisplay: "'Cormorant Garamond', Georgia, serif",
    fontDisplayName: 'Cormorant Garamond',
    fontBody: "'Inter', sans-serif",
    fontBodyName: 'Inter Sans',
    primary: '#18181B',
    secondary: '#27272A',
    accent: '#D4AF37',
    accentHover: '#C59F2B',
    accentLight: '#FAF6ED',
    bgPage: '#FAFAF9',
    bgSurface: '#FFFFFF',
    textMain: '#262626',
    textMuted: '#71717A',
    border: '#E4E4E7',
    tag: 'Estilo 2 • Super Clean'
  },
  {
    id: 'corporativo-faria-lima',
    name: 'Corporativo Faria Lima',
    subtitle: 'Institucional & Executivo',
    description: 'Presença marcante para causas empresariais e civis com Azul Oxford, Safira e Spectral.',
    fontDisplay: "'Spectral', Georgia, serif",
    fontDisplayName: 'Spectral Serif',
    fontBody: "'Plus Jakarta Sans', sans-serif",
    fontBodyName: 'Plus Jakarta Sans',
    primary: '#0A2540',
    secondary: '#1A365D',
    accent: '#2563EB',
    accentHover: '#1D4ED8',
    accentLight: '#EFF6FF',
    bgPage: '#F8FAFD',
    bgSurface: '#FFFFFF',
    textMain: '#0F172A',
    textMuted: '#475569',
    border: '#E2E8F0',
    tag: 'Estilo 3 • Corporativo'
  },
  {
    id: 'heritage-esmeralda',
    name: 'Heritage & Tradição',
    subtitle: 'Bancas Britânicas & Atemporal',
    description: 'Suntuosidade britânica em Verde Floresta Imperial, Bronze Nobre e tipografia Playfair Display.',
    fontDisplay: "'Playfair Display', Georgia, serif",
    fontDisplayName: 'Playfair Display',
    fontBody: "'Lora', serif",
    fontBodyName: 'Lora Editorial',
    primary: '#0F281E',
    secondary: '#1E3A2F',
    accent: '#B89358',
    accentHover: '#A58045',
    accentLight: '#FDF9F2',
    bgPage: '#FAF8F5',
    bgSurface: '#FFFFFF',
    textMain: '#1F2923',
    textMuted: '#526058',
    border: '#E6E2D8',
    tag: 'Estilo 4 • Tradicional'
  },
  {
    id: 'swiss-modernist',
    name: 'Swiss Modernist',
    subtitle: 'Alta Costura & Contraste',
    description: 'Minimalismo arrojado com Preto Absoluto, detalhes em Vinho Bordô e DM Serif Display.',
    fontDisplay: "'DM Serif Display', serif",
    fontDisplayName: 'DM Serif Display',
    fontBody: "'Plus Jakarta Sans', sans-serif",
    fontBodyName: 'Plus Jakarta Sans',
    primary: '#111827',
    secondary: '#1F2937',
    accent: '#881337',
    accentHover: '#70102D',
    accentLight: '#FFF1F2',
    bgPage: '#F9FAFB',
    bgSurface: '#FFFFFF',
    textMain: '#111827',
    textMuted: '#4B5563',
    border: '#E5E7EB',
    tag: 'Estilo 5 • Modernista'
  }
];

interface ThemeContextType {
  currentTheme: ThemeOption;
  setTheme: (themeId: string) => void;
  themeIndex: number;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentThemeId, setCurrentThemeId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bf_selected_theme');
      if (saved && THEME_OPTIONS.some(t => t.id === saved)) {
        return saved;
      }
    }
    return THEME_OPTIONS[0].id;
  });

  const currentTheme = THEME_OPTIONS.find(t => t.id === currentThemeId) || THEME_OPTIONS[0];
  const themeIndex = THEME_OPTIONS.findIndex(t => t.id === currentThemeId);

  useEffect(() => {
    localStorage.setItem('bf_selected_theme', currentTheme.id);
    
    // Apply CSS variables to root
    const root = document.documentElement;
    root.style.setProperty('--theme-font-display', currentTheme.fontDisplay);
    root.style.setProperty('--theme-font-body', currentTheme.fontBody);
    root.style.setProperty('--theme-primary', currentTheme.primary);
    root.style.setProperty('--theme-secondary', currentTheme.secondary);
    root.style.setProperty('--theme-accent', currentTheme.accent);
    root.style.setProperty('--theme-accent-hover', currentTheme.accentHover);
    root.style.setProperty('--theme-accent-light', currentTheme.accentLight);
    root.style.setProperty('--theme-bg-page', currentTheme.bgPage);
    root.style.setProperty('--theme-bg-surface', currentTheme.bgSurface);
    root.style.setProperty('--theme-text-main', currentTheme.textMain);
    root.style.setProperty('--theme-text-muted', currentTheme.textMuted);
    root.style.setProperty('--theme-border', currentTheme.border);
  }, [currentTheme]);

  const handleSetTheme = (themeId: string) => {
    if (THEME_OPTIONS.some(t => t.id === themeId)) {
      setCurrentThemeId(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: handleSetTheme, themeIndex }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
