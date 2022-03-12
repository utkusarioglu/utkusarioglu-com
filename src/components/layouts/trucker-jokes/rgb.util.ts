import { RgbColor } from "./TruckerJokes.layout";

/**
 * Converts rgb color array into css compatible rgb string
 */
export function rgb(colorArray: RgbColor) {
  return `rgb(${colorArray.join(", ")})`;
}
