module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
