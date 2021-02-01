// import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Navbar title="Shimon Wosner" />
      <div style={{ display: "grid", gap: "30px" }}>
        <About />

        <Projects />

        <Contact />
      </div>
      {/* <footer className={styles.footer}>this is the footer</footer> */}
    </div>
  );
}
