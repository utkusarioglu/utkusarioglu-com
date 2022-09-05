import Head from "next/head";
import {
  APP_ADDRESS,
  APP_DESCRIPTION,
  APP_NAME,
  HEX,
  PATH_SEPARATOR,
  TWITTER_HANDLE,
} from "_constants";
import { useEnhancedRouter } from "_hooks/router/router.hook";

const StandardHead = () => {
  const { title } = useEnhancedRouter();
  const { icons, manifest, browserConfig } = JSON.parse(
    process.env.manifestProps
  );

  return (
    <Head>
      <title>
        {APP_NAME}
        {title && ` ${PATH_SEPARATOR} ${title}`}
      </title>
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
      <meta name="theme-color" content={HEX.brand} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={APP_ADDRESS} />
      <meta name="twitter:title" content={APP_NAME} />
      <meta name="twitter:description" content={APP_DESCRIPTION} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={APP_NAME} />
      <meta property="og:description" content={APP_DESCRIPTION} />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:url" content={APP_ADDRESS} />
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

      <meta
        name="twitter:image"
        content={APP_ADDRESS + icons.list["192x192"].href}
      />
      <meta
        property="og:image"
        content={APP_ADDRESS + icons.list["120x120"].href}
      />
    </Head>
  );
};

export default StandardHead;
