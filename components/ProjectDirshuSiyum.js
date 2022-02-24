import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import { CardBody, CardFooter, ProjectCard } from "./ProjectCard";
import { FaEye } from "react-icons/fa";

export default function ProjectDirshuSiyum() {
  return (
    <ProjectCard>
      <h3>Event ticketing website</h3>
      <CardBody>
        <SRLWrapper>
          <Image
            className="project-image"
            src="/dirshu-siyum.png"
            alt="Event ticketing website"
            height={200}
            width={400}
          />
        </SRLWrapper>
        <p>Website to book and manage tickets to all Dirshu UK events.</p>
        <p>Was already used for multiple events in 2020 and 2022.</p>
        <p>Tech: Node/Express, React, Stripe, Mailgun.</p>
      </CardBody>
      <CardFooter>
        <a href="https://events.dirshu.co.uk" target="_blank">
          <FaEye /> Live app
        </a>
      </CardFooter>
    </ProjectCard>
  );
}
