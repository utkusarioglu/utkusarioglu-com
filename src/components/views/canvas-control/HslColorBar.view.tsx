import type { FC } from "react";
import { COLORS } from "_config";
import c from "classnames";

interface HslColorBarViewProps {
  hueOffset: number;
  hueRange: number;
  saturation: number;
  luminance: number;
}

const HslColorBarView: FC<HslColorBarViewProps> = ({
  hueOffset,
  hueRange,
  saturation,
  luminance,
}) => {
  return (
    <div className="mb-3">
      <div
        className="w-full h-5 mb-1 rounded-md"
        style={{
          background: [
            "linear-gradient(",
            "90deg, ",
            Array(10)
              .fill(null)
              .map(
                (_, i, a) =>
                  `hsl(${[
                    hueOffset - 20 + (i * hueRange + 20) / a.length,
                    saturation + "%",
                    luminance + "%",
                  ].join(", ")})`
              )
              .join(", "),
            ")",
          ].join(""),
        }}
      />
      <div className={c(COLORS.secondaryText, "text-sm text-center")}>
        Approximate color range (due to perlin noise)
      </div>
    </div>
  );
};

export default HslColorBarView;
