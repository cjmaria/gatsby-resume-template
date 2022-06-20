const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      primary: '#F77F00',
      secondary: "#0078f7",
      neutral: colors.gray,
      white: '#FFF',
      background: '#efefef'
    },
    extend: {
      boxShadow: {
        'paper': '0px 0px 22px 11px rgba(0,0,0,0.15)',
      }
    },
  },
  variants: {},
  plugins: [],
  purge: false,
};
