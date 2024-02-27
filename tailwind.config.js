/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: '#4C4C6D',
        tertiary: '#FFA500',
      },
    },
  },
  plugins: [],
}

