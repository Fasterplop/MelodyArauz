

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 0.8s infinite',
      },
      boxShadow:{
        '2xl': '0px 25px 40px -12px',
      },
      backgroundImage:{
        'healthbg': "url('../src/assets/images/background.webp')",
        'servicesbg': "url('../src/assets/images/background.jpg')",
        'servicesbg2': "url('../src/assets/images/servicesbg.png')",

      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        arimo: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};