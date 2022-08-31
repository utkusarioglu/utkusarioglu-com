import { type FC } from "react";
import { type Section } from "_types/resume.types";
import ResumeScreenH3View from "./ResumeScreenH3.view";

type ResumeScreenSkillsSectionViewProps<T> = Section<T> & {
  listItemComponent: T;
  className?: string;
};

const ResumeScreenSkillsSectionView: FC<
  ResumeScreenSkillsSectionViewProps<any>
> = ({ title, list, listItemComponent: ListItem, className }) => (
  <div className={className}>
    <ResumeScreenH3View>{title}</ResumeScreenH3View>
    <ul>
      {list.map((item) => (
        <ListItem key={item.name} item={item} />
      ))}
    </ul>
  </div>
);

export default ResumeScreenSkillsSectionView;
