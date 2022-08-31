import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";
import c from "classnames";

interface ResumeScreenH2ViewProps {
  children: ReactNode;
  className?: string;
}

const ResumeScreenH2View: FC<ResumeScreenH2ViewProps> = ({
  children,
  className,
}) => (
  <h2
    className={c(
      COLORS.paragraph,
      "text-2xl first:mt-0 mt-6 mb-3 font-bold",
      className
    )}
  >
    {children}
  </h2>
);

export default ResumeScreenH2View;
