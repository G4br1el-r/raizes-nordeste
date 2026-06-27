import { createContext, useContext, useState, type ReactNode } from 'react';
import type { ItemCarrinho, Produto } from '../../types';

// Centraliza toda a logica do carrinho. As telas so chamam as funcoes,
// sem precisar saber como o estado e calculado.
interface CarrinhoContextType {
  itens: ItemCarrinho[];
  adicionar: (produto: Produto) => void;
  remover: (produtoId: string) => void;
  alterarQuantidade: (produtoId: string, quantidade: number) => void;
  limpar: () => void;
  total: number;
  quantidadeTotal: number;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionar(produto: Produto) {
    setItens((atuais) => {
      const existente = atuais.find((i) => i.produto.id === produto.id);
      if (existente) {
        // ja existe: aumenta a quantidade
        return atuais.map((i) =>
          i.produto.id === produto.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }
      return [...atuais, { produto, quantidade: 1 }];
    });
  }

  function remover(produtoId: string) {
    setItens((atuais) => atuais.filter((i) => i.produto.id !== produtoId));
  }

  function alterarQuantidade(produtoId: string, quantidade: number) {
    if (quantidade <= 0) {
      remover(produtoId);
      return;
    }
    setItens((atuais) =>
      atuais.map((i) =>
        i.produto.id === produtoId ? { ...i, quantidade } : i
      )
    );
  }

  function limpar() {
    setItens([]);
  }

  // Valores derivados - recalculados a cada render, sem estado duplicado
  const total = itens.reduce(
    (soma, i) => soma + i.produto.preco * i.quantidade,
    0
  );
  const quantidadeTotal = itens.reduce((soma, i) => soma + i.quantidade, 0);

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionar,
        remover,
        alterarQuantidade,
        limpar,
        total,
        quantidadeTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const ctx = useContext(CarrinhoContext);
  if (!ctx) {
    throw new Error('useCarrinho precisa estar dentro de CarrinhoProvider');
  }
  return ctx;
}
