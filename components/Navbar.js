import Head from "next/head";
import Link from "next/link";

export default function Navbar({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // gridTemplateColumns: "repeat(4,max-content)",
            // gap: "20px",

            //   width: 100%;
          }}
        >
          <Link href="#">
            <a>
              <b>About</b>
            </a>
          </Link>
          <Link href="#technology">
            <a>
              <b>Technology</b>
            </a>
          </Link>
          <Link href="#projects">
            <a>
              <b>Projects</b>
            </a>
          </Link>
          <Link href="#contact">
            <a>
              <b>Contact me</b>
            </a>
          </Link>
        </div>
        <a style={{ justifySelf: "end" }} href="/shimon.jpg" download>
          <button className="download-button">
            <b
              style={{
                display: "inline-block",
                marginRight: "10px",
                fontSize: "15px",
                paddingBottom: "4px",
              }}
            >
              Resume
            </b>
            <img src="/download.svg" width="16px" alt="download" />
          </button>
        </a>
      </nav>
    </>
  );
}
