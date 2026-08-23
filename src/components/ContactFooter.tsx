import React, { useState } from 'react';
import { Logo } from './Logo';
import { OFFICE_INFO, PRACTICE_AREAS } from '../data/lawFirmData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Train, 
  Send, 
  ArrowUp,
  Scale
} from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    problem: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;

    const formattedMessage = `Olá! Mensagem enviada pelo formulário de contato do site:
Nome: *${leadForm.name}*
Telefone/WhatsApp: *${leadForm.phone}*
Assunto: *${leadForm.problem || 'Geral'}*
Mensagem: ${leadForm.message || 'Solicito contato para análise trabalhista'}`;

    window.open(`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(formattedMessage)}`, '_blank');
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const neighborhoods = [
    'Santana', 'Tucuruvi', 'Jardim São Paulo', 'Parada Inglesa',
    'Vila Guilherme', 'Casa Verde', 'Mandaqui', 'Tremembé',
    'Jaçanã', 'Vila Maria', 'Imirim', 'Lauzane Paulista',
    'Limão', 'Carandiru', 'Chora Menino', 'Água Fria'
  ];

  return (
    <footer className="bg-[#1A2B45] text-slate-300 border-t-4 border-[#C5A059]" id="contato">
      
      {/* Contact & Fast Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Firm Info & Strategic Location in Santana */}
          <div className="lg:col-span-6 space-y-6">
            <Logo variant="dark" size="lg" />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg font-sans">
              Escritório de advocacia com foco exclusivo na defesa e garantia dos direitos dos trabalhadores em Santana e em toda a Zona Norte de São Paulo. Atuação célere, transparente e pautada no rigor técnico da CLT e súmulas do TST.
            </p>

            {/* Direct Contact List with Geometric Balance Alignment */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-brand">{OFFICE_INFO.address}, {OFFICE_INFO.complement}</strong>
                  <span className="text-xs text-slate-300">{OFFICE_INFO.neighborhood} - {OFFICE_INFO.cityState} • CEP {OFFICE_INFO.cep}</span>
                  <p className="text-xs text-[#C5A059] mt-0.5 font-bold flex items-center gap-1">
                    <Train className="w-3.5 h-3.5" /> {OFFICE_INFO.metroDistance}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">Telefone Comercial:</span>
                  <a href={`tel:${OFFICE_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-white hover:text-[#C5A059] font-bold">
                    {OFFICE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">Plantão WhatsApp do Trabalhador:</span>
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-bold"
                  >
                    {OFFICE_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">E-mail:</span>
                  <a href={`mailto:${OFFICE_INFO.email}`} className="text-slate-300 hover:text-white">
                    {OFFICE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">Horário de Atendimento Presencial:</span>
                  <span className="text-slate-300">{OFFICE_INFO.hours}</span>
                </div>
              </div>
            </div>

            {/* OAB Credentials Badge */}
            <div className="pt-2 inline-flex items-center gap-2 bg-[#0F172A] px-3.5 py-2 rounded-xs border border-slate-700 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Inscrição: <strong className="text-white">{OFFICE_INFO.oabNumber}</strong></span>
            </div>
          </div>

          {/* Right Column: Direct Message Form with Geometric Light Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8F9FA] text-[#2C3E50] rounded-xs p-6 sm:p-8 border-l-4 border-[#C5A059] border-y border-r border-[#E5E7EB] shadow-lg space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#1A2B45] uppercase tracking-widest block">
                  Envio Rápido para o Advogado
                </span>
                <h3 className="text-xl font-bold text-[#1A2B45] font-brand" style={{ fontFamily: "'Cinzel', serif" }}>
                  Fale com um Especialista Agora
                </h3>
                <p className="text-xs text-slate-600">
                  Preencha os campos abaixo para abrir uma conversa direta no WhatsApp com nossa equipe:
                </p>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <label className="block text-xs font-bold text-[#1A2B45] uppercase tracking-wider mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-white border border-[#E5E7EB] text-[#1A2B45] placeholder-slate-400 focus:border-[#1A2B45] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A2B45] uppercase tracking-wider mb-1">
                    WhatsApp ou Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-white border border-[#E5E7EB] text-[#1A2B45] placeholder-slate-400 focus:border-[#1A2B45] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A2B45] uppercase tracking-wider mb-1">
                    Motivo da Consulta
                  </label>
                  <select
                    value={leadForm.problem}
                    onChange={(e) => setLeadForm({ ...leadForm, problem: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-white border border-[#E5E7EB] text-[#1A2B45] focus:border-[#1A2B45] focus:outline-none"
                  >
                    <option value="">Selecione um tema...</option>
                    <option value="Rescisão Indireta / FGTS atrasado">Rescisão Indireta (Atraso de FGTS / Salário)</option>
                    <option value="Demissão e Cálculo de Verbas">Demissão sem justa causa / Verbas rescisórias</option>
                    <option value="Horas extras e Banco de horas">Horas extras não pagas</option>
                    <option value="Fraude PJ / MEI">Fraude PJ / MEI (Quero vínculo CLT)</option>
                    <option value="Acidente de Trabalho / Doença">Acidente de trabalho ou Doença ocupacional</option>
                    <option value="Assédio Moral">Assédio moral no trabalho</option>
                    <option value="Estabilidade Gestante">Estabilidade de gestante</option>
                    <option value="Outro assunto">Outro assunto trabalhista</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A2B45] uppercase tracking-wider mb-1">
                    Conte brevemente sua situação (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Trabalhei 2 anos na empresa sem receber horas extras e meu FGTS não foi depositado..."
                    value={leadForm.message}
                    onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-white border border-[#E5E7EB] text-[#1A2B45] placeholder-slate-400 focus:border-[#1A2B45] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs uppercase py-3.5 px-4 rounded-sm shadow-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enviar e Iniciar Atendimento no WhatsApp</span>
                </button>

                <p className="text-[10px] text-slate-500 text-center uppercase tracking-wider font-semibold">
                  🔒 Seus dados são protegidos sob sigilo profissional de advocacia.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* SEO Neighborhoods Directory for Google Zona Norte */}
        <div className="mt-14 pt-8 border-t border-slate-700/80 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
              Advogado Trabalhista Zona Norte SP • Bairros Atendidos:
            </span>
            <span className="text-[11px] text-slate-400">
              Atendimento presencial e digital
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            {neighborhoods.map((n, i) => (
              <span key={i} className="hover:text-[#C5A059] transition-colors">
                {n}{i < neighborhoods.length - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Ethical Notice, Back to top */}
        <div className="mt-10 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Bazela &amp; Freitas Advogados. Todos os direitos reservados.</p>
            <p className="text-[11px] text-slate-400">
              Este site tem caráter meramente informativo e respeita estritamente o Provimento 205/2021 e o Código de Ética e Disciplina da OAB.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-300 hover:text-[#C5A059] font-bold text-xs uppercase transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
