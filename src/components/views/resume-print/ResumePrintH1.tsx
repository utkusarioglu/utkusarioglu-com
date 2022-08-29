import c from "classnames";

const ResumePrintH1 = ({ children, className = "" }) => (
  <h1 className={c("font-bold text-4xl", className)}>{children}</h1>
);

export default ResumePrintH1;
