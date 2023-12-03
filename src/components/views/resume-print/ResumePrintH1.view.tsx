import type { FC, PropsWithChildren } from "react";
import c from "classnames";

type ResumePrintH1View = FC<
  PropsWithChildren<{
    className?: string;
  }>
>;

const ResumePrintH1View: ResumePrintH1View = ({ children, className = "" }) => (
  <h1 className={c("font-bold text-3xl leading-9", className)}>{children}</h1>
);

export default ResumePrintH1View;
