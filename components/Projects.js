import styled from "styled-components";
import ProjectDirshuAccess from "./ProjectDirshuAccess";
import ProjectDirshuSiyum from "./ProjectDirshuSiyum";
import ProjectRandomChat from "./ProjectRandomChat";
import ProjectExpressSSE from "./ProjectExpressSSE";
const ProjectsGrid = styled.div`
  margin-left: 5vw;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, 420px);
  gap: 40px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;

  .project-image {
    border: 1px solid white !important;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const StyledHeading = styled.h1`
  background: teal;
  color: white;
  padding: 9px;
  /* height: 45px; */
  width: 90vw;
  margin-left: 5vw;
  margin-top: 50px;
`;
export default function Projects() {
  return (
    // <SimpleReactLightbox>
    <section id="projects">
      <StyledHeading>{"<Projects />"}</StyledHeading>
      <ProjectsGrid>
        <ProjectRandomChat />
        <ProjectExpressSSE />
        <ProjectDirshuAccess />
        <ProjectDirshuSiyum />
      </ProjectsGrid>
    </section>
    // </SimpleReactLightbox>
  );
}
