import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCarrinho } from '../../features/carrinho/CarrinhoContext';
import { Button } from '../../components/Button';
import { formatarReais } from '../../components/formato';
import type { StatusPagamento } from '../../types';

// Tela de pagamento. O sistema NAO processa o pagamento: ele apenas
// solicita, aguarda e registra o resultado (aprovado ou recusado).
// Aqui simulamos esse fluxo desacoplado com um timeout.
export function Checkout() {
  const { itens, total, limpar } = useCarrinho();
  const navigate = useNavigate();
  const [status, setStatus] = useState<StatusPagamento | null>(null);

  if (itens.length === 0 && status === null) {
    return <Navigate to="/carrinho" replace />;
  }

  // Simula a chamada ao servico externo de pagamento.
  // Em producao isso seria uma chamada de API; o front so reage ao resultado.
  function solicitarPagamento() {
    setStatus('processando');

    setTimeout(() => {
      // Simulacao: ~70% de aprovacao. Mostra que o front precisa
      // tratar tambem o caminho de falha, nao so o sucesso.
      const aprovado = Math.random() > 0.3;
      if (aprovado) {
        setStatus('aprovado');
        limpar();
      } else {
        setStatus('recusado');
      }
    }, 1800);
  }

  // Estado: processando
  if (status === 'processando') {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="animate-pulse text-4xl mb-4">⏳</div>
        <p className="font-semibold">Solicitando pagamento...</p>
        <p className="text-sm text-cafe/60 mt-1">
          Aguardando confirmação do serviço de pagamento
        </p>
      </div>
    );
  }

  // Estado: aprovado
  if (status === 'aprovado') {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="font-display text-2xl font-bold text-folha mb-2">
          Pagamento aprovado!
        </h1>
        <p className="text-cafe/60 mb-6">
          Seu pedido já foi enviado para a cozinha.
        </p>
        <Button onClick={() => navigate('/pedido')}>
          Acompanhar pedido
        </Button>
      </div>
    );
  }

  // Estado: recusado - precisa orientar o cliente sobre o que fazer
  if (status === 'recusado') {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h1 className="font-display text-2xl font-bold text-barro mb-2">
          Pagamento não aprovado
        </h1>
        <p className="text-cafe/60 mb-6">
          O serviço de pagamento recusou a transação. Tente novamente ou
          use outra forma de pagamento.
        </p>
        <Button onClick={() => setStatus(null)}>Tentar novamente</Button>
      </div>
    );
  }

  // Estado inicial: resumo + botao de pagar
  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <h1 className="font-display text-2xl font-bold mb-6">Pagamento</h1>

      <div className="bg-white border border-areia rounded-xl p-4 mb-4">
        <h2 className="font-semibold mb-3">Resumo</h2>
        <div className="space-y-2 text-sm">
          {itens.map(({ produto, quantidade }) => (
            <div key={produto.id} className="flex justify-between">
              <span>
                {quantidade}x {produto.nome}
              </span>
              <span>{formatarReais(produto.preco * quantidade)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-areia mt-3 pt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-barro">{formatarReais(total)}</span>
        </div>
      </div>

      <Button onClick={solicitarPagamento} className="w-full">
        Pagar {formatarReais(total)}
      </Button>
      <p className="text-xs text-cafe/50 text-center mt-3">
        Pagamento processado por serviço externo seguro
      </p>
    </div>
  );
}
