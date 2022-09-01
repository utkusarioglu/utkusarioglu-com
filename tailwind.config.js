const defaults = require("tailwindcss/defaultTheme");

function formatFontFamilies(...items) {
  return items.map((font) => `'${font}'`).slice(-1);
}

module.exports = {
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: formatFontFamilies("Quicksand")[0],
      display: formatFontFamilies("Galada")[0],
      heading: formatFontFamilies(
        // "Poppins",
        "Raleway"
      )[0],
    },
    fontSize: {
      ...defaults.fontSize,
      base: ["1.1rem", { lineHeight: "1.6rem" }],
    },
    gridTemplateColumns: {
      resume: "50vw 15vw auto",
    },
    gridTemplateRows: {
      resume: "min max",
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
