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
      <div >
          <Image src={'/images/banner2.png'} height={400} width={350} className={styles.image}></Image>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.containerLeft}>
            <div className={`${styles.contentLeft} ${lilita_One.className}`}>
              <p >About Me!!!1</p>
              <p style={{opacity: '0.8'}}>About Me!!!1</p>
              <p style={{opacity: '0.6'}}>About Me!!!1</p>
              <p>About Me!!!1</p>
              <p>About Me!!!1</p>
            </div>
          </div>
          <div className={styles.containerRight}>
            <div className={styles.contentRight}>
              <h2 className={`${styles.heading} ${lilita_One.className}`}>Introduction</h2>
              <p>osidfjnspkdnfpsdk</p>
              <h2  className={`${styles.heading} ${lilita_One.className}`}>Socials</h2>
              <p>osidfjnspkdnfpsdk</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
