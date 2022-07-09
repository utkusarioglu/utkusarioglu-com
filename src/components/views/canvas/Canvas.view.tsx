import { setConfig } from "next/config";
import { useEffect, useRef, type FC } from "react";
import { usePerlin } from "_hooks/perlin/perlin.hook";
import { useTheme } from "_hooks/theme/theme.hook";
import { type CanvasViewProps } from "./Canvas.view.types";

const CanvasView: FC<CanvasViewProps> = ({ window }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const {
    draw,
    setDependencies,
    loadFromLocalStorage,
    presets,
    produceConfig,
  } = usePerlin();
  const { getActive } = useTheme();

  useEffect(() => {
    setDependencies({ ref, window });
    const storageTheme = loadFromLocalStorage();
    if (storageTheme) {
      setConfig(storageTheme);
      draw(storageTheme);
    } else {
      const config = produceConfig(presets[getActive()]);
      setConfig(config);
      draw(config);
    }
    /* esnext-disable react-hooks/exhaustive-deps */
  }, [ref]);

  return (
    <canvas
      ref={ref}
      className="w-full h-full"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default CanvasView;
