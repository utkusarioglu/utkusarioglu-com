import PaperChainLayout from "../layouts/paper-chain/PaperChain.layout";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";

const PaperChainRoute = () => {
  ReactGA.pageview("/paper-chain");

  return (
    <>
      <Helmet>
        <title>Utku's Paper Chain</title>
      </Helmet>
      <PaperChainLayout />
    </>
  );
};

export default PaperChainRoute;
