import { Link } from 'react-router-dom';

// Tela de entrada que representa a multicanalidade do sistema.
// O mesmo sistema atende tres canais; cada um tem uma porta de entrada.
// Isso evidencia, ja na interface, o requisito de multiplos canais.
const canais = [
  {
    to: '/login',
    titulo: 'Aplicativo',
    descricao: 'Peça pelo celular, acompanhe e acumule pontos',
    icone: '📱',
  },
  {
    to: '/totem',
    titulo: 'Totem de auto-atendimento',
    descricao: 'Faça seu pedido na loja pela tela touch',
    icone: '🖥️',
  },
  {
    to: '/login',
    titulo: 'Web',
    descricao: 'Acesse pelo navegador do computador',
    icone: '💻',
  },
];

export function SelecaoCanal() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl font-bold text-barro mb-2">
          Raízes do Nordeste
        </h1>
        <p className="text-cafe/70">Como você quer pedir hoje?</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {canais.map((canal) => (
          <Link
            key={canal.titulo}
            to={canal.to}
            className="bg-white border border-areia rounded-xl p-6 text-center hover:border-barro transition-colors"
          >
            <div className="text-4xl mb-3" aria-hidden>
              {canal.icone}
            </div>
            <h2 className="font-semibold mb-1">{canal.titulo}</h2>
            <p className="text-xs text-cafe/60">{canal.descricao}</p>
          </Link>
        ))}
      </div>

      <p className="text-center text-xs text-cafe/50 mt-8">
        Independente do canal, a jornada é a mesma: ver cardápio, pedir,
        pagar e acompanhar.
      </p>
    </div>
  );
}
