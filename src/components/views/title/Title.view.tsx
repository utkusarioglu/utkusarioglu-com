import { type FC } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { APP_NAME, COLORS, PATH_SEPARATOR } from "_config";
import { TRANSITIONS } from "_config";
import { type MotionVariants } from "_types/vendors/framer-motion.types";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { type TitleViewProps } from "./Title.view.types";
import c from "classnames";
import H1 from "_primitives/headings/H1.primitive";
import MA from "_primitives/framer-motion/m-a.primitive";
import MDiv from "_primitives/framer-motion/m-div.primitive";

const TitleView: FC<TitleViewProps> = ({ className }) => {
  const { route, isHome, title } = useEnhancedRouter();

  return (
    <div className={c("grow-0 flex flex-row", className)}>
      <>
        {!isHome ? (
          <Link href="/">
            <MA
              variants={variants.title}
              whileTap="tap"
              whileHover="hover"
              className={c(
                "font-display text-3xl cursor-pointer",
                COLORS.title
              )}
            >
              {APP_NAME}
            </MA>
          </Link>
        ) : (
          <div className={c("font-display text-3xl", COLORS.title)}>
            {APP_NAME}
          </div>
        )}
        <div className="relative">
          <AnimatePresence initial={false}>
            {!isHome && (
              <MDiv
                variants={variants.route}
                initial="hidden"
                animate="animate"
                exit="exit"
                key={route}
                className={c("flex flex-row items-center absolute", className)}
                transition={TRANSITIONS.route}
              >
                <span className={c("px-1", COLORS.route)}>
                  {PATH_SEPARATOR}
                </span>
                <H1>{title}</H1>
              </MDiv>
            )}
          </AnimatePresence>
        </div>
      </>
    </div>
  );
};

const variants: Record<string, MotionVariants<"a">> = {
  title: {
    tap: {
      scale: 0.8,
    },
    hover: {
      scale: 1.1,
    },
  },
  route: {
    hidden: {
      x: 20,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 20,
      opacity: 0,
    },
  },
};

export default TitleView;
