import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";

interface ParagraphProps {
  children: ReactNode;
  small?: boolean;
}

const Paragraph: FC<ParagraphProps> = ({ children, small = false }) => {
  return (
    <p
      className={[
        "last:mb-0",
        small ? "text-sm mb-2" : "text-base mb-5",
        COLORS.paragraph,
      ].join(" ")}
    >
      {children}
    </p>
  );
};

export default Paragraph;
