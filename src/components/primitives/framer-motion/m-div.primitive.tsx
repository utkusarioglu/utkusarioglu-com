import { type PropsWithChildren, type FC, forwardRef } from "react";
import { LazyMotion, m } from "framer-motion";

type MDivProps = Parameters<typeof m["div"]>[0];

const MDiv: FC<PropsWithChildren<MDivProps>> = forwardRef(
  ({ children, ...divProps }, ref) => {
    const loadFeatures = () =>
      import("_utils/framer-motion.utils").then((res) => res.default);

    return (
      <LazyMotion features={loadFeatures}>
        <m.div {...divProps} ref={ref}>
          {children}
        </m.div>
      </LazyMotion>
    );
  }
);

export default MDiv;
