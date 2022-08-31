import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";
import c from "classnames";

interface ResumeH3Props {
  children: ReactNode;
  className?: string;
}

const ResumeH3: FC<ResumeH3Props> = ({ children, className }) => (
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

export default ResumeH3;
