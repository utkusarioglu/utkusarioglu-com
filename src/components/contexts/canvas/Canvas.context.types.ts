import { type PropsWithChildren } from "react";
import { Theme } from "_types/theme.types";
import { MutableRefObject } from "react";
import {
  savePerlinConfig,
  deletePerlinConfig,
} from "_utils/local-storage.utils";
import {
  produceConfig,
  generateRandomConfig,
  adjustConfig,
} from "./Canvas.context.logic";

export type CanvasSlice = {
  config: PerlinConfig;
  lastDrawStats: DrawPerlinReturn;
};

type CanvasContextActions = {
  setConfig: SetConfig;
  onFinished: OnFinished;
};

export type ICanvasContext = CanvasSlice & CanvasContextActions;

export type SetConfig = (config: PerlinConfig) => void;

export type OnFinished = (drawerReturn: DrawPerlinReturn) => void;

export type CanvasContextProviderProps = PropsWithChildren<{
  theme: Theme;
}>;

export type InitializeDraw = (args: {
  onFinished: OnFinished;
  config: PerlinConfig;
}) => Promise<void>;

type UseCanvasReturn = {
  config: PerlinConfig;
  presets: PerlinPresets;
  lastDrawStats: DrawPerlinReturn;

  setDependencies: SetDependencies;
  draw: UpdateConfig;
  saveToLocalStorage: typeof savePerlinConfig;
  localStorageValues: PerlinConfig | null;
  removeFromLocalStorage: typeof deletePerlinConfig;
  produceConfig: typeof produceConfig;
  adjustConfig: typeof adjustConfig;
  generateRandomConfig: typeof generateRandomConfig;
};

export type PerlinPresets = Record<string, PerlinPreset>;

type UpdateConfig = (config: PerlinConfig) => Promise<void>;

export type SetDependencies = (args: SetDependenciesArgs) => void;

export type CanvasRef = MutableRefObject<HTMLCanvasElement>;
type SetDependenciesArgs = {
  window: Window;
  ref: CanvasRef;
};

export type UseCanvas = () => UseCanvasReturn;

export type PerlinDrawer = (
  p: PerlinConfig,
  configId: string
) => Promise<DrawPerlinReturn>;

export interface DrawPerlinMessage {
  type: "perlinFactory";
  args: DrawPerlinParams;
}

export interface PerlinTargetMessage {
  type: "setCanvas";
  args: PerlinTargetParams;
}

export type InitParams = {
  canvas: HTMLCanvasElement &
    Partial<{ transferControlToOffscreen: () => Transferable }>;
} & Omit<PerlinTargetParams, "canvas">;

export type PerlinConfig = {
  seed: number;
} & PerlinPreset;

export type PerlinPreset = {
  name: string;
  hueOffset: number; // 0 - 360
  hueRange: number; // 0 - 360
  freq: number;
  particleCount: number;
  particleSize: number;
  saturation: number;
  luminance: number;
  maxDuration: number;
};

export interface DrawPerlinParams {
  configId: string;
  config: PerlinConfig;
  handler: Handlers;
}

export type Handlers = "main" | "offscreenWorker";

export interface DrawPerlinReturn {
  finished: boolean;
  duration: number;
  jpgDataUrl: string;
  pngDataUrl: string;
  handler: Handlers;
  config: PerlinConfig;
}

export interface PerlinTargetParams {
  canvas: Transferable;
  width: number;
  height: number;
}
