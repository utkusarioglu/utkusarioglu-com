import { motion } from "framer-motion";
import CanvasView from "_views/canvas/Canvas.view";
import { TRANSITIONS, TRANSPARENT_MASK } from "_constants";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { useWindow } from "_hooks/window/window.hook";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { produceAnimate } from "./Canvas.layout.utils";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import { isIOS, isAndroid } from "react-device-detect";

const CanvasLayout = () => {
  const { isCanvas, isHome } = useEnhancedRouter();
  const window = useWindow();
  const { isSm } = useDeviceQuery();

  if (!window) {
    return null;
  }

  return (
    <motion.div
      initial={{
        WebkitMaskImage: TRANSPARENT_MASK,
      }}
      animate={produceAnimate({ isHome, isCanvas, isSm, isAndroid })}
      transition={TRANSITIONS.route}
      style={{
        ...(isIOS
          ? {
              maskComposite: "intersect",
            }
          : {
              WebkitMaskComposite: "destination-in",
              WebkitMaskRepeat: "no-repeat",
            }),
        maskMode: "alpha",
      }}
      className={[
        "fixed h-full w-full top-0 left-0 z-0",
        "pointer-events-none flex justify-center",
      ].join(" ")}
    >
      <ErrorBoundary FallbackComponent={ErrorFallbackView}>
        <CanvasView window={window} />
      </ErrorBoundary>
    </motion.div>
  );
};

export default CanvasLayout;
