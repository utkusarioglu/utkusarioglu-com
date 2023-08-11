import { type FC } from "react";
import P from "_primitives/paragraph/P.primitive";
import { type Section } from "_types/content.types";
import ContentCardTitleBannerView from "_views/content-card/ContentCardTitleBanner.view";

type ContentCardSectionViewProps<T> = Section<T> & {
  listItemComponent: FC<T>;
  className?: string;
};

// TODO remove `any`
const ContentCardSectionView: FC<ContentCardSectionViewProps<any>> = ({
  title,
  subtitle,
  list,
  remarks,
  listItemComponent: ListItem,
  className,
}) => (
  <div className={className}>
    <ContentCardTitleBannerView title={title} subtitle={subtitle} />
    {remarks && (
      <div className="px-5 pb-5">
        {remarks.map((paragraph) => (
          <P key={paragraph}>{paragraph}</P>
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
