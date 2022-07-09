import { type ResponsiveImageOutput } from "responsive-loader";

export type EnhancedImageProps = {
  className: string;
  alt: string;
  credits?: string;
  allowZoom?: boolean;
} & ImageData;

export interface ImageData {
  src: ResponsiveImageOutput;
}
