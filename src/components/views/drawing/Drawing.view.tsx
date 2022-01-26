import "./Drawing.view.scss";

const DrawingView = () => (
  <div id="canvas">
    <div className="house">
      <div className="house-chimney" />
      <div className="house-roof" />
      <div className="house-facade">
        <div className="house-facade-window" />
        <div className="house-facade-door" />
      </div>
    </div>
    <div className="grass" />
  </div>
);

export default DrawingView;
