import React, { useState } from 'react';
import { Palette, Check, Sparkles, X, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { THEME_OPTIONS, useTheme } from '../context/ThemeContext';

export const FloatingThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, themeIndex } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [minimized, setMinimized] = useState<boolean>(false);

  return (
    <>
      {/* Floating Trigger Pill */}
      <aside
        aria-label="Menu de personalização de estilos"
        className="fixed bottom-6 left-6 z-40 flex items-center"
      >
        {!isOpen && (
          <div className="flex items-center gap-2 bg-[#0F172A] text-white p-1.5 pl-3 rounded-full shadow-2xl border border-white/20 backdrop-blur-md transition-all hover:scale-105">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(true)}>
              <div
                className="w-4 h-4 rounded-full border border-white/40 shadow-xs"
                style={{ backgroundColor: currentTheme.accent }}
              />
              <span className="text-xs font-semibold tracking-wide flex items-center gap-1.5 pr-1">
                <Palette className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Tema:</span> {currentTheme.name}
              </span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
              title="Trocar entre 5 estilos de cores e fontes"
            >
              <span>5 Estilos</span>
              <ChevronRight className="w-3 h-3 text-amber-300" />
            </button>
          </div>
        )}
      </aside>

      {/* Floating Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-start sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full sm:w-[460px] max-h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-900"
            id="theme-switcher-modal"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-slate-950 text-white flex items-start justify-between border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-amber-500/20 text-amber-300">
                    <SlidersHorizontal className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Seletor de Identidade Visual
                  </span>
                </div>
                <h3 className="text-lg font-bold font-serif text-white">
                  Escolha o Estilo do Seu Site
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Criamos 5 composições de cores e fontes para você testar e escolher a identidade ideal para o seu escritório.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Fechar seletor de estilos"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of 5 Themes */}
            <div className="p-4 sm:p-5 space-y-3 overflow-y-auto max-h-[60vh] bg-slate-50">
              {THEME_OPTIONS.map((theme, index) => {
                const isSelected = theme.id === currentTheme.id;

                return (
                  <div
                    key={theme.id}
                    onClick={() => setTheme(theme.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-white border-2 border-slate-900 shadow-md ring-2 ring-slate-900/10'
                        : 'bg-white border-slate-200 hover:border-slate-400 hover:shadow-xs'
                    }`}
                  >
                    {/* Active Checkmark Badge */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-slate-900 text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>Ativo</span>
                      </div>
                    )}

                    <div className="space-y-2 pr-16">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          0{index + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                          {theme.name}
                        </h4>
                      </div>

                      <p className="text-xs font-medium text-slate-500">
                        {theme.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {theme.description}
                    </p>

                    {/* Color Swatches & Typography Tags */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      {/* Swatches */}
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: theme.primary }}
                          title={`Cor Primária: ${theme.primary}`}
                        />
                        <div
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: theme.accent }}
                          title={`Cor de Destaque: ${theme.accent}`}
                        />
                        <div
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: theme.bgPage }}
                          title={`Fundo da Página: ${theme.bgPage}`}
                        />
                        <div
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: theme.textMain }}
                          title={`Cor dos Textos: ${theme.textMain}`}
                        />
                      </div>

                      {/* Font Details */}
                      <div className="flex items-center gap-1 text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        <span>Fontes:</span>
                        <strong className="text-slate-800">{theme.fontDisplayName}</strong>
                        <span>+</span>
                        <strong className="text-slate-800">{theme.fontBodyName}</strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Action */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Tema atual: <strong>{currentTheme.name}</strong>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg cursor-pointer transition-colors shadow-xs"
              >
                Concluir Seleção
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
