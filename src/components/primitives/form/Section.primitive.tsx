import { type FC } from "react";
import SectionHelp from "./SectionHelp.primitive";
import { type SectionProps } from "./Section.primitive.types";
import P from "_primitives/paragraph/P.primitive";

const Section: FC<SectionProps> = ({ children, help, helpEnabled }) => {
  return (
    <div>
      <div className="mb-2 flex flex-row items-center">{children}</div>
      <SectionHelp enabled={helpEnabled}>
        {help.map((p) => (
          <P small key={p}>
            {p}
          </P>
        ))}
      </SectionHelp>
    </div>
  );
};

export default Section;
