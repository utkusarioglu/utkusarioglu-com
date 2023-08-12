import { type FC } from "react";

export type FilterFunction = (item: any) => boolean;
export type KeyFunction = (item: any) => string;

interface ContentCardListProps {
  list: any[];
  listItemComponent: FC<{ item: any }>;
  filterFunction: FilterFunction;
  keyFunction: KeyFunction;
}

const ContentCardListView: FC<ContentCardListProps> = ({
  list,
  listItemComponent: ListItem,
  filterFunction,
  keyFunction,
}) => {
  return (
    <ul>
      {list.filter(filterFunction).map((item) => (
        <ListItem key={keyFunction(item)} item={item} />
      ))}
    </ul>
  );
};

export default ContentCardListView;
