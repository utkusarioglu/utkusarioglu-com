import { type FC, useState, PointerEventHandler } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import CanvasControlView from "_views/canvas-control/CanvasControl.view";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import { COLORS, TRANSITIONS } from "_constants";
import { CanvasControlLayoutProps } from "./CanvasControl.layout.types";
import CanvasControlTitleButtonView from "_views/canvas-control-title-button/CanvasControlTitleButton.view";
import { type MotionVariants } from "_types/vendors/framer-motion.types";

const CanvasControlLayout: FC<CanvasControlLayoutProps> = ({
  dragConstraintsRef,
}) => {
  const [helpEnabled, setHelpEnabled] = useState(false);
  const dragControls = useDragControls();
  const [maximized, setMaximized] = useState(true);
  const { isSm } = useDeviceQuery();
  const toggleHelp = () => {
    setHelpEnabled((current) => !current);
  };
  const startDrag: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!isSm) {
      dragControls.start(event);
    }
  };

  return (
    <AnimatePresence initial={false}>
      {maximized ? (
        <motion.div
          drag={true}
          dragControls={dragControls}
          dragMomentum={false}
          dragListener={false}
          dragConstraints={dragConstraintsRef}
          variants={variants}
          initial="hidden"
          animate="animate"
          exit="exit"
          whileDrag="whileDrag"
          transition={TRANSITIONS.routeFast}
          className={[
            "relative rounded-lg flex flex-col border-[1px]",
            "backdrop-blur-sm overflow-hidden w-[400px]",
            COLORS.canvasControlsBg,
            COLORS.canvasControlBorder,
            isSm ? "h-[350px] mb-12" : "h-[450px]",
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
            <CanvasControlTitleButtonView
              onClick={() => setMaximized(false)}
              isActive={false}
            >
              ▼
            </CanvasControlTitleButtonView>
          </div>
          <ErrorBoundary FallbackComponent={ErrorFallbackView}>
            <CanvasControlView
              minimize={() => setMaximized(false)}
              helpEnabled={helpEnabled}
            />
          </ErrorBoundary>
        </motion.div>
      ) : (
        <motion.button
          variants={variants}
          initial="hidden"
          animate="animate"
          exit="exit"
          onClick={() => setMaximized(true)}
          className={[
            `bottom-0 right-0 px-4 py-1 rounded-md`,
            COLORS.canvasControlsBg,
            COLORS.canvasControlBorder,
            COLORS.paragraph,
            isSm ? "mb-12" : "mb-5",
          ].join(" ")}
        >
          ▲
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const variants: MotionVariants<"div"> | MotionVariants<"button"> = {
  hidden: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  whileDrag: { opacity: 0.7 },
};

export default CanvasControlLayout;
