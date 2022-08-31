import { type FC } from "react";
import { COLORS } from "_constants";
import H2 from "_primitives/headings/H2.primitive";
import type { Resume } from "_types/resume.types";
import c from "classnames";

type ResumeScreenIntroductionViewProps = Resume["introduction"];

const ResumeScreenIntroductionView: FC<ResumeScreenIntroductionViewProps> = ({
  title,
  remarks,
}) => (
  <div className="px-5 mb-10">
    <H2>{title}</H2>
    {remarks.map((paragraph) => (
      <p key={paragraph} className={c(COLORS.paragraph, "mb-3 last:mb-0")}>
        {paragraph}
      </p>
    ))}
  </div>
);

export default ResumeScreenIntroductionView;
