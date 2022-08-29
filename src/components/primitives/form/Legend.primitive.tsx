import { type FC } from "react";
import { COLORS } from "_constants";
import { type LegendProps } from "./Legend.primitive.types";
import c from "classnames";

const Legend: FC<LegendProps> = ({ children, title }) => {
  return (
    <div className="mb-4">
      <legend className={c(COLORS.paragraph, "font-bold text-lg mb-2")}>
        {title}
      </legend>
      {children}
    </div>
  );
};

export default Legend;
