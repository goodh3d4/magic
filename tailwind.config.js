/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'magic-eden': {
          primary: '#110d18', // Main background
          secondary: '#181423', // Section backgrounds
          accent: '#ed126d', // Button color
          'button-primary': '#ed126d',
          'button-primary-hover': '#ff1a7a',
          'button-primary-active': '#d40f5f',
          'button-primary-disabled': '#4d1b4a',
          'on-brand': '#FFFFFF',
          'disabled-on-brand': '#9B9B9B',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
} 