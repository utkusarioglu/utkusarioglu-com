import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";
import c from "classnames";

interface ContentCardItemLayoutProps {
  children: ReactNode;
}

const ContentCardItemLayout: FC<ContentCardItemLayoutProps> = ({
  children,
}) => (
  <div
    className={c(
      COLORS.canvasControlInput,
      "px-5 py-3 mb-3 last:mb-0 rounded-lg"
    )}
  >
    {children}
  </div>
);

export default ContentCardItemLayout;
