// Promocoes e campanhas ativas da rede. No prototipo sao estaticas,
// mas representam campanhas segmentadas que a matriz dispararia.
export interface Promocao {
  id: string;
  titulo: string;
  descricao: string;
  desconto: string;
  validade: string;
  destaque?: boolean;
}

export const promocoes: Promocao[] = [
  {
    id: 'promo1',
    titulo: 'Combo Café da Manhã',
    descricao: 'Cuscuz + café coado + suco por um preço especial',
    desconto: '20% OFF',
    validade: 'Válido até 30/06',
    destaque: true,
  },
  {
    id: 'promo2',
    titulo: 'Arraiá Raízes',
    descricao: 'Na compra de qualquer bolo junino, ganhe um café',
    desconto: 'Brinde',
    validade: 'Durante todo o São João',
  },
  {
    id: 'promo3',
    titulo: 'Clube de Fidelidade',
    descricao: 'Acumule 500 pontos e troque por uma tapioca grátis',
    desconto: 'Recompensa',
    validade: 'Permanente',
  },
];
