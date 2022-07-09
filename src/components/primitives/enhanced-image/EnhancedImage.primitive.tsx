import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, type FC } from "react";
import { COLORS, TRANSITIONS } from "_constants";
import { EnhancedImageProps } from "./EnhancedImage.primitive.types";
import { useDeviceQuery } from "_hooks/device/device.hook";
import Head from "next/head";

const INITIAL_SCALE = 1.2;
const PLACEHOLDER_SCALE = 1.3;
const INITIAL_IMG = { transform: `scale(${INITIAL_SCALE})`, opacity: 0 };

const EnhancedImage: FC<EnhancedImageProps> = ({
  className,
  src: img,
  alt,
  credits,
  allowZoom = true,
}) => {
  const imgRef = useRef<HTMLImageElement>();
  const containerRef = useRef<HTMLDivElement>();
  const { isSm } = useDeviceQuery();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgZoomed, setImgZoomed] = useState(false);

  const zoomedImgMargin = isSm ? 0 : 20;
  const getDims = (rect: DOMRect) => ({
    top: rect.y,
    left: rect.x,
    width: rect.width,
    height: rect.height,
    borderRadius: getComputedStyle(containerRef.current).borderRadius,
  });

  return (
    <div className="mb-5">
      <div
        ref={containerRef}
        className={["overflow-hidden relative", className].join(" ")}
        style={{
          letterSpacing: 0,
          wordSpacing: 0,
          fontSize: 0,
          width: "100%",
        }}
      >
        <img
          src={img.placeholder}
          className="w-full"
          style={{
            filter: "blur(20px)",
            transform: `scale(${PLACEHOLDER_SCALE})`,
          }}
          alt={alt}
        />
        <motion.img
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
          className="absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden block"
          onLoad={() => setImgLoaded(true)}
          alt={alt}
          {...(allowZoom && { onClick: () => setImgZoomed(true) })}
        />
        {allowZoom && (
          <AnimatePresence>
            {imgZoomed && (
              <Head>
                <meta
                  key="viewport"
                  name="viewport"
                  content={[
                    "minimum-scale=1",
                    "initial-scale=1",
                    "width=device-width",
                    "shrink-to-fit=no",
                    "user-scalable=yes",
                    "viewport-fit=cover",
                  ].join(", ")}
                />
              </Head>
            )}
            {imgZoomed && (
              <motion.div
                key="zoomed-img-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={[
                  "fixed top-0 left-0 right-0 bottom-0 z-40",
                  COLORS.bgDarker,
                ].join(" ")}
              />
            )}
            {imgLoaded && imgZoomed && (
              <motion.div
                key="zoomed-img"
                className="fixed cursor-pointer overflow-hidden z-40"
                initial={getDims(imgRef.current.getBoundingClientRect())}
                animate={{
                  top: zoomedImgMargin,
                  left: zoomedImgMargin,
                  width: window.innerWidth - zoomedImgMargin * 2,
                  height: window.innerHeight - zoomedImgMargin * 2,
                  borderRadius: "0px",
                }}
                exit={getDims(imgRef.current.getBoundingClientRect())}
                transition={TRANSITIONS.route}
                onClick={() => setImgZoomed(false)}
              >
                <img
                  src={img.src}
                  srcSet={img.srcSet}
                  className="w-full h-full object-contain"
                  alt={alt}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      {credits && (
        <div className={["text-center", COLORS.secondaryText].join(" ")}>
          {credits}
        </div>
      )}
    </div>
  );
};

export default EnhancedImage;
