import { type FC } from "react";
import H2 from "_primitives/headings/H2.primitive";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";
import type { Resume } from "_types/resume.types";

type ResumeScreenIntroductionViewProps = Resume["introduction"];

const ResumeScreenIntroductionView: FC<ResumeScreenIntroductionViewProps> = ({
  title,
  remarks,
}) => (
  <div className="px-5 mb-10">
    <H2>{title}</H2>
    {remarks.map((paragraph) => (
      <Paragraph key={paragraph}>{paragraph}</Paragraph>
    ))}
  </div>
);

export default ResumeScreenIntroductionView;
