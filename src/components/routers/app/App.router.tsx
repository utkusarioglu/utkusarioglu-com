import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { RouteProps } from "./app.router.types";

const routeProps: RouteProps[] = [
  {
    path: "/",
    component: lazy(() => import("../../routes/Home.route")),
  },
  {
    path: "/paper-chain",
    component: lazy(() => import("../../routes/PaperChain.route")),
  },
  {
    path: "/artsy-fartsy",
    component: lazy(() => import("../../routes/ArtsyFartsy.route")),
  },
  {
    path: "/kamyoncu-yazilari",
    component: lazy(() => import("../../routes/TruckerJokes.route")),
  },
];

const LoadingView = () => <div>Loading...</div>;

const AppRouter = () => {
  return useRoutes(
    routeProps.map(({ path, component: Component }) => {
      return {
        path,
        element: (
          <Suspense fallback={LoadingView}>
            <Component />
          </Suspense>
        ),
      };
    })
  );
};

export default AppRouter;
