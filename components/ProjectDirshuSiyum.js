import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

export default function ProjectDirshuSiyum() {
  return (
    <div
      style={{
        background: "#efefef",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          margin: 0,
          background: "#cfdfdf",
          padding: "12px",
        }}
      >
        Event ticketing website
      </h3>
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
      </div>
    </div>
  );
}
