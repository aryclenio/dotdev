import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | .dev Blog</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋🏼 Hey, welcome to my blog</span>
          <h1>
            Here you will be always updated about the <span>.dev</span> world.
          </h1>
        </section>
        <img src={`/images/avatars/avt${Math.floor(Math.random() * (3) + 1)}.svg`} alt="Girl coding" />
      </main>
    </>
  );
}


