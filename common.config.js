/**
 * This module is the top source of config that supplies app
 * configuration to both tailwind and nextjs.
 *
 * It has to be a flat list as these values are given to the app through
 * environment variables
 */
module.exports = {
  IMG_ZOOM_MARGIN: 20,
  APP_NAME: "Utku Sarioglu",
  DOMAIN: "utkusarioglu.com",
  MAX_W_CONTENT: 620,

  BRAND: "#f59e0b",

  BASE_LIGHT: "#e5e5e5",
  CANVAS_LIGHT: "#a3a3a3",
  PRIMARY_LIGHT: "#f59e0b",
  SECONDARY_LIGHT: "#0EA5E9",
  TERTIARY_LIGHT: "#404040",
  QUATERNARY_LIGHT: "#a8a29e",
  PARAGRAPH_DARK: "#000000",

  BASE_DARK: "#171717",
  CANVAS_DARK: "#262626",
  PRIMARY_DARK: "#f59e0b",
  SECONDARY_DARK: "#7DD3FC",
  TERTIARY_DARK: "#78716c",
  QUATERNARY_DARK: "#78716c",
  PARAGRAPH_DARK: "#FFFFFF",
};
