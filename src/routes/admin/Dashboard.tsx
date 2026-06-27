import {
  vendasPorUnidade,
  produtosMaisVendidos,
} from '../../data/admin';
import { MetricaCard } from './MetricaCard';
import { formatarReais } from '../../components/formato';

export function Dashboard() {
  // Totais consolidados da rede (o que a matriz acompanha)
  const totalVendas = vendasPorUnidade.reduce(
    (soma, u) => soma + u.vendasHoje,
    0
  );
  const totalPedidos = vendasPorUnidade.reduce(
    (soma, u) => soma + u.pedidosHoje,
    0
  );

  // Maior valor do ranking, usado para dimensionar as barras
  const maxQtd = Math.max(...produtosMaisVendidos.map((p) => p.quantidade));

  return (
    <div className="space-y-8">
      {/* Indicadores gerais */}
      <section className="grid grid-cols-2 gap-3">
        <MetricaCard
          titulo="Vendas hoje (rede)"
          valor={formatarReais(totalVendas)}
        />
        <MetricaCard titulo="Pedidos hoje" valor={String(totalPedidos)} />
      </section>

      {/* Vendas por unidade */}
      <section>
        <h2 className="font-semibold mb-3">Vendas por unidade</h2>
        <div className="bg-white border border-areia rounded-xl divide-y divide-areia">
          {vendasPorUnidade.map((u) => (
            <div
              key={u.unidade}
              className="flex items-center justify-between p-4"
            >
              <div>
                <p className="font-semibold">{u.unidade}</p>
                <p className="text-sm text-cafe/60">{u.cidade}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-barro">
                  {formatarReais(u.vendasHoje)}
                </p>
                <p className="text-xs text-cafe/50">{u.pedidosHoje} pedidos</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ranking de produtos com barrinhas simples */}
      <section>
        <h2 className="font-semibold mb-3">Produtos mais vendidos</h2>
        <div className="bg-white border border-areia rounded-xl p-4 space-y-3">
          {produtosMaisVendidos.map((p) => (
            <div key={p.nome}>
              <div className="flex justify-between text-sm mb-1">
                <span>{p.nome}</span>
                <span className="text-cafe/60">{p.quantidade}</span>
              </div>
              <div className="h-2 bg-areia rounded-full overflow-hidden">
                <div
                  className="h-full bg-milho rounded-full"
                  style={{ width: `${(p.quantidade / maxQtd) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
