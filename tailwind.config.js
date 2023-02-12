const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d',
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-0': {
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d',
      transform: 'rotateY(0deg)',
    },
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "main": ["Space Grotesk", "system-ui", "Roboto", "sans-serif"],
        "mono": ["Space Mono", "monospace"],
        "robo-mono": ["Roboto Mono", "monospace"]
      },
      height: {
        'frame': '48rem'
      },
      fontSize: {
        'sm-title': '4rem',
        'title': '15rem'
      }
    },
  },
  plugins: [rotateY],
}
