import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import { CardBody, ProjectCard } from "./ProjectCard";

export default function ProjectDirshuAccess() {
  return (
    <ProjectCard>
      <h3>MS Access application</h3>
      <CardBody>
        <SRLWrapper>
          <Image
            className="project-image"
            src="/dirshu-access.png"
            alt="MS Access application"
            height={200}
            width={400}
          />
        </SRLWrapper>
        <p>
          Dirshu UK custom MS Access app for all their needs, (including keeping
          track of all programs, tests, marks, and payments).
        </p>
        <p>
          I took them from multiple Word and Excel sheets to a single desktop
          application.
        </p>
        <p style={{ margin: 0, marginTop: "10px" }}>
          Tech: MS Access / SQL / VBA
        </p>
      </CardBody>
    </ProjectCard>
  );
}
