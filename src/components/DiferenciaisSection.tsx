import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { UserCheck, Zap, Shield, MapPin, CheckCircle } from 'lucide-react';

export const DiferenciaisSection: React.FC = () => {
  const { currentTheme } = useTheme();

  const differentials = [
    {
      icon: UserCheck,
      title: 'Atuação Direta dos Sócios',
      desc: 'Seu caso é analisado e conduzido diretamente por advogados seniores especializados, garantindo estratégia sólida e atenção minuciosa aos detalhes.'
    },
    {
      icon: Zap,
      title: 'Comunicação Ágil & Sem Jargões',
      desc: 'Transparência total. Você recebe relatórios periódicos e atualizações em linguagem clara, sabendo exatamente em que fase seu processo se encontra.'
    },
    {
      icon: Shield,
      title: 'Foco em Prevenção & Resolução',
      desc: 'Buscamos sempre a solução mais célere e economicamente vantajosa, priorizando acordos sólidos e atuando de forma contundente quando o litígio é inevitável.'
    },
    {
      icon: MapPin,
      title: 'Localização Privilegiada em Santana',
      desc: 'Fácil acesso pela Linha 1-Azul do Metrô, estacionamento no local e salas de reunião reservadas para acolher clientes com discrição e conforto.'
    }
  ];

  return (
    <section 
      className="py-16 lg:py-24 border-b transition-colors"
      style={{ 
        backgroundColor: currentTheme.bgSurface,
        borderColor: currentTheme.border
      }} 
      id="diferenciais"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.accent }} />
            <span 
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: currentTheme.accent }}
            >
              Por Que Escolher Nosso Escritório
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: currentTheme.fontDisplay }}
          >
            Nossos Diferenciais
          </h2>

          <div 
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: currentTheme.accent }}
          />

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Combinamos tradição jurídica com métodos ágeis para entregar tranquilidade e soluções efetivas para cada um de nossos clientes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-sm border transition-all duration-200 hover:shadow-sm space-y-4 flex flex-col justify-between"
                style={{ 
                  backgroundColor: currentTheme.bgPage,
                  borderColor: currentTheme.border
                }}
              >
                <div className="space-y-4">
                  <div 
                    className="w-12 h-12 rounded-xs flex items-center justify-center border"
                    style={{ 
                      backgroundColor: currentTheme.bgSurface,
                      borderColor: currentTheme.border
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: currentTheme.accent }} />
                  </div>

                  <h3 
                    className="text-lg font-bold font-serif text-slate-900 leading-snug"
                    style={{ fontFamily: currentTheme.fontDisplay }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t flex items-center gap-2 text-xs font-semibold" style={{ borderColor: currentTheme.border, color: currentTheme.accent }}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Garantia de Qualidade</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
