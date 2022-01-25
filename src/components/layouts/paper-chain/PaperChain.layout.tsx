import "./PaperChain.layout.scss";
import PaperChainListView from "../../views/paper-chain-list/PaperChainList.view";

const PaperChainLayout = () => {
  return (
    <>
      <div className="standard-background-layout standard-background-theme" />
      <div className="paper-chain-layout">
        <h1 className="paper-chain-layout-title">Utku's Paper Chain</h1>
        <h3 className="paper-chain-layout-subtitle">
          The most amazing chain in the world after Bossonica's!
        </h3>
        <PaperChainListView />
      </div>
    </>
  );
};

export default PaperChainLayout;
