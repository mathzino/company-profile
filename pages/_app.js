import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Home.css";
import "../styles/Benefit.css";
import "../styles/Reason.css";
import "../styles/About.css";
import "../styles/Footer.css";
import "../styles/pendidikan/Description.css";
import "../styles/pendidikan/Faculty.css";
import "../styles/informasi/Highlight.css";
import "../styles/informasi/Information.css";
import "../styles/informasi/News.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
