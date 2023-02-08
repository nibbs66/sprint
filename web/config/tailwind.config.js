/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('../public/images/running-1944798.jpeg') ",
        joggers: "url('../public/images/running.jpg')",
        otherRunners: "url('../public/images/sprintHolder.jpg')",
        header:
          "url('../public/images/cropped-header-zw-11_voorbeeld_3_2-1.jpg')",
      },
      animation: {
        colorTransition: 'bgScroll 10s infinite alternate',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        bgScroll: {
          '0%': { backgroundPosition: 'left' },
          '100%': { backgroundPosition: 'right' },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
