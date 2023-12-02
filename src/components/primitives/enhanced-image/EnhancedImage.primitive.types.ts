// @ts-ignore: missing type defs
import { type ResponsiveImageOutput } from "responsive-loader";

export type EnhancedImageProps = {
  className: string;
  alt: string;
  credits?: string;
  allowZoom?: boolean;
  maxResponsiveWidth?: number; // px
} & ImageData;

export interface ImageData {
  src: ResponsiveImageOutput;
}

export type GetDims = () => {
  top: number;
  left: number;
  width: number;
  height: number;
  borderRadius: string;
};

export type EndZoom = () => void;

export type OnLoad = () => void;

export type CancelZoom = () => void;
