import { useState, useEffect } from "react";
import type { CSSProperties, FC } from "react";
import "./PaperChainList.view.scss";

type PaperChainListItem = {
  content: string;
  notes?: string; // contains notes about the content
  timestamp: number;
  style: CSSProperties;
};

interface PaperChain {
  timestamp: number; // epoch
  list: PaperChainListItem[];
}

const PaperChainListView = () => {
  const [paperChain, setPaperChain] = useState<PaperChain>({
    timestamp: 0,
    list: [],
  });

  useEffect(() => {
    fetch("/paper-chain-data/2020-01.json")
      .then((response) => response.json())
      .then((paperChain) => {
        setPaperChain({
          timestamp: Date.now(),
          ...paperChain,
        });
      });
  }, []);

  if (!paperChain.timestamp) {
    return <span className="paper-chain__loading-indicator">Loading...</span>;
  }

  if (!!paperChain.timestamp && !paperChain.list.length) {
    return (
      <span className="paper-chain__no-items-indicator">
        There seems to be nothing here :o
      </span>
    );
  }

  return (
    <div className="paper-chain-list">
      {paperChain.list.map((item) => (
        <PaperChainListItemView {...item} key={item.timestamp} />
      ))}
    </div>
  );
};

const PaperChainListItemView: FC<PaperChainListItem> = ({
  content,
  timestamp,
  notes,
  style,
}) => {
  const date = new Date(timestamp);
  return (
    <div className="paper-chain-list-item" style={style}>
      <p>{content}</p>
      <div className="paper-chain-list-item-hud">
        {!!notes && (
          <span className="paper-chain-list-item-hud-indicator">♫</span>
        )}
        <span className="paper-chain-list-item-hud-timestamp">
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
};

export default PaperChainListView;
