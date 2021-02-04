import "../styles/globals.css";
import SimpleReactLightbox from "simple-react-lightbox";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta property="og:title" content="Shimon Wosner" />
        <meta property="og:description" content="Shimomn's web dev porfolio" />
        <meta property="og:image" content="http://shimon-wosner.vercel.app/" />
        <meta
          property="og:url"
          content="http://shimon-wosner.vercel.app/shimon_compressed.jpg"
        />
      </Head>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </div>
  );
}

export default MyApp;
