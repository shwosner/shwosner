import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { SRLWrapper } from "simple-react-lightbox";

export default function ProjectRandomChat({ title }) {
  return (
    <div
      style={{
        width: "min-content",
        background: "white",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ textAlign: "center", margin: "5px" }}>Random Chat</h3>
      <SRLWrapper>
        <img
          style={{
            borderRadius: "5px",
            marginBottom: "5px",
            border: "1px solid teal",
            cursor: "pointer",
          }}
          src="/randum-chat.PNG"
          alt="Randum chat app"
          height="400px"
        />
      </SRLWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5px",
        }}
      >
        <a href="http://random-chat.netlify.app/" target="_blank">
          <FaEye /> Live app
        </a>
        <a
          href="https://github.com/shwosner/realtime-chat-supabase-react"
          target="_blank"
        >
          <FaGithub /> Source code
        </a>
      </div>
    </div>
  );
}
