import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shimon Wosner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hi, I'm Shimon</h1>
        <h3>Welcome to my portfolio</h3>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
