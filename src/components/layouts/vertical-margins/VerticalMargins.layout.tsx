import { HTMLAttributes, type FC, type PropsWithChildren } from "react";
import c from "classnames";

type VerticalMarginsLayoutProps = HTMLAttributes<HTMLDivElement>;

const VerticalMarginsLayout: FC<
  PropsWithChildren<VerticalMarginsLayoutProps>
> = ({ children, className = "", ...rest }) => (
  <div className={c("px-5", className)} {...rest}>
    {children}
  </div>
);

export default VerticalMarginsLayout;
