import { LazyExoticComponent, FC } from "react";

/**
 * Object that provides router with the properties for
 * creating a router entry
 */
export interface RouteProps {
  path: string; //url,
  component: LazyExoticComponent<() => JSX.Element> | FC<any>;
}
