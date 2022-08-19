/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['"Poppins"'],
      // heading: ['PS2P'],
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '984px',
        xl: '1170px',
        '2xl': '1170px',
      },
    },
    extend: {
      colors: {
        red: {
          DEFAULT: '#D50E50',
        },
        yellow: {
          DEFAULT: '#FBAD18',
        },
        blue: {
          DEFAULT: '#20A6C1',
        },
        purple: {
          DEFAULT: '#93268F',
        },
        green: {
          DEFAULT: '#54AD1E',
        },
        gray: {
          DEFAULT: '#252E3A',
        },
      },
    },
  },
  plugins: [],
}
