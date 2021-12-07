import '../styles/global.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>theodoro.dev</title>
      </Head>
      <Component {...pageProps} />
    </>)
}

export default MyApp
