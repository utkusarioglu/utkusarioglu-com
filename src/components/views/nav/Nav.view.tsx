import { SOCIALS, NAV_ROUTES } from "../../../config";
import ReactGa from "react-ga";
import { Link } from "react-router-dom";
// import "./Nav.view.scss";

const NavView = () => {
  return (
    <div className="nav-container">
      <nav>
        {NAV_ROUTES &&
          NAV_ROUTES.map(({ link, title }) => (
            <Link to={link} className="nav-link nav-link-route">
              {title}
            </Link>
          ))}
        {SOCIALS &&
          SOCIALS.map(({ link, title }) => {
            return (
              <ReactGa.OutboundLink
                className="nav-link nav-link-social"
                key={title}
                eventLabel={`${title}Visit`}
                to={link}
                target="_blank"
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
