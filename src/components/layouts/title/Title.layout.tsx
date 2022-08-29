import { forwardRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Title from "_views/title/Title.view";
import { TRANSITIONS } from "_constants";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { useWindow } from "_hooks/window/window.hook";
import { homeNavX } from "_utils/positioning.utils";
import c from "classnames";

/* eslint-disable react/display-name */
const TitleLayout = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const { isHome } = useEnhancedRouter();
  const { isSm } = useDeviceQuery();
  const window = useWindow();

  if (!window) {
    return null;
  }

  const wMid = homeNavX(window);
  const variants = {
    title: {
      animate: {
        x: isHome && !isSm ? wMid : 0,
      },
    },
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        ref={ref}
        variants={variants.title}
        animate="animate"
        className={c(
          "fixed z-50 top-0 px-5",
          // TODO this shouldn't be here, but it's still required in `print`
          "print:hidden",
          isSm ? "pt-4" : "pt-5"
        )}
        transition={TRANSITIONS.route}
      >
        <Title />
      </motion.div>
    </AnimatePresence>
  );
});

export default TitleLayout;
