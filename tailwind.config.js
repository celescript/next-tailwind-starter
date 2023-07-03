/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      offwhite: '#E2D9D2',
      white: '#FFFFFF',
      black: '#1F1F1F',
      blue: '#2D79C7',
      yellow: '#F2C94C',
      red: '#EB5757',
    },
  },
  plugins: [],
}
