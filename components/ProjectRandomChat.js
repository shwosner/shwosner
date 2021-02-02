import Image from "next/image";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { SRLWrapper } from "simple-react-lightbox";

export default function ProjectRandomChat() {
  return (
    <div
      style={{
        background: "#efefef",
        width: "270px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          margin: 0,
          background: "#cfdfdf",
          padding: "12px",
        }}
      >
        Random Chat
      </h3>
      <div style={{ padding: "15px" }}>
        <SRLWrapper>
          <Image
            className="project-image"
            src="/randum-chat.PNG"
            alt="Randum chat app"
            height={400}
            width={300}
          />
        </SRLWrapper>
        <p style={{ margin: 0, marginTop: "10px" }}>
          React (with Chakra-ui) / Supabase (PostgreSQL)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px",
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
    </div>
  );
}
