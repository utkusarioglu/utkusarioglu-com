import "_styles/global.css";
import "_styles/temp-colors.scss";
import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "_hooks/layout-effect/layout-effect.hook";
import { AnimatePresence, motion } from "framer-motion";
import ExtraNavLayout from "_layouts/extra-nav/ExtraNav.layout";
import NavLayout from "_layouts/nav/Nav.layout";
import TitleLayout from "_layouts/title/Title.layout";
import CanvasLayout from "_layouts/canvas/Canvas.layout";
import { PerlinProvider } from "_contexts/perlin.context";
import { useWindow } from "_hooks/window/window.hook";
import { useTheme } from "_hooks/theme/theme.hook";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "_views/error-fallback/ErrorFallback.view";
import Head from "next/head";
import { progressBarInit } from "_utils/progress-bar.util";
import {
  APP_ADDRESS,
  APP_DESCRIPTION,
  APP_NAME,
  COLORS,
  TWITTER_HANDLE,
} from "_constants";
import { type MotionVariants } from "_types/vendors/framer-motion.types";

function controlHiddenRoute(route: string): boolean {
  return route === "/artsy-fartsy";
}

const App = ({ Component, pageProps, router: { route } }) => {
  const { icons, manifest, browserConfig } = JSON.parse(
    process.env.manifestProps
  );
  const titleRef = useRef<HTMLDivElement>(null);
  const window = useWindow();
  const { combined, setActive } = useTheme();
  const variants: MotionVariants<"div"> = {
    initialAndAnimate: { opacity: controlHiddenRoute(route) ? 0 : 1 },
  };

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
      <Head>
        <title>Utku Sarioglu</title>
        <meta charSet="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content={[
            "minimum-scale=1",
            "initial-scale=1",
            "width=device-width",
            "shrink-to-fit=no",
            "user-scalable=no",
            "viewport-fit=cover",
          ].join(", ")}
        />
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content={COLORS.theme} />

        <link rel="manifest" href={manifest.href} />
        <meta name="msapplication-config" content={browserConfig.href} />
        <meta
          name="msapplication-TileColor"
          content={browserConfig.object.themeColor}
        />

        {Object.values<any>(icons.list).map(
          ({ sizes, filePath, mimeType, href, rel }) => (
            <link
              key={filePath}
              type={mimeType}
              rel={rel}
              sizes={sizes}
              href={href}
            />
          )
        )}
        <link
          rel="shortcut icon"
          type={icons.list.favicon.mimeType}
          href={icons.list.favicon.href}
        />

        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={icons.png["32x32"]}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={icons.png["16x16"]}
        /> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={APP_ADDRESS} />
        <meta name="twitter:title" content={APP_NAME} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta
          name="twitter:image"
          content={APP_ADDRESS + icons.list["192x192"].href}
        />
        <meta name="twitter:creator" content={TWITTER_HANDLE} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:url" content={APP_ADDRESS} />
        <meta
          property="og:image"
          content={APP_ADDRESS + icons.list["120x120"].href}
        />
      </Head>
      <PerlinProvider theme={combined}>
        <motion.div
          variants={variants}
          initial="initialAndAnimate"
          animate="initialAndAnimate"
        >
          <CanvasLayout />
          <ExtraNavLayout titleRef={titleRef} />
          <NavLayout titleRef={titleRef} />
        </motion.div>
        <TitleLayout ref={titleRef} />

        <ErrorBoundary FallbackComponent={ErrorFallbackView}>
          <AnimatePresence initial={false}>
            <Component {...pageProps} key={route} window={window} />
          </AnimatePresence>
        </ErrorBoundary>
      </PerlinProvider>
    </ErrorBoundary>
  );
};

export default App;
