import { COLORS } from "_constants";
import { FontSizes, NavModes, LinkTypes } from "./NavItem.view.types";

export function computePaddingAndMargins(fontSize: FontSizes, mode: NavModes) {
  const classes = [];
  if (fontSize === "small") {
    classes.push("mr-5");
  }
  switch (mode) {
    case "bottom":
      classes.push("pb-2");
      break;
    case "aside":
      classes.push("pl-5");
      break;
  }
  return classes.join(" ");
}
export function computeColorAndFontSize(
  type: LinkTypes,
  fontSize: FontSizes,
  isSm: boolean
): string {
  const classes = [];

  switch (type) {
    case "home":
      classes.push(COLORS.route);
      break;
    case "page":
      classes.push(COLORS.page);
      break;
    case "social":
      classes.push(COLORS.social);
      break;
    case "extra":
      classes.push(COLORS.extra);
      break;
    default:
      throw new Error("UNRECOGNIZED_NAV_TYPE");
  }

  switch (fontSize) {
    case "small":
      classes.push("text-3xl");
      break;

    case "medium":
      classes.push("text-4xl");
      break;

    case "large":
      if (isSm) {
        classes.push("text-5xl mb-2");
      } else {
        classes.push("text-6xl mb-2");
      }
      break;
  }

  return classes.join(" ");
}
