import type { RegistroAuditoria } from '../types';

// Dados consolidados que a matriz acompanha. No prototipo sao estaticos,
// mas representam o que viria de relatorios reais por unidade/regiao.

export interface VendaUnidade {
  unidade: string;
  cidade: string;
  vendasHoje: number;
  pedidosHoje: number;
}

export const vendasPorUnidade: VendaUnidade[] = [
  { unidade: 'Boa Viagem', cidade: 'Recife', vendasHoje: 4820.5, pedidosHoje: 187 },
  { unidade: 'Centro', cidade: 'Fortaleza', vendasHoje: 3950.0, pedidosHoje: 142 },
  { unidade: 'Quiosque', cidade: 'Caruaru', vendasHoje: 1240.0, pedidosHoje: 63 },
];

export interface ProdutoRanking {
  nome: string;
  quantidade: number;
}

export const produtosMaisVendidos: ProdutoRanking[] = [
  { nome: 'Tapioca de Carne de Sol', quantidade: 94 },
  { nome: 'Cuscuz Recheado', quantidade: 81 },
  { nome: 'Cafe Coado', quantidade: 76 },
  { nome: 'Cafe da Manha Completo', quantidade: 52 },
  { nome: 'Bolo de Macaxeira', quantidade: 38 },
];

// Auditoria de operacoes sensiveis - exigencia de rastreabilidade da matriz
export const registrosAuditoria: RegistroAuditoria[] = [
  {
    id: 'a1',
    tipo: 'cancelamento',
    descricao: 'Pedido #1043 cancelado a pedido do cliente',
    unidade: 'Boa Viagem',
    responsavel: 'Gerente Ana',
    data: '27/06/2026 08:14',
  },
  {
    id: 'a2',
    tipo: 'desconto',
    descricao: 'Desconto de 15% aplicado (campanha fidelidade)',
    unidade: 'Centro',
    responsavel: 'Atendente Joao',
    data: '27/06/2026 09:02',
  },
  {
    id: 'a3',
    tipo: 'ajuste',
    descricao: 'Ajuste de estoque: 12 un. de bolo de macaxeira',
    unidade: 'Quiosque',
    responsavel: 'Gerente Carlos',
    data: '27/06/2026 07:48',
  },
];
