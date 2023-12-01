import c from "classnames";
import type { FC, ReactNode } from "react";
import type { PaperStyles } from "_types/resume.types";

interface ResumePrintH2View {
  activePaperStyles: PaperStyles;
  className?: string;
  children: ReactNode;
}

const ResumePrintH2View: FC<ResumePrintH2View> = ({
  children,
  className = "",
  activePaperStyles,
}) => {
  const marginBottom = activePaperStyles.styles.h2.marginBottom;

  return (
    <h2
      className={c("font-bold text-md mb-1", className)}
      style={{ marginBottom }}
    >
      {children}
    </h2>
  );
};

export default ResumePrintH2View;
