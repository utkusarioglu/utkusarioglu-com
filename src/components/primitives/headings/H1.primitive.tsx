import { type FC, type PropsWithChildren, HTMLAttributes } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type H1Props = HTMLAttributes<HTMLHeadingElement>;

const H1: FC<PropsWithChildren<H1Props>> = ({ children, ...rest }) => (
  <span className={c("font-display text-3xl w-max", COLORS.route)} {...rest}>
    {children}
  </span>
);
export default H1;
