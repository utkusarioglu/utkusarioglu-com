import { homeNavX } from "_utils/positioning.utils";

export function createVariants(isHome: boolean, isSm: boolean) {
  const wMid = homeNavX(window);
  const newVariants = computeVariants(isHome, isSm, wMid);
  return newVariants;
}

function computeVariants(isHome: boolean, isSm: boolean, wMid: number) {
  return {
    title: {
      animate: {
        x: isHome && !isSm ? wMid : 0,
      },
    },
  };
}
