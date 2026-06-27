import type { ButtonHTMLAttributes, ReactNode } from 'react';

// Botao reutilizavel com duas variacoes visuais.
// Componente "burro": so cuida da aparencia, a logica vem por props.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variante?: 'principal' | 'secundario';
}

export function Button({
  children,
  variante = 'principal',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'px-5 py-2.5 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  const estilos = {
    principal: 'bg-barro text-renda hover:bg-barro/90',
    secundario: 'bg-areia text-cafe hover:bg-areia/70',
  };

  return (
    <button className={`${base} ${estilos[variante]} ${className}`} {...props}>
      {children}
    </button>
  );
}
