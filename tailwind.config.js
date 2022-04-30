module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        cherry: '#ff2424',
        lightCherry: '#ff5e5e',
        darkgrey: '#1e2024',
      }
    },
  },
  plugins: [],
}
