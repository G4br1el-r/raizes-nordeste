import type { Unidade } from '../types';

// Unidades da rede. Repare que cada uma tem um cardapio diferente:
// unidades com cozinha reduzida oferecem menos itens. Isso resolve o
// requisito do estudo de caso: "nem todas as unidades sao identicas".
export const unidades: Unidade[] = [
  {
    id: 'u1',
    nome: 'Raizes Recife - Boa Viagem',
    cidade: 'Recife',
    estado: 'PE',
    cozinhaCompleta: true,
    produtosDisponiveis: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'],
  },
  {
    id: 'u2',
    nome: 'Raizes Fortaleza - Centro',
    cidade: 'Fortaleza',
    estado: 'CE',
    cozinhaCompleta: true,
    produtosDisponiveis: ['p1', 'p3', 'p4', 'p5', 'p8', 'p9', 'p10'],
  },
  {
    id: 'u3',
    nome: 'Raizes Caruaru - Quiosque',
    cidade: 'Caruaru',
    estado: 'PE',
    cozinhaCompleta: false, // cozinha reduzida: cardapio enxuto
    produtosDisponiveis: ['p2', 'p5', 'p8', 'p9'],
  },
];

export function buscarUnidade(id: string): Unidade | undefined {
  return unidades.find((u) => u.id === id);
}
