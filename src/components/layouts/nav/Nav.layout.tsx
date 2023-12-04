import { useEffect, type FC, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MDiv from "_primitives/framer-motion/m-div.primitive";
import NavView from "_views/nav/Nav.view";
import { MASKS, TRANSITIONS } from "_config";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { useWindow } from "_hooks/window/window.hook";
import { useLayoutContext } from "_contexts/layout/Layout.context";
import c from "classnames";
import { createVariants } from "./nav.layout.utils";

interface NavLayoutProps {}

const NavLayout: FC<NavLayoutProps> = () => {
  const window = useWindow();
  if (!window) {
    return null;
  }

  return <NavResponsive window={window} />;
};

/**
 * @dev
 * 1- `print:hidden` keeps the size of the created PDFs small. Despite these
 * elements being covered, they are still placed in the PDF by puppeteer. This
 * statement ensures they are removed.
 */
const NavResponsive: FC<{ window: Window }> = ({ window }) => {
  const { navigation: isNavEnabled } = useLayoutContext();
  const { isHome } = useEnhancedRouter();
  const { isSm } = useDeviceQuery();
  const [variants, setVariants] = useState(
    createVariants(isHome, isSm, isNavEnabled)
  );

  useEffect(
    () => {
      const reposition = () => {
        const newVariants = createVariants(isHome, isSm, isNavEnabled);
        setVariants(newVariants);
      };
      reposition();
      window.addEventListener("resize", reposition);

      return () => window.removeEventListener("resize", reposition);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isHome, isSm, isNavEnabled]
  );

  return (
    <AnimatePresence initial={false}>
      {isHome ? (
        <MDiv
          layout
          key="center-nav"
          variants={variants.centerNav}
          initial="initial"
          animate="animate"
          exit="exit"
          className="top-0 z-20 bottom-0 fixed justify-center flex p-5"
          transition={TRANSITIONS.route}
        >
          <NavView mode="center" />
        </MDiv>
      ) : isSm ? (
        <MDiv
          layout
          key="bottom-nav"
          variants={variants.bottomNav}
          initial="initial"
          animate="animate"
          exit="exit"
          className={c(
            "z-20 fixed justify-center left-0 right-0 bottom-0",
            "overflow-y-hidden overflow-x-auto scrollbar-hide",
            // #1
            "print:hidden"
          )}
          transition={TRANSITIONS.routeFast}
          style={{
            WebkitMaskImage: MASKS.nav,
            maskMode: "alpha",
            pointerEvents: isNavEnabled ? "all" : "none",
          }}
        >
          <div className="px-5">
            <NavView mode="bottom" />
          </div>
        </MDiv>
      ) : (
        <MDiv
          layout
          key="aside-nav"
          variants={variants.asideNav}
          initial="initial"
          animate="animate"
          exit="exit"
          className={c(
            "top-0 z-20 bottom-0 fixed justify-center flex",
            // #1
            "print:hidden"
          )}
          transition={TRANSITIONS.route}
          style={{
            pointerEvents: isNavEnabled ? "all" : "none",
          }}
        >
          <NavView mode="aside" />
        </MDiv>
      )}
    </AnimatePresence>
  );
};

export default NavLayout;
