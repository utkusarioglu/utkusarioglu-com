import { type FC, type ReactNode } from "react";

interface VerticalMarginsLayoutProps {
  children: ReactNode;
}

const VerticalMarginsLayout: FC<VerticalMarginsLayoutProps> = ({
  children,
}) => <div className="px-5">{children}</div>;

export default VerticalMarginsLayout;
