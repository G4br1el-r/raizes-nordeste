/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "Raizes do Nordeste" - tons quentes e terrosos
        barro: '#C25B3A',      // terracota (cor principal)
        milho: '#E8A33D',      // amarelo milho
        folha: '#5B7B4A',      // verde folha
        renda: '#FAF6EE',      // off-white (fundo)
        cafe: '#3D2B22',       // marrom escuro (texto)
        areia: '#EADCC3',      // bege claro (cards/bordas)
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
