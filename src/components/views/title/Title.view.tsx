import { type FC } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { APP_NAME, COLORS, PATH_SEPARATOR } from "_constants";
import { TRANSITIONS } from "_constants";
import { type MotionVariants } from "_types/vendors/framer-motion.types";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import { type TitleViewProps } from "./Title.view.types";
import c from "classnames";

const TitleView: FC<TitleViewProps> = ({ className }) => {
  const { route, isHome, title } = useEnhancedRouter();

  return (
    <div className={c("grow-0 flex flex-row", className)}>
      <>
        {!isHome ? (
          <Link href="/">
            <motion.a
              variants={variants.title}
              whileTap="tap"
              whileHover="hover"
              className={c(
                "font-display text-3xl cursor-pointer",
                COLORS.title
              )}
            >
              {APP_NAME}
            </motion.a>
          </Link>
        ) : (
          <div className={c("font-display text-3xl", COLORS.title)}>
            {APP_NAME}
          </div>
        )}
        <div className="relative">
          <AnimatePresence initial={false}>
            {!isHome && (
              <motion.div
                variants={variants.route}
                initial="hidden"
                animate="animate"
                exit="exit"
                key={route}
                className={`${className} flex flex-row items-center absolute`}
                transition={TRANSITIONS.route}
              >
                <span className={c("px-1", COLORS.route)}>
                  {PATH_SEPARATOR}
                </span>
                <span
                  className={c("font-display text-3xl w-max", COLORS.route)}
                >
                  {title}
                </span>
              </motion.div>
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
