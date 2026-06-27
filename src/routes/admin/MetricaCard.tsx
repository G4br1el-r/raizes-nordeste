// Card simples de indicador usado no dashboard da matriz.
interface MetricaCardProps {
  titulo: string;
  valor: string;
  detalhe?: string;
}

export function MetricaCard({ titulo, valor, detalhe }: MetricaCardProps) {
  return (
    <div className="bg-white border border-areia rounded-xl p-4">
      <p className="text-sm text-cafe/60">{titulo}</p>
      <p className="font-display text-2xl font-bold text-barro mt-1">
        {valor}
      </p>
      {detalhe && <p className="text-xs text-cafe/50 mt-1">{detalhe}</p>}
    </div>
  );
}
