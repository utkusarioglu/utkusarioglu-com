import { type FC } from "react";
import { COLORS } from "_constants";
import { type SectionHelpProps } from "./SectionHelp.primitive.types";

const SectionHelp: FC<SectionHelpProps> = ({ children, enabled }) => {
  if (!enabled) {
    return null;
  }

  return (
    <fieldset
      className={[
        "text-sm px-3 pb-3 pt-2 rounded-md mb-3 border-[1px]",
        COLORS.paragraph,
        COLORS.sectionHelpBorder,
      ].join(" ")}
    >
      <legend>
        <span className="px-2 font-bold">Help</span>
      </legend>
      {children}
    </fieldset>
  );
};

export default SectionHelp;
