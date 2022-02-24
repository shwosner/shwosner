import styled from "styled-components";
import ProjectDirshuAccess from "./ProjectDirshuAccess";
import ProjectDirshuSiyum from "./ProjectDirshuSiyum";
import ProjectRandomChat from "./ProjectRandomChat";
import ProjectExpressSSE from "./ProjectExpressSSE";
import ProjectPortfolio from "./ProjectPortfolio";
const ProjectsGrid = styled.div`
  margin-left: 5vw;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, 420px);
  gap: 50px;
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
  padding: 20px;
  /* height: 45px; */
  width: 100vw;
  /* margin-left: 5vw; */
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
`;
export default function Projects() {
  return (
    // <SimpleReactLightbox>
    <section id="projects">
      <StyledHeading>{"<Projects />"}</StyledHeading>
      <ProjectsGrid>
        <ProjectRandomChat />
        <ProjectDirshuSiyum />
        <ProjectPortfolio />
        <ProjectExpressSSE />
        <ProjectDirshuAccess />
      </ProjectsGrid>
    </section>
    // </SimpleReactLightbox>
  );
}
