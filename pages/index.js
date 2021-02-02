// import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Navbar title="Shimon Wosner" />
      <div
        style={
          {
            // display: "grid", gap: "30px"
          }
        }
      >
        <About />
        <div style={{ border: "4px solid white" }} />
        <Projects />
        <div style={{ border: "4px solid white" }} />

        <Contact />
      </div>
      <footer style={{ height: "50px", background: "teal" }} />
    </div>
  );
}
