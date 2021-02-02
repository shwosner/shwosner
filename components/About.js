import React from "react";
import Link from "next/link";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   width: 100%;
//   height: 40px;
//   font-size: 19px;
//   background: teal;
//   color: white;
//   font-weight: 700;
//   border: none;
//   cursor: pointer;
// `;

// const AboutGrid = styled.div`
//   display: grid;
//   grid-template-columns: max-content 1fr;
//   gap: 30px;

//   @media (max-width: 500px) {
//     grid-template-columns: 1fr;
//   }
// `;

export default function About() {
  return (
    <div id="#" style={{ padding: 40 }}>
      <div className="about-grid">
        <img
          style={{
            borderRadius: "50%",
            alignSelf: "center",
            justifySelf: "end",
          }}
          alt="shimon"
          height="170px"
          src="/shimon.jpg"
        />
        <div style={{ justifySelf: "center" }}>
          <h1>Hi, I'm Shimon</h1>
          <h3 style={{ marginTop: "15px" }}>
            Welcome to my web development portfolio
          </h3>
          <p style={{ lineHeight: "20px" }}>
            I specialise in CRUD web applications, <br /> Working with the
            latest technologies and development tools.
          </p>
          <Link href="#contact">
            <button className="about-button">Hire me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
