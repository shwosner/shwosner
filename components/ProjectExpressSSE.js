import React from "react";
import { FaGithub } from "react-icons/fa";
import { CardBody, CardFooter, ProjectCard } from "./ProjectCard";

export default function ProjectExpressSSE() {
  return (
    <ProjectCard>
      <h3>Real-time messages</h3>
      <CardBody>
        Full stack app with Node/Express on the backend and React on the
        front-end. <br />
        <ul>
          <li>
            Uses SSE (Server Sent Events) to respond to all clients anytime a
            new message is sent, (without the use of SocketIO).
          </li>

          <li>
            Uses Node with modern <b>import/export</b> (ES modules) syntax.
          </li>
          <li>
            Uses{" "}
            <a href="https://chakra-ui.com" target="_blank">
              chakra-ui
            </a>{" "}
            for it's UI library.
          </li>
        </ul>
      </CardBody>
      <CardFooter>
        <a
          href="https://github.com/shwosner/express-vanilla-sse"
          target="_blank"
        >
          <FaGithub /> Source code
        </a>
      </CardFooter>
    </ProjectCard>
  );
}
