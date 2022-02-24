import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import { CardBody, CardFooter, ProjectCard } from "./ProjectCard";
import { FaGithub } from "react-icons/fa";

export default function ProjectPortfolio() {
  return (
    <ProjectCard>
      <h3>My personal website</h3>
      <CardBody>
        <SRLWrapper>
          <Image
            className="project-image"
            src="/portfolio_website.png"
            alt="portfolio website"
            height={200}
            width={400}
          />
        </SRLWrapper>
        <p>
          My portfolio website (this site) was built from scratch, by mysellf.
        </p>
        <p>React (NextJS) with styled-components, deployd on Vercel.</p>
      </CardBody>
      <CardFooter>
        <a href="https://github.com/shwosner/shwosner" target="_blank">
          <FaGithub /> Source code
        </a>
      </CardFooter>
    </ProjectCard>
  );
}
