import { type CSSProperties, type PropsWithChildren } from "react";

export type AnimatedLinkProps = PropsWithChildren<{
  href: string;
  paddingAndMargins: string;
  style?: CSSProperties;
}>;
