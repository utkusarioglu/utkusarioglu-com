import "./NotFound.view.scss";
import { Link } from "react-router-dom";

const NotFoundView = () => {
  return (
    <div className="not-found-view">
      <div className="not-found-view-title">404</div>
      <div className="not-found-view-message">This page doesn't exist</div>
      <Link to="/" className="not-found-view-home-link">
        Go to home page
      </Link>
    </div>
  );
};

export default NotFoundView;
