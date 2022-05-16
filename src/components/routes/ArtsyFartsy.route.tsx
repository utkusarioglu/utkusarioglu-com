import { Helmet } from "react-helmet-async";
import DrawingView from "../views/drawing/Drawing.view";
import { useGaPageView } from "../../hooks/google-analytics.hooks";

const HomeRoute = () => {
  useGaPageView();

  return (
    <>
      <Helmet>
        <title>Utku Sarioglu - Artsy Fartsy</title>
      </Helmet>
      <DrawingView />
    </>
  );
};

export default HomeRoute;
