import { type FC } from "react";
import { COLORS } from "_constants";
import ResumeH2 from "./ResumeH2";
import type { Resume } from "_types/resume.types";
import c from "classnames";

type ResumeIntroductionProps = Resume["introduction"];

const ResumeIntroduction: FC<ResumeIntroductionProps> = ({
  title,
  remarks,
}) => (
  <div className="px-5 mb-10">
    <ResumeH2>{title}</ResumeH2>
    {remarks.map((paragraph) => (
      <p key={paragraph} className={c(COLORS.paragraph, "mb-3 last:mb-0")}>
        {paragraph}
      </p>
    ))}
  </div>
);

export default ResumeIntroduction;
