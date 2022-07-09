export type NavModes = "aside" | "bottom" | "center";
export type FontSizes = "small" | "medium" | "large";
export type LinkTypes = "page" | "social" | "extra" | "extra-padded" | "home";

export interface INavItem {
  title: string;
  type: LinkTypes;
  href: string;
  show: boolean;
}

export type NavItemProps = INavItem & {
  fontSize: FontSizes;
  mode: NavModes;
};
