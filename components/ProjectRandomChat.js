import Image from "next/image";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { SRLWrapper } from "simple-react-lightbox";
import { CardBody, CardFooter, ProjectCard } from "./ProjectCard";

export default function ProjectRandomChat() {
  return (
    <ProjectCard>
      <h3>Random Chat</h3>
      <CardBody>
        <SRLWrapper>
          <Image
            className="project-image"
            src="/random-chat.png"
            alt="Randum chat app"
            height={170}
            width={250}
          />
        </SRLWrapper>
        <p>
          FrontEnd: React (with {""}
          <a href="https://chakra-ui.com" target="_blank">
            chakra-ui
          </a>
          ), Vite.
          <br />
          Database: PostgreSQL (
          <a href="https://supabase.com" target="_blank">
            Supabase
          </a>
          )
          <br />
          Hosted on Netlify
        </p>
        <p>Has reched over 100 stars on GitHub ⭐</p>
      </CardBody>
      <CardFooter>
        <a href="http://random-chat.netlify.app/" target="_blank">
          <FaEye /> Live app
        </a>
        <a
          href="https://github.com/shwosner/realtime-chat-supabase-react"
          target="_blank"
        >
          <FaGithub /> Source code
        </a>
      </CardFooter>
    </ProjectCard>
  );
}
