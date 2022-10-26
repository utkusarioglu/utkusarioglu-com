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

  CANVAS_LIGHT: "#0EA5E9",
  PRIMARY_LIGHT: "#f59e0b",
  SECONDARY_LIGHT: "#2C735F",
  TERTIARY_LIGHT: "#3E5459",
  QUATERNARY_LIGHT: "#3E5459",
  LOWEST_LIGHT: "#072026",
  LOW_LIGHT: "#d4d4d4",
  HIGH_LIGHT: "#e5e5e5",
  HIGHEST_LIGHT: "#e5e5e5",

  CANVAS_DARK: "#565656",
  PRIMARY_DARK: "#f59e0b",
  SECONDARY_DARK: "#7DD3FC",
  TERTIARY_DARK: "#78716c",
  QUATERNARY_DARK: "#78716c",
  LOWEST_DARK: "#171717",
  LOW_DARK: "#171717",
  HIGH_DARK: "#262626",
  HIGHEST_DARK: "#CCCCCC",
};
