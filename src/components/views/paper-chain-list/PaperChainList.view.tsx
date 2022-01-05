import type { CSSProperties, FC } from "react";
import PaperChainData from "./paper-chain.json";
import "./PaperChainList.view.scss";

type PaperChainListItemParams = {
  content: string;
  timestamp: number;
  style: CSSProperties;
};

const PaperChainListView = () => {
  return (
    <div className="paper-chain-list">
      {PaperChainData.list.map((item) => (
        <PaperChainListItem {...item} key={item.timestamp} />
      ))}
    </div>
  );
};

const PaperChainListItem: FC<PaperChainListItemParams> = ({
  content,
  timestamp,
  style,
}) => {
  const date = new Date(timestamp);
  return (
    <div className="paper-chain-list-item" style={style}>
      <p>{content}</p>
      <p className="paper-chain-list-item-timestamp">{date.toDateString()}</p>
    </div>
  );
};

export default PaperChainListView;
