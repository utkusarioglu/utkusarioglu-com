import { type ReactNode } from "react";
import type {
  GetDims,
  EndZoom,
  OnLoad,
} from "_primitives/enhanced-image/EnhancedImage.primitive.types";
import { type ResponsiveImageOutput } from "responsive-loader";

export interface LayoutSlice {
  navigation: boolean;
  canvas: boolean;
  content: boolean;
  contentMask: boolean;
  // navigationMask: boolean;
  // titleMask: boolean;
  imageViewer: ImageViewerSpecs | false;
}

export interface ImageViewerSpecs {
  img: ResponsiveImageOutput;
  alt: string;
  requesterRoute: string;
  endZoom: EndZoom;
  getDims: GetDims;
  onLoad: OnLoad;
}

export type SetLayout = (specs: Partial<LayoutSlice>) => void;

export type ILayoutContext = LayoutSlice & {
  setLayout: SetLayout;
};

export interface LayoutContextProviderProps {
  children: ReactNode;
  route: string;
}
