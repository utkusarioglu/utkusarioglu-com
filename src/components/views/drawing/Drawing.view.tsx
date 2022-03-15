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
    <div className="mountain">
      <svg>
        <defs>
          <linearGradient id="mountain-rise" x2="0" y2="100%">
            <stop stopColor="yellow" offset="0%" />
            <stop stopColor="green" offset="100%" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="var(--green-light)"
          stroke-width="2vw"
          fill="var(--black-2)"
        />

        <line
          x1={10}
          y1={15}
          x2={50}
          y2={60}
          stroke="var(--green-light)"
          strokeWidth="2vw"
        />

        {/* <rect
          width="10vw"
          height="20vw"
          fill="gray"
          strokeWidth="4vw"
          stroke="pink"
        /> */}

        <polygon
          points="0,100 50,100 25,0"
          // stroke="red"
          // strokeWidth="red"
          fill="url(#mountain-rise)"
        />
      </svg>
    </div>
  </div>
);

export default DrawingView;
