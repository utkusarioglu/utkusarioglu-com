import "_styles/global.css";
import { type FC, useEffect } from "react";
import { useIsomorphicLayoutEffect } from "_hooks/layout-effect/layout-effect.hook";
import { AnimatePresence } from "framer-motion";
import CanvasContextProvider from "_contexts/canvas/Canvas.context";
import LayoutContextProvider from "_contexts/layout/Layout.context";
import { useWindow } from "_hooks/window/window.hook";
import { useTheme } from "_hooks/theme/theme.hook";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import ControlsLayout from "_layouts/controls/Controls.layout";
import StandardHead from "_heads/Standard.head";
import { progressBarInit } from "_utils/progress-bar.util";
// import { useTiinySite } from "_hooks/tiiny-site/tiiny-site.hook";
import type { AppProps } from "next/app";

const App: FC<AppProps> = ({
  Component,
  pageProps,
  router: { route, replace },
}) => {
  const window = useWindow();
  const { combined, setActive } = useTheme();
  // useTiinySite();

  useEffect(() => {
    progressBarInit();
  }, []);

  useIsomorphicLayoutEffect(() => {
    setActive(combined);
  }, [combined]);

  if (!window) {
    return null;
  }

  if (window.location.pathname !== route) {
    console.log("replace from: ", route, " to ", window.location.pathname);
    replace(window.location.pathname);
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackView}>
      <StandardHead />
      <LayoutContextProvider route={route}>
        <CanvasContextProvider theme={combined}>
          <ControlsLayout route={route} />
          <ErrorBoundary FallbackComponent={ErrorFallbackView}>
            <AnimatePresence initial={false}>
              <Component {...pageProps} key={route} window={window} />
            </AnimatePresence>
          </ErrorBoundary>
        </CanvasContextProvider>
      </LayoutContextProvider>
    </ErrorBoundary>
  );
};

export default App;
