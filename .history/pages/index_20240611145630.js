import Head from "next/head";
import Header from "@/Components/Header";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Footer from "@/Components/Footer";
import { Lilita_One } from "next/font/google";


const lilita_One = Lilita_One({ weight: '400', subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <Head>
        <title>Cromchy's Commission</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={`${styles.main}`}>
      <div className={styles.image}>
          <Image src={'/images/banner2.png'} height={700} width={700}></Image>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.containerLeft}>
            <div className={`${styles.contentLeft} ${lilita_One.className}`}>
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
      <Footer />
    </>
  );
}
