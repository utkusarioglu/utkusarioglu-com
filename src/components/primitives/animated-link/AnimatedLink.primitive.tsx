import { motion } from "framer-motion";
import { type FC } from "react";
import { Theme } from "_types/theme.types";
import { type MotionVariants } from "_types/vendors/framer-motion.types";
import { type AnimatedLinkProps } from "./AnimatedLink.primitive.types";

const AnimatedLink: FC<AnimatedLinkProps> = ({
  href,
  paddingAndMargins,
  children,
}) => {
  return (
    <motion.div
      key={href}
      variants={variants("dark")}
      initial="hidden"
      animate="enter"
      whileHover="hover"
      whileTap="tap"
      exit="exit"
      className={paddingAndMargins}
    >
      {children}
    </motion.div>
  );
};

const variants: (theme: Theme) => MotionVariants<"div"> = (theme) => ({
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    // textShadow: theme === "light" ? "0px 0px 10px #e5e5e5" : "",
  },
  hover: {
    opacity: 1,
    x: -10,
    y: 0,
    textShadow:
      theme === "light" ? "10px 10px 20px #171717" : "10px 10px 20px #050505",
  },
  tap: { scale: 0.8 },
});

export default AnimatedLink;
