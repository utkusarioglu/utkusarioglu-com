import { type FC, type ReactNode } from "react";
import c from "classnames";

interface VerticalMarginsLayoutProps {
  children: ReactNode;
  className?: string;
}

const VerticalMarginsLayout: FC<VerticalMarginsLayoutProps> = ({
  children,
  className = "",
}) => <div className={c("px-5", className)}>{children}</div>;

export default VerticalMarginsLayout;
