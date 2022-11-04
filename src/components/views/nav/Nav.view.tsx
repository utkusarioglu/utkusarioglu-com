import { type FC } from "react";
import NavItem from "_views/nav-item/NavItem.view";
import { ROUTE_PROPS } from "_config";
import ExtraNavView from "_views/extra-nav/ExtraNav.view";
import { type NavViewProps } from "./Nav.view.types";

const NavView: FC<NavViewProps> = ({ mode }) => {
  const navItems = ROUTE_PROPS.filter(
    (item) => item.type === "social" || (item.type === "page" && item.show)
  );

  switch (mode) {
    case "center":
      return (
        <nav className="flex flex-col justify-center grow">
          {navItems.map((item, index) => (
            <NavItem
              key={item.title}
              {...item}
              fontSize="large"
              mode={mode}
              zIndex={index}
            />
          ))}
        </nav>
      );
    case "aside":
      return (
        <nav className="flex flex-col justify-center grow">
          <NavItem
            key="home"
            title="Home"
            href="/"
            type="home"
            fontSize="small"
            mode={mode}
            zIndex={1}
          />
          {navItems.map((item, index) => (
            <NavItem
              key={item.title}
              {...item}
              fontSize="small"
              mode={mode}
              zIndex={1 + index}
            />
          ))}
        </nav>
      );
    case "bottom":
      return (
        <nav className="flex flex-row">
          <NavItem
            key="home"
            title="Home"
            href="/"
            type="home"
            fontSize="small"
            mode={mode}
            zIndex={1}
          />
          {navItems.map((item, index) => (
            <NavItem
              key={item.title}
              {...item}
              fontSize="small"
              mode={mode}
              zIndex={1 + index}
            />
          ))}
          <ExtraNavView mode="bottom" />
        </nav>
      );
  }
};

export default NavView;
