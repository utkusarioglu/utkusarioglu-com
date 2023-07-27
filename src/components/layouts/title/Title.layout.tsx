import { useState, forwardRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MDiv from "_primitives/framer-motion/m-div.primitive";
import Title from "_views/title/Title.view";
import { TRANSITIONS } from "_config";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { useWindow } from "_hooks/window/window.hook";
import { homeNavX } from "_utils/positioning.utils";
import c from "classnames";

/* eslint-disable react/display-name */
const TitleLayout = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const window = useWindow();

  if (!window) {
    return null;
  }

  return <TitleResponsive window={window} ref={ref} />
});

interface TitleResponsiveProps {
  window: Window
}

const TitleResponsive = forwardRef<HTMLDivElement ,TitleResponsiveProps>(({window}, ref) => {
  const { isHome } = useEnhancedRouter();
  const { isSm } = useDeviceQuery();
  const wMid = homeNavX(window);
  const [variants, setVariants] = useState(computeVariants(isHome, isSm, wMid))

  useEffect(() => {
    const reposition = () => {
      const wMid = homeNavX(window);
      const newVariants = computeVariants(isHome, isSm, wMid)
      setVariants(newVariants);
    }
    reposition()
    window.addEventListener("resize", reposition);
    return () => window.removeEventListener("resize", reposition)
  }, [isHome, isSm])


  return (
    <AnimatePresence initial={false}>
      <MDiv
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
      </MDiv>
    </AnimatePresence>
  );

})

function computeVariants(isHome: boolean, isSm: boolean, wMid: number) {
  return {
    title: {
      animate: {
        x: isHome && !isSm ? wMid : 0,
      },
    },
  }
}

export default TitleLayout;
