import HomeLayout from "../layouts/home/Home.layout";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";

const HomeRoute = () => {
  ReactGA.pageview("/");

  return (
    <>
      <Helmet>
        <title>Utku Sarioglu</title>
      </Helmet>
      <HomeLayout />
    </>
  );
};

export default HomeRoute;
