import c from "classnames";

const ResumePrintH3 = ({ children, className = "" }) => (
  <h1 className={c("font-bold text-md", className)}>{children}</h1>
);

export default ResumePrintH3;
