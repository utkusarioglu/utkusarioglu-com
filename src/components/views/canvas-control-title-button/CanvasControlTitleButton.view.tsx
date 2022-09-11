import { type FC } from "react";
import { COLORS } from "_config";
import { type CanvasControlTitleButtonViewProps } from "./CanvasControlTitleButton.view.types";
import c from "classnames";

const CanvasControlTitleButtonView: FC<CanvasControlTitleButtonViewProps> = ({
  children,
  className,
  isActive,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={c(
        "ml-2 w-7 rounded-md",
        COLORS.paragraph,
        isActive
          ? COLORS.canvasControlInputSelected
          : COLORS.canvasControlInput,
        className
      )}
    >
      {children}
    </button>
  );
};

export default CanvasControlTitleButtonView;
