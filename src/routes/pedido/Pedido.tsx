import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import type { StatusPedido } from '../../types';

// Etapas do pedido na ordem em que acontecem
const etapas: { status: StatusPedido; label: string; icone: string }[] = [
  { status: 'recebido', label: 'Pedido recebido', icone: '📝' },
  { status: 'em_preparo', label: 'Em preparo', icone: '👩‍🍳' },
  { status: 'pronto', label: 'Pronto para retirada', icone: '🛍️' },
  { status: 'entregue', label: 'Entregue', icone: '✅' },
];

export function Pedido() {
  // No prototipo o status avanca sozinho a cada poucos segundos,
  // simulando o progresso real do pedido na cozinha.
  const [etapaAtual, setEtapaAtual] = useState(0);

  useEffect(() => {
    if (etapaAtual >= etapas.length - 1) return;

    const timer = setTimeout(() => {
      setEtapaAtual((atual) => atual + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [etapaAtual]);

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="font-display text-2xl font-bold mb-1">
        Acompanhe seu pedido
      </h1>
      <p className="text-sm text-cafe/60 mb-8">Pedido #1058</p>

      <div className="space-y-1">
        {etapas.map((etapa, indice) => {
          const concluida = indice <= etapaAtual;
          const atual = indice === etapaAtual;

          return (
            <div key={etapa.status}>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors ${
                    concluida ? 'bg-folha text-renda' : 'bg-areia text-cafe/40'
                  }`}
                >
                  {etapa.icone}
                </div>
                <span
                  className={`font-semibold ${
                    atual ? 'text-folha' : concluida ? 'text-cafe' : 'text-cafe/40'
                  }`}
                >
                  {etapa.label}
                  {atual && indice < etapas.length - 1 && (
                    <span className="block text-xs font-normal text-cafe/50">
                      em andamento...
                    </span>
                  )}
                </span>
              </div>

              {/* linha conectora entre as etapas */}
              {indice < etapas.length - 1 && (
                <div
                  className={`w-0.5 h-6 ml-5 ${
                    indice < etapaAtual ? 'bg-folha' : 'bg-areia'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {etapaAtual === etapas.length - 1 && (
        <div className="mt-8 text-center">
          <p className="text-folha font-semibold mb-4">
            Pedido entregue! Bom apetite 🌽
          </p>
          <Link to="/">
            <Button variante="secundario">Fazer novo pedido</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
