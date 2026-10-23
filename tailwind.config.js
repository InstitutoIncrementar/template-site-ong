/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta neutra do modelo. Ao personalizar para uma ONG, troque só estes valores.
        // Usar sempre os nomes (bg-primary, text-accent...) em vez de hex soltos.
        primary: {
          DEFAULT: '#2F5D8A',
          dark: '#234668',
          light: '#E8EFF6',
        },
        accent: {
          DEFAULT: '#E0A030',
          dark: '#B97F14',
        },
        paper: {
          DEFAULT: '#FAFAF7',
          dark: '#F0EFE8',
        },
        ink: '#1F2933',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
