import { type PropsWithChildren, type FC } from "react";
import { COLORS } from "_config";
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
        COLORS[`${color}ButtonBg`],
        COLORS[`${color}ButtonText`],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CanvasControlFormButtonView;
