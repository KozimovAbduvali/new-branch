/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'righteous': ["Righteous", 'sans-serif'],
        'inter': 'Inter',
        'urbanist': 'Urbanist'
      },
      maxWidth: {
        'base': '75rem'
      },
      colors: {
        'primary': '#1C1814',
        'secondary': '#14110E',
        'hover': '#C99E71'
      },
      backgroundImage: {
        'hero-image': 'url(../images/hero-image.png)'
      }
    },
  },
  plugins: [],
}

