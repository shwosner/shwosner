import Head from "next/head";
import Link from "next/link";

export default function Navbar({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        style={{
          background: "white",
          padding: "10px",
          paddingLeft: 20,
          position: "sticky",
          top: 0,
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // gridTemplateColumns: "repeat(4,max-content)",
            // gap: "20px",

            //   width: 100%;
          }}
        >
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="#projects">
            <a>Projects</a>
          </Link>
          <Link href="#contact">
            <a>Contact me</a>
          </Link>
        </div>
        <a style={{ justifySelf: "end" }} href="/shimon.jpg" download>
          <button className="download-button">
            <b style={{ marginRight: "10px", fontSize: "15px" }}>Resume</b>
            <img src="/download.svg" width="16px" alt="download" />
          </button>
        </a>
      </nav>
    </>
  );
}
