import { type FC, type PropsWithChildren } from "react";
import { COLORS } from "_constants";
import c from "classnames";

type ParagraphProps = PropsWithChildren<{
  small?: boolean;
}>;

const Paragraph: FC<ParagraphProps> = ({ children, small = false }) => {
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

export default Paragraph;
