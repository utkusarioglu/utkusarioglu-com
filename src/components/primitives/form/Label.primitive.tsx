import { type FC } from "react";
import { COLORS } from "_config";
import { type LabelProps } from "./Label.primitive.types";
import c from "classnames";

const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label {...props} className={c(COLORS.paragraph, "w-24 mr-2")}>
      {children}
    </label>
  );
};

export default Label;
