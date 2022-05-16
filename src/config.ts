import type { NavItems } from "./components/views/nav/Nav.types";

/**
 * Config module is used for propagating config details for the app.
 * This pattern allows for .env variables to be all checked in a single
 * module instead of having conditionals in the rest of the app.
 *
 * Any computed config, which may be depended on multiple
 * environment variables or values that only become available during
 * runtime shall also be created here and consumed from this module
 */

// TODO Error checks for environment variables shall be implemented here

/**
 * Google analytics tracking id
 */
export const GA_TRACKING_ID = "UA-78365909-1";

/**
 * Contains the properties of items that will end up on the <nav> section.
 * Please refer to {@link NavItems} for the use of the `order` property,
 */
export const SOCIALS: NavItems = [
  {
    title: "Github",
    link: "https://github.com/utkusarioglu",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/utku-sarioglu/",
  },
  {
    title: "Twitter",
    link: "https://www.twitter.com/utkusarioglu",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/utkusarioglu",
  },
];

export const NAV_ROUTES: NavItems = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Resume",
    link: "resume",
  },
];
