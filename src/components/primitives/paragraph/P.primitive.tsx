import { type FC, type PropsWithChildren } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type PProps = PropsWithChildren<{
  small?: boolean;
}>;

const P: FC<PProps> = ({ children, small = false }) => {
  return (
    <p
      className={c(
        COLORS.paragraph,
        "last:mb-0",
        small ? "text-sm mb-2" : "text-base mb-5"
      )}
    >
      {children}
    </p>
  );
};

export default P;
