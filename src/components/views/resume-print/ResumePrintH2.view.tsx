import c from "classnames";

const ResumePrintH2View = ({ children, className = "" }) => (
  <h1 className={c("font-bold text-md mb-1", className)}>{children}</h1>
);

export default ResumePrintH2View;
