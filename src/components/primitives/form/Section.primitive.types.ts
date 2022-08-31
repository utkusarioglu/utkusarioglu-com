import { type PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  help: string[];
  helpEnabled: boolean;
}>;
