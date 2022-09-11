import { HTMLAttributes, type FC, type PropsWithChildren } from "react";
import { COLORS } from "_config";
import { useDeviceQuery } from "_hooks/device/device.hook";
import c from "classnames";

type ContentCardBackgroundLayoutProps = HTMLAttributes<HTMLDivElement>;

const ContentCardBackgroundLayout: FC<
  PropsWithChildren<ContentCardBackgroundLayoutProps>
> = ({ children, className, ...rest }) => {
  const { isSm } = useDeviceQuery();
  return (
    <div
      className={c(
        COLORS.canvasControlsBg,
        "py-5 rounded-lg mb-8",
        {
          "mx-5": !isSm,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
export default ContentCardBackgroundLayout;
