import { motion } from "framer-motion";
import { type FC } from "react";
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
      variants={variants}
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

const variants: MotionVariants<"div"> = {
  enter: { opacity: 1, x: 0, y: 0 },
  hover: {
    opacity: 1,
    x: -10,
    y: 0,
    textShadow: "10px 10px 20px black",
  },
  tap: { scale: 0.8 },
};

export default AnimatedLink;
