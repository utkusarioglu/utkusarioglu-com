import { useContext } from "react";
import { PerlinContext } from "_contexts/perlin.context";
import { PerlinConfig, PerlinPreset } from "_hooks/perlin/perlin.hook.types";
import { PERLIN_PRESETS } from "_constants";
import {
  loadPerlinConfig,
  savePerlinConfig,
  deletePerlinConfig,
} from "_utils/local-storage.utils";
import type {
  InitParams,
  PerlinDrawer,
  PerlinTargetMessage,
  DrawPerlinMessage,
  DrawPerlinReturn,
  CanvasRef,
  UsePerlin,
  SetDependencies,
  Draw,
} from "./perlin.hook.types";

let offscreen: Transferable;
let worker: Worker;
let drawer: PerlinDrawer | null = null;
let window: Window | null = null;
let ref: CanvasRef | null = null;

export function produceConfig(
  preset: PerlinPreset,
  seed?: number
): PerlinConfig {
  return {
    ...preset,
    seed: seed || Math.round(Math.random() * 10000),
  };
}

export function generateRandomConfig(): PerlinConfig {
  const hueOffset = Math.round(Math.random() * 360);
  const hueRange = Math.round(Math.random() * (360 - hueOffset));

  return {
    name: "Random",
    hueOffset,
    hueRange,
    freq: Math.round(Math.random() * 2000),
    particleCount: Math.round(Math.random() * 1000),
    particleSize: Math.round(Math.random() * 10),
    saturation: Math.round(Math.random() * 100),
    luminance: Math.round(Math.random() * 100),
    maxDuration: Math.round(Math.random() * 59900) + 100,
    seed: Math.round(Math.random() * 10000),
  };
}

function init({ canvas, width, height }: InitParams): PerlinDrawer {
  if (false && canvas.transferControlToOffscreen) {
    console.log("transferControlToOffscreen");
    if (!offscreen) {
      offscreen = canvas.transferControlToOffscreen();
      worker = new Worker(
        new URL("_workers/perlin.worker.ts", import.meta.url)
      );
      const message: PerlinTargetMessage = {
        type: "setCanvas",
        args: { canvas: offscreen, width, height },
      };
      worker.postMessage(message, [offscreen]);
    }

    return (config, configId) => {
      const postMessageArgs: DrawPerlinMessage = {
        type: "perlinFactory",
        args: {
          configId,
          config,
        },
      };
      worker.postMessage(postMessageArgs);

      return new Promise<DrawPerlinReturn>((resolve) => {
        worker.onmessage = function (e) {
          return resolve(e.data);
        };
      });
    };
  } else {
    const { perlinFactory, setCanvas } = require("_workers/perlin.worker");
    return (config: PerlinConfig, configId: string) => {
      setCanvas({ canvas, width, height });
      return perlinFactory({
        config,
        configId,
      });
    };
  }
}

export const usePerlin: UsePerlin = () => {
  const { config, onFinished, setConfig, duration, jpgDataUrl, pngDataUrl } =
    useContext(PerlinContext);

  const setDependencies: SetDependencies = ({
    ref: refObj,
    window: windowObj,
  }) => {
    window = windowObj;
    ref = refObj;
  };

  const draw: Draw = (customConfig = config) => {
    if (!ref || !window) {
      throw new Error("setDependencies need to be called before anything else");
    }
    if (!drawer) {
      drawer = init({
        canvas: ref.current,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    const configId = Math.random().toString().slice(2);
    return drawer(customConfig, configId).then(onFinished);
  };

  const updateConfig = async (config: PerlinConfig) => {
    setConfig(config);
    return draw(config);
  };

  return {
    setDependencies,
    draw,
    config,
    updateConfig,
    duration,
    jpgDataUrl,
    pngDataUrl,
    loadFromLocalStorage: loadPerlinConfig,
    saveToLocalStorage: savePerlinConfig,
    removeFromLocalStorage: deletePerlinConfig,
    produceConfig,
    presets: PERLIN_PRESETS,
    generateRandomConfig,
  };
};
