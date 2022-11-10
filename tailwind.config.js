const defaults = require("tailwindcss/defaultTheme");
const commonConfig = require("./common.config");

function formatFontFamilies(...items) {
  return items.map((font) => `'${font}'`).slice(-1)[0];
}

module.exports = {
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: formatFontFamilies("Quicksand"),
      display: formatFontFamilies("Galada"),
      heading: formatFontFamilies("Raleway"),
    },
    fontSize: {
      ...defaults.fontSize,
      base: ["1.1rem", { lineHeight: "1.6rem" }],
    },
    gridTemplateColumns: {
      resume: "50vw 13vw auto",
    },
    gridTemplateRows: {
      resume: "min max",
    },
    extend: {
      colors: {
        paragraph: {
          dark: commonConfig.HIGHEST_DARK,
          light: commonConfig.LOWEST_LIGHT,
        },
        base: {
          dark: commonConfig.LOWEST_DARK,
          light: commonConfig.HIGHEST_LIGHT,
        },
        item: {
          dark: commonConfig.HIGH_DARK,
          light: commonConfig.LOW_LIGHT,
        },
        card: {
          dark: commonConfig.LOW_DARK,
          light: commonConfig.HIGH_LIGHT,
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
      },
      maxWidth: {
        content: `${commonConfig.MAX_W_CONTENT}px`,
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
