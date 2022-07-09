import { MutableRefObject } from "react";
import { type Theme } from "_types/theme.types";
import {
  loadPerlinConfig,
  savePerlinConfig,
  deletePerlinConfig,
} from "_utils/local-storage.utils";
import { produceConfig, generateRandomConfig } from "./perlin.hook";

export type Draw = (customConfig?: PerlinConfig) => Promise<void>;
type UsePerlinReturn = {
  draw: Draw;
  setDependencies: SetDependencies;
  config: PerlinConfig;
  updateConfig: UpdateConfig;
  saveToLocalStorage: typeof savePerlinConfig;
  loadFromLocalStorage: typeof loadPerlinConfig;
  removeFromLocalStorage: typeof deletePerlinConfig;
  produceConfig: typeof produceConfig;
  presets: PerlinPresets;
  generateRandomConfig: typeof generateRandomConfig;
} & DrawPerlinReturn;

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
export type UsePerlin = () => UsePerlinReturn;

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
  duration: number;
  jpgDataUrl: string;
  pngDataUrl: string;
}

export interface PerlinTargetParams {
  canvas: Transferable;
  width: number;
  height: number;
}
