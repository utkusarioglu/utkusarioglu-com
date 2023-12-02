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
  interface ProcessEnv {
    manifestProps: string; // stringified json
  }
}
