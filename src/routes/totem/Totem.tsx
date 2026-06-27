import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { produtos } from '../../data/produtos';
import { unidades } from '../../data/unidades';
import { useCarrinho } from '../../features/carrinho/CarrinhoContext';
import { useUnidade } from '../../features/unidade/UnidadeContext';
import { Button } from '../../components/Button';
import { formatarReais } from '../../components/formato';

// Visao Totem: usa os MESMOS dados e o MESMO estado de carrinho do app,
// mas com layout pensado para tela grande e toque (cards maiores, grid).
// Demonstra que a arquitetura atende multiplos canais sem duplicar regra.
export function Totem() {
  const { adicionar, quantidadeTotal, total } = useCarrinho();
  const { unidade, selecionarUnidade } = useUnidade();
  const navigate = useNavigate();
  const [iniciado, setIniciado] = useState(false);

  // No totem a unidade e fixa (a loja onde o totem esta instalado).
  // Selecionamos a primeira automaticamente ao iniciar.
  function iniciar() {
    if (!unidade) selecionarUnidade(unidades[0]);
    setIniciado(true);
  }

  if (!iniciado) {
    return (
      <div className="min-h-screen bg-barro text-renda flex flex-col items-center justify-center px-6">
        <h1 className="font-display text-5xl font-bold mb-4">
          Raízes do Nordeste
        </h1>
        <p className="text-xl mb-10 text-renda/80">Toque para começar</p>
        <button
          onClick={iniciar}
          className="bg-renda text-barro text-2xl font-bold px-12 py-6 rounded-2xl"
        >
          Fazer pedido
        </button>
      </div>
    );
  }

  const unidadeAtiva = unidade ?? unidades[0];
  const disponiveis = produtos.filter((p) =>
    unidadeAtiva.produtosDisponiveis.includes(p.id)
  );

  return (
    <div className="min-h-screen bg-renda pb-28">
      <header className="bg-cafe text-renda px-6 py-4">
        <h1 className="font-display text-2xl font-bold">Cardápio</h1>
        <p className="text-sm text-areia">{unidadeAtiva.nome}</p>
      </header>

      {/* Grid de cards grandes, proprio para toque */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {disponiveis.map((produto) => (
          <button
            key={produto.id}
            onClick={() => adicionar(produto)}
            className="bg-white border border-areia rounded-2xl p-5 text-center active:scale-95 transition-transform"
          >
            <div className="text-5xl mb-3" aria-hidden>
              {produto.imagem}
            </div>
            <h3 className="font-semibold">{produto.nome}</h3>
            <span className="block mt-2 font-display font-bold text-barro text-lg">
              {formatarReais(produto.preco)}
            </span>
          </button>
        ))}
      </div>

      {/* Barra fixa de resumo, grande para toque */}
      {quantidadeTotal > 0 && (
        <div className="fixed bottom-0 inset-x-0 bg-cafe text-renda px-6 py-4 flex items-center justify-between">
          <span className="text-lg">
            {quantidadeTotal} {quantidadeTotal === 1 ? 'item' : 'itens'} ·{' '}
            {formatarReais(total)}
          </span>
          <Button onClick={() => navigate('/checkout')} className="text-lg">
            Finalizar pedido
          </Button>
        </div>
      )}
    </div>
  );
}
