import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  margin-top: 5px;
  list-style-type: circle;
  padding-left: 26px;
`;

const SectionSC = styled.section`
  background: #efefef;
  width: 90vw;
`;
const ListsContainer = styled.div`
  padding: 20px;
  padding-left: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  /* justify-items: center; */
`;
export default function Skills() {
  return (
    <SectionSC id="skills">
      <div style={{ background: "#cfdfdf", padding: "1px" }}>
        <h1 style={{ textAlign: "center", color: "teal" }}>
          {"<Technical skills/>"}
        </h1>
      </div>

      <ListsContainer>
        <div>
          <h3 style={{ marginBottom: 0, textTransform: "uppercase" }}>
            Back-end
          </h3>
          <StyledList>
            <li>NodeJS</li>
            <li>Express</li>
            <li>REST API</li>
            <li>GraphQL/Apollo</li>
            <li>Mongoose</li>
            <li>NextJS</li>
          </StyledList>
        </div>
        <div>
          <h3 style={{ marginBottom: 0, textTransform: "uppercase" }}>
            Front-end
          </h3>
          <StyledList>
            <li>HTML, CSS, JS</li>
            <li>React</li>
          </StyledList>
        </div>
        <div>
          <h3 style={{ marginBottom: 0, textTransform: "uppercase" }}>
            Databases
          </h3>
          <StyledList>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Firebase</li>
          </StyledList>
        </div>
        <div>
          <h3 style={{ marginBottom: 0, textTransform: "uppercase" }}>APIs</h3>
          <StyledList>
            <li>Stripe</li>
            <li>Slack</li>
            <li>Postmark</li>
            <li>Mailgun</li>
            <li>Connectwise</li>
          </StyledList>
        </div>
        <div>
          <h3 style={{ marginBottom: 0, textTransform: "uppercase" }}>
            Version control
          </h3>
          <StyledList>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Bitbucket</li>
          </StyledList>
        </div>
        <div>
          <h3 style={{ marginBottom: 0, textTransform: "uppercase" }}>
            Design
          </h3>
          <StyledList>
            <li>Figma</li>
            <li>UX/UI</li>
          </StyledList>
        </div>
      </ListsContainer>
    </SectionSC>
  );
}
