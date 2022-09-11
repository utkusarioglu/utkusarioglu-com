import { PERLIN_PRESETS } from "_config";
import { Theme } from "_types/theme.types";
import {
  DrawPerlinReturn,
  PerlinConfig,
  PerlinPreset,
  InitParams,
  PerlinDrawer,
  PerlinTargetMessage,
  DrawPerlinMessage,
  InitializeDraw,
  CanvasRef,
  SetDependencies,
} from "./Canvas.context.types";

let drawer: PerlinDrawer | null = null;
export let offscreen: Transferable;
export let worker: Worker;
let window: Window | null = null;
let ref: CanvasRef | null = null;

function init({ canvas, width, height }: InitParams): PerlinDrawer {
  if (canvas.transferControlToOffscreen) {
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
          handler: "offscreenWorker",
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
        handler: "main",
      });
    };
  }
}

export function produceConfig(
  preset: PerlinPreset,
  seed?: number
): PerlinConfig {
  return {
    ...preset,
    seed: seed || Math.round(Math.random() * 10000),
  };
}

export function adjustConfig(
  preset: PerlinConfig,
  isSm: boolean,
  theme: Theme
) {
  return {
    ...preset,
    ...(isSm && {
      particleCount: Math.ceil(preset.particleCount / 4),
      freq: Math.ceil(preset.freq / 2),
    }),
    ...(theme === "light" &&
      preset.name === PERLIN_PRESETS.asSmoothAsSilk.name && {
        luminance: 50,
      }),
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

export const initializeDraw: InitializeDraw = ({ onFinished, config }) => {
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
  return drawer(config, configId).then(onFinished);
};

export const setDependencies: SetDependencies = ({
  ref: refObj,
  window: windowObj,
}) => {
  window = windowObj;
  ref = refObj;
};
