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
        'primary': '#4D1A7F',
        'secondary': '#6D329A',
        'accent': '#35125B',
        'background': '#2E0D48',
        'text': '#B3A0C0',
      },
    },
  },
  plugins: [],
}
