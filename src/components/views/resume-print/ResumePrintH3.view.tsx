import type { FC, PropsWithChildren } from "react";
import c from "classnames";

type ResumePrintH3View = FC<
  PropsWithChildren<{
    className?: string;
  }>
>;

const ResumePrintH3View: ResumePrintH3View = ({ children, className = "" }) => (
  <h3 className={c("font-bold text-md", className)}>{children}</h3>
);

export default ResumePrintH3View;
