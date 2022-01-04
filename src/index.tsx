import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga";
import { GA_TRACKING_ID } from "./config";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/routers/app/App.router";

ReactGA.initialize(GA_TRACKING_ID, { debug: false });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
