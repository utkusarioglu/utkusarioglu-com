import { FC } from "react";
import { PaperChainListItem } from "./paper-chain-list.types";
import "./PaperChainListItem.view.scss";

export const PaperChainListItemView: FC<PaperChainListItem> = ({
  content,
  timestamp,
  notes,
  style,
}) => {
  const date = new Date(timestamp);
  return (
    <div className="paper-chain-list-item" style={style}>
      {Array.isArray(content) ? (
        content.map((paragraph) => (
          <p key={paragraph.slice(0, 10)}>{paragraph}</p>
        ))
      ) : (
        <p>{content}</p>
      )}
      <div className="paper-chain-list-item__hud">
        {!!notes && (
          <span className="paper-chain-list-item__hud__notes-indicator">♫</span>
        )}
        <span className="paper-chain-list-item__hud__timestamp">
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
};
