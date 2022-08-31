import { type FC, type PropsWithChildren, type HTMLAttributes } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type ResumeScreenH3ViewProps = HTMLAttributes<HTMLHeadingElement>;

const ResumeScreenH3View: FC<PropsWithChildren<ResumeScreenH3ViewProps>> = ({
  children,
  className,
  ...rest
}) => (
  <h3
    className={c(
      COLORS.paragraph,
      "text-base font-bold mt-6 first:mt-0 mb-2",
      className
    )}
    {...rest}
  >
    {children}
  </h3>
);

export default ResumeScreenH3View;
