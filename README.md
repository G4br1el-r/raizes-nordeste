# Raízes do Nordeste — Protótipo (Trilha Front-end)

Protótipo navegável do sistema da rede de lanchonetes "Raízes do Nordeste",
desenvolvido para o Projeto Multidisciplinar (UNINTER).

## Stack
- Vite + React + TypeScript
- React Router (navegação entre telas)
- Tailwind CSS (estilização)
- Context API (estado de carrinho e unidade)
- Dados mock locais (sem backend)

## Como rodar
```bash
npm install
npm run dev
```
Acesse http://localhost:5173

## Estrutura
```
src/
├── components/   # componentes compartilhados (Button, Badge, Header)
├── features/     # lógica de domínio (carrinho, unidade) via Context
├── routes/       # uma pasta por tela
├── data/         # dados mock (produtos, unidades, admin)
└── types/        # tipos TypeScript centrais
```

## Telas
- `/` Seleção de unidade
- `/cardapio` Cardápio (dinâmico por unidade)
- `/carrinho` Carrinho
- `/checkout` Pagamento (com estados de falha)
- `/pedido` Acompanhamento do pedido
- `/fidelidade` Programa de fidelidade + consentimento LGPD
- `/admin` Painel da matriz (dashboard)
- `/admin/auditoria` Auditoria de operações sensíveis
