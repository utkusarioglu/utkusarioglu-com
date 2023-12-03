import MDiv from "_primitives/framer-motion/m-div.primitive";
import { type FC } from "react";
import { COLORS, TRANSITIONS, MOTION_VARIANTS } from "_config";

interface NavItemRouteIndicatorViewProps {
  mode: string;
  type: string;
}

/**
 * @dev
 * 1- types for `type` are problematic and need to be reconsidered
 */
const NavItemRouteIndicatorView: FC<NavItemRouteIndicatorViewProps> = ({
  mode,
  type,
}) => {
  return (
    <MDiv
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
          <circle
            cx={10}
            cy={20}
            r={10}
            className={
              // @ts-ignore #1
              COLORS[`${type}Fill`]
            }
          />
        </svg>
      ) : (
        <svg
          className="absolute bottom-0 m-auto left-0 top-0"
          width={20}
          height={20}
        >
          <circle
            cx={0}
            cy={7}
            r={7}
            className={
              // @ts-ignore #1
              COLORS[`${type}Fill`]
            }
          />
        </svg>
      )}
    </MDiv>
  );
};

export default NavItemRouteIndicatorView;
