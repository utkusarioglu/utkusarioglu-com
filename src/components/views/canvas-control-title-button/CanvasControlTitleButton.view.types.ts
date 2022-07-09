import { type DetailedHTMLProps, type ButtonHTMLAttributes } from "react";

export type CanvasControlTitleButtonViewProps = {
  children: string;
  isActive: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
