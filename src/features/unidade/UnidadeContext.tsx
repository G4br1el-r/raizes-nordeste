import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Unidade } from '../../types';

// Guarda qual unidade o cliente escolheu. O cardapio depende disso,
// entao a informacao precisa ficar disponivel em varias telas.
interface UnidadeContextType {
  unidade: Unidade | null;
  selecionarUnidade: (unidade: Unidade) => void;
}

const UnidadeContext = createContext<UnidadeContextType | undefined>(undefined);

export function UnidadeProvider({ children }: { children: ReactNode }) {
  const [unidade, setUnidade] = useState<Unidade | null>(null);

  function selecionarUnidade(nova: Unidade) {
    setUnidade(nova);
  }

  return (
    <UnidadeContext.Provider value={{ unidade, selecionarUnidade }}>
      {children}
    </UnidadeContext.Provider>
  );
}

// Hook para consumir o contexto com checagem de uso correto
export function useUnidade() {
  const ctx = useContext(UnidadeContext);
  if (!ctx) {
    throw new Error('useUnidade precisa estar dentro de UnidadeProvider');
  }
  return ctx;
}
