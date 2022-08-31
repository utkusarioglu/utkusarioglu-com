import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";
import c from "classnames";

interface ResumeScreenH3ViewProps {
  children: ReactNode;
  className?: string;
}

const ResumeScreenH3View: FC<ResumeScreenH3ViewProps> = ({
  children,
  className,
}) => (
  <h3
    className={c(
      COLORS.paragraph,
      "text-base font-bold mt-6 first:mt-0 mb-1",
      className
    )}
  >
    {children}
  </h3>
);

export default ResumeScreenH3View;
