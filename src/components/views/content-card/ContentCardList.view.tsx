import { type FC, type PropsWithChildren } from "react";
import H3 from "_primitives/headings/H3.primitive";

export type FilterFunction = (item: any) => boolean;
export type KeyFunction = (item: any) => string;

interface ContentCardListProps {
  title?: string;
  list: any[];
  listItemComponent: FC<{ item: any }>;
  wrapperComponent?: FC<PropsWithChildren<Record<string, any>>>;
  filterFunction: FilterFunction;
  keyFunction: KeyFunction;
}

const DefaultWrapper = ({ children }) => <div>{children}</div>;

const ContentCardListView: FC<ContentCardListProps> = ({
  list,
  title,
  listItemComponent: ListItem,
  wrapperComponent: Wrapper = DefaultWrapper,
  filterFunction,
  keyFunction,
}) => {
  const filteredList = list.filter(filterFunction);
  if (!filteredList.length) {
    return null;
  }

  return (
    <Wrapper>
      {title ? <H3>{title}</H3> : null}
      <ul>
        {filteredList.map((item) => (
          <ListItem key={keyFunction(item)} item={item} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default ContentCardListView;
