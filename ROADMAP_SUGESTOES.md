# 📌 Mapa de Melhorias e Sugestões Futuras — Bazela & Freitas Advogados

Este documento mapeia os recursos, componentes prontos e melhorias técnicas identificadas para futuras iterações da landing page.

---

## 🧩 1. Componentes Prontos para Ativação

Os componentes abaixo já foram criados, estilizados e integrados aos dados do escritório em [`src/data/firmData.ts`](./src/data/firmData.ts), estando prontos para uso em [`src/App.tsx`](./src/App.tsx):

### 1.1. Localização Estratégica & Mapa (`StrategicLocation.tsx`)
- **Arquivo:** [`src/components/StrategicLocation.tsx`](./src/components/StrategicLocation.tsx)
- **Recursos:**
  - Iframe responsivo com mapa do Google Maps centrado na sede (Santana, Zona Norte - SP).
  - Botões diretos para traçar rotas via **Waze** e **Google Maps**.
  - Destaques visuais: proximidade a 180 metros da Estação de Metrô Santana (Linha 1-Azul), estacionamento e salas de atendimento privativas.
  - Botão direto de WhatsApp para agendamento de consulta presencial.
- **Como ativar:** Importar e renderizar em `App.tsx` (recomendado logo antes ou depois de *O Escritório* ou antes do *Footer*).

### 1.2. Perguntas Frequentes (`FAQSection.tsx`)
- **Arquivo:** [`src/components/FAQSection.tsx`](./src/components/FAQSection.tsx)
- **Recursos:**
  - Sistema de Accordion expansível com dúvidas frequentes sobre honorários, prazos, formas de atendimento (presencial/online) e documentação necessária.
  - Botão de contato direto via WhatsApp atrelado à dúvida específica do usuário.
- **Como ativar:** Importar e renderizar em `App.tsx` (recomendado antes do *CallToActionBanner* ou antes do *Footer*).

### 1.3. Pilares e Diferenciais (`DiferenciaisSection.tsx`)
- **Arquivo:** [`src/components/DiferenciaisSection.tsx`](./src/components/DiferenciaisSection.tsx)
- **Recursos:**
  - Grid com 4 cartões destacando os diferenciais competitivos:
    1. *Atuação Direta dos Sócios* (sem terceirização ou estagiários à frente do caso);
    2. *Comunicação Ágil & Sem Jargões*;
    3. *Foco em Prevenção & Resolução*;
    4. *Localização Privilegiada em Santana*.
- **Como ativar:** Importar e renderizar em `App.tsx` (recomendado logo após *Como podemos ajudar?* ou após *O Escritório*).

### 1.4. Depoimentos e Prova Social (`Testimonials.tsx`)
- **Arquivo:** [`src/components/Testimonials.tsx`](./src/components/Testimonials.tsx)
- **Recursos:**
  - Cartões de depoimentos de clientes com avaliação por estrelas (5.0), segmento/cidade e relato da experiência jurídica.
  - Conformidade com as normas éticas da OAB (sem garantias de resultado).
- **Como ativar:** Importar e renderizar em `App.tsx`.

### 1.5. Seção de Artigos (`ArticlesSection.tsx`)
- **Arquivo:** [`src/components/ArticlesSection.tsx`](./src/components/ArticlesSection.tsx)
- **Status:** Desativada temporariamente conforme solicitação. O arquivo do componente e seus textos permanecem preservados no repositório.
- **Como reativar:**
  1. No arquivo [`src/App.tsx`](./src/App.tsx), importar `ArticlesSection` e incluir `<ArticlesSection />`.
  2. No arquivo [`src/components/Header.tsx`](./src/components/Header.tsx), reativar o link `'ARTIGOS'` na navegação.
  3. No arquivo [`src/components/ContactFooter.tsx`](./src/components/ContactFooter.tsx), reativar o link no rodapé.

---

## ⚙️ 2. Ajustes Técnicos para Produção

1. **Domínio Canônico:**
   - Em [`index.html`](./index.html), atualizar a tag `<link rel="canonical" ...>` e o campo `"url"` do JSON-LD `LegalService` para o domínio definitivo do escritório (ex.: `https://www.bazelaefreitas.adv.br`) quando for realizada a publicação oficial.

2. **Backend & Integração com IA (Opcional):**
   - O projeto possui dependências como `@google/genai` e `express`. Caso no futuro deseje disponibilizar um triador virtual ou assistente de dúvidas jurídicas automatizado, a estrutura já está pronta para receber a chave `GEMINI_API_KEY`.
