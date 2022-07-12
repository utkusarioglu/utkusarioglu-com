import { type FC } from "react";
import SectionHelp from "./SectionHelp.primitive";
import { type SectionProps } from "./Section.primitive.types";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";

const Section: FC<SectionProps> = ({ children, help, helpEnabled }) => {
  return (
    <div>
      <div className="mb-2 flex flex-row items-center">{children}</div>
      <SectionHelp enabled={helpEnabled}>
        {help.map((p) => (
          <Paragraph small key={p}>
            {p}
          </Paragraph>
        ))}
      </SectionHelp>
    </div>
  );
};

export default Section;
