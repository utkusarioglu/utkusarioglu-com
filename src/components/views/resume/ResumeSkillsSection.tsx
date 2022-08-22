import { type FC } from "react";
import { type Section } from "_types/resume.types";
import ResumeH3 from "./ResumeH3";

type ResumeSkillsSectionProps<T> = Section<T> & {
  listItemComponent: T;
  className?: string;
};

const ResumeSkillsSection: FC<ResumeSkillsSectionProps<any>> = ({
  title,
  list,
  listItemComponent: ListItem,
  className,
}) => (
  <div className={className}>
    <ResumeH3>{title}</ResumeH3>
    <ul>
      {list.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  </div>
);

export default ResumeSkillsSection;
