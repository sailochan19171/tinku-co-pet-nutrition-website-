/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette from screenshot
        brand: {
          primary: '#2f7ebe', // blue
          primaryDark: '#23648f',
          accent1: '#e97451', // secondary warm
          accent2: '#f58870',
          tint1: '#ffe4d0',
          tint2: '#c0e2f7',
        },
      },
    },
  },
  plugins: [],
};
