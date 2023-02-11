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
  plugins: [],
}
