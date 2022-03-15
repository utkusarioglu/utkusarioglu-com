import { CSSProperties } from "react";

export type PaperChainListItem = {
  content: string;
  notes?: string; // contains notes about the content
  timestamp: number;
  style: CSSProperties;
};

export interface PaperChain {
  timestamp: number; // epoch
  list: PaperChainListItem[];
}
