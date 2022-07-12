import { createContext, useState, type FC, useContext } from "react";
import { PERLIN_PRESETS } from "_constants";
import type {
  CanvasSlice,
  PerlinConfig,
  ICanvasContext,
  CanvasContextProviderProps,
  SetConfig,
  OnFinished,
  UseCanvas,
} from "./Canvas.context.types";
import {
  loadPerlinConfig,
  savePerlinConfig,
  deletePerlinConfig,
} from "_utils/local-storage.utils";
import {
  produceConfig,
  initializeDraw,
  generateRandomConfig,
  setDependencies,
  adjustConfig,
} from "./Canvas.context.logic";
import {
  initialValues,
  initialLastDrawStats,
} from "./Canvas.context.constants";

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
  const [localStorageValues, setLocalStorageValues] =
    useState<PerlinConfig | null>(loadPerlinConfig());
  const { config, onFinished, setConfig, lastDrawStats } =
    useContext(CanvasContext);

  const draw = async (config: PerlinConfig) => {
    setConfig(config);
    return initializeDraw({ onFinished, config });
  };

  const saveToLocalStorage = (config: PerlinConfig) => {
    savePerlinConfig(config);
    setLocalStorageValues(config);
  };

  const removeFromLocalStorage = () => {
    deletePerlinConfig();
    setLocalStorageValues(null);
  };

  return {
    presets: PERLIN_PRESETS,
    config,
    lastDrawStats,
    setDependencies,
    draw,
    produceConfig,
    adjustConfig,
    generateRandomConfig,
    localStorageValues,
    saveToLocalStorage,
    removeFromLocalStorage,
  };
};

export default CanvasContextProvider;
