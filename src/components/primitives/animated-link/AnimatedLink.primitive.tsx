import MDiv from "_primitives/framer-motion/m-div.primitive";
import { type FC } from "react";
import { Theme } from "_types/theme.types";
import { type MotionVariants } from "_types/vendors/framer-motion.types";
import { type AnimatedLinkProps } from "./AnimatedLink.primitive.types";
import { HEX } from "_config";
import { useTheme } from "_hooks/theme/theme.hook";

const AnimatedLink: FC<AnimatedLinkProps> = ({
  href,
  paddingAndMargins,
  children,
}) => {
  const { getActive } = useTheme();
  const activeTheme = getActive();
  return (
    <MDiv
      key={href}
      initial="hidden"
      animate="enter"
      whileHover="hover"
      whileTap="tap"
      exit="exit"
      className={paddingAndMargins}
      variants={variants(activeTheme)}
      style={{
        textShadow: `0px 0px 0px ${HEX.shadow[activeTheme]}`,
      }}
    >
      {children}
    </MDiv>
  );
};

const variants: (theme: Theme) => MotionVariants<"div"> = (theme) => ({
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  hover: {
    opacity: 1,
    x: -10,
    y: 0,
    textShadow: `10px 10px 5px ${HEX.shadow[theme]}`,
  },
  tap: { scale: 0.8 },
});

export default AnimatedLink;
