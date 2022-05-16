import { navItems } from "./Nav.constants";
import ReactGa from "react-ga";
// import "./Nav.view.scss";

const NavView = () => {
  return (
    <div {...{ className: "nav" }}>
      <nav>
        {navItems &&
          navItems.map(({ link, title }) => {
            return (
              <ReactGa.OutboundLink
                {...{
                  className: "nav__link",
                  key: title,
                  eventLabel: `${title}Visit`,
                  to: link,
                  target: "_blank",
                }}
              >
                {title}
              </ReactGa.OutboundLink>
            );
          })}
      </nav>
    </div>
  );
};

export default NavView;
