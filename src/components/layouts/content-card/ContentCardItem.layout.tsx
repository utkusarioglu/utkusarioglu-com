import { type FC, type PropsWithChildren } from "react";
import { COLORS } from "_config";
import c from "classnames";

interface ContentCardItemLayoutProps {}

const ContentCardItemLayout: FC<
  PropsWithChildren<ContentCardItemLayoutProps>
> = ({ children }) => (
  <div
    className={c(
      COLORS.canvasControlInput,
      "px-5 py-4 mb-3 last:mb-0 rounded-lg"
    )}
  >
    {children}
  </div>
);

export default ContentCardItemLayout;
