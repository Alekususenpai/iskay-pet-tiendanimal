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
        },
        textUnderlineOffset: {
          8: '12px',
        }
      },
    },
    plugins: [],
  }

