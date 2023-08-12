import c from "classnames";

const ResumePrintH1View = ({ children, className = "" }) => (
  <h1 className={c("font-bold text-4xl leading-10", className)}>{children}</h1>
);

export default ResumePrintH1View;
