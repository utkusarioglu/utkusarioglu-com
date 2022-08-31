import { type FC } from "react";
import { COLORS } from "_constants";
import ResumeScreenH2View from "./ResumeScreenH2.view";
import type { Resume } from "_types/resume.types";
import c from "classnames";

type ResumeScreenIntroductionViewProps = Resume["introduction"];

const ResumeScreenIntroductionView: FC<ResumeScreenIntroductionViewProps> = ({
  title,
  remarks,
}) => (
  <div className="px-5 mb-10">
    <ResumeScreenH2View>{title}</ResumeScreenH2View>
    {remarks.map((paragraph) => (
      <p key={paragraph} className={c(COLORS.paragraph, "mb-3 last:mb-0")}>
        {paragraph}
      </p>
    ))}
  </div>
);

export default ResumeScreenIntroductionView;
