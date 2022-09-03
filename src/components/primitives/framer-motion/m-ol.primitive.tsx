import type { PropsWithChildren, FC } from "react";
import { LazyMotion, m } from "framer-motion";

type MOlProps = Parameters<typeof m["ol"]>[0];

const MOl: FC<PropsWithChildren<MOlProps>> = ({ children, ...divProps }) => {
  const loadFeatures = () =>
    import("_utils/framer-motion.utils").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <m.ol {...divProps}>{children}</m.ol>
    </LazyMotion>
  );
};

export default MOl;
