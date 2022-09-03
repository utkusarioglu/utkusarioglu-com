import type { PropsWithChildren, FC } from "react";
import { LazyMotion, m } from "framer-motion";

type MLiProps = Parameters<typeof m["li"]>[0];

const MLi: FC<PropsWithChildren<MLiProps>> = ({ children, ...divProps }) => {
  const loadFeatures = () =>
    import("_utils/framer-motion.utils").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <m.li {...divProps}>{children}</m.li>
    </LazyMotion>
  );
};

export default MLi;
