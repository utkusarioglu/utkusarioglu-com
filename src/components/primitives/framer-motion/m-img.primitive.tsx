import { PropsWithChildren, FC, forwardRef } from "react";
import { LazyMotion, m } from "framer-motion";

type MImgProps = Parameters<typeof m["img"]>[0];

const MImg: FC<PropsWithChildren<MImgProps>> = forwardRef(
  ({ children, ...divProps }, ref) => {
    const loadFeatures = () =>
      import("_utils/framer-motion.utils").then((res) => res.default);

    return (
      <LazyMotion features={loadFeatures}>
        <m.img {...divProps} ref={ref}>
          {children}
        </m.img>
      </LazyMotion>
    );
  }
);

export default MImg;
