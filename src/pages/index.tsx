import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | UnReact</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋🏼 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}


