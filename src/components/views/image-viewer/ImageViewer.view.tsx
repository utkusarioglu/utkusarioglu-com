import { useState, type FC } from "react";
import MImg from "_primitives/framer-motion/m-img.primitive";
import { useMotionValue, useAnimation } from "framer-motion";
import { TRANSITIONS } from "_constants";
import { useLayoutContext } from "_contexts/layout/Layout.context";
import type { ImageViewerSpecs } from "_contexts/layout/Layout.context.types";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import {
  produceNoneVariant,
  produceExitVariant,
  updateMotionStyles,
  produceFullVariant,
} from "./ImageViewer.view.logic";

interface ImageViewerViewProps {
  imageViewer: ImageViewerSpecs;
}

export const ImageViewerView: FC<ImageViewerViewProps> = ({ imageViewer }) => {
  const {
    img: { srcSet, src },
    alt,
    requesterRoute,
    endZoom,
    onLoad,
  } = imageViewer;
  const { route: currentRoute } = useEnhancedRouter();
  const { setLayout } = useLayoutContext();
  const [imgLoaded, setImgLoaded] = useState(false);
  const none = produceNoneVariant(imageViewer);
  const animate = useAnimation();
  const motionStyles = {
    top: useMotionValue(none.top),
    left: useMotionValue(none.left),
    width: useMotionValue(none.width),
    height: useMotionValue(none.height),
    borderRadius: useMotionValue(none.borderRadius),
  };

  return (
    <MImg
      layout
      key="zoomed-img-container"
      className="fixed cursor-pointer z-40 bg-contain bg-no-repeat bg-center"
      style={{
        visibility: imgLoaded ? "visible" : "hidden",
        ...motionStyles,
      }}
      src={src}
      srcSet={srcSet}
      alt={alt}
      animate={animate}
      exit={produceExitVariant(imageViewer, requesterRoute, currentRoute)}
      transition={TRANSITIONS.route}
      onClick={() => {
        endZoom();
        setLayout({
          navigation: true,
          content: true,
          canvas: true,
          imageViewer: false,
        });
      }}
      onLoad={() => {
        if (requesterRoute !== currentRoute) {
          return;
        }
        onLoad();
        updateMotionStyles(imageViewer, motionStyles);
        animate.start(produceFullVariant(imageViewer));
        setLayout({
          navigation: false,
          content: false,
          canvas: false,
        });
        setImgLoaded(true);
      }}
    />
  );
};

export default ImageViewerView;
