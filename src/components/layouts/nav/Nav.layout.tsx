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

const NavLayout: FC<NavLayoutProps> = ({ titleRef }) => {
  const { isHome } = useEnhancedRouter();
  const { isSm } = useDeviceQuery();
  const window = useWindow();

  if (!window) {
    return null;
  }

  const wMid = homeNavX(window);
  const hMid = homeNavY(window);
  const variants = computeVariants(isHome, isSm, hMid, wMid);

  return (
    <AnimatePresence initial={false}>
      {isHome ? (
        <motion.div
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
          }}
        >
          <div className="px-5">
            <NavView mode="bottom" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="aside-nav"
          variants={variants.asideNav}
          initial="initial"
          animate="animate"
          exit="exit"
          className="top-0 z-20 bottom-0 fixed justify-center flex"
          transition={TRANSITIONS.route}
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
  wMid: number
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
        opacity: 1,
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
        opacity: 1,
      },
      exit: {
        y: 60,
        opacity: 0,
      },
    },
  };
}

export default NavLayout;
