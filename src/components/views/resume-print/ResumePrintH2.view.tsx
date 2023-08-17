import c from "classnames";
import type { Specialty } from "_types/resume.types";

interface ResumePrintH2View {
  activeSpecialty: Specialty;
}

const ResumePrintH2View = ({ children, className = "", activeSpecialty }) => {
  const marginBottom = activeSpecialty.styles.h2.marginBottom;

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
