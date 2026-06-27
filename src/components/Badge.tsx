import type { ReactNode } from 'react';

// Etiqueta pequena usada para marcar produtos (sazonal, indisponivel etc).
interface BadgeProps {
  children: ReactNode;
  cor?: 'milho' | 'folha' | 'cafe';
}

export function Badge({ children, cor = 'milho' }: BadgeProps) {
  const cores = {
    milho: 'bg-milho/20 text-barro',
    folha: 'bg-folha/20 text-folha',
    cafe: 'bg-cafe/10 text-cafe',
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${cores[cor]}`}
    >
      {children}
    </span>
  );
}
