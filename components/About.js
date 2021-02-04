import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  font-size: 19px;
  background: teal;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 3px;

  :hover {
    background: #009e9e;
  }
  :focus {
    border: none;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 6vw;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function About() {
  return (
    <div
      id="#"
      style={{
        // padding: 55,
        maxWidth: "90vw",
        marginTop: "35px",
        marginBottom: "45px",
      }}
    >
      <AboutGrid>
        <img
          style={{
            borderRadius: "50%",
            alignSelf: "center",
            justifySelf: "start",
          }}
          alt="shimon"
          height="170px"
          src="/shimon_compressed.jpg"
        />
        <div style={{ justifySelf: "center" }}>
          <h1>Hi, I'm Shimon</h1>
          <h3 style={{ marginTop: "15px" }}>
            Welcome to my web development portfolio
          </h3>
          <p style={{ lineHeight: "20px" }}>
            I specialise in CRUD web applications with responsive modern design,{" "}
            <br /> Working with the latest technologies and development tools.
          </p>
          <Link href="#contact">
            <StyledButton>Contact me</StyledButton>
          </Link>
        </div>
      </AboutGrid>
    </div>
  );
}
