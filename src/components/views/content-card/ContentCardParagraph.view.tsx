import { COLORS } from "_config";
import c from "classnames";

const ContentCardParagraphView = ({ children }) => (
  <p className={c(COLORS.paragraph, "mb-2 last:mb-0")}>{children}</p>
);

export default ContentCardParagraphView;
