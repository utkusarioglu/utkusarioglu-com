import PaperChainData from "./paper-chain.json";
import "./PaperChain.layout.scss";

const PaperChainLayout = () => {
  return (
    <div className="paper-chain-layout">
      <h1>Utku's Paper Chain</h1>
      <h3>The most amazing chain in the world after Bossonica's</h3>
      <div className="paper-chain-list">
        {PaperChainData.list.map(({ content, timestamp }) => (
          <div className="paper-chain-link" key={timestamp}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperChainLayout;
