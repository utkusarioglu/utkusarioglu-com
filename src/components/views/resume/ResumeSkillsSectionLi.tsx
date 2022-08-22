import { type FC } from "react";
import { COLORS } from "_constants";
import { Skill } from "_types/resume.types";

type ResumeSkillSectionLiProps = Skill;

const ResumeSkillSectionLi: FC<ResumeSkillSectionLiProps> = ({
  name,
  remarks,
  confident,
  print,
}) => (
  <li className={[COLORS.paragraph].join(" ")}>
    {name}
    {confident === false && "*"} {remarks && `(${remarks})`}
  </li>
);

export default ResumeSkillSectionLi;
