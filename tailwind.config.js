module.exports = {
  mode: 'jit',
  purge: ['./resources/views/**/*.edge'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
