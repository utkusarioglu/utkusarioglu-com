import { type FC, type PropsWithChildren, HTMLAttributes } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type H1Props = HTMLAttributes<HTMLHeadingElement>;

const H1: FC<PropsWithChildren<H1Props>> = ({
  children,
  className,
  ...rest
}) => (
  <h1 className={c(COLORS.paragraph, className, "text-3xl mb-10")} {...rest}>
    {children}
  </h1>
);

export default H1;
