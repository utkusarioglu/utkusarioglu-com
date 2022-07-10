import {
  DrawPerlinReturn,
  PerlinConfig,
  PerlinPreset,
  InitParams,
  PerlinDrawer,
  PerlinTargetMessage,
  DrawPerlinMessage,
} from "./Canvas.context.types";

export let offscreen: Transferable;
export let worker: Worker;

export function init({ canvas, width, height }: InitParams): PerlinDrawer {
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
