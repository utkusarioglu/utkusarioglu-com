import TruckerJokesLayout from "../layouts/trucker-jokes/TruckerJokes.layout";
import { Helmet } from "react-helmet-async";
import { useGaPageView } from "../../hooks/google-analytics.hooks";

const TruckerJokesRoute = () => {
  useGaPageView();

  return (
    <>
      <Helmet>
        <html lang="tr" />
        <title>Ennuriye'nin Kamyoncu Yazıları</title>
      </Helmet>
      <TruckerJokesLayout />
    </>
  );
};

export default TruckerJokesRoute;
