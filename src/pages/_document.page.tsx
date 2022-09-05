import { type FC } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { COLORS } from "_constants";
import { DocumentProps } from "next/document";
import c from "classnames";

const Document: FC<DocumentProps> = () => {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* eslint-disable @next/next/google-font-display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Galada&display=block"
          rel="stylesheet"
        />
        {/* eslint-disable @next/next/google-font-display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=block"
          rel="stylesheet"
        />
        {/* eslint-disable @next/next/google-font-display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=block"
          rel="stylesheet"
        />
      </Head>
      <body className={c(COLORS.baseBg, "select-none h-full overflow-hidden")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
