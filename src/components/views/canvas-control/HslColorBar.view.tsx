import type { FC } from "react";
import { COLORS } from "_constants";

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
      <div className={["text-sm text-center", COLORS.secondaryText].join(" ")}>
        Approximate color range (due to perlin noise)
      </div>
    </div>
  );
};

export default HslColorBarView;
