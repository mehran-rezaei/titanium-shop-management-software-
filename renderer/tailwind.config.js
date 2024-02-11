const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      maingreen: "#00A5A5",
      borderGreen: "#00CEC9",
      ///////////////////
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      buttons: "var(--color-buttons)",
      typography: "var(--color-typography)",
      border: "var(--color-border)",
      tableHeader: "var( --color-tableHeader)",
      tableRowhover: "var( --color-tableRowhover)",
      tableBody: "var(--color-tableBody)",
      icon: "var( --color-icon)",
    },
    extend: {},
  },
  plugins: [],
};
