import {
  IMG_ZOOM_MARGIN,
  IMG_MAXIMIZED_BORDER_RADIUS,
  CONTENT_ANIMATION_Y_DRIFT,
} from "_config";
import { ImageViewerSpecs } from "_contexts/layout/Layout.context.types";

export function produceNoneVariant(imageViewer: ImageViewerSpecs) {
  const { top, left, width, height, borderRadius } = imageViewer.getDims();
  return {
    top,
    left,
    width,
    height,
    borderRadius: produceBorderRadius(borderRadius, width, height),
  };
}

export function produceFullVariant({ img }: ImageViewerSpecs) {
  const common = {
    borderRadius: IMG_MAXIMIZED_BORDER_RADIUS,
  };
  const doubleMargin = IMG_ZOOM_MARGIN * 2;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const screenAspectRatio =
    (windowWidth - doubleMargin) / (windowHeight - doubleMargin);
  const srcAspectRatio = img.width / img.height;

  if (screenAspectRatio > srcAspectRatio) {
    const height = windowHeight - doubleMargin;
    const width = height * srcAspectRatio;
    return {
      ...common,
      top: IMG_ZOOM_MARGIN,
      left: (windowWidth - width) / 2,
      width,
      height,
      borderRadius: IMG_MAXIMIZED_BORDER_RADIUS,
    };
  } else {
    const width = windowWidth - doubleMargin;
    const height = width / srcAspectRatio;
    return {
      ...common,
      top: (windowHeight - height) / 2,
      left: IMG_ZOOM_MARGIN,
      width,
      height,
    };
  }
}

export function produceExitVariant(
  imageViewer: ImageViewerSpecs,
  requesterRoute: string,
  currentRoute: string
) {
  if (requesterRoute !== currentRoute) {
    const full = produceFullVariant(imageViewer);
    return {
      ...full,
      top: full.top + CONTENT_ANIMATION_Y_DRIFT,
      opacity: 0,
    };
  }
  return produceNoneVariant(imageViewer);
}

function produceBorderRadius(b: string, height: number, width: number) {
  const borderRadiusNumeric = +b.slice(0, b.length - 2);
  const halfSize = Math.max(height, width) / 2;
  return Math.min(halfSize, borderRadiusNumeric);
}

export function updateMotionStyles(
  imageViewer: ImageViewerSpecs,
  motionStyles: any
) {
  Object.entries(produceNoneVariant(imageViewer)).forEach(([key, value]) => {
    motionStyles[key].set(value);
  });
}
