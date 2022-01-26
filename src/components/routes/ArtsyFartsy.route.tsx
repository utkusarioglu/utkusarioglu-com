import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";
import DrawingView from "../views/drawing/Drawing.view";

const HomeRoute = () => {
  ReactGA.pageview("/artsy-fartsy");

  return (
    <>
      <Helmet>
        <title>Utku Sarioglu</title>
      </Helmet>
      <DrawingView />
    </>
  );
};

export default HomeRoute;
