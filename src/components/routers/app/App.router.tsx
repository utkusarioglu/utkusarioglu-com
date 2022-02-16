import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const LoadingView = () => <div>Loading...</div>;

const AppRouter = () => {
  const LazyHomeRoute = lazy(() => import("../../routes/home.route"));
  const LazyPaperChainRoute = lazy(
    () => import("../../routes/paper-chain.route")
  );
  const LazyArtsyFartsyRoute = lazy(
    () => import("../../routes/ArtsyFartsy.route")
  );

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={LoadingView}>
          <LazyHomeRoute />
        </Suspense>
      ),
    },
    {
      path: "/paper-chain",
      element: (
        <Suspense fallback={LoadingView}>
          <LazyPaperChainRoute />
        </Suspense>
      ),
    },
    {
      path: "/artsy-fartsy",
      element: (
        <Suspense fallback={LoadingView}>
          <LazyArtsyFartsyRoute />
        </Suspense>
      ),
    },
  ]);

  if (!routes) {
    return <span>Congrats! You have reached 404!</span>;
  }

  return routes;
};

export default AppRouter;
