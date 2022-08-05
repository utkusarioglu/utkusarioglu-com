import { type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavView from "_views/nav/Nav.view";
import { MASKS, TRANSITIONS } from "_constants";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { useWindow } from "_hooks/window/window.hook";
import { homeNavX, homeNavY } from "_utils/positioning.utils";
import type { MotionVariantRecord } from "_types/vendors/framer-motion.types";
import { type NavLayoutProps } from "./Nav.layout.types";
import { useLayoutContext } from "_contexts/layout/Layout.context";

const NavLayout: FC<NavLayoutProps> = ({ titleRef }) => {
  const { navigation } = useLayoutContext();
  const { isHome } = useEnhancedRouter();
  const { isSm } = useDeviceQuery();
  const window = useWindow();

  if (!window) {
    return null;
  }

  const wMid = homeNavX(window);
  const hMid = homeNavY(window);
  const variants = computeVariants(isHome, isSm, hMid, wMid, navigation);

  return (
    <AnimatePresence initial={false}>
      {isHome ? (
        <motion.div
          layout
          key="center-nav"
          variants={variants.centerNav}
          initial="initial"
          animate="animate"
          exit="exit"
          className="top-0 z-20 bottom-0 fixed justify-center flex p-5"
          transition={TRANSITIONS.route}
        >
          <NavView mode="center" />
        </motion.div>
      ) : isSm ? (
        <motion.div
          layout
          key="bottom-nav"
          variants={variants.bottomNav}
          initial="initial"
          animate="animate"
          exit="exit"
          className={[
            "z-20 fixed justify-center left-0 right-0 bottom-0",
            "overflow-y-hidden overflow-x-auto scrollbar-hide",
          ].join(" ")}
          transition={TRANSITIONS.routeFast}
          style={{
            WebkitMaskImage: MASKS.nav,
            maskMode: "alpha",
            pointerEvents: navigation ? "all" : "none",
          }}
        >
          <div className="px-5">
            <NavView mode="bottom" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          layout
          key="aside-nav"
          variants={variants.asideNav}
          initial="initial"
          animate="animate"
          exit="exit"
          className="top-0 z-20 bottom-0 fixed justify-center flex"
          transition={TRANSITIONS.route}
          style={{
            pointerEvents: navigation ? "all" : "none",
          }}
        >
          <NavView mode="aside" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function computeVariants(
  isHome: boolean,
  isSm: boolean,
  hMid: number,
  wMid: number,
  navigation: boolean
): MotionVariantRecord<"div"> {
  return {
    centerNav: {
      initial: {
        x: 0,
        y: isSm ? hMid : 0,
        opacity: 0,
      },
      animate: {
        x: isHome && !isSm ? wMid : 0,
        y: 0,
        opacity: 1,
      },
      exit: {
        x: 0,
        y: isSm ? hMid : 0,
        opacity: 0,
      },
    },
    asideNav: {
      initial: {
        x: wMid,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: navigation ? 1 : 0,
      },
      exit: {
        x: wMid,
        opacity: 0,
      },
    },
    bottomNav: {
      initial: {
        y: 60,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: navigation ? 1 : 0,
      },
      exit: {
        y: 60,
        opacity: 0,
      },
    },
  };
}

export default NavLayout;