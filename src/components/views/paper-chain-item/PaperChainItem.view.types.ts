import { type CSSProperties } from "react";

type Elements = "container" | "paragraph" | "notes" | "date" | "details";

export interface PaperChainItemViewProps {
  item: PaperChainEntry;
}

export type PaperChainEntry = {
  content: string;
  timestamp: number;
  notes?: string;
  style?: CSSProperties;
  styles?: Record<Elements, CSSProperties>;
  classes?: Record<Elements, string>;
};
