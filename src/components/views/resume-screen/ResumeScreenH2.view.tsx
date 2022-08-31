import { type FC, type PropsWithChildren, type HTMLAttributes } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type ResumeScreenH2ViewProps = HTMLAttributes<HTMLHeadingElement>;

const ResumeScreenH2View: FC<PropsWithChildren<ResumeScreenH2ViewProps>> = ({
  children,
  className,
  ...rest
}) => (
  <h2
    className={c(
      COLORS.paragraph,
      "text-2xl first:mt-0 mt-6 mb-3 font-bold",
      className
    )}
    {...rest}
  >
    {children}
  </h2>
);

export default ResumeScreenH2View;
