import { Html, Head, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Helmet>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
