import { type FC } from "react";
import { COLORS } from "_constants";
import { Skill } from "_types/resume.types";

type ResumeScreenSkillSectionLiViewProps = Skill;

const ResumeScreenSkillSectionLiView: FC<
  ResumeScreenSkillSectionLiViewProps
> = ({ title, remarks, confident, print }) => (
  <li className={COLORS.paragraph}>
    {title}
    {confident === false && "*"} {remarks && `(${remarks})`}
  </li>
);

export default ResumeScreenSkillSectionLiView;
