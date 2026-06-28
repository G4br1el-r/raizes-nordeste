import { useState } from 'react';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';

// Tela do programa de fidelidade. O ponto central aqui e a LGPD:
// o cliente precisa dar consentimento EXPLICITO antes de participar.
// Sem consentimento, nao mostramos dados de perfil.
export function Fidelidade() {
  const [consentiu, setConsentiu] = useState(false);
  const [marcado, setMarcado] = useState(false);

  // Antes do consentimento: explica o uso dos dados e pede opt-in
  if (!consentiu) {
    return (
      <div className="max-w-md mx-auto px-4 py-8">
        <h1 className="font-display text-2xl font-bold mb-2">
          Programa Raízes
        </h1>
        <p className="text-cafe/70 mb-6">
          Acumule pontos e ganhe descontos. Para participar, precisamos do
          seu consentimento para tratar alguns dados.
        </p>

        <div className="bg-white border border-areia rounded-xl p-4 mb-6">
          <h2 className="font-semibold mb-2">Como usamos seus dados</h2>
          <ul className="text-sm text-cafe/70 space-y-1 list-disc list-inside">
            <li>Registrar seus pontos e histórico de pedidos</li>
            <li>Oferecer descontos conforme sua frequência</li>
            <li>Enviar campanhas que combinam com seu perfil</li>
          </ul>
          <p className="text-xs text-cafe/50 mt-3">
            Você pode revogar o consentimento e solicitar a exclusão dos seus
            dados a qualquer momento, conforme a LGPD.
          </p>
        </div>

        <label className="flex items-start gap-3 mb-6 cursor-pointer">
          <input
            type="checkbox"
            id="consentimento"
            className="mt-1"
            checked={marcado}
            onChange={(e) => setMarcado(e.target.checked)}
          />
          <span className="text-sm text-cafe/80">
            Li e concordo com o uso dos meus dados para o programa de
            fidelidade.
          </span>
        </label>

        <Button
          id="btn-participar"
          disabled={!marcado}
          onClick={() => setConsentiu(true)}
          className="w-full"
        >
          Participar do programa
        </Button>
      </div>
    );
  }

  // Apos consentimento: mostra os dados do programa
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="font-display text-2xl font-bold">Seus pontos</h1>
        <Badge cor="folha">Ativo</Badge>
      </div>

      <div className="bg-barro text-renda rounded-xl p-6 mb-6 text-center">
        <p className="text-sm opacity-80">Saldo atual</p>
        <p className="font-display text-4xl font-bold">340 pts</p>
        <p className="text-sm opacity-80 mt-1">
          Faltam 160 pts para o próximo desconto
        </p>
      </div>

      <div className="bg-white border border-areia rounded-xl p-4">
        <h2 className="font-semibold mb-2">Seus direitos (LGPD)</h2>
        <div className="space-y-2 text-sm">
          <button className="text-folha hover:underline block">
            Baixar meus dados
          </button>
          <button className="text-barro hover:underline block">
            Revogar consentimento e excluir dados
          </button>
        </div>
      </div>
    </div>
  );
}
