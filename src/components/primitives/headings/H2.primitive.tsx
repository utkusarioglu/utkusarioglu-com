import { type FC, type PropsWithChildren, type HTMLAttributes } from "react";
import { COLORS } from "_config";
import c from "classnames";

type H2Props = HTMLAttributes<HTMLHeadingElement> & {
  margins?: boolean;
};

const H2: FC<PropsWithChildren<H2Props>> = ({
  children,
  className,
  margins = true,
  ...rest
}) => (
  <h2
    className={c(
      COLORS.page,
      "text-2xl font-bold font-heading",
      margins ? "first:mt-0 mt-6 mb-3" : "",
      className
    )}
    {...rest}
  >
    {children}
  </h2>
);

export default H2;
