import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";

interface ResumeH3Props {
  children: ReactNode;
  className?: string;
}

const ResumeH3: FC<ResumeH3Props> = ({ children, className }) => (
  <h3
    className={[
      COLORS.paragraph,
      className,
      "text-base font-bold mt-6 first:mt-0 mb-1",
    ].join(" ")}
  >
    {children}
  </h3>
);

export default ResumeH3;
