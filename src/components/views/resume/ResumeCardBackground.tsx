import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";
import { useDeviceQuery } from "_hooks/device/device.hook";

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
      className={[
        COLORS.canvasControlsBg,
        isSm ? "" : "mx-5",
        "py-5 rounded-lg mb-8",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
export default ResumeCardBackground;
