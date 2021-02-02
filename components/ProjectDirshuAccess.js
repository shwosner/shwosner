import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

export default function ProjectDirshuAccess() {
  return (
    <div style={{ background: "white", padding: "10px", width: "min-content" }}>
      <h3 style={{ textAlign: "center", margin: "5px" }}>
        Dirshu UK (MS Access)
      </h3>

      <SRLWrapper>
        <img
          style={{
            borderRadius: "5px",
            marginBottom: "5px",
            border: "1px solid teal",
            cursor: "pointer",
            maxWidth: "94vw",
          }}
          src="/dirshu-access.png"
          alt="Dirshu UK"
          height="200px"
        />
      </SRLWrapper>
    </div>
  );
}
