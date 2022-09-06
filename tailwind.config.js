/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        lightBrown: "#b79b6e",
        brightBrown: "#ad9970",
        customGray:'#89897a',
      },
      translate: {
        '4.25': '150%',
        
      }
    },
    
  },
  plugins: [],
};
