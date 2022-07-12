import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { COLORS } from "_constants";

// class AppProgressBar {
//   private progress: ProgressBar

//   init() {
//   this.progress = new ProgressBar({
//     color: COLORS.theme,
//     size: 3,
//   });

//   }

//   getBar() {
//     return this.progress;
//   }
// }

let progress: ProgressBar;

export function getProgressBar() {
  if (!progress) {
    progressBarInit();
  }
  return progress;
}

export function progressBarInit() {
  progress = new ProgressBar({
    color: COLORS.theme,
    size: 3,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);
}
