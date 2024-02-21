/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#511730',
        'secondary': '#8E443D',
        'accent': '#CB9173',
        'background': '#E0D68A',
        'text': '#320A28',
      },
    },
  },
  plugins: [],
}
