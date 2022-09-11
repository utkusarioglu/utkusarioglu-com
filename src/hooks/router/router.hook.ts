import { useRouter } from "next/router";
import { ROUTE_PROPS } from "_config";

export function useEnhancedRouter() {
  const { route } = useRouter();
  const path = route.slice(1).split("/");
  const isHome = route === "/";
  const isCanvas = route === "/canvas";
  const isActiveRoute = (href: string) => route === href;
  const navItem = !isHome && ROUTE_PROPS.find((item) => item.href === route);
  const last = "/" + path[path.length - 1];
  const title = (navItem && navItem.title) || last.substring(1);

  return {
    route,
    isCanvas,
    isHome,
    isActiveRoute,
    title,
  };
}
