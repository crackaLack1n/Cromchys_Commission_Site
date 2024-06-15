import styles from '@/styles/Terms.module.css';
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
              <p >Terms!!!1</p>
              <p style={{ opacity: '0.8' }}>Terms!!!1</p>
              <p style={{ opacity: '0.6' }}>Terms!!!1</p>
              <p style={{ opacity: '0.4' }}>Terms!!!1</p>
              <p style={{ opacity: '0.2' }}>Terms!!!1</p>
            </div>
          </div>
          <div className={styles.containerRight}>
            <div className={styles.contentRight}>
              <div className={styles.section}>
                <h2 className={`${styles.heading} ${lilita_One.className}`}>Dos/Don'ts</h2>
                <h3>DOs</h3>
                <ul className={styles.sectionList}>
                  <li>SFW</li>
                  <li>NSFW</li>
                  <li>Furries</li>
                </ul>

                <h3>DON'Ts</h3>
                <ul className={styles.sectionList}>
                  <li>Mechas</li>
                  <li>Non-Con/Minors</li>
                  <li>Extreme Sexual Content- Ex. gore (if unsure feel free to dm me on discord @crackalack1n)</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={`${styles.heading} ${lilita_One.className}`}>Terms/Conditions</h2>
                <ul className={styles.sectionList}>
                  <li>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      I have the right to decline your commission
                      <ul style={{ color: '#FF5A5A', fontWeight: 'bold', marginLeft: '-35px' }}>!!Discuss what you want with me beforehand!!</ul>
                    </span>
                  </li>
                  <li>Personal use only</li>
                  <li>Commission starts after payment</li>
                  <li style={{ color: '#FF5A5A' , fontWeight: 'bold'}}>No refunds</li>
                  <li>You get one revision per stage (eg. one for sketch, one for lineart, one for colouring, etc etc)</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}