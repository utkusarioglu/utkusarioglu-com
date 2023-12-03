export interface SetCanvasArgs {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
}

export type CreateImageOptions = CreateImageOptionsPng | CreateImageOptionsJpg;

interface CreateImageOptionsPng {
  type: "image/png";
}

interface CreateImageOptionsJpg {
  type: "image/jpeg";
  quality: number;
}

export interface Particle {
  x: number;
  y: number;
  a: number;
  h?: number;
}
