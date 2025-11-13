/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        backgroundcolor:"#1A1A1D",
        goldenhighlights: "#D4AF37"
      }
    },
  },
  plugins: [],
}

