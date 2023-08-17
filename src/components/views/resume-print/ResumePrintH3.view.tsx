import c from "classnames";

const ResumePrintH3View = ({ children, className = "" }) => (
  <h3 className={c("font-bold text-md", className)}>{children}</h3>
);

export default ResumePrintH3View;
