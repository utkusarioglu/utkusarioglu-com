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
    <svg className="mountain" width="100%" height="100px">
      <defs>
        <g id="mountain">
          <linearGradient id="mountain-top-fill" x2="0" y2="100%">
            <stop stopColor="white" offset="0%" />
            <stop stopColor="gray" offset="100%" />
          </linearGradient>
          <linearGradient id="mountain-fill" x2="0" y2="100%">
            <stop stopColor="var(--white)" offset="0%" />
            <stop stopColor="var(--green-2)" offset="90%" />
            <stop stopColor="var(--green-1)" offset="100%" />
          </linearGradient>
          <polygon points="50 0, 100 80, 0 80" fill="url(#mountain-fill)" />
          <polygon
            id="mountain-top"
            points="50 0, 75 40, 70 45, 65 40, 60 45, 55 40, 50 45, 45 40, 40 45, 35 40, 30 45, 25 40"
            fill="url(#mountain-top-fill)"
          />
        </g>
      </defs>
      {/* <circle
          cx="50"
          cy="50"
          r="40"
          stroke="var(--green-light)"
          stroke-width="2vw"
          fill="var(--black-2)"
        /> */}

      {/* <line
          x1={10}
          y1={15}
          x2={50}
          y2={60}
          stroke="var(--green-light)"
          strokeWidth="2vw"
        /> */}

      {/* <rect
          width="10vw"
          height="20vw"
          fill="gray"
          strokeWidth="4vw"
          stroke="pink"
        /> */}
      <use y="20" xlinkHref="#mountain" filter="opacity(0.7)" />
      <use x="40" transform="scale(1.25)" xlinkHref="#mountain" />
      <use y="20" x="150" xlinkHref="#mountain" filter="opacity(0.8)" />
      <use y="00" x="150" transform="scale(1.25)" xlinkHref="#mountain" />
    </svg>
  </div>
);

export default DrawingView;
