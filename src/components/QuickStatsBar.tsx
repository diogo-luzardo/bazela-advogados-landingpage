import React from 'react';
import { Scale, Train, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const QuickStatsBar: React.FC = () => {
  const stats = [
    {
      icon: Scale,
      value: '+2.800',
      label: 'Causas Trabalhistas',
      subtext: 'Defendendo trabalhadores de SP'
    },
    {
      icon: Train,
      value: '180 metros',
      label: 'Do Metrô Santana',
      subtext: 'Linha 1-Azul e Terminal Ônibus'
    },
    {
      icon: Award,
      value: '15+ Anos',
      label: 'De Tradição Jurídica',
      subtext: 'Equipe altamente especializada'
    },
    {
      icon: HeartHandshake,
      value: 'Honorários no Êxito',
      label: 'Transparência Total',
      subtext: 'Pague ao receber seus direitos'
    }
  ];

  return (
    <section className="bg-[#0F172A] text-white border-b-4 border-[#C5A059] py-8 px-4" id="stats-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 p-4"
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-8 h-8 bg-[#1A2B45] text-[#C5A059] flex items-center justify-center rounded-xs border border-slate-700">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-white font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-400">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
