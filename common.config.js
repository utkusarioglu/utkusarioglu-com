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

  BRAND: "#44984F",
  CANVAS_LIGHT: "#4F6367",
  PRIMARY_LIGHT: "#52A25D",
  SECONDARY_LIGHT: "#357683",
  TERTIARY_LIGHT: "#7FA4AC",
  LOWEST_LIGHT: "#2F3B3D",
  LOW_LIGHT: "#C1CDD7",
  LOW_LIGHT: "#DAE1E7",
  HIGH_LIGHT: "#E6EBEF",
  HIGHEST_LIGHT: "#F9F8F1",

  CANVAS_DARK: "#49656F",
  PRIMARY_DARK: "#44984F",
  SECONDARY_DARK: "#7DD3FC",
  TERTIARY_DARK: "#49656F",
  LOWEST_DARK: "#04090B",
  LOW_DARK: "#0F171A",
  HIGH_DARK: "#161F22",
  HIGHEST_DARK: "#CCCCCC",
};
