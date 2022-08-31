import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";
import c from "classnames";

interface ResumeH1Props {
  children: ReactNode;
  className?: string;
}

const ResumeH1: FC<ResumeH1Props> = ({ children, className }) => (
  <h1 className={c(COLORS.paragraph, className, "text-3xl mb-10")}>
    {children}
  </h1>
);

export default ResumeH1;
