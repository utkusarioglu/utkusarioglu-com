import { useEffect, useRef, type FC } from "react";
import { useCanvas } from "_contexts/canvas/Canvas.context";
import { useTheme } from "_hooks/theme/theme.hook";
import { type CanvasViewProps } from "./Canvas.view.types";

const CanvasView: FC<CanvasViewProps> = ({ window }) => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const {
    setDependencies,
    loadFromLocalStorage,
    presets,
    produceConfig,
    draw,
  } = useCanvas();
  const { getActive } = useTheme();

  useEffect(() => {
    setDependencies({ ref: canvasRef, window });
    const storageTheme = loadFromLocalStorage();
    if (storageTheme) {
      draw(storageTheme);
    } else {
      const config = produceConfig(presets[getActive()]);
      draw(config);
    }
    /* esnext-disable react-hooks/exhaustive-deps */
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default CanvasView;
