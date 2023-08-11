import { type FC, type PropsWithChildren, type HTMLAttributes } from "react";
import { COLORS } from "_config";
import c from "classnames";

type H3Props = HTMLAttributes<HTMLHeadingElement> & {
  margins?: boolean;
};

const H3: FC<PropsWithChildren<H3Props>> = ({
  children,
  className,
  margins = true,
  ...rest
}) => (
  <h3
    className={c(
      COLORS.social,
      "text-base font-bold font-heading",
      margins ? "mt-6 first:mt-0 mb-2 " : "",
      className
    )}
    {...rest}
  >
    {children}
  </h3>
);

export default H3;
