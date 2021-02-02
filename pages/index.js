// import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import { FaGithub } from "react-icons/fa";

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
      <footer style={{ padding: "10px", background: "teal" }}>
        <a
          href="https://github.com/shwosner/shwosner"
          target="_blank"
          style={{ color: "white" }}
        >
          <FaGithub /> Source code
        </a>
      </footer>
    </div>
  );
}
