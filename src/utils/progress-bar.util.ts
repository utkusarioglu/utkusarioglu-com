import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { HEX } from "_config";

let progress: ProgressBar;

export function getProgressBar() {
  if (!progress) {
    progressBarInit();
  }
  return progress;
}

export function progressBarInit() {
  progress = new ProgressBar({
    color: HEX.brand,
    size: 3,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);
}
