import { useRouter } from "next/router";

export function useEnhancedRouter() {
  const { route, pathname } = useRouter();
  const isHome = route === "/";
  const isCanvas = route === "/canvas";
  const isActiveRoute = (href: string) => pathname === href;

  return {
    route,
    isCanvas,
    isHome,
    isActiveRoute,
  };
}
