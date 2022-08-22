import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";

interface ResumeH2Props {
  children: ReactNode;
  className?: string;
}

const ResumeH2: FC<ResumeH2Props> = ({ children, className }) => (
  <h2
    className={[
      COLORS.paragraph,
      className,
      "text-2xl first:mt-0 mt-6 mb-3 font-bold",
    ].join(" ")}
  >
    {children}
  </h2>
);

export default ResumeH2;
