import { type FC, useState, type PointerEventHandler, useEffect } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import CanvasControlView from "_views/canvas-control/CanvasControl.view";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import { COLORS, TRANSITIONS, MOTION_VARIANTS } from "_constants";
import { CanvasControlLayoutProps } from "./CanvasControl.layout.types";
import CanvasControlTitleButtonView from "_views/canvas-control-title-button/CanvasControlTitleButton.view";
import { useLayoutContext } from "_contexts/layout/Layout.context";
import { isAndroid } from "react-device-detect";
import {
  getCanvasControlsFirstVisit,
  setCanvasControlsVisitHappened,
} from "_utils/local-storage.utils";

const CanvasControlLayout: FC<CanvasControlLayoutProps> = ({
  dragConstraintsRef,
}) => {
  const isFirstVisit = getCanvasControlsFirstVisit();
  const { setLayout } = useLayoutContext();
  const [helpEnabled, setHelpEnabled] = useState(isFirstVisit);
  const dragControls = useDragControls();
  const [maximized, setMaximized] = useState(true);
  const { isSm } = useDeviceQuery();
  const toggleHelp = () => {
    setHelpEnabled((current) => !current);
  };
  useEffect(() => setCanvasControlsVisitHappened, []);

  const startDrag: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!isSm) {
      dragControls.start(event);
    }
  };

  const minimize = () => {
    setMaximized(false);
    setLayout({ navigation: false });
  };

  const maximize = () => {
    setMaximized(true);
    setLayout({ navigation: true });
  };

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {maximized ? (
        <motion.div
          key="canvas-control-layout-maximized"
          drag={true}
          dragControls={dragControls}
          dragMomentum={false}
          dragListener={false}
          dragConstraints={dragConstraintsRef}
          variants={MOTION_VARIANTS.opacity}
          initial="none"
          animate="full"
          exit="none"
          whileDrag="o7"
          transition={TRANSITIONS.routeFast}
          className={[
            "flex flex-col overflow-hidden",
            COLORS.canvasControlsBg,
            COLORS.canvasControlBorder,
            isSm
              ? "absolute top-16 bottom-4 left-0 right-0 mb-12 !transform-none"
              : "relative h-[450px] w-[400px] border-[1px] rounded-lg ",
            isAndroid ? "" : "backdrop-blur-sm ",
          ].join(" ")}
        >
          <div
            className={`px-5 p-3 flex ${COLORS.windowTitle}`}
            onPointerDown={startDrag}
          >
            <div
              className={["text-lg font-bold grow", COLORS.paragraph].join(" ")}
            >
              Canvas controls
            </div>
            <CanvasControlTitleButtonView
              onClick={toggleHelp}
              isActive={helpEnabled}
            >
              ?
            </CanvasControlTitleButtonView>
            <CanvasControlTitleButtonView onClick={minimize} isActive={false}>
              ▼
            </CanvasControlTitleButtonView>
          </div>
          <ErrorBoundary FallbackComponent={ErrorFallbackView}>
            <CanvasControlView
              minimize={minimize}
              helpEnabled={helpEnabled}
              firstVisit={isFirstVisit}
            />
          </ErrorBoundary>
        </motion.div>
      ) : (
        <motion.button
          key="fixed canvas-control-layout-minimized"
          variants={MOTION_VARIANTS.opacity}
          initial="none"
          animate="full"
          onClick={maximize}
          className={[
            "bottom-0 px-4 py-1 rounded-md",
            COLORS.canvasControlsBg,
            COLORS.canvasControlBorder,
            COLORS.paragraph,
            isSm ? "mb-0" : "mb-5",
          ].join(" ")}
        >
          ▲
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default CanvasControlLayout;
