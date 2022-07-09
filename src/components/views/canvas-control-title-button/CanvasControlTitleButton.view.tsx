import { type FC } from "react";
import { COLORS } from "_constants";
import { type CanvasControlTitleButtonViewProps } from "./CanvasControlTitleButton.view.types";

const CanvasControlTitleButtonView: FC<CanvasControlTitleButtonViewProps> = ({
  children,
  className,
  isActive,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={[
        "ml-2 w-7 rounded-md",
        COLORS.paragraph,
        isActive
          ? COLORS.canvasControlInputSelected
          : COLORS.canvasControlInput,
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default CanvasControlTitleButtonView;
