import MImg from "_primitives/framer-motion/m-img.primitive";
import { useEffect, useRef, useState, type FC } from "react";
import { COLORS, TRANSITIONS } from "_constants";
import type {
  EnhancedImageProps,
  GetDims,
  EndZoom,
  OnLoad,
  CancelZoom,
} from "./EnhancedImage.primitive.types";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { useLayoutContext } from "_contexts/layout/Layout.context";
import { getProgressBar } from "_utils/progress-bar.util";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { produceSizes } from "./EnhancedImage.primitive.utils";
import c from "classnames";

const INITIAL_SCALE = 1.2;
const PLACEHOLDER_SCALE = 1.3;
const INITIAL_IMG = { transform: `scale(${INITIAL_SCALE})`, opacity: 0 };
const MAX_EXPECTED_IMAGE_WIDTH = 1920 * 2;

const EnhancedImage: FC<EnhancedImageProps> = ({
  className,
  src: img,
  alt,
  credits,
  allowZoom = true,
  maxResponsiveWidth = MAX_EXPECTED_IMAGE_WIDTH,
}) => {
  const imgRef = useRef<HTMLImageElement>();
  const containerRef = useRef<HTMLDivElement>();
  const { route } = useEnhancedRouter();
  const { navigation, canvas, content, setLayout } = useLayoutContext();
  const { isSm } = useDeviceQuery();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgZoomed, setImgZoomed] = useState(false);
  const [loadingDialogShown, setLoadingDialogShown] = useState(false);
  const zoomEnabled = allowZoom && !isSm;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (imgZoomed) {
      timeout = setTimeout(() => {
        setLoadingDialogShown(true);
      }, 800);
    } else {
      clearTimeout(timeout);
      setLoadingDialogShown(false);
    }
    return () => clearTimeout(timeout);
  }, [imgZoomed]);

  const getBorderRadius = () =>
    getComputedStyle(containerRef.current).borderRadius;

  const getDims: GetDims = () => {
    if (!imgRef.current) {
      console.log("imgRef unavailable, using center of the screen");
      return {
        top: window.innerHeight / 2,
        left: window.innerWidth / 2,
        width: 0,
        height: 0,
        borderRadius: "20px",
      };
    }
    const rect = imgRef.current.getBoundingClientRect();
    const borderRadius = getBorderRadius();

    return {
      top: rect.y,
      left: rect.x,
      width: rect.width,
      height: rect.height,
      borderRadius,
    };
  };

  const endZoom: EndZoom = () => setImgZoomed(false);

  const onLoad: OnLoad = () => {
    getProgressBar().finish();
  };

  const cancelZoom: CancelZoom = () => {
    getProgressBar().finish();
    setImgZoomed(false);
    setLayout({
      navigation: true,
      canvas: true,
      content: true,
      imageViewer: false,
    });
  };

  const sendToImageViewer = () => {
    if (zoomEnabled) {
      getProgressBar().start();
      setImgZoomed(true);
      setLayout({
        navigation,
        canvas,
        content,
        imageViewer: {
          img,
          alt,
          requesterRoute: route,
          endZoom,
          getDims,
          onLoad,
        },
      });
    }
  };

  return (
    <div className="mb-5">
      <div
        ref={containerRef}
        className={c("overflow-hidden relative", className)}
        style={{
          letterSpacing: 0,
          wordSpacing: 0,
          fontSize: 0,
          width: "100%",
        }}
      >
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={img.placeholder}
          className="w-full"
          style={{
            filter: "blur(20px)",
            transform: `scale(${PLACEHOLDER_SCALE})`,
          }}
          alt={alt}
        />
        <div
          className={c(
            COLORS.baseText,
            "absolute top-0 right-0 bottom-0 left-0",
            "flex text-base items-center justify-center"
          )}
        >
          Loading...
        </div>

        <MImg
          layout
          ref={imgRef}
          initial={INITIAL_IMG}
          animate={
            imgLoaded
              ? {
                  opacity: 1,
                  transform: "scale(1)",
                }
              : INITIAL_IMG
          }
          transition={TRANSITIONS.route}
          src={img.src}
          srcSet={img.srcSet}
          sizes={produceSizes(img.images, maxResponsiveWidth)}
          className={c(
            "absolute top-0 h-full w-full object-cover overflow-hidden block",
            {
              "cursor-pointer": allowZoom && !isSm,
            }
          )}
          onLoad={() => setImgLoaded(true)}
          alt={alt}
          {...(allowZoom && {
            onClick: sendToImageViewer,
          })}
        />

        {imgZoomed && loadingDialogShown && (
          <div className="absolute bottom-0 w-full pt-6 pb-8 backdrop-blur-md">
            <div className="m-auto w-min">
              <span className={c(COLORS.paragraph, "text-base inline w-min")}>
                Loading...
              </span>
              <span
                className={c(
                  COLORS.paragraph,
                  COLORS.canvasControlInput,
                  "text-base px-4 py-2 inline ml-3 rounded-md cursor-pointer"
                )}
                onClick={cancelZoom}
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </div>
      {credits && (
        <div className={c(COLORS.secondaryText, "text-center")}>{credits}</div>
      )}
    </div>
  );
};

export default EnhancedImage;
