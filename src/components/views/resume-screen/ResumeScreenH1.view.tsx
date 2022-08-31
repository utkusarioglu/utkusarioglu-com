import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";
import c from "classnames";

interface ResumeScreenH1ViewProps {
  children: ReactNode;
  className?: string;
}

const ResumeScreenH1View: FC<ResumeScreenH1ViewProps> = ({
  children,
  className,
}) => (
  <h1 className={c(COLORS.paragraph, className, "text-3xl mb-10")}>
    {children}
  </h1>
);

export default ResumeScreenH1View;
