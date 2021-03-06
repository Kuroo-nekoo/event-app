import Document, { Head, Html, Main, NextScript } from "next/document";

const MyDocument = class extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
};

export default MyDocument;
