// Formata valores em reais. Centralizado para nao repetir a logica
// de formatacao espalhada pelas telas.
export function formatarReais(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
