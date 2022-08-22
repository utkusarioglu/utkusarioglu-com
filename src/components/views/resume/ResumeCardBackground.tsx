import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";

interface ResumeCardBackground {
  children: ReactNode;
  className?: string;
}

const ResumeCardBackground: FC<ResumeCardBackground> = ({
  children,
  className,
}) => (
  <div
    className={[
      COLORS.canvasControlsBg,
      className,
      "py-5 rounded-lg mb-8",
    ].join(" ")}
  >
    {children}
  </div>
);

export default ResumeCardBackground;
