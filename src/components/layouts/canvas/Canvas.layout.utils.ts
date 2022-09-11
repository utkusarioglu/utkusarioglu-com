import { MASKS } from "_config";

interface ComputeMaskParams {
  isHome: boolean;
  isCanvas: boolean;
  isSm: boolean;
  isAndroid: boolean;
  navigation: boolean;
  canvas: boolean;
}

export function produceAnimate({
  isHome,
  isCanvas,
  isSm,
  isAndroid,
  navigation,
  canvas,
}: ComputeMaskParams) {
  const masks = [];
  let filter = "";

  // horizontal
  if (isHome) {
    if (isSm) {
      masks.push(MASKS.leftBleed);
    } else {
      masks.push(MASKS.homeBg);
    }
  } else if (isCanvas) {
    if (isSm) {
      masks.push(MASKS.horizontalOpaque);
    } else {
      if (!navigation) {
        masks.push(MASKS.horizontalOpaque);
      } else {
        masks.push(MASKS.canvasBgH);
      }
    }
  } else {
    if (!isAndroid) {
      filter = "blur(3px)";
    }
    if (isSm) {
      masks.push(MASKS.horizontalOpaque);
    } else {
      masks.push(MASKS.leftBleed);
    }
  }

  // vertical
  if (isSm) {
    if (isCanvas) {
      if (!navigation) {
        masks.push(MASKS.verticalOpaque);
      } else {
        masks.push(MASKS.canvasSmV);
      }
    } else if (!isHome) {
      masks.push(MASKS.notHomeSmV);
    } else {
      masks.push(MASKS.verticalOpaque);
    }
  } else {
    masks.push(MASKS.verticalOpaque);
  }

  return {
    WebkitMaskImage: masks.join(", "),
    filter,
    opacity: canvas ? 1 : 0,
  };
}
