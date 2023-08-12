import { type FC } from "react";
import { type Section } from "_types/content.types";
import H3 from "_primitives/headings/H3.primitive";
import ContentCardListView, {
  type FilterFunction,
  type KeyFunction,
} from "_views/content-card/ContentCardList.view";

type ResumeScreenSkillsSectionViewProps<T> = Section<T> & {
  listItemComponent: T;
  className?: string;
  filterFunction: FilterFunction;
  keyFunction: KeyFunction;
};

const ResumeScreenSkillsSectionView: FC<
  ResumeScreenSkillsSectionViewProps<any>
> = ({
  title,
  list,
  listItemComponent: ListItem,
  className,
  filterFunction,
  keyFunction,
}) => (
  <div className={className}>
    <H3>{title}</H3>
    <ContentCardListView
      list={list}
      listItemComponent={ListItem}
      // filterFunction={(item) => item.print !== false}
      // keyFunction={(item) => item.title}
      filterFunction={filterFunction}
      keyFunction={keyFunction}
    />
    {/* <ul>
      {list
        .filter(({ print }) => print !== false)
        .map((item) => (
          <ListItem key={item.title} item={item} />
        ))}
    </ul> */}
  </div>
);

export default ResumeScreenSkillsSectionView;
