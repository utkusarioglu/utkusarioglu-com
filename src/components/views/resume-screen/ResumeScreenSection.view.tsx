import { type FC } from "react";
import { type Section } from "_types/resume.types";
import ResumeScreenH2View from "./ResumeScreenH2.view";

type ResumeScreenSectionViewProps<T> = Section<T> & {
  listItemComponent: FC<T>;
  className?: string;
};

// TODO remove `any`
const ResumeScreenSectionView: FC<ResumeScreenSectionViewProps<any>> = ({
  title,
  list,
  listItemComponent: ListItem,
  className,
}) => (
  <div className={className}>
    <ResumeScreenH2View className="px-5">{title}</ResumeScreenH2View>
    <ul>
      {list.map((item) => (
        // TODO this `key` wont' do
        <ListItem key={JSON.stringify(item)} item={item} />
      ))}
    </ul>
  </div>
);

export default ResumeScreenSectionView;
