import { type ReactNode } from "react";

type ContentAlignment = "self-start" | "self-center" | "self-end";

export interface PageLayoutProps {
  allowEntireViewport?: boolean;
  footer?: boolean;
  alignment?: ContentAlignment;
  smShimBottom?: boolean;
  smShimTop?: boolean;
  overflowY?: boolean;
  children: ReactNode;
}
