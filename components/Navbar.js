import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background: teal;
  padding: 10px;
  padding-left: 20px;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 450px 1fr;
  gap: 10px;
  align-items: center;
  b {
    color: white;
  }
  b:hover {
    color: #deffff;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const DownloadButton = styled.button`
  border: none;
  height: 35px;
  width: 130px;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  :hover {
    background: #eef7f7;
  }
`;
export default function Navbar({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/shimon.svg" />
      </Head>
      <StyledNavbar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="#">
            <a>
              <b>About</b>
            </a>
          </Link>
          <Link href="#skills">
            <a>
              <b>Technical skills</b>
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
          <DownloadButton>
            <h3
              style={{ margin: 0, marginRight: "3px", display: "inline-block" }}
            >
              Resume
            </h3>
            <img src="/download.svg" width="16px" alt="download" />
          </DownloadButton>
        </a>
      </StyledNavbar>
    </>
  );
}
