import { type FC } from "react";
import P from "_primitives/paragraph/P.primitive";
import { type Section } from "_types/content.types";
import ContentCardTitleBannerView from "_views/content-card/ContentCardTitleBanner.view";
import ContentCardListView from "./ContentCardList.view";
import { type KeyFunction, type FilterFunction } from "./ContentCardList.view";

type ContentCardSectionViewProps<T> = Section<T> & {
  listItemComponent: FC<T>;
  className?: string;
  keyFunction: KeyFunction;
  filterFunction: FilterFunction;
  Body?: FC;
};

// TODO remove `any`
const ContentCardSectionView: FC<ContentCardSectionViewProps<any>> = ({
  title,
  subtitle,
  list,
  keyFunction,
  filterFunction,
  remarks,
  Body,
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
    {Body ? (
      <div className="px-5 pb-5">
        <Body />
      </div>
    ) : null}
    <ContentCardListView
      list={list}
      listItemComponent={ListItem}
      keyFunction={keyFunction}
      filterFunction={filterFunction}
    />
  </div>
);

export default ContentCardSectionView;
