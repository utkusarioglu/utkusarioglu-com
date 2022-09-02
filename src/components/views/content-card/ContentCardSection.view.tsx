import { type FC } from "react";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";
import { type Section } from "_types/content.types";
import H2 from "_primitives/headings/H2.primitive";

type ContentCardSectionViewProps<T> = Section<T> & {
  listItemComponent: FC<T>;
  className?: string;
};

// TODO remove `any`
const ContentCardSectionView: FC<ContentCardSectionViewProps<any>> = ({
  title,
  list,
  remarks,
  listItemComponent: ListItem,
  className,
}) => (
  <div className={className}>
    <H2 className="px-5">{title}</H2>
    {remarks && (
      <div className="px-5 pb-5">
        {remarks.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </div>
    )}
    <ul>
      {list.map((item) => (
        // TODO this `key` wont' do
        <ListItem key={JSON.stringify(item)} item={item} />
      ))}
    </ul>
  </div>
);

export default ContentCardSectionView;
