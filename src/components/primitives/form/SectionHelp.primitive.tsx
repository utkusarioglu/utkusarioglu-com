import { type FC } from "react";
import { COLORS } from "_constants";
import { type SectionHelpProps } from "./SectionHelp.primitive.types";

const SectionHelp: FC<SectionHelpProps> = ({ children, enabled }) => {
  if (!enabled) {
    return null;
  }

  return (
    <div
      className={[
        "text-sm p-3 rounded-md mb-3 border-[1px]",
        COLORS.paragraph,
        COLORS.sectionHelpBorder,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default SectionHelp;
