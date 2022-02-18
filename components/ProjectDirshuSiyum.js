import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import { CardBody, ProjectCard } from "./ProjectCard";
import { FaEye } from "react-icons/fa";

export default function ProjectDirshuSiyum() {
  return (
    <ProjectCard>
      <h3>Event ticketing website</h3>
      <CardBody>
        <div style={{ padding: "15px" }}>
          <SRLWrapper>
            <Image
              className="project-image"
              src="/dirshu-siyum.png"
              alt="Event ticketing website"
              height={200}
              width={400}
            />
          </SRLWrapper>
          <p style={{ margin: 0, marginTop: "10px" }}>
            Node/Express, React, Stripe, Mailgun
          </p>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <a href="https://dirshu-event.herokuapp.com/" target="_blank">
              <FaEye /> Live app
            </a>
          </div>
        </div>
      </CardBody>
    </ProjectCard>
  );
}
