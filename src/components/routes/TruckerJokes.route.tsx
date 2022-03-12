import TruckerJokesLayout from "../layouts/trucker-jokes/TruckerJokes.layout";
import { Helmet } from "react-helmet-async";
import { useGaPageView } from "../../hooks/useGaPageview.hook";

const TruckerJokesRoute = () => {
  useGaPageView();

  return (
    <>
      <Helmet>
        <html lang="TR" />
        <title>Ennuriye'nin Kamyoncu Yazıları</title>
      </Helmet>
      <TruckerJokesLayout />
    </>
  );
};

export default TruckerJokesRoute;
