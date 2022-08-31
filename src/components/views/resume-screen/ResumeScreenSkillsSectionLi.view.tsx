import { type FC } from "react";
import { COLORS } from "_constants";
import { Skill } from "_types/resume.types";

type ResumeScreenSkillSectionLiViewProps = Skill;

const ResumeScreenSkillSectionLiView: FC<
  ResumeScreenSkillSectionLiViewProps
> = ({ name, remarks, confident, print }) => (
  <li className={COLORS.paragraph}>
    {name}
    {confident === false && "*"} {remarks && `(${remarks})`}
  </li>
);

export default ResumeScreenSkillSectionLiView;
