import { type PropsWithChildren, type FC } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type CanvasControlFormButtonViewProps = PropsWithChildren<
  {
    color: "primary" | "secondary";
  } & JSX.IntrinsicElements["button"]
>;

const CanvasControlFormButtonView: FC<CanvasControlFormButtonViewProps> = ({
  children,
  color,
  className,
  ...rest
}) => {
  return (
    <button
      className={c(
        "rounded-md py-1 px-3 w-full font-bold",
        COLORS[`${color}Button`],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CanvasControlFormButtonView;
