import Image from "next/image";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { SRLWrapper } from "simple-react-lightbox";
import { ProjectCard } from "./ProjectCard";

export default function ProjectRandomChat() {
  return (
    <ProjectCard>
      <h3>Random Chat</h3>
      <div style={{ padding: "15px" }}>
        <SRLWrapper>
          <Image
            className="project-image"
            src="/random-chat.png"
            alt="Randum chat app"
            height={170}
            width={250}
          />
        </SRLWrapper>
        <p style={{ margin: 0, marginTop: "10px" }}>
          FrontEnd: React (with {""}
          <a href="https://chakra-ui.com" target="_blank">
            chakra-ui
          </a>
          ), Vite.
        </p>
        <p style={{ margin: 0 }}>
          Database: PostgreSQL (
          <a href="https://supabase.com" target="_blank">
            Supabase
          </a>
          )
        </p>
        <p style={{ margin: 0 }}>Host: Netlify</p>
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
    </ProjectCard>
  );
}
