import { motion } from "framer-motion";
import { type FC } from "react";
import { COLORS, TRANSITIONS, MOTION_VARIANTS } from "_constants";

interface NavItemRouteIndicatorViewProps {
  mode: string;
  type: string;
}

const NavItemRouteIndicatorView: FC<NavItemRouteIndicatorViewProps> = ({
  mode,
  type,
}) => {
  return (
    <motion.div
      className="w-full pointer-events-none block"
      variants={MOTION_VARIANTS.opacity}
      initial="none"
      animate="full"
      exit="none"
      transition={TRANSITIONS.route}
    >
      {mode === "bottom" ? (
        <svg
          className="absolute bottom-0 m-auto left-0 right-0"
          width={20}
          height={20}
        >
          <circle cx={10} cy={20} r={10} className={COLORS[`${type}Fill`]} />
        </svg>
      ) : (
        <svg
          className="absolute bottom-0 m-auto left-0 top-0"
          width={20}
          height={20}
        >
          <circle cx={0} cy={7} r={7} className={COLORS[`${type}Fill`]} />
        </svg>
      )}
    </motion.div>
  );
};

export default NavItemRouteIndicatorView;
