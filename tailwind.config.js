module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        // Enter an Image into the bank
        // "retro-digital": "url('./img/retro_digital.gif')",
      }),
      fontFamily: {
        tourney: ['"Tourney"', "cursive"],
        CinzelDecorative: ["Cinzel\\ Decorative", "cursive"],
      },
      backgroundColor: theme => ({
        primary: "#fe5e56",
      }),
      animation: {
        "spin-slow": "spin 6s ease-in-out infinite",
        "spin-slow-reverse": "spin 6s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "wiggle-reverse": "wiggle-reverse 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        "wiggle-reverse": {
          "0%, 100%": { transform: "rotate(12deg)" },
          "50%": { transform: "rotate(-12deg)" },
        },
      },
    },
    screens: {
      xs: { min: "480px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    colors: {
      "Mexican-Pink": {
        light: "#fe7e77",
        DEFAULT: "#e52683",
        dark: "#cb4b44",
      },
      "Carolina-Blue": {
        light: "#fd6afd",
        DEFAULT: "#009ed6",
        dark: "#b131b1",
      },
      Cultured: {
        DEFAULT: "#F2F7F6",
      },
      "Dark-Purple": {
        DEFAULT: "#1E152A",
      },
      "Silver-Pink": {
        DEFAULT: "#C5AFA4",
      },
      celadon: {
        DEFAULT: "#ACF7C1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
