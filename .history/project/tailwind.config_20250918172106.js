/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette from provided screenshots
        brand: {
          primary: '#2f7ebe', // Primary blue
          primaryDark: '#23648f',
          accent1: '#e97451', // Warm accent
          accent2: '#f58870',
          tint1: '#ffe4d0', // Warm tint
          tint2: '#c0e2f7', // Cool tint
        },
      },
      fontFamily: {
        // Fallbacks until custom headline fonts are provided
        sans: ['Raleway', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        heading: ['\"Blauer Nue\"', 'Raleway', 'ui-sans-serif', 'system-ui'],
        display: ['\"Earth Green\"', 'Raleway', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
