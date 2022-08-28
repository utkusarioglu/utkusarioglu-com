import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";

interface ResumeCardItemProps {
  children: ReactNode;
}

const ResumeCardItem: FC<ResumeCardItemProps> = ({ children }) => (
  <div
    className={[
      COLORS.canvasControlInput,
      "px-5 py-3 mb-3 last:mb-0 rounded-lg",
    ].join(" ")}
  >
    {children}
  </div>
);

export default ResumeCardItem;
