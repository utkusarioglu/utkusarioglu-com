import { createContext, useState, type FC, type ReactNode } from "react";
import { type PerlinConfig } from "_hooks/perlin/perlin.hook.types";
import { PERLIN_PRESETS } from "_constants";
import { Theme } from "_types/theme.types";
import { usePerlin } from "_hooks/perlin/perlin.hook";
import { type DrawPerlinReturn } from "_hooks/perlin/perlin.hook.types";

type ContextValues = {
  config: PerlinConfig;
  duration: number;
  dataUrl: "";
};

export const initialValues: ContextValues = {
  config: {} as PerlinConfig,
  duration: 0,
  dataUrl: "",
};

type PerlinContext = {
  config: PerlinConfig;
  setConfig: (config: PerlinConfig) => void;
  // duration: number;
  // jpgDataUrl: string;
  // pngDataUrl: string;
  onFinished: (params: DrawPerlinReturn) => void;
} & DrawPerlinReturn;

// @ts-ignore
export const PerlinContext = createContext<PerlinContext>(initialValues);

type SetConfig = (config: PerlinConfig) => void;

interface PerlinProviderProps {
  children: ReactNode;
  theme: Theme;
}

export const PerlinProvider: FC<PerlinProviderProps> = ({
  children,
  theme,
}) => {
  const { produceConfig } = usePerlin();
  const [values, setValues] = useState<PerlinContext>({
    config: produceConfig(PERLIN_PRESETS[theme]),
    jpgDataUrl: "",
    pngDataUrl: "",
    duration: 0,
  } as PerlinContext);

  const onFinished = (drawerReturn: DrawPerlinReturn) => {
    setValues((values) => ({ ...values, ...drawerReturn }));
  };

  const setConfig: SetConfig = (config) => {
    setValues({
      config,
      duration: 0,
      jpgDataUrl: "",
      pngDataUrl: "",
    } as PerlinContext);
  };

  const value: PerlinContext = {
    config: values.config,
    setConfig,
    duration: values.duration,
    jpgDataUrl: values.jpgDataUrl,
    pngDataUrl: values.pngDataUrl,
    onFinished,
  };

  return (
    <PerlinContext.Provider value={value}>{children}</PerlinContext.Provider>
  );
};
