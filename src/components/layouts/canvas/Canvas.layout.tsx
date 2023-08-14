import MDiv from "_primitives/framer-motion/m-div.primitive";
import CanvasView from "_views/canvas/Canvas.view";
import { TRANSITIONS, TRANSPARENT_MASK } from "_config";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { useWindow } from "_hooks/window/window.hook";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { produceAnimate } from "./Canvas.layout.utils";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import { isIOS, isAndroid } from "react-device-detect";
import { useLayoutContext } from "_contexts/layout/Layout.context";
import c from "classnames";

const CanvasLayout = () => {
  const { navigation, canvas } = useLayoutContext();
  const { isCanvas, isHome } = useEnhancedRouter();
  const window = useWindow();
  const { isSm } = useDeviceQuery();

  if (!window) {
    return null;
  }

  return (
    <MDiv
      layout
      initial={{
        WebkitMaskImage: TRANSPARENT_MASK,
      }}
      animate={produceAnimate({
        isHome,
        isCanvas,
        isSm,
        isAndroid,
        navigation,
        canvas,
      })}
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
      className={c(
        "absolute h-full w-full top-0 left-0 z-0",
        "pointer-events-none flex justify-center",
        "print:hidden"
      )}
    >
      <ErrorBoundary FallbackComponent={ErrorFallbackView}>
        <CanvasView window={window} />
      </ErrorBoundary>
    </MDiv>
  );
};

export default CanvasLayout;
