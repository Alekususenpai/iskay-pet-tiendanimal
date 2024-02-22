/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#639605',
        'primary-dark': '#486C05',
        'banner-green': '#7AB800',
        'banner-red': '#CC292B',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      textUnderlineOffset: {
        8: '12px',
      }
    },
  },
  plugins: [],
}

