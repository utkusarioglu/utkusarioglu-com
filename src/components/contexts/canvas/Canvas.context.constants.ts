import type {
  CanvasSlice,
  DrawPerlinReturn,
  PerlinConfig,
} from "./Canvas.context.types";

export const initialLastDrawStats: DrawPerlinReturn = {
  finished: false,
  duration: 0,
  jpgDataUrl: "",
  pngDataUrl: "",
};

export const initialValues: CanvasSlice = {
  config: {} as PerlinConfig,
  lastDrawStats: initialLastDrawStats,
};
