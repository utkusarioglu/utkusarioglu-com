import {
  type DrawPerlinParams,
  type DrawPerlinReturn,
} from "_contexts/canvas/Canvas.context.types";
import { Perlin } from "./perlin.worker.logic";
import { SetCanvasArgs, CreateImageOptions } from "./perlin.worker.types";

let activeConfigId: string = "";
let canvas: HTMLCanvasElement;
let width: number;
let height: number;
let ctx: CanvasRenderingContext2D;

export function setCanvas(args: SetCanvasArgs) {
  canvas = args.canvas;
  width = args.width;
  height = args.height;
}

export async function perlinFactory({
  configId,
  config,
  handler,
}: DrawPerlinParams): Promise<DrawPerlinReturn> {
  const {
    hueOffset,
    hueRange,
    seed,
    freq,
    particleCount,
    particleSize,
    saturation,
    luminance,
    maxDuration,
  } = config;
  activeConfigId = configId;
  const startTime = Date.now();
  const noise = new Perlin(seed);
  const period = 1 / freq;

  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "transparent";
  ctx.fillRect(0, 0, width, height);

  const particles = [];

  for (let i = 1; i <= particleCount; i++) {
    const p1 = {
      x: Math.random() * width,
      y: height / 2 + Math.random() * 50,
      a: 0,
    };
    particles.push(p1);
    particles.push({
      x: p1.x,
      y: p1.y,
      a: Math.PI,
    });
  }

  const clamp = (hue: number, min: number, max: number) => {
    return Math.max(Math.min(hue, max), min);
  };

  const drawFrame = () => {
    const results = [];
    let skipped = 0;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (
        p.x < 0 - particleSize ||
        p.y < 0 - particleSize ||
        p.x > width ||
        p.y > height
      ) {
        skipped++;
        continue;
      }
      const v = noise.perlin2(p.x * period, p.y * period);
      // const hue = clamp(
      //   Math.floor(v * hueRange) + hueOffset,
      //   hueOffset,
      //   hueOffset + hueRange
      // );
      const hue = Math.floor(v * hueRange) + hueOffset;
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${luminance}%)`;
      ctx.fillRect(p.x, p.y, particleSize, particleSize);
      p.h++;
      const a = v * 2 * Math.PI + p.a;
      p.x += Math.cos(a);
      results.push((p.y += Math.sin(a)));
    }
    return {
      results,
      done: skipped === particles.length,
    };
  };

  const requestFrame =
    requestAnimationFrame ||
    (async (callback) => setTimeout(callback, 1000 / 60));

  return new Promise((resolve) => {
    const frame = async function () {
      if (activeConfigId === configId) {
        const { results, done } = drawFrame();
        if (!done && Date.now() - startTime < maxDuration) {
          requestFrame(frame);
        } else {
          const [jpgDataUrl, pngDataUrl] = await Promise.all([
            await createJpg(),
            await createPng(),
          ]);
          resolve({
            finished: true,
            duration: Date.now() - startTime,
            jpgDataUrl,
            pngDataUrl,
            handler,
            config,
          });
        }
        return results;
      }
    };

    requestFrame(frame);
  });
}

async function createImage(options: CreateImageOptions): Promise<string> {
  try {
    const handleBlob = (blob: Blob) => {
      const dataURL = new FileReaderSync().readAsDataURL(blob);
      return dataURL;
    };
    if (!!canvas.convertToBlob && !!FileReaderSync) {
      return canvas.convertToBlob(options).then(handleBlob);
    }
    if (!!canvas.toBlob && !!FileReaderSync) {
      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(handleBlob(blob))),
          options.type,
          options.type === "image/jpeg" && options.quality;
      });
    }
    return canvas.toDataURL(options.type);
  } catch (e) {
    return Promise.resolve("");
  }
}

export async function createJpg(): Promise<string> {
  const options: CreateImageOptions = { type: "image/jpeg", quality: 1 };
  return createImage(options);
}

export function createPng() {
  const options: CreateImageOptions = { type: "image/png" };
  return createImage(options);
}

onmessage = function ({ data: { type, args } }) {
  switch (type) {
    case "perlinFactory":
      perlinFactory(args).then((duration) => postMessage(duration));
      break;
    case "setCanvas":
      setCanvas(args);
      break;
    case "createJpg":
      postMessage(createJpg());
      break;
    case "createPng":
      postMessage(createPng());
      break;
  }
};
