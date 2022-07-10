import "_styles/global.css";
import "_styles/temp-colors.scss";
import { useEffect } from "react";
import { useIsomorphicLayoutEffect } from "_hooks/layout-effect/layout-effect.hook";
import { AnimatePresence } from "framer-motion";
import CanvasContextProvider from "_contexts/canvas/Canvas.context";
import AppContextProvider from "_contexts/app/App.context";
import { useWindow } from "_hooks/window/window.hook";
import { useTheme } from "_hooks/theme/theme.hook";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import ControlsLayout from "_layouts/controls/Controls.layout";
import StandardHead from "src/components/heads/Standard.head";
import { progressBarInit } from "_utils/progress-bar.util";

const App = ({ Component, pageProps, router: { route } }) => {
  const window = useWindow();
  const { combined, setActive } = useTheme();

  useEffect(() => {
    progressBarInit();
  }, []);

  useIsomorphicLayoutEffect(() => {
    setActive(combined);
  }, [combined]);

  if (!window) {
    return null;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackView}>
      <StandardHead />
      <AppContextProvider>
        <CanvasContextProvider theme={combined}>
          <ControlsLayout />
          <ErrorBoundary FallbackComponent={ErrorFallbackView}>
            <AnimatePresence initial={false}>
              <Component {...pageProps} key={route} window={window} />
            </AnimatePresence>
          </ErrorBoundary>
        </CanvasContextProvider>
      </AppContextProvider>
    </ErrorBoundary>
  );
};

export default App;
