import styles from '@/styles/Examples.module.css';
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Lilita_One } from "next/font/google";


const lilita_One = Lilita_One({ weight: '400', subsets: ["latin"] });



export default function Idk() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <div className={styles.mainContainer}>
          <div className={styles.containerLeft}>
            <div className={`${styles.contentLeft} ${lilita_One.className}`}>
              <p >Examples!!!1</p>
              <p style={{ opacity: '0.8' }}>Examples!!!1</p>
              <p style={{ opacity: '0.6' }}>Examples!!!1</p>
              <p style={{ opacity: '0.4' }}>Examples!!!1</p>
              <p style={{ opacity: '0.2' }}>Examples!!!1</p>
            </div>
          </div>
          <div className={styles.containerRight}>
            <div className={styles.contentRight}>
              <div className={styles.section}>
                <h2 className={`${styles.heading} ${lilita_One.className}`}>Sketch</h2>
                <ul className={styles.sectionList}>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={`${styles.heading} ${lilita_One.className}`}>Lineart</h2>
                <ul className={styles.sectionList}>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={`${styles.heading} ${lilita_One.className}`}>Coloured</h2>
                <ul className={styles.sectionList}>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={`${styles.headingNSFW} ${lilita_One.className}`}>NSFW</h2>
                <ul className={styles.sectionList}>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}