import { type FC } from "react";
import H2 from "_primitives/headings/H2.primitive";
import P from "_primitives/paragraph/P.primitive";
import type { Resume } from "_types/resume.types";

type ResumeScreenIntroductionViewProps = Resume["introduction"];

const ResumeScreenIntroductionView: FC<ResumeScreenIntroductionViewProps> = ({
  title,
  remarks,
}) => (
  <div className="px-5 mb-10">
    <H2>{title}</H2>
    {remarks.map((paragraph) => (
      <P key={paragraph}>{paragraph}</P>
    ))}
  </div>
);

export default ResumeScreenIntroductionView;
