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
    <div className="billboard">
      <div className="billboard-frame">
        <div className="billboard-image">
          <div className="billboard-image-padding">
            <div className="billboard-image-header">Home welcomes</div>
            <div className="billboard-image-title">Bossonica</div>
            <div className="billboard-image-subtitle">
              Real life awaits you!1!!
            </div>
          </div>
        </div>
      </div>
      <div className="billboard-leg-left" />
      <div className="billboard-leg-side-left" />
      <div className="billboard-leg-right" />
      <div className="billboard-leg-side-right" />
      <div className="billboard-frame-top" />
    </div>
  </div>
);

export default DrawingView;
