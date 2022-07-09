import { Html, Head, Main, NextScript } from "next/document";
import { COLORS } from "_constants";

const Document = () => {
  return (
    <Html lang="en" className="h-full">
      <Head>
        {/* <link
          rel="manifest"
          // href="/manifest.json"
          href={manifestProps.manifest.path}
        /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        /> */}

        <link
          /* eslint-disable @next/next/google-font-display */
          href="https://fonts.googleapis.com/css2?family=Galada&display=block"
          rel="stylesheet"
        />
        <link
          /* eslint-disable @next/next/google-font-display */
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body
        className={[COLORS.bg, "select-none h-full overflow-hidden"].join(" ")}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
