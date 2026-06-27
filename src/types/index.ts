// Tipos centrais do dominio "Raizes do Nordeste".
// Concentrar os tipos aqui facilita manter consistencia entre telas.

export type Categoria = 'Tapiocas' | 'Cuscuz' | 'Bolos' | 'Bebidas' | 'Cafe da Manha';

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: Categoria;
  imagem: string; // emoji usado como ilustracao simples no prototipo
  sazonal?: boolean; // produtos do periodo junino, por exemplo
}

export interface Unidade {
  id: string;
  nome: string;
  cidade: string;
  estado: string;
  cozinhaCompleta: boolean; // unidades reduzidas tem cardapio menor
  // ids dos produtos disponiveis nesta unidade (cardapio dinamico por loja)
  produtosDisponiveis: string[];
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

// Estados do pedido - usados na tela de acompanhamento
export type StatusPedido =
  | 'recebido'
  | 'em_preparo'
  | 'pronto'
  | 'entregue';

// Estados do pagamento - o sistema nao processa, apenas registra o resultado
export type StatusPagamento = 'processando' | 'aprovado' | 'recusado';

export interface Pedido {
  id: string;
  unidadeId: string;
  itens: ItemCarrinho[];
  total: number;
  status: StatusPedido;
  statusPagamento: StatusPagamento;
  criadoEm: string;
}

// Registro de auditoria - operacoes sensiveis exigidas pela matriz
export interface RegistroAuditoria {
  id: string;
  tipo: 'cancelamento' | 'desconto' | 'ajuste';
  descricao: string;
  unidade: string;
  responsavel: string;
  data: string;
}
