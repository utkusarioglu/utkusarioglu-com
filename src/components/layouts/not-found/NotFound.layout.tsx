import NotFoundView from "../../views/not-found/NotFound.view";
// import "./NotFound.layout.scss";

const NotFoundLayout = () => {
  return (
    <>
      <div className="standard-background-layout" />
      <div className="not-found-layout">
        <NotFoundView />
      </div>
    </>
  );
};

export default NotFoundLayout;
