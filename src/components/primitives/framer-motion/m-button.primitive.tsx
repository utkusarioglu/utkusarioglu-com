import type { PropsWithChildren, FC } from "react";
import { LazyMotion, m } from "framer-motion";

type MButtonProps = Parameters<typeof m["button"]>[0];

const MButton: FC<PropsWithChildren<MButtonProps>> = ({
  children,
  ...divProps
}) => {
  const loadFeatures = () =>
    import("_utils/framer-motion.utils").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <m.button {...divProps}>{children}</m.button>
    </LazyMotion>
  );
};

export default MButton;
