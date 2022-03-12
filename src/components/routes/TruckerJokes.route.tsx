import TruckerJokesLayout from "../layouts/trucker-jokes/TruckerJokes.layout";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";

const TruckerJokesRoute = () => {
  ReactGA.pageview("/kamyoncu-yazilari");

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
