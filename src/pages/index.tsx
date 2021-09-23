import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {

  const images = [
    '/images/avatars/avt1.svg',
    '/images/avatars/avt2.svg',
    '/images/avatars/avt3.svg'
  ]

  return (
    <>
      <Head>
        <title>Home | Looping Bits</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Welcome to looping bits 🙋🏻‍♀️</span>
          <h1>
            Keep updated about the <span>loops</span> of programming world.
          </h1>
        </section>
        <img src={images[Math.floor(Math.random() * images.length)]} alt="Girl coding" />
      </main>
    </>
  );
}


