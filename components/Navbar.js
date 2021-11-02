import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

const StyledNavbar = styled.nav`
  z-index: 10;
  background: teal;
  padding: 10px;
  padding-left: 20px;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 450px 1fr;
  gap: 10px;
  align-items: center;
  b,
  .hamburger-react {
    color: white;
  }
  b:hover,
  .hamburger-react:hover {
    color: #deffff;
  }
  .hamburger-react {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: ${({ isOpen }) =>
      isOpen ? "50px 1fr 1fr" : "50px 1fr"};
    align-items: ${({ isOpen }) => (isOpen ? "start" : "center")};
    .hamburger-react {
      display: unset;
    }
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

const StledItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media only screen and (max-width: 600px) {
    display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  }
`;

export default function Navbar({ title }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/shimon.svg" />
      </Head>
      <StyledNavbar isOpen={isOpen}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <StledItems isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
          <Link href="#">
            <a>
              <b>Home</b>
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
        </StledItems>
        {/* <a
          style={{ justifySelf: "end" }}
          href="/Shimon_Wosner_Resume.pdf"
          download
        >
          <DownloadButton>
            <h3
              style={{ margin: 0, marginRight: "3px", display: "inline-block" }}
            >
              Resume
            </h3>
            <img src="/download.svg" width="16px" alt="download" />
          </DownloadButton>
        </a> */}
      </StyledNavbar>
    </>
  );
}
