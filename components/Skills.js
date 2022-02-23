import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: circle;
  padding-left: 26px;
  line-height: 1.3;
  h3 {
    margin-left: -20px;
    margin-top: 0;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
`;

const SectionSC = styled.section`
  background: #efefef;
  width: 100vw;
`;
const ListsContainer = styled.div`
  padding: 30px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 50px;
  /* justify-content: center; */
  @media (max-width: 509px) {
    gap: 20px;
  }
`;
export default function Skills() {
  return (
    <SectionSC id="skills">
      <h1
        style={{
          background: "#cfdfdf",
          textAlign: "center",
          color: "teal",
          padding: "20px",
          margin: 0,
        }}
      >
        {"<Technical skills/>"}
      </h1>

      <ListsContainer>
        <StyledList>
          <h3>Back-end</h3>
          <li>NodeJS</li>
          <li>Express</li>
          <li>REST API</li>
          <li>GraphQL/Apollo</li>
          <li>Mongoose</li>
          <li>Prisma</li>
          <li>Next</li>
          <li>Nuxt</li>
          <li>Vite</li>
        </StyledList>
        <StyledList>
          <h3>Front-end</h3>
          <li>HTML, CSS, JS</li>
          <li>React</li>
          <li>Vue</li>
          <li>Svelte</li>
        </StyledList>
        <StyledList>
          <h3>Databases</h3>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>Supabase</li>
          <li>Firebase</li>
        </StyledList>
        <StyledList>
          <h3>Version control</h3>
          <li>GitHub</li>
          <li>GitLab</li>
          <li>Bitbucket</li>
        </StyledList>
        <StyledList>
          <h3>Deployment</h3>
          <li>Heroku</li>
          <li>Vercel</li>
          <li>Netlify</li>
          <li>Some exp. in AWS, GCP and Azure</li>
        </StyledList>
        {/* <StyledList>
          <h3>APIs</h3>
          <li>Slack</li>
          <li>Stripe</li>
          <li>Postmark</li>
          <li>Mailgun</li>
          <li>Connectwise</li>
          <li>And more...</li>
        </StyledList> */}
        {/* <StyledList>
          <h3>Design</h3>
          <li>Figma</li>
          <li>UX/UI</li>
        </StyledList> */}
        <StyledList>
          <h3>Other</h3>
          <li>External APIs</li>
          <li>Figma</li>
          <li>UX/UI</li>
        </StyledList>
      </ListsContainer>
    </SectionSC>
  );
}
