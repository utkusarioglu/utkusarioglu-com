import type { PropsWithChildren, FC } from "react";
import { LazyMotion, m } from "framer-motion";

type MDivProps = Parameters<typeof m["div"]>[0];

const MDiv: FC<PropsWithChildren<MDivProps>> = ({ children, ...divProps }) => {
  const loadFeatures = () =>
    import("_utils/framer-motion.utils").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <m.div {...divProps}>{children}</m.div>
    </LazyMotion>
  );
};

export default MDiv;
