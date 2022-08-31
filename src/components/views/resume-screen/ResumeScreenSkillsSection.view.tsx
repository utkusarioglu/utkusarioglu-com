import { type FC } from "react";
import { type Section } from "_types/resume.types";
import H3 from "_primitives/headings/H3.primitive";

type ResumeScreenSkillsSectionViewProps<T> = Section<T> & {
  listItemComponent: T;
  className?: string;
};

const ResumeScreenSkillsSectionView: FC<
  ResumeScreenSkillsSectionViewProps<any>
> = ({ title, list, listItemComponent: ListItem, className }) => (
  <div className={className}>
    <H3>{title}</H3>
    <ul>
      {list.map((item) => (
        <ListItem key={item.name} item={item} />
      ))}
    </ul>
  </div>
);

export default ResumeScreenSkillsSectionView;
