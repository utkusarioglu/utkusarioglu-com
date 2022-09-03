import { type PropsWithChildren, type FC, forwardRef } from "react";
import { LazyMotion, m } from "framer-motion";

type MAProps = Parameters<typeof m["a"]>[0];

const MA: FC<PropsWithChildren<MAProps>> = forwardRef(
  ({ children, ...divProps }, ref) => {
    const loadFeatures = () =>
      import("_utils/framer-motion.utils").then((res) => res.default);

    return (
      <LazyMotion features={loadFeatures}>
        <m.a {...divProps} ref={ref}>
          {children}
        </m.a>
      </LazyMotion>
    );
  }
);

export default MA;
