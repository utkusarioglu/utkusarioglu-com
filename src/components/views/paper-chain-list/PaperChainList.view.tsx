import "./PaperChainList.view.scss";
import { usePaperChainList } from "../../../hooks/paper-chain-list.hooks";
import { PaperChainListItemView } from "./PaperChainListItem.view";

const PaperChainListView = () => {
  const paperChain = usePaperChainList();

  if (!paperChain.timestamp) {
    return (
      <span className="paper-chain-list__loading-indicator">Loading...</span>
    );
  }

  if (!!paperChain.timestamp && !paperChain.list.length) {
    return (
      <span className="paper-chain-list__no-items-indicator">
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

export default PaperChainListView;
