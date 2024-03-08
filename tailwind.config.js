/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#543D3D',
        secondary: '#c5afaf',
        tertiary: '#7f6767',
        quaternary: "#FFF2EB"
      },
      fontFamily: "DM Sans",
    },
  },
  plugins: [],
}

