import type {
  CanvasSlice,
  DrawPerlinReturn,
  PerlinConfig,
  Handlers
} from "./Canvas.context.types";

export const initialLastDrawStats: DrawPerlinReturn = {
  finished: false,
  duration: 0,
  jpgDataUrl: "",
  pngDataUrl: "",
  handler: "" as Handlers,
  config: {} as PerlinConfig
};

export const initialValues: CanvasSlice = {
  config: {} as PerlinConfig,
  lastDrawStats: initialLastDrawStats,
};
