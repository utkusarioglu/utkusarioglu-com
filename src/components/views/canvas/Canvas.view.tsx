import { useEffect, useRef, type FC } from "react";
import { useCanvas } from "_contexts/canvas/Canvas.context";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { useTheme } from "_hooks/theme/theme.hook";
import { type CanvasViewProps } from "./Canvas.view.types";

/**
 * @dev
 * 1- Removes undefined from ref definition
 */
const CanvasView: FC<CanvasViewProps> = ({ window }) => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const { isSm } = useDeviceQuery();
  const {
    adjustConfig,
    setDependencies,
    localStorageValues,
    presets,
    produceConfig,
    draw,
  } = useCanvas();
  const { getActive } = useTheme();

  useEffect(
    () => {
      // @ts-ignore: #1
      setDependencies({ ref: canvasRef, window });
      if (localStorageValues) {
        draw(localStorageValues);
      } else {
        const config = adjustConfig(
          produceConfig(presets[getActive()]),
          isSm,
          getActive()
        );
        draw(config);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [canvasRef, window.innerWidth, window.innerHeight]
  );

  return (
    <canvas
      // @ts-ignore: #1
      ref={canvasRef}
      className="w-full h-full"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default CanvasView;
