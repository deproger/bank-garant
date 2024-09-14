/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1470px',
      '2xl': '1920px'
    },
    extend: {
      colors: {
        'blue': '#0078D4',
        'light-blue': '#7BBAFF'
      },
      fontFamily: {
        'fam': ['RoadRadio', 'sans-serif']
      },
      boxShadow: {
        'w': '0px 1px 8px 0px rgba(34, 60, 80, 0.2)'
      },

    },
  },
  plugins: [],
}

