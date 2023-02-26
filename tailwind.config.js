// /** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: "class", //change media or class
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      nunito: "Nunito, sans-serif",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        xl: '50px',
      }
    },
    extend: {},
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ],
};
