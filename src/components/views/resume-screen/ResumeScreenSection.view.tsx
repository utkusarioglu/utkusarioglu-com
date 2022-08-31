import { type FC } from "react";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";
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
  remarks,
  listItemComponent: ListItem,
  className,
}) => (
  <div className={className}>
    <ResumeScreenH2View className="px-5">{title}</ResumeScreenH2View>
    <div className="px-5 pb-5">
      {remarks &&
        remarks.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
    </div>
    <ul>
      {list.map((item) => (
        // TODO this `key` wont' do
        <ListItem key={JSON.stringify(item)} item={item} />
      ))}
    </ul>
  </div>
);

export default ResumeScreenSectionView;
