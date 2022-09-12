const defaults = require("tailwindcss/defaultTheme");
const commonConfig = require("./common.config.json");

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
    extend: {
      colors: {
        base: {
          dark: commonConfig.BASE_DARK,
          light: commonConfig.BASE_LIGHT,
        },
        canvas: {
          dark: commonConfig.CANVAS_DARK,
          light: commonConfig.CANVAS_LIGHT,
        },
        primary: {
          dark: commonConfig.PRIMARY_DARK,
          light: commonConfig.PRIMARY_LIGHT,
        },
        secondary: {
          dark: commonConfig.SECONDARY_DARK,
          light: commonConfig.SECONDARY_LIGHT,
        },
        tertiary: {
          dark: commonConfig.TERTIARY_DARK,
          light: commonConfig.TERTIARY_LIGHT,
        },
        quaternary: {
          dark: commonConfig.QUATERNARY_DARK,
          light: commonConfig.QUATERNARY_LIGHT,
        },
      },
      maxWidth: {
        content: `${commonConfig.MAX_W_CONTENT}px`,
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
