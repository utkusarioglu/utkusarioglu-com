import { CSSProperties } from "react";
import { LayoutSlice } from "_contexts/layout/Layout.context.types";

export type NavModes = "aside" | "bottom" | "center";
export type FontSizes = "small" | "medium" | "large";
export type LinkTypes = "page" | "social" | "extra" | "extra-padded" | "home";

export type INavItem = INavItemPage | INavItemSocial | INavItemHome;

type INavItemHome = {
  type: "home";
  href: "/";
  title: string;
};

export type INavItemPage = INavItemCommon & {
  type: "page" | "extra";
  layout: Omit<LayoutSlice, "imageViewer">;
  show: boolean;
};

type INavItemSocial = INavItemCommon & {
  type: "social";
};

type INavItemCommon = {
  title: string;
  href: string;
};

export type NavItemProps = Pick<INavItem, "href" | "type" | "title"> & {
  fontSize: FontSizes;
  mode: NavModes;
  zIndex: CSSProperties["zIndex"];
};
