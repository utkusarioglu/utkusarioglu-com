import type { PropsWithChildren, FC } from "react";
import { LazyMotion, m } from "framer-motion";

type MImgProps = Parameters<typeof m["img"]>[0];

const MImg: FC<PropsWithChildren<MImgProps>> = ({ children, ...divProps }) => {
  const loadFeatures = () =>
    import("_utils/framer-motion.utils").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <m.img {...divProps}>{children}</m.img>
    </LazyMotion>
  );
};

export default MImg;
