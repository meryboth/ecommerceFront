/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Negro
        secondary: '#ffffff', // Blanco
        accent: '#eaeaea', // Gris claro
        text: '#333333', // Gris oscuro para texto principal
        muted: '#666666', // Gris más claro para textos secundarios
      },
      fontFamily: {
        sans: ['Raleway', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
