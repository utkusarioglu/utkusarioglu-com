import { type ReactNode, type FC } from "react";
import { COLORS } from "_constants";

type CanvasControlFormButtonViewProps = {
  children: ReactNode;
  color: "primary" | "secondary";
} & JSX.IntrinsicElements["button"];

const CanvasControlFormButtonView: FC<CanvasControlFormButtonViewProps> = ({
  children,
  color,
  className,
  ...rest
}) => {
  return (
    <button
      className={[
        "rounded-md py-1 px-3 w-full font-bold",
        COLORS[`${color}Button`],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CanvasControlFormButtonView;
