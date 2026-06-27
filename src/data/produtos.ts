import type { Produto } from '../types';

// Catalogo completo da rede. Cada unidade escolhe um subconjunto destes.
export const produtos: Produto[] = [
  {
    id: 'p1',
    nome: 'Tapioca de Carne de Sol',
    descricao: 'Tapioca recheada com carne de sol desfiada e queijo coalho',
    preco: 18.0,
    categoria: 'Tapiocas',
    imagem: '🫓',
  },
  {
    id: 'p2',
    nome: 'Tapioca de Coco',
    descricao: 'Tapioca doce com coco fresco e leite condensado',
    preco: 14.0,
    categoria: 'Tapiocas',
    imagem: '🥥',
  },
  {
    id: 'p3',
    nome: 'Cuscuz Recheado',
    descricao: 'Cuscuz nordestino com ovo, queijo e manteiga de garrafa',
    preco: 16.0,
    categoria: 'Cuscuz',
    imagem: '🌽',
  },
  {
    id: 'p4',
    nome: 'Cuscuz com Carne de Sol',
    descricao: 'Cuscuz tradicional acompanhado de carne de sol e nata',
    preco: 22.0,
    categoria: 'Cuscuz',
    imagem: '🍲',
  },
  {
    id: 'p5',
    nome: 'Bolo de Macaxeira',
    descricao: 'Bolo cremoso de macaxeira assado na hora',
    preco: 9.0,
    categoria: 'Bolos',
    imagem: '🍰',
  },
  {
    id: 'p6',
    nome: 'Bolo de Milho',
    descricao: 'Bolo de milho verde, especialidade junina',
    preco: 9.0,
    categoria: 'Bolos',
    imagem: '🌽',
    sazonal: true,
  },
  {
    id: 'p7',
    nome: 'Canjica',
    descricao: 'Canjica cremosa com canela, tipica das festas juninas',
    preco: 12.0,
    categoria: 'Bolos',
    imagem: '🥣',
    sazonal: true,
  },
  {
    id: 'p8',
    nome: 'Suco de Caju',
    descricao: 'Suco natural de caju gelado',
    preco: 8.0,
    categoria: 'Bebidas',
    imagem: '🧃',
  },
  {
    id: 'p9',
    nome: 'Cafe Coado',
    descricao: 'Cafe passado na hora, tradicao da casa',
    preco: 5.0,
    categoria: 'Bebidas',
    imagem: '☕',
  },
  {
    id: 'p10',
    nome: 'Cafe da Manha Completo',
    descricao: 'Cuscuz, ovo, cafe, suco e bolo. Para comecar bem o dia',
    preco: 28.0,
    categoria: 'Cafe da Manha',
    imagem: '🍳',
  },
];

// Busca util usada em varias telas
export function buscarProduto(id: string): Produto | undefined {
  return produtos.find((p) => p.id === id);
}
