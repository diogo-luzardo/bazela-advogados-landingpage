import React from 'react';
import danielImg from '../assets/daniel.jpeg';
import dalilaImg from '../assets/dalila.jpeg';
import { OFFICE_INFO } from '../data/lawFirmData';
import { ShieldCheck, Award, Briefcase, Scale, MessageCircle, CheckCircle2 } from 'lucide-react';

export const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Daniel Bazela',
      role: 'Sócio Fundador',
      image: danielImg,
      badge: 'Especialista em Direito do Trabalho, Cível e Família',
      experience: 'Mais de 15 anos de experiência jurídica',
      stats: '+5.000 Processos Conduzidos',
      description:
        'Advogado atuante com vasta experiência na condução estratégica de litígios complexos, defesa intransigente dos direitos dos trabalhadores e resolução de causas cíveis e familiares.',
      highlights: [
        'Especialista em Direito do Trabalho, Cível e Família',
        'Mais de 15 anos de experiência e prática jurídica',
        'Atuação direta e estratégica em mais de 5.000 processos',
        'Atendimento consultivo e contencioso personalizado'
      ],
      areas: ['Direito do Trabalho', 'Direito Cível', 'Direito de Família']
    },
    {
      name: 'Dalila Freitas Bazela',
      role: 'Sócia Fundadora',
      image: dalilaImg,
      badge: 'Advogada Especialista em Direito do Trabalho',
      experience: 'Mais de 15 anos de experiência jurídica',
      stats: 'Foco Exclusivo em Direito do Trabalho',
      description:
        'Advogada especialista com sólido histórico na defesa dos direitos trabalhistas, reversão de fraudes contratuais, cálculos rescisórios e negociações de alto impacto.',
      highlights: [
        'Advogada Especialista em Direito do Trabalho',
        'Mais de 15 anos de experiência dedicada',
        'Atuação firme em verbas rescisórias, horas extras e rescisão indireta',
        'Atendimento humanizado e próximo ao trabalhador'
      ],
      areas: ['Direito do Trabalho', 'Rescisão Indireta', 'Fraude PJ/MEI', 'Acidentes & Saúde']
    }
  ];

  const handleConsultPartner = (partnerName: string) => {
    const text = `Olá! Vi o perfil do(a) Dr(a). ${partnerName} no site da Bazela & Freitas e gostaria de solicitar uma orientação jurídica.`;
    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 text-[#2C3E50] border-b border-[#E5E7EB]" id="socios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C5A059]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A2B45]">
              Corpo Jurídico • Sócios Fundadores
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-serif text-[#1A2B45] tracking-tight font-brand"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Sócios do Escritório
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Conheça os advogados sócios à frente do <strong className="text-[#1A2B45] font-semibold">Bazela &amp; Freitas Advogados</strong>. Mais de 15 anos de tradição, técnica apurada e milhares de causas conduzidas com excelência e ética.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12 items-stretch">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xs border-l-4 border-[#1A2B45] border-y border-r border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Partner Header with Portrait & Basic Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                  {/* Photo Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xs overflow-hidden border-2 border-[#1A2B45] shadow-xs">
                      <img
                        src={partner.image}
                        alt={`Foto do Dr(a). ${partner.name}`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <span className="absolute -bottom-2 -right-2 bg-[#C5A059] text-white p-1 rounded-xs shadow-xs">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Name, Role and Experience */}
                  <div className="space-y-2 flex-1">
                    <div className="inline-flex items-center gap-1.5 bg-[#F8F9FA] px-2.5 py-1 rounded-xs border border-[#E5E7EB]">
                      <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span className="text-[11px] font-bold text-[#1A2B45] uppercase tracking-wider">
                        {partner.role}
                      </span>
                    </div>

                    <h3
                      className="text-2xl font-bold text-[#1A2B45] font-brand"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {partner.name}
                    </h3>

                    <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                      {partner.badge}
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-slate-600">
                      <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-xs font-medium text-[11px]">
                        <Award className="w-3 h-3 text-[#1A2B45]" />
                        {partner.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat Highlight Banner */}
                <div className="bg-[#F8F9FA] border-l-2 border-[#C5A059] p-3 rounded-xs flex items-center gap-2.5 text-xs text-[#1A2B45] font-bold">
                  <Briefcase className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>{partner.stats}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {partner.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                  <span className="text-[11px] font-bold text-[#1A2B45] uppercase tracking-wider block">
                    Principais Credenciais:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {partner.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practice Areas Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {partner.areas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-[#1A2B45] px-2 py-1 rounded-xs border border-[#E5E7EB]"
                    >
                      {area}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Button */}
              <div className="p-4 sm:px-8 bg-[#F8F9FA] border-t border-[#E5E7EB]">
                <button
                  onClick={() => handleConsultPartner(partner.name)}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase py-3 px-4 rounded-xs shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar com Dr(a). {partner.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
