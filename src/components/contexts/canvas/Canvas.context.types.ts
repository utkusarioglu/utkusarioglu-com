import { type ReactNode } from "react";
import { Theme } from "_types/theme.types";
import { MutableRefObject } from "react";
import {
  loadPerlinConfig,
  savePerlinConfig,
  deletePerlinConfig,
} from "_utils/local-storage.utils";
import { produceConfig, generateRandomConfig } from "./Canvas.context.logic";

export type CanvasSlice = {
  config: PerlinConfig;
  lastDrawStats: DrawPerlinReturn;
};

type CanvasContextActions = {
  setConfig: (config: PerlinConfig) => void;
  onFinished: (params: DrawPerlinReturn) => void;
};

export type ICanvasContext = CanvasSlice & CanvasContextActions;

export type SetConfig = (config: PerlinConfig) => void;

export type OnFinished = (drawerReturn: DrawPerlinReturn) => void;

export interface CanvasContextProviderProps {
  children: ReactNode;
  theme: Theme;
}

export type InitializeDraw = (customConfig?: PerlinConfig) => Promise<void>;

type UseCanvasReturn = {
  config: PerlinConfig;
  presets: PerlinPresets;
  lastDrawStats: DrawPerlinReturn;

  setDependencies: SetDependencies;
  draw: UpdateConfig;
  saveToLocalStorage: typeof savePerlinConfig;
  loadFromLocalStorage: typeof loadPerlinConfig;
  removeFromLocalStorage: typeof deletePerlinConfig;
  produceConfig: typeof produceConfig;
  generateRandomConfig: typeof generateRandomConfig;
};

export type PerlinPresets = Record<
  | Theme
  | "thickBlackLines"
  | "thinBlackLines"
  | "blueMarble"
  | "drunkWindowsPipes",
  PerlinPreset
>;
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
}

export interface DrawPerlinReturn {
  finished: boolean;
  duration: number;
  jpgDataUrl: string;
  pngDataUrl: string;
}

export interface PerlinTargetParams {
  canvas: Transferable;
  width: number;
  height: number;
}
