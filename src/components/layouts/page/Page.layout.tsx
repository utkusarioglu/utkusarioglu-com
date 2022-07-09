import { type FC, forwardRef } from "react";
import { motion } from "framer-motion";
import { COLORS, TRANSITIONS, MASKS } from "_constants";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import { MotionVariants } from "_types/vendors/framer-motion.types";
import FooterLayout from "_layouts/footer/Footer.layout";
import { PageLayoutProps } from "./Page.layout.types";

/* eslint-disable react/display-name */
const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  (
    {
      children,
      alignment = "self-center",
      footer = true,
      smShimBottom = true,
      smShimTop = true,
      overflowY = true,
      allowEntireViewport = false,
    },
    dragConstraintsRef
  ) => {
    const { isSm } = useDeviceQuery();

    return (
      <div
        ref={dragConstraintsRef}
        style={{
          ...(isSm &&
            !allowEntireViewport && {
              WebkitMaskImage: MASKS.content,
              maskMode: "alpha",
            }),
        }}
        className="absolute left-0 right-0 h-full w-full overflow-hidden"
      >
        <motion.div
          key="content-container"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={TRANSITIONS.route}
          className={[
            "w-full h-full overflow-x-hidden",
            overflowY ? "overflow-y-auto" : "overflow-y-hidden",
            isSm ? "" : `scrollbar ${COLORS.scrollbar}`,
            allowEntireViewport ? "" : "p-5 flex justify-center ",
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

const variants: MotionVariants<"div"> = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
};

export default PageLayout;
