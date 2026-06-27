import { Link, useNavigate } from 'react-router-dom';
import { useCarrinho } from '../../features/carrinho/CarrinhoContext';
import { Button } from '../../components/Button';
import { formatarReais } from '../../components/formato';

export function Carrinho() {
  const { itens, alterarQuantidade, remover, total } = useCarrinho();
  const navigate = useNavigate();

  // Estado vazio: orienta o cliente a voltar ao cardapio
  if (itens.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-cafe/60 mb-4">Seu carrinho está vazio.</p>
        <Link to="/cardapio">
          <Button variante="secundario">Ver cardápio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="font-display text-2xl font-bold mb-6">Seu pedido</h1>

      <div className="space-y-3 mb-6">
        {itens.map(({ produto, quantidade }) => (
          <div
            key={produto.id}
            className="bg-white border border-areia rounded-xl p-4 flex items-center gap-4"
          >
            <div className="text-3xl" aria-hidden>
              {produto.imagem}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">{produto.nome}</h3>
              <span className="text-sm text-barro font-semibold">
                {formatarReais(produto.preco)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => alterarQuantidade(produto.id, quantidade - 1)}
                className="w-8 h-8 rounded-lg bg-areia font-bold"
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span className="w-6 text-center font-semibold">
                {quantidade}
              </span>
              <button
                onClick={() => alterarQuantidade(produto.id, quantidade + 1)}
                className="w-8 h-8 rounded-lg bg-areia font-bold"
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button
              onClick={() => remover(produto.id)}
              className="text-cafe/40 hover:text-barro text-sm"
              aria-label="Remover item"
            >
              remover
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white border border-areia rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-cafe/70">Total</span>
          <span className="font-display text-xl font-bold text-barro">
            {formatarReais(total)}
          </span>
        </div>
        <Button onClick={() => navigate('/checkout')} className="w-full">
          Ir para pagamento
        </Button>
      </div>
    </div>
  );
}
