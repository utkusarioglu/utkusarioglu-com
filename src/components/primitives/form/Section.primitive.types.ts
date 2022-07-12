import { type ReactNode } from "react";

export interface SectionProps {
  children: ReactNode[];
  help: string[];
  helpEnabled: boolean;
}
