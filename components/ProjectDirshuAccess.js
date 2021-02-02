import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

export default function ProjectDirshuAccess() {
  return (
    <div style={{ background: "#efefef" }}>
      <h3
        style={{
          textAlign: "center",
          margin: 0,
          background: "#cfdfdf",
          padding: "12px",
        }}
      >
        MS Access application
      </h3>
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
    </div>
  );
}
