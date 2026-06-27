import type { Produto } from '../../types';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { formatarReais } from '../../components/formato';

// Card de um produto no cardapio. Componente de apresentacao:
// recebe o produto e a acao de adicionar por props.
interface ProdutoCardProps {
  produto: Produto;
  onAdicionar: (produto: Produto) => void;
}

export function ProdutoCard({ produto, onAdicionar }: ProdutoCardProps) {
  return (
    <div className="bg-white border border-areia rounded-xl p-4 flex gap-4">
      <div className="text-4xl" aria-hidden>
        {produto.imagem}
      </div>

      <div className="flex-1">
        <div className="flex items-start gap-2 flex-wrap">
          <h3 className="font-semibold">{produto.nome}</h3>
          {produto.sazonal && <Badge cor="milho">Junino</Badge>}
        </div>
        <p className="text-sm text-cafe/60 mt-1">{produto.descricao}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-display font-bold text-barro">
            {formatarReais(produto.preco)}
          </span>
          <Button onClick={() => onAdicionar(produto)} className="text-sm">
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
