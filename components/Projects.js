import ProjectDirshuAccess from "./ProjectDirshuAccess";
import ProjectRandomChat from "./ProjectRandomChat";
// import SimpleReactLightbox from "simple-react-lightbox";

export default function Projects() {
  return (
    // <SimpleReactLightbox>
    <section id="projects">
      <h1 style={{ textAlign: "center" }}>{"<Projects />"}</h1>
      <div
        className="projects_grid"
        // style={{
        //   display: "grid",
        //   // gridTemplateColumns: "auto auto",
        //   gridTemplateColumns: "1fr 1fr",
        //   gap: "30px",
        //   // display: "flex",
        //   // justifyContent: "space-around",
        //   justifyItems: "center",
        //   alignItems: "center",
        // }}
      >
        <ProjectRandomChat />
        <ProjectDirshuAccess />
      </div>
    </section>
    // </SimpleReactLightbox>
  );
}
