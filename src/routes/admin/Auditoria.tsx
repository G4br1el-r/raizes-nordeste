import { registrosAuditoria } from '../../data/admin';
import { Badge } from '../../components/Badge';

// Cores do badge por tipo de operacao sensivel
const corPorTipo = {
  cancelamento: 'cafe',
  desconto: 'milho',
  ajuste: 'folha',
} as const;

export function Auditoria() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="font-semibold">Auditoria de operações sensíveis</h2>
        <p className="text-sm text-cafe/60">
          Rastreabilidade de cancelamentos, descontos e ajustes
        </p>
      </div>

      <div className="bg-white border border-areia rounded-xl divide-y divide-areia">
        {registrosAuditoria.map((registro) => (
          <div key={registro.id} className="p-4">
            <div className="flex items-center justify-between mb-1">
              <Badge cor={corPorTipo[registro.tipo]}>
                {registro.tipo}
              </Badge>
              <span className="text-xs text-cafe/50">{registro.data}</span>
            </div>
            <p className="text-sm">{registro.descricao}</p>
            <p className="text-xs text-cafe/50 mt-1">
              {registro.unidade} · {registro.responsavel}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
