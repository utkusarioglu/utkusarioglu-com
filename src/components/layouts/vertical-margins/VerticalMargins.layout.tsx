import { type FC, type ReactNode } from "react";

interface VerticalMarginsLayoutProps {
  children: ReactNode;
  className?: string;
}

const VerticalMarginsLayout: FC<VerticalMarginsLayoutProps> = ({
  children,
  className = "",
}) => <div className={["px-5", className].join(" ")}>{children}</div>;

export default VerticalMarginsLayout;
