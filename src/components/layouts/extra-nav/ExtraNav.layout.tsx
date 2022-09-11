import { type FC } from "react";
import { AnimatePresence } from "framer-motion";
import MDiv from "_primitives/framer-motion/m-div.primitive";
import ExtraNavView from "_views/extra-nav/ExtraNav.view";
import { TRANSITIONS, MOTION_VARIANTS } from "_config";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { useWindow } from "_hooks/window/window.hook";
import { homeNavX, homeNavY } from "_utils/positioning.utils";
import { type ExtraNavLayoutProps } from "./ExtraNav.layout.types";
import { type MotionVariantRecord } from "_types/vendors/framer-motion.types";
import { useLayoutContext } from "_contexts/layout/Layout.context";

const ExtraNavLayout: FC<ExtraNavLayoutProps> = ({ titleRef }) => {
  const { navigation } = useLayoutContext();
  const { isHome } = useEnhancedRouter();
  const { isSm } = useDeviceQuery();
  const window = useWindow();

  if (!window) {
    return null;
  }

  const wMid = homeNavX(window);
  const hMid = homeNavY(window);

  const variants: MotionVariantRecord<"div"> = {
    asideControls: {
      initial: {
        x: isSm ? 0 : wMid,
        y: isSm ? hMid : 0,
        opacity: 0,
      },
      animate: {
        x: 0,
        y: 0,
        opacity: navigation ? 1 : 0,
      },
      exit: {
        x: isSm ? 0 : wMid,
        y: isSm ? hMid : 0,
        opacity: 0,
      },
    },
  };

  return (
    <AnimatePresence initial={false}>
      {isHome ? (
        isSm ? (
          <MDiv
            key="extra-home-sm"
            variants={variants.asideControls}
            initial="initial"
            animate="animate"
            exit="exit"
            // TODO print: shouldn't be here, but it's still required in `print`
            className="fixed bottom-0 left-0 py-5 z-30 print:hidden"
            transition={TRANSITIONS.route}
          >
            <ExtraNavView mode="aside" />
          </MDiv>
        ) : (
          <MDiv
            key="extra-home-bg"
            variants={MOTION_VARIANTS.opacity}
            initial="none"
            animate="full"
            exit="none"
            className="fixed top-0 right-0 p-5 z-30"
            transition={TRANSITIONS.route}
          >
            <ExtraNavView mode="center" />
          </MDiv>
        )
      ) : (
        !isSm && (
          <MDiv
            key="extra-route-bg"
            variants={variants.asideControls}
            initial="initial"
            animate="animate"
            exit="exit"
            // TODO print: shouldn't be here, but it's still required in `print`
            className="fixed bottom-0 left-0 py-5 z-30 print:hidden"
            transition={TRANSITIONS.route}
          >
            <ExtraNavView mode="aside" />
          </MDiv>
        )
      )}
    </AnimatePresence>
  );
};

export default ExtraNavLayout;
