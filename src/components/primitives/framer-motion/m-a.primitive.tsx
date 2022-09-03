import type { PropsWithChildren, FC } from "react";
import { LazyMotion, m } from "framer-motion";

type MAProps = Parameters<typeof m["a"]>[0];

const MA: FC<PropsWithChildren<MAProps>> = ({ children, ...divProps }) => {
  const loadFeatures = () =>
    import("_utils/framer-motion.utils").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <m.a {...divProps}>{children}</m.a>
    </LazyMotion>
  );
};

export default MA;
