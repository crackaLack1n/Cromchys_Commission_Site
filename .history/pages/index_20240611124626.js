import Head from "next/head";
import Header from "@/Components/Header";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Footer from "@/Components/Footer";



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={`${styles.main}`}>
      <div className={styles.image}>image</div>
        <div className={styles.mainContainer}>
          <div className={styles.containerLeft}>
            <div className={styles.contentLeft}>
              <p>About Me!</p>
              <p>About Me!</p>
              <p>About Me!</p>
              <p>About Me!</p>
              <p>About Me!</p>
            </div>
          </div>
          <div className={styles.containerRight}>
            <div className={styles.contentRight}>
              <h2>Introduction</h2>
              <p>osidfjnspkdnfpsdk</p>
              <h2>Socials</h2>
              <p>osidfjnspkdnfpsdk</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
