import type { FC } from "react";
import PaperChainData from "./paper-chain.json";
import "./PaperChainList.view.scss";

type PaperChainListItemParams = {
  content: string;
  timestamp: number;
  backgroundColor: string; // hex color
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
  backgroundColor,
}) => {
  const date = new Date(timestamp);
  return (
    <div className="paper-chain-list-item" style={{ backgroundColor }}>
      <p>{content}</p>
      <p className="paper-chain-list-item-timestamp">{date.toDateString()}</p>
    </div>
  );
};

export default PaperChainListView;
