import { type FC, type ReactNode } from "react";
import { COLORS } from "_constants";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return (
    <p className={["mb-5 text-base", COLORS.paragraph].join(" ")}>{children}</p>
  );
};

export default Paragraph;
