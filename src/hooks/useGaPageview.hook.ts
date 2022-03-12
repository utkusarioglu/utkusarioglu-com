import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export function useGaPageView() {
  const location = useLocation();
  ReactGA.pageview(location.pathname);
}
