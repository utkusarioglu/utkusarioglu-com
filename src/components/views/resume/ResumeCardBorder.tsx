import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";

interface ResumeCardBorderProps {
  children: ReactNode;
}

const ResumeCardBorder: FC<ResumeCardBorderProps> = ({ children }) => (
  <div
    className={[
      COLORS.canvasControlBorder,
      "bg-neutral-600/20",
      "px-5 py-3 mb-3 last:mb-0 rounded-lg",
    ].join(" ")}
  >
    {children}
  </div>
);

export default ResumeCardBorder;
