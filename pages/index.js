// import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Navbar title="Shimon Wosner" />
      <div
        style={
          {
            // display: "grid",
            // justifyContent: "center",
          }
        }
      >
        <div
          style={{
            display: "grid",
            justifyContent: "right",
            paddingRight: "5vw",
          }}
        >
          <About />
        </div>
        <div style={{ border: "4px solid white" }} />
        <div
          style={{
            display: "grid",
            justifyContent: "center",
          }}
        >
          <Skills />
        </div>
        <div style={{ border: "4px solid white" }} />

        <Projects />
        <div style={{ border: "4px solid white" }} />

        <Contact />
      </div>
      <footer
        style={{
          // padding: "10px",
          padding: "15px 20px 10px 20px",
          background: "teal",
          display: "grid",
          gridTemplateColumns: "1fr 100px",
        }}
      >
        <a
          href="https://github.com/shwosner/shwosner"
          target="_blank"
          style={{ color: "white" }}
        >
          <FaGithub /> Source code
        </a>
        <div
          style={{
            justifySelf: "end",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          <a
            href="https://github.com/shwosner"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shimon-wosner-b8612985/"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/shwosner"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}
