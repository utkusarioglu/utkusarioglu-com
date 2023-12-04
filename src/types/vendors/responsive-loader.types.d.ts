declare module "responsive-loader" {
  interface ResponsiveImageOutput {
    src: string;
    srcSet: string;
    placeholder: string | undefined;
    images: { path: string; width: number; height: number }[];
    width: number;
    height: number;
    toString: () => string;
  }
}

declare module "*!rl" {
  const src: ResponsiveImageOutput;
  export default src;
}
