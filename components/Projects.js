import styled from "styled-components";
import ProjectDirshuAccess from "./ProjectDirshuAccess";
import ProjectRandomChat from "./ProjectRandomChat";
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 830px) {
    grid-template-columns: 1fr;
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
        <ProjectDirshuAccess />
      </ProjectsGrid>
    </section>
    // </SimpleReactLightbox>
  );
}
