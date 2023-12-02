import { MAX_EXPECTED_IMAGE_WIDTH } from "_config";
import { EnhancedImageProps } from "./EnhancedImage.primitive.types";

/**
 * @dev
 * 1- This is related to the missing type defs for `responsive-loader`
 */
export function produceSizes(
  images: EnhancedImageProps["src"]["images"],
  maxResponsiveWidth: EnhancedImageProps["maxResponsiveWidth"] = MAX_EXPECTED_IMAGE_WIDTH
): string {
  return (
    images
      // @ts-ignore: #1
      .filter(({ width }) => width <= maxResponsiveWidth)
      // @ts-ignore: #1
      .map(({ width }, i: number, a: EnhancedImageProps["src"]["images"]) => {
        let maxWidth =
          a.length > i + 1 ? `(max-width: ${a[i + 1].width - 1}px)` : "";
        return `${maxWidth} ${width}px`.trimLeft();
      })
      .join(", ")
  );
}
