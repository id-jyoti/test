/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],   // clean modern
        serif: ['Merriweather', 'serif'], // elegant serif
        mono: ['Fira Code', 'monospace'], // optional coding style
      },
    },
  },
  plugins: [],
  darkMode: "class", // important
};
