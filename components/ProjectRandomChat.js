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
            height={200}
            width={400}
          />
        </SRLWrapper>
        <p style={{ margin: 0, marginTop: "10px" }}>
          React (with{" "}
          <a href="https://twitter.com/chakra_ui" target="_blank">
            @chakra_ui
          </a>
          ) <br />
          Data:{" "}
          <a href="https://twitter.com/supabase_io" target="_blank">
            @supabase_io
          </a>{" "}
          (On top of PostgreSQL)
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
    </ProjectCard>
  );
}
