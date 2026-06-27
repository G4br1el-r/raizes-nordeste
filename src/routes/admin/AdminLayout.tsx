import { Link, Outlet, useLocation } from 'react-router-dom';

// Layout do painel da matriz. Tem navegacao propria, separada da
// jornada do cliente. Usa <Outlet> para renderizar a sub-rota ativa.
export function AdminLayout() {
  const location = useLocation();

  const abas = [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/auditoria', label: 'Auditoria' },
  ];

  return (
    <div className="min-h-screen bg-renda">
      <header className="bg-folha text-renda">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-lg font-bold">
                Painel da Matriz
              </h1>
              <p className="text-xs text-renda/70">Raízes do Nordeste</p>
            </div>
            <Link to="/" className="text-sm hover:underline">
              ← Voltar ao app
            </Link>
          </div>

          <nav className="flex gap-4 mt-3">
            {abas.map((aba) => {
              const ativa = location.pathname === aba.to;
              return (
                <Link
                  key={aba.to}
                  to={aba.to}
                  className={`text-sm pb-1 border-b-2 ${
                    ativa
                      ? 'border-milho font-semibold'
                      : 'border-transparent text-renda/70'
                  }`}
                >
                  {aba.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
