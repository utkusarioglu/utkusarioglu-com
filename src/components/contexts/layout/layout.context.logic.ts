import { DEFAULT_LAYOUT, ROUTE_PROPS } from "_constants";
import type { LayoutSlice } from "_contexts/layout/Layout.context.types";
import { INavItemPage } from "_views/nav-item/NavItem.view.types";

export function produceLayout(route: string): LayoutSlice {
  try {
    const filtered = ROUTE_PROPS.filter(
      ({ href }) => href === route
    ) as INavItemPage[];

    if (!filtered[0]?.layout) {
      return DEFAULT_LAYOUT;
    }
    return { ...DEFAULT_LAYOUT, ...filtered[0].layout };
  } catch (e) {
    return DEFAULT_LAYOUT;
  }
}
