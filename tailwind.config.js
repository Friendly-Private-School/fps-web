/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'xs':'400px',
      'sm':'480px',
      'md':'768px',
      'lg':'976px',
      'xl':'1440px'
    },
    extend: {
      colors: {
        'primary':'#42b426',
        'secondary':'#07230e',
        'accent':'#33ff00'
      }
    },
  },
  plugins: [],
}

