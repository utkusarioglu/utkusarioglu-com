import { createContext, useState, type FC, useContext } from "react";
import { PERLIN_PRESETS } from "_constants";
import type {
  CanvasSlice,
  PerlinConfig,
  ICanvasContext,
  CanvasContextProviderProps,
  SetConfig,
  OnFinished,
  PerlinDrawer,
  CanvasRef,
  UseCanvas,
  SetDependencies,
  InitializeDraw,
} from "./Canvas.context.types";
import {
  loadPerlinConfig,
  savePerlinConfig,
  deletePerlinConfig,
} from "_utils/local-storage.utils";
import {
  init,
  produceConfig,
  generateRandomConfig,
} from "./Canvas.context.logic";
import {
  initialValues,
  initialLastDrawStats,
} from "./Canvas.context.constants";

let drawer: PerlinDrawer | null = null;
let window: Window | null = null;
let ref: CanvasRef | null = null;

const CanvasContext = createContext(initialValues as ICanvasContext);

const CanvasContextProvider: FC<CanvasContextProviderProps> = ({
  children,
  theme,
}) => {
  const { produceConfig } = useCanvas();
  const [slice, setSlice] = useState<CanvasSlice>({
    config: produceConfig(PERLIN_PRESETS[theme]),
    lastDrawStats: initialLastDrawStats,
  });

  const onFinished: OnFinished = (lastDrawStats) => {
    setSlice((slice) => ({ ...slice, lastDrawStats }));
  };

  const setConfig: SetConfig = (config) => {
    setSlice({
      config,
      lastDrawStats: initialLastDrawStats,
    });
  };

  return (
    <CanvasContext.Provider
      value={{
        ...slice,
        onFinished,
        setConfig,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas: UseCanvas = () => {
  const { config, onFinished, setConfig, lastDrawStats } =
    useContext(CanvasContext);

  const setDependencies: SetDependencies = ({
    ref: refObj,
    window: windowObj,
  }) => {
    window = windowObj;
    ref = refObj;
  };

  const initializeDraw: InitializeDraw = (customConfig) => {
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

  const draw = async (config: PerlinConfig) => {
    setConfig(config);
    return initializeDraw(config);
  };

  return {
    presets: PERLIN_PRESETS,
    config,
    lastDrawStats,
    setDependencies,
    draw,
    produceConfig,
    generateRandomConfig,
    loadFromLocalStorage: loadPerlinConfig,
    saveToLocalStorage: savePerlinConfig,
    removeFromLocalStorage: deletePerlinConfig,
  };
};

export default CanvasContextProvider;
