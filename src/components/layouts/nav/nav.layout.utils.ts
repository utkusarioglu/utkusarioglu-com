import { homeNavX, homeNavY } from "_utils/positioning.utils";
import { MotionVariantRecord } from "_types/vendors/framer-motion.types";

export function createVariants(
  isHome: boolean,
  isSm: boolean,
  isNavEnabled: boolean
) {
  const wMid = homeNavX(window);
  const hMid = homeNavY(window);
  const newVariants = computeVariants(isHome, isSm, hMid, wMid, isNavEnabled);
  return newVariants;
}

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
