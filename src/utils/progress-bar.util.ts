import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { COLORS } from "_constants";

export function progressBarInit() {
  const progress = new ProgressBar({
    color: COLORS.theme,
    size: 3,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);
}
