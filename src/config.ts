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
