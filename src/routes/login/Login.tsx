import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

// Tela de autenticacao. No prototipo o login e conceitual: nao ha
// backend, entao qualquer email/senha valido avanca. O objetivo aqui
// e representar o fluxo de entrada exigido nos requisitos.
export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function entrar() {
    // Validacao basica de interface (sem backend)
    if (!email.includes('@')) {
      setErro('Informe um e-mail válido.');
      return;
    }
    if (senha.length < 4) {
      setErro('A senha deve ter pelo menos 4 caracteres.');
      return;
    }
    setErro('');
    navigate('/inicio');
  }

  return (
    <div className="max-w-sm mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-display text-2xl font-bold text-barro">
          Raízes do Nordeste
        </h1>
        <p className="text-sm text-cafe/60 mt-1">
          Entre para fazer seu pedido
        </p>
      </div>

      <div className="bg-milho/20 border border-milho rounded-lg px-3 py-2 mb-6 text-center">
        <p className="text-xs text-cafe/80">
          💡 Modo demonstração: use qualquer e-mail válido e uma senha
          com no mínimo 4 caracteres para testar.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
            className="w-full border border-areia rounded-lg px-3 py-2 focus:outline-none focus:border-barro"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="senha">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="••••••"
            className="w-full border border-areia rounded-lg px-3 py-2 focus:outline-none focus:border-barro"
          />
        </div>

        {erro && <p className="text-sm text-barro">{erro}</p>}

        <Button onClick={entrar} className="w-full">
          Entrar
        </Button>
      </div>
    </div>
  );
}
