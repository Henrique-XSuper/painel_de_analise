# 📊 Dashboard de KPIs - Monitoramento em Tempo Real

Interface moderna e responsiva para monitoramento de indicadores-chave de desempenho (KPIs) em tempo real. Projetado com TailwindCSS, JavaScript puro e animações leves, o dashboard exibe dados de vendas, receita, usuários e tráfego com visual atrativo e fácil de interpretar.

---

## 🧰 Tecnologias Utilizadas

- HTML5 + CSS3

- TailwindCSS (via CDN)

- JavaScript Vanilla (ES6+)

- Google Fonts (Inter)

- Interface sem dependências externas 

---
## ✅ Funcionalidades

- Atualização Manual ou Automática dos KPIs

- Gráfico de Vendas dos Últimos 7 Dias

- Barra de Progresso de Metas do Mês

- Top Produtos com barras de performance

- Métricas de Tráfego (Visitantes, Páginas, Taxa de Rejeição)

- Alertas Simulados e Toasts de Notificação

- Modo Responsivo com animações suaves

- Seletor de Período: Hoje, Semana, Mês, Ano
  
---
## 📂 Estrutura dos Arquivos
dashboard-kpi/<br>
├── index.html<br>
├── README.md<br>
├── script.js <br>

---

### ▶️ Como Usar

Clone ou baixe este repositório:

git clone https://github.com/Henrique-XSuper/dashboard-kpi.git


Abra o index.html em qualquer navegador moderno (Chrome, Firefox, Edge).

Os dados simulados são carregados automaticamente a cada 5 segundos (modo auto refresh ON por padrão). Você pode alternar manualmente.

O seletor de período simula diferentes volumes de dados, alterando KPIs em tempo real.

---
## 🔄 Atualização de Dados

Botão "🔄 Atualizar Dados" para atualização manual

Botão "⏱️ Auto Refresh" alterna entre ON/OFF

Toast de confirmação mostra o status

---
## 🎯 Metas Simuladas

Os dados são fictícios e simulados com base no período selecionado. Metas mensais incluem:

Receita: R$ 500.000

Vendas: 1000

Novos usuários: 5000

---
## 📌 Alertas & Tráfego

Alertas aparecem dinamicamente com mensagens randômicas

Métricas de tráfego variam levemente a cada atualização

### 📅 Simulação de Períodos

Cada período altera os KPIs com base em dados aleatórios controlados:

Período	Receita estimada	Vendas	Usuários	Conversão
Hoje	R$ 20.000 – R$ 90.000	80 – 320	600 – 1800	1.8% – 5.5%
Semana	R$ 120.000 – R$ 380.000	400 – 1100	2000 – 6000	2.2% – 5.8%
Mês (padrão)	R$ 300.000 – R$ 700.000	700 – 1500	3000 – 8000	2.5% – 6.2%
Ano	R$ 2.5M – R$ 5.2M	10.000 – 24.000	40.000 – 120.000	2.0% – 6.5%

---
## 📌 Personalização

Você pode facilmente:

Alterar cores, ícones, fontes ou gradientes via Tailwind

Trocar as metas no objeto dashboardData.goals

Alterar os produtos em dashboardData.topProducts

Modificar os intervalos e ranges simulados

Integrar com API real (ex: via fetch())

---
📃 Licença

Este projeto é open-source sob a licença MIT
.
