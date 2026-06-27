import { promocoes } from '../../data/promocoes';
import { Badge } from '../../components/Badge';

export function Promocoes() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="font-display text-2xl font-bold mb-1">Promoções</h1>
      <p className="text-sm text-cafe/60 mb-6">
        Ofertas e campanhas da sua unidade
      </p>

      <div className="space-y-4">
        {promocoes.map((promo) => (
          <div
            key={promo.id}
            className={`bg-white rounded-xl p-5 border ${
              promo.destaque ? 'border-barro border-2' : 'border-areia'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="font-semibold text-lg">{promo.titulo}</h2>
              <Badge cor="milho">{promo.desconto}</Badge>
            </div>
            <p className="text-sm text-cafe/70 mb-3">{promo.descricao}</p>
            <p className="text-xs text-cafe/50">{promo.validade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
