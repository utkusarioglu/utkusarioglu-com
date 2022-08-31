import { type FC, type PropsWithChildren, HTMLAttributes } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type ResumeScreenH1ViewProps = HTMLAttributes<HTMLHeadingElement>;

const ResumeScreenH1View: FC<PropsWithChildren<ResumeScreenH1ViewProps>> = ({
  children,
  className,
  ...rest
}) => (
  <h1 className={c(COLORS.paragraph, className, "text-3xl mb-10")} {...rest}>
    {children}
  </h1>
);

export default ResumeScreenH1View;
