/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        8: '12px',
      }
    },
  },
  plugins: [],
}

