import { Helmet } from "react-helmet-async";
import { useGaPageView } from "../../hooks/useGaPageview.hook";
import NotFoundLayout from "../layouts/not-found/NotFound.layout";

const NotFoundRoute = () => {
  useGaPageView();

  return (
    <>
      <Helmet>
        <title>404 - Utku Sarioglu</title>
      </Helmet>
      <NotFoundLayout />
    </>
  );
};

export default NotFoundRoute;
