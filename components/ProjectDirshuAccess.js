import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import { CardBody, ProjectCard } from "./ProjectCard";

export default function ProjectDirshuAccess() {
  return (
    <ProjectCard>
      <h3>MS Access application</h3>
      <CardBody>
        <div style={{ padding: "15px" }}>
          <SRLWrapper>
            <Image
              className="project-image"
              src="/dirshu-access.png"
              alt="MS Access application"
              height={200}
              width={400}
            />
          </SRLWrapper>
          <p style={{ margin: 0, marginTop: "10px" }}>MS Access / SQL / VBA</p>
        </div>
      </CardBody>
    </ProjectCard>
  );
}
