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
  grid-template-columns: 1fr min-content;
  gap: 6vw;
  img {
    border-radius: 50%;
    align-self: center;
    justify-self: start;
    height: 140px;
  }

  @media (max-width: 600px) {
    img {
      height: 80px;
      align-self: start;
      margin-top: 40px;
    }
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
        <div>
          <h1>Hi, I'm Shimon</h1>
          <h3 style={{ marginTop: "15px" }}>
            Welcome to my web development portfolio
          </h3>
          <p style={{ lineHeight: "20px" }}>
            I specialise in CRUD web applications with responsive modern design,{" "}
            <br /> Working with the latest technologies and development tools.
          </p>
        </div>
        <img alt="shimon" src="/shimon_compressed.jpg" />
      </AboutGrid>
      <Link href="#contact">
        <StyledButton>Contact me</StyledButton>
      </Link>
    </div>
  );
}
