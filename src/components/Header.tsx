import { Link, useLocation } from 'react-router-dom';
import { useCarrinho } from '../features/carrinho/CarrinhoContext';
import { useUnidade } from '../features/unidade/UnidadeContext';

// Rotas que NAO exibem o header do app (entrada, login, totem, admin).
// Cada uma tem seu proprio cabecalho ou nenhum.
const semHeader = ['/', '/login', '/totem'];

export function Header() {
  const { quantidadeTotal } = useCarrinho();
  const { unidade } = useUnidade();
  const location = useLocation();

  if (
    semHeader.includes(location.pathname) ||
    location.pathname.startsWith('/admin')
  ) {
    return null;
  }

  return (
    <header className="bg-cafe text-renda sticky top-0 z-10 shadow-md">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/inicio" className="font-display text-xl font-bold leading-tight">
          Raízes do Nordeste
          {unidade && (
            <span className="block text-xs font-body font-normal text-areia">
              {unidade.cidade} · {unidade.estado}
            </span>
          )}
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/promocoes"
            className="text-sm text-areia hover:text-renda hidden sm:block"
          >
            Promoções
          </Link>
          <Link
            to="/carrinho"
            className="relative bg-barro px-3 py-2 rounded-lg text-sm font-semibold"
          >
            Carrinho
            {quantidadeTotal > 0 && (
              <span className="absolute -top-2 -right-2 bg-milho text-cafe w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold">
                {quantidadeTotal}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
