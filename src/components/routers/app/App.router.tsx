import { useRoutes } from "react-router-dom";
import HomeRoute from "../../routes/home.route";
import PaperChainRoute from "../../routes/paper-chain.route";

const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "/paper-chain",
      element: <PaperChainRoute />,
    },
  ]);
};

export default AppRouter;
