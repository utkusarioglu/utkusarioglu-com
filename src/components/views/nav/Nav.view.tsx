import { type FC } from "react";
import NavItem from "_views/nav-item/NavItem.view";
import { ROUTE_PROPS } from "_constants";
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
          {navItems.map((item) => (
            <NavItem key={item.title} {...item} fontSize="large" mode={mode} />
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
            // show={true}
          />
          {navItems.map((item) => (
            <NavItem key={item.title} {...item} fontSize="small" mode={mode} />
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
            // show={true}
          />
          {navItems.map((item) => (
            <NavItem key={item.title} {...item} fontSize="small" mode={mode} />
          ))}
          <ExtraNavView mode="bottom" />
        </nav>
      );
  }
};

export default NavView;
