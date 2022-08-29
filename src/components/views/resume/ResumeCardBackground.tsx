import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";
import { useDeviceQuery } from "_hooks/device/device.hook";
import c from "classnames";

interface ResumeCardBackground {
  children: ReactNode;
  className?: string;
}

const ResumeCardBackground: FC<ResumeCardBackground> = ({
  children,
  className,
}) => {
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
    >
      {children}
    </div>
  );
};
export default ResumeCardBackground;
