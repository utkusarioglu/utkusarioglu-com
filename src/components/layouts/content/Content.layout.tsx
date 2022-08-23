import { type FC, forwardRef } from "react";
import { motion } from "framer-motion";
import {
  COLORS,
  TRANSITIONS,
  MASKS,
  CONTENT_ANIMATION_Y_DRIFT,
} from "_constants";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import { MotionVariants } from "_types/vendors/framer-motion.types";
import FooterLayout from "_layouts/footer/Footer.layout";
import { ContentLayoutProps } from "./Content.layout.types";
import { useLayoutContext } from "_contexts/layout/Layout.context";

/* eslint-disable react/display-name */
const ContentLayout = forwardRef<HTMLDivElement, ContentLayoutProps>(
  (
    {
      children,
      alignment = "self-center",
      footer = true,
      smShimBottom = true,
      smShimTop = true,
      overflowY = true,
      allowEntireViewport = false,
      verticalMargins = true,
    },
    dragConstraintsRef
  ) => {
    const { content, contentMask } = useLayoutContext();
    const { isSm } = useDeviceQuery();

    return (
      <div
        ref={dragConstraintsRef}
        style={{
          ...(isSm &&
            !allowEntireViewport &&
            contentMask && {
              WebkitMaskImage: MASKS.content,
              maskMode: "alpha",
            }),
        }}
        className="absolute left-0 right-0 h-full w-full overflow-hidden"
      >
        <motion.div
          layout
          key="content-container"
          variants={{
            initial: { y: CONTENT_ANIMATION_Y_DRIFT, opacity: 0 },
            animate: { y: 0, opacity: content ? 1 : 0 },
            exit: { y: CONTENT_ANIMATION_Y_DRIFT, opacity: 0 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={TRANSITIONS.route}
          className={[
            "w-full h-full overflow-x-hidden",
            overflowY ? "overflow-y-auto" : "overflow-y-hidden",
            isSm ? "" : `scrollbar ${COLORS.scrollbar}`,
            allowEntireViewport ? "" : "py-5 flex justify-center ",
            verticalMargins && "px-5",
          ].join(" ")}
        >
          <div
            className={
              allowEntireViewport
                ? "w-full h-full"
                : ["max-w-prose", isSm && smShimTop ? "pt-12" : ""].join(" ")
            }
          >
            <div
              className={[
                "min-h-full",
                allowEntireViewport ? "h-full" : "flex flex-row",
              ].join(" ")}
            >
              <ErrorBoundary FallbackComponent={ErrorFallbackView}>
                <article
                  className={
                    allowEntireViewport ? "h-full" : `h-max ${alignment}`
                  }
                >
                  {children}
                </article>
              </ErrorBoundary>
            </div>
            {allowEntireViewport ? (
              <div className="fixed bottom-0 left-0 right-0">
                <FooterLayout />
              </div>
            ) : (
              footer && <FooterLayout />
            )}
            {isSm && smShimBottom && !allowEntireViewport && (
              <div className="h-20" />
            )}
          </div>
        </motion.div>
      </div>
    );
  }
);

const variants: MotionVariants<"div"> = {};

export default ContentLayout;
