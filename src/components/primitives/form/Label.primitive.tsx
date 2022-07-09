import { type FC } from "react";
import { COLORS } from "_constants";
import { type LabelProps } from "./Label.primitive.types";

const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label {...props} className={[COLORS.paragraph, "w-28 mr-2"].join(" ")}>
      {children}
    </label>
  );
};

export default Label;
