import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="description" content="Hello I'm Leonardo Theodor, Software engineer and passionate about life." />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}