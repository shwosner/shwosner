import "../styles/globals.css";
import SimpleReactLightbox from "simple-react-lightbox";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta property="og:title" content="Shimon Wosner" />
        <meta property="og:description" content="Web dev porfolio." />
        <meta
          property="og:image"
          content="http://shimon-wosner.vercel.app/shimon-wosner.vercel.app_.png"
        />
        <meta property="og:url" content="http://shimon-wosner.vercel.app" />
        <meta name="twitter:title" content="Shimon Wosner" />
        <meta name="twitter:description" content="Web dev porfolio." />
        <meta
          name="twitter:image"
          content="http://shimon-wosner.vercel.app/shimon-wosner.vercel.app_.png"
        />
        <meta name="twitter:url" content="http://shimon-wosner.vercel.app" />
      </Head>

      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </div>
  );
}

export default MyApp;
