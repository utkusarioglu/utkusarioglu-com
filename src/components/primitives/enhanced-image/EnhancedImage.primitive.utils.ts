import { EnhancedImageProps } from "./EnhancedImage.primitive.types";

export function produceSizes(
  images: EnhancedImageProps["src"]["images"],
  maxResponsiveWidth: EnhancedImageProps["maxResponsiveWidth"]
): string {
  return images
    .filter(({ width }) => width <= maxResponsiveWidth)
    .map(({ width }, i: number, a: EnhancedImageProps["src"]["images"]) => {
      let maxWidth =
        a.length > i + 1 ? `(max-width: ${a[i + 1].width - 1}px)` : "";
      return `${maxWidth} ${width}px`.trimLeft();
    })
    .join(", ");
}
