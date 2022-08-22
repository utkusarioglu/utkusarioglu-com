import { type FC } from "react";
import { type Section } from "_types/resume.types";
import ResumeH2 from "./ResumeH2";

type ResumeSectionProps<T> = Section<T> & {
  listItemComponent: FC<T>;
  className?: string;
};

// TODO remove `any`
const ResumeSection: FC<ResumeSectionProps<any>> = ({
  title,
  list,
  listItemComponent: ListItem,
  className,
}) => (
  <div className={className}>
    <ResumeH2 className="px-5">{title}</ResumeH2>
    <ul>
      {list.map((item) => (
        <ListItem key={item.title} item={item} />
      ))}
    </ul>
  </div>
);

export default ResumeSection;
