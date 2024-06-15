import styles from '@/styles/Terms.module.css';
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Lilita_One } from "next/font/google";


const lilita_One = Lilita_One({ weight: '400', subsets: ["latin"] });



export default function Idk() {
  return(
    <>
    <Header/>
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
                <p>
                  hihihihi im Cromchy or Lack1n (on Discord) im a digital artist
                  but also a UI/UX designer and Web Developer (dont ask me about JavaScript i still dont know lololol).
                </p>
                <p>
                  I luvb videmeo games
                </p>
              </div>
              <div className={styles.section}>
                <h2 className={`${styles.heading} ${lilita_One.className}`}>Socials/Contact</h2>
                <p>Wanna reach out? Hit me up on Discord @crackalack1n</p>
                <p>Find Me On: </p>
                  <ul>
                    <li>(NSFW) Twitter: @Cromchy_Bones</li>
                    <li> (SFW) Tumblr: alot0ftea </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}