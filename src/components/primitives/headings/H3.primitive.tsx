import { type FC, type PropsWithChildren, type HTMLAttributes } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type H3Props = HTMLAttributes<HTMLHeadingElement>;

const H3: FC<PropsWithChildren<H3Props>> = ({
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

export default H3;
