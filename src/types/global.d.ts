declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpeg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

interface HTMLCanvasElement {
  convertToBlob?: (options: any) => Promise<Blob>;
}

declare namespace NodeJS {
  /**
   * @dev
   * 1- Stringified number
   * 2- Enum
   * 3- Hex
   */
  interface ProcessEnv {
    manifestProps: string; // #1
    IMG_ZOOM_MARGIN: string; // #1
    MAX_W_CONTENT: string; // #1

    IMG_ZOOM_MARGIN: string; // #1
    MAX_W_CONTENT: string;

    APP_NAME: string;
    DOMAIN: string;

    NODE_ENV: string; // #2

    BRAND: string; // #3
    CANVAS_LIGHT: string; // #3
    PRIMARY_LIGHT: string; // #3
    SECONDARY_LIGHT: string; // #3
    TERTIARY_LIGHT: string; // #3
    LOWEST_LIGHT: string; // #3
    LOW_LIGHT: string; // #3
    LOW_LIGHT: string; // #3
    HIGH_LIGHT: string; // #3
    HIGHEST_LIGHT: string; // #3

    CANVAS_DARK: string; // #3
    PRIMARY_DARK: string; // #3
    SECONDARY_DARK: string; // #3
    TERTIARY_DARK: string; // #3
    LOWEST_DARK: string; // #3
    LOW_DARK: string; // #3
    HIGH_DARK: string; // #3
    HIGHEST_DARK: string; // #3
    SUBDOMAIN: string; // #3
  }
}
