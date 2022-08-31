import { type PropsWithChildren } from "react";

type ContentAlignment = "self-start" | "self-center" | "self-end";

export type ContentLayoutProps = PropsWithChildren<{
  allowEntireViewport?: boolean;
  footer?: boolean;
  alignment?: ContentAlignment;
  smShimBottom?: boolean;
  smShimTop?: boolean;
  overflowY?: boolean;
  verticalMargins?: boolean;
}>;
