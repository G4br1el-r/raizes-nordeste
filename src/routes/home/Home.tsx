import { useNavigate } from 'react-router-dom';
import { unidades } from '../../data/unidades';
import { useUnidade } from '../../features/unidade/UnidadeContext';
import { Badge } from '../../components/Badge';
import type { Unidade } from '../../types';

// Primeira tela da jornada: o cliente escolhe a unidade.
// O cardapio das proximas telas depende dessa escolha.
export function Home() {
  const { selecionarUnidade } = useUnidade();
  const navigate = useNavigate();

  function escolher(unidade: Unidade) {
    selecionarUnidade(unidade);
    navigate('/cardapio');
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold text-barro mb-2">
          Sabor do Nordeste pertinho de você
        </h1>
        <p className="text-cafe/70">
          Escolha a unidade para ver o cardápio disponível
        </p>
      </div>

      <div className="space-y-3">
        {unidades.map((unidade) => (
          <button
            key={unidade.id}
            onClick={() => escolher(unidade)}
            className="w-full text-left bg-white border border-areia rounded-xl p-4 hover:border-barro transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">{unidade.nome}</h2>
                <p className="text-sm text-cafe/60">
                  {unidade.cidade} · {unidade.estado}
                </p>
              </div>
              {!unidade.cozinhaCompleta && (
                <Badge cor="cafe">Cardápio reduzido</Badge>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
