import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { produtos } from '../../data/produtos';
import { useUnidade } from '../../features/unidade/UnidadeContext';
import { useCarrinho } from '../../features/carrinho/CarrinhoContext';
import { ProdutoCard } from './ProdutoCard';
import type { Categoria } from '../../types';

// Ordem em que as categorias aparecem na tela
const ordemCategorias: Categoria[] = [
  'Cafe da Manha',
  'Tapiocas',
  'Cuscuz',
  'Bolos',
  'Bebidas',
];

export function Cardapio() {
  const { unidade } = useUnidade();
  const { adicionar } = useCarrinho();

  // Se o cliente entrou direto no cardapio sem escolher unidade,
  // mandamos de volta para a home.
  // (precisa vir antes de qualquer hook que dependa da unidade)

  // Filtra o catalogo geral para mostrar so o que a unidade oferece.
  // useMemo evita refiltrar a cada render desnecessariamente.
  const produtosDaUnidade = useMemo(() => {
    if (!unidade) return [];
    return produtos.filter((p) =>
      unidade.produtosDisponiveis.includes(p.id)
    );
  }, [unidade]);

  // Agrupa por categoria para exibir em secoes
  const porCategoria = useMemo(() => {
    const grupos: Record<string, typeof produtos> = {};
    for (const produto of produtosDaUnidade) {
      if (!grupos[produto.categoria]) {
        grupos[produto.categoria] = [];
      }
      grupos[produto.categoria].push(produto);
    }
    return grupos;
  }, [produtosDaUnidade]);

  if (!unidade) {
    return <Navigate to="/inicio" replace />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="font-display text-2xl font-bold mb-1">Cardápio</h1>
      <p className="text-sm text-cafe/60 mb-6">{unidade.nome}</p>

      <div className="space-y-8">
        {ordemCategorias.map((categoria) => {
          const itens = porCategoria[categoria];
          if (!itens || itens.length === 0) return null;

          return (
            <section key={categoria}>
              <h2 className="font-semibold text-lg text-folha mb-3">
                {categoria}
              </h2>
              <div className="space-y-3">
                {itens.map((produto) => (
                  <ProdutoCard
                    key={produto.id}
                    produto={produto}
                    onAdicionar={adicionar}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
